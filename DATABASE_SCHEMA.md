# 데이터베이스 스키마 설계 문서

## 📋 개요

온ː숨 웹사이트의 Supabase 데이터베이스 테이블 구조입니다. 현재 웹사이트에서 사용되는 기능을 분석하여 설계되었습니다.

---

## 🗂️ 테이블 목록

### 1. **users** - 사용자 테이블
**용도**: 로그인 및 권한 관리

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | UUID | 기본키 (자동 생성) |
| username | VARCHAR(50) | 로그인 아이디 (유니크) |
| password_hash | TEXT | 비밀번호 해시 (bcrypt) |
| name | VARCHAR(100) | 사용자 이름 |
| role | VARCHAR(20) | 역할 ('admin', 'user') |
| email | VARCHAR(255) | 이메일 (선택) |
| phone | VARCHAR(20) | 전화번호 (선택) |
| created_at | TIMESTAMPTZ | 생성일시 |
| updated_at | TIMESTAMPTZ | 수정일시 |
| last_login_at | TIMESTAMPTZ | 마지막 로그인 시간 |

**현재 상태**: 
- `app/api/auth/login/route.ts`에서 하드코딩된 테스트 계정 사용 중
- DB 마이그레이션 후 실제 사용자 데이터로 대체 필요

---

### 2. **posts** - 게시글 테이블
**용도**: 공지사항 및 일반 게시글 관리

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | SERIAL | 기본키 |
| category | VARCHAR(20) | 카테고리 ('공지사항', '일반') |
| title | VARCHAR(500) | 제목 |
| content | TEXT | 내용 |
| author_id | UUID | 작성자 ID (users 참조) |
| author_name | VARCHAR(100) | 작성자 이름 (삭제된 사용자 대비) |
| views | INTEGER | 조회수 (기본값: 0) |
| badge | VARCHAR(50) | 배지 텍스트 (예: "신규", "중요") |
| badge_color | VARCHAR(100) | 배지 색상 클래스 (Tailwind CSS) |
| is_notice | BOOLEAN | 공지사항 여부 |
| created_at | TIMESTAMPTZ | 생성일시 |
| updated_at | TIMESTAMPTZ | 수정일시 |
| deleted_at | TIMESTAMPTZ | 삭제일시 (소프트 삭제) |

**현재 상태**:
- `data/posts.json` 파일로 관리 중
- `app/api/admin/posts/route.ts`에서 JSON 파일 읽기/쓰기
- DB 마이그레이션 후 Supabase로 전환 필요

**관련 기능**:
- 게시글 목록 조회 (`GET /api/admin/posts`)
- 게시글 작성 (`POST /api/admin/posts`)
- 게시글 상세 보기 (`/community/notice/[id]`)
- 관리자 게시판 (`/admin/board`)

---

### 3. **post_files** - 게시글 첨부파일 테이블
**용도**: 게시글에 첨부된 파일 정보 관리

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | SERIAL | 기본키 |
| post_id | INTEGER | 게시글 ID (posts 참조) |
| filename | VARCHAR(255) | 저장된 파일명 (타임스탬프 포함) |
| original_name | VARCHAR(255) | 원본 파일명 |
| file_size | BIGINT | 파일 크기 (바이트) |
| mime_type | VARCHAR(100) | MIME 타입 |
| file_url | TEXT | 파일 경로 (예: /uploads/filename.ext) |
| storage_path | TEXT | Supabase Storage 경로 (선택) |
| created_at | TIMESTAMPTZ | 생성일시 |

**현재 상태**:
- `public/uploads/` 폴더에 파일 저장
- `app/api/admin/posts/upload/route.ts`에서 파일 업로드 처리
- DB 마이그레이션 후 Supabase Storage로 전환 권장

---

### 4. **programs** - 프로그램 테이블
**용도**: 프로그램 정보 관리

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | SERIAL | 기본키 |
| name | VARCHAR(200) | 프로그램 이름 (유니크) |
| slug | VARCHAR(200) | URL용 슬러그 (유니크) |
| description | TEXT | 프로그램 설명 |
| price | INTEGER | 가격 (원화) |
| price_range | VARCHAR(100) | 가격 범위 표시 (예: "70,000 ~ 90,000원") |
| session_count | INTEGER | 세션 횟수 |
| duration | VARCHAR(100) | 기간 (예: "1회", "5회 패키지") |
| features | JSONB | 특징 배열 |
| image_url | TEXT | 이미지 URL |
| is_active | BOOLEAN | 활성화 여부 |
| display_order | INTEGER | 표시 순서 |
| created_at | TIMESTAMPTZ | 생성일시 |
| updated_at | TIMESTAMPTZ | 수정일시 |

