# Supabase 설정 가이드

## 📋 단계별 설정 방법

### 1. Supabase 프로젝트에서 API 키 확인

1. [Supabase 대시보드](https://app.supabase.com/)에 로그인
2. 프로젝트 선택
3. 좌측 메뉴에서 **Settings** (⚙️) 클릭
4. **API** 메뉴 클릭
5. 다음 정보를 복사:
   - **Project URL** (예: `https://xxxxx.supabase.co`)
   - **anon public** 키 (예: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

---

### 2. 환경 변수 파일 생성

프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하세요.

**Windows (PowerShell):**
```powershell
New-Item -Path .env.local -ItemType File
```

**Mac/Linux:**
```bash
touch .env.local
```

---

### 3. 환경 변수 설정

`.env.local` 파일을 열고 다음 내용을 추가하세요:

```env
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**예시:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

⚠️ **주의**: 
- `.env.local` 파일은 절대 Git에 커밋하지 마세요 (이미 `.gitignore`에 포함되어 있음)
- 실제 키 값으로 교체해야 합니다

---

### 4. Supabase에 테이블 생성

1. Supabase 대시보드에서 **SQL Editor** 메뉴 클릭
2. **New query** 클릭
3. `sql-scripts/current.sql` 파일의 내용을 복사하여 붙여넣기
4. **Run** 버튼 클릭 (또는 `Ctrl/Cmd + Enter`)
5. 성공 메시지 확인

**확인 방법:**
- 좌측 메뉴에서 **Table Editor** 클릭
- `admin_posts`, `admin_post_files` 테이블이 생성되었는지 확인

---

### 5. 개발 서버 재시작

환경 변수를 변경했으므로 개발 서버를 재시작해야 합니다:

```bash
# 서버 중지 (Ctrl + C)
# 서버 재시작
npm run dev
```

---

## 🧪 테스트 방법

### 1. 게시글 작성 테스트

1. 웹사이트에서 관리자로 로그인
2. `/admin/board` 페이지로 이동
3. **글쓰기** 버튼 클릭
4. 게시글 작성 후 제출
5. Supabase 대시보드 > **Table Editor** > **admin_posts** 테이블에서 데이터 확인

### 2. 게시글 목록 조회 테스트

1. `/admin/board` 페이지에서 게시글 목록이 표시되는지 확인
2. 브라우저 개발자 도구 (F12) > **Network** 탭에서 `/api/admin/posts` 요청 확인
3. 응답이 정상적으로 오는지 확인

---

## 🔍 문제 해결

### 오류: "Supabase 환경 변수가 설정되지 않았습니다"

**원인**: `.env.local` 파일이 없거나 환경 변수가 설정되지 않음

**해결**:
1. `.env.local` 파일이 프로젝트 루트에 있는지 확인
2. 환경 변수 이름이 정확한지 확인 (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
3. 개발 서버를 재시작

---

### 오류: "relation 'admin_posts' does not exist"

**원인**: Supabase에 테이블이 생성되지 않음

**해결**:
1. Supabase 대시보드 > **SQL Editor**에서 `sql-scripts/current.sql` 실행
2. **Table Editor**에서 테이블이 생성되었는지 확인

---

### 오류: "permission denied for table posts"

**원인**: Row Level Security (RLS) 정책이 활성화되어 있음

**해결** (개발 단계):
1. Supabase 대시보드 > **Authentication** > **Policies**
2. `posts` 테이블의 RLS 정책 확인
3. 개발 단계에서는 RLS를 비활성화하거나, 모든 사용자에게 읽기/쓰기 권한 부여

**임시 해결 (개발용)**:
```sql
-- RLS 비활성화 (개발 단계에서만 사용)
ALTER TABLE posts DISABLE ROW LEVEL SECURITY;
ALTER TABLE post_files DISABLE ROW LEVEL SECURITY;
```

**프로덕션용 정책 (나중에 설정)**:
```sql
-- 모든 사용자가 게시글 조회 가능
CREATE POLICY "Anyone can read posts"
ON posts FOR SELECT
USING (true);

-- 관리자만 게시글 작성 가능 (users 테이블의 role 확인)
CREATE POLICY "Admins can insert posts"
ON posts FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.role = 'admin'
  )
);
```

---

## 📝 다음 단계

1. ✅ Supabase 클라이언트 설치
2. ✅ 환경 변수 설정
3. ✅ 게시글 API 수정
4. ⏳ 기존 JSON 데이터를 Supabase로 마이그레이션 (선택사항)
5. ⏳ 파일 업로드를 Supabase Storage로 전환 (선택사항)
6. ⏳ RLS 정책 설정 (보안 강화)

---

## 📞 문의

문제가 발생하면 이슈를 등록해주세요.