**현재 상태**:
- `app/programs/page.tsx`에서 하드코딩된 배열 사용
- `app/consult/page.tsx`에서도 하드코딩된 배열 사용
- DB 마이그레이션 후 동적 데이터로 전환 필요

**초기 데이터**:
- Self Roadmap (80,000원)
- Self-growth Roadmap (400,000원)
- Life Roadmap (650,000원)
- Life-growth Roadmap (3,000,000원)
- Workshop Roadmap (40,000원)

---

### 5. **applications** - 프로그램 신청 테이블
**용도**: 프로그램 신청 내역 관리

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | SERIAL | 기본키 |
| program_id | INTEGER | 프로그램 ID (programs 참조) |
| program_name | VARCHAR(200) | 프로그램 이름 (삭제된 프로그램 대비) |
| name | VARCHAR(100) | 신청자 이름 |
| gender | VARCHAR(10) | 성별 ('남성', '여성') |
| age | INTEGER | 나이 |
| phone | VARCHAR(20) | 연락처 |
| center | VARCHAR(50) | 희망 장소 |
| original_price | INTEGER | 원래 가격 |
| final_price | INTEGER | 최종 가격 (할인 적용 후) |
| promo_code | VARCHAR(50) | 사용한 추천코드 |
| status | VARCHAR(20) | 상태 ('pending', 'contacted', 'confirmed', 'cancelled', 'completed') |
| notes | TEXT | 관리자 메모 |
| privacy_agreed | BOOLEAN | 개인정보 동의 여부 |
| privacy_agreed_at | TIMESTAMPTZ | 개인정보 동의 시간 |
| created_at | TIMESTAMPTZ | 생성일시 |
| updated_at | TIMESTAMPTZ | 수정일시 |

**현재 상태**:
- `app/programs/apply/page.tsx`에서 alert만 표시, DB 저장 없음
- `app/consult/page.tsx`에서도 alert만 표시, DB 저장 없음
- DB 마이그레이션 후 신청 데이터 저장 기능 구현 필요

---

### 6. **promo_codes** - 추천코드 테이블
**용도**: 추천코드 관리

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | SERIAL | 기본키 |
| code | VARCHAR(50) | 추천코드 (유니크) |
| discount_type | VARCHAR(20) | 할인 유형 ('percentage', 'fixed', 'free') |
| discount_value | INTEGER | 할인율(%) 또는 할인금액(원) |
| max_uses | INTEGER | 최대 사용 횟수 (NULL = 무제한) |
| used_count | INTEGER | 사용 횟수 |
| is_active | BOOLEAN | 활성화 여부 |
| valid_from | TIMESTAMPTZ | 유효 시작일 |
| valid_until | TIMESTAMPTZ | 유효 종료일 |
| description | TEXT | 설명 |
| created_at | TIMESTAMPTZ | 생성일시 |
| updated_at | TIMESTAMPTZ | 수정일시 |

**현재 상태**:
- `app/programs/apply/page.tsx`에서 하드코딩된 코드 확인 ("1234", "OS-614412")
- `app/consult/page.tsx`에서도 하드코딩된 코드 확인 ("1234")
- DB 마이그레이션 후 동적 코드 검증으로 전환 필요

**초기 데이터**:
- "1234" (무료)
- "OS-614412" (무료)

---

### 7. **centers** - 센터 정보 테이블
**용도**: 센터 정보 관리

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | SERIAL | 기본키 |
| name | VARCHAR(100) | 센터 이름 (유니크) |
| address | TEXT | 주소 |
| phone | VARCHAR(20) | 전화번호 |
| email | VARCHAR(255) | 이메일 |
| is_active | BOOLEAN | 활성화 여부 |
| display_order | INTEGER | 표시 순서 |
| created_at | TIMESTAMPTZ | 생성일시 |
| updated_at | TIMESTAMPTZ | 수정일시 |

**초기 데이터**:
- 홍대
- 여의도
- 구로
- 기타

---

### 8. **post_views** - 조회수 추적 테이블 (선택사항)
**용도**: 게시글 조회수 추적 및 중복 조회 방지

| 컬럼명 | 타입 | 설명 |
|--------|------|------|
| id | SERIAL | 기본키 |
| post_id | INTEGER | 게시글 ID (posts 참조) |
| ip_address | INET | IP 주소 |
| user_agent | TEXT | User Agent |
| viewed_at | TIMESTAMPTZ | 조회 시간 |

**참고**: 
- 현재는 `posts.views` 컬럼만 사용
- 더 정확한 조회수 추적이 필요할 경우 사용

---

## 🔗 테이블 관계도

```
users (1) ──< (N) posts
                └──< (N) post_files

programs (1) ──< (N) applications
centers (1) ──< (N) applications
promo_codes (1) ──< (N) applications

posts (1) ──< (N) post_views
```

---

## 📝 마이그레이션 체크리스트

### Phase 1: 기본 테이블 생성
- [x] SQL 스크립트 작성 (`sql-scripts/current.sql`)
- [ ] Supabase에 SQL 스크립트 실행
- [ ] 초기 데이터 확인

### Phase 2: 사용자 인증 전환
- [ ] `app/api/auth/login/route.ts` 수정 (Supabase Auth 또는 users 테이블 사용)
- [ ] 비밀번호 해시화 로직 구현 (bcrypt)
- [ ] 세션 관리 구현

### Phase 3: 게시글 관리 전환
- [ ] `app/api/admin/posts/route.ts` 수정 (Supabase 사용)
- [ ] `data/posts.json` 데이터를 Supabase로 마이그레이션
- [ ] 게시글 목록/상세/작성 기능 테스트

### Phase 4: 파일 관리 전환
- [ ] Supabase Storage 설정
- [ ] `app/api/admin/posts/upload/route.ts` 수정
- [ ] 기존 파일 마이그레이션 (선택사항)

### Phase 5: 프로그램 관리 전환
- [ ] `app/programs/page.tsx` 수정 (Supabase에서 프로그램 목록 조회)
- [ ] `app/consult/page.tsx` 수정
- [ ] 프로그램 정보 관리 페이지 구현 (선택사항)

### Phase 6: 신청 기능 구현
- [ ] `app/programs/apply/page.tsx` 수정 (DB 저장)
- [ ] `app/consult/page.tsx` 수정 (DB 저장)
- [ ] 신청 내역 관리 페이지 구현 (선택사항)

### Phase 7: 추천코드 전환
- [ ] 추천코드 검증 로직을 DB 기반으로 수정
- [ ] 사용 횟수 추적 구현

---

## 🔒 보안 고려사항

1. **Row Level Security (RLS) 활성화**
   - Supabase에서 RLS 정책 설정 필요
   - 관리자만 게시글 작성/수정/삭제 가능
   - 일반 사용자는 게시글 조회만 가능

2. **비밀번호 보안**
   - bcrypt 해시 사용 (최소 10 rounds)
   - 평문 비밀번호 저장 금지

3. **개인정보 보호**
   - `applications` 테이블의 개인정보 암호화 고려
   - GDPR/개인정보보호법 준수

4. **파일 업로드 보안**
   - 파일 타입 검증
   - 파일 크기 제한
   - 악성 파일 스캔 (선택사항)

---

## 📊 인덱스 전략

- **조회 성능 최적화**:
  - `posts`: category, is_notice, created_at 인덱스
  - `applications`: status, created_at 인덱스
  - `users`: username, role 인덱스

- **검색 성능 최적화**:
  - `posts.title`, `posts.content`에 대한 Full-Text Search 고려 (향후)

---

## 🚀 향후 확장 가능성

1. **댓글 기능**: `comments` 테이블 추가
2. **예약 시스템**: `reservations` 테이블 추가
3. **결제 시스템**: `payments` 테이블 추가
4. **알림 시스템**: `notifications` 테이블 추가
5. **통계/분석**: 별도 분석 테이블 또는 뷰 생성

---

## 📞 문의

스키마 관련 문의사항이 있으시면 이슈를 등록해주세요.



