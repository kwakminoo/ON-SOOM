# 프로젝트 구조 상세 가이드

이 문서는 온ː숨 웹사이트 프로젝트의 폴더와 파일 구조를 상세히 설명합니다.

## 📂 전체 디렉토리 트리

```
WEBTEST/
│
├── 📁 app/                           # Next.js 15 App Router
│   │
│   ├── 📁 about/                     # 센터 소개 관련 페이지
│   │   ├── 📄 page.tsx               # /about - 센터 소개 메인
│   │   ├── 📁 story/
│   │   │   └── 📄 page.tsx           # /about/story - 센터 이야기
│   │   ├── 📁 vision/
│   │   │   └── 📄 page.tsx           # /about/vision - 센터 비전
│   │   └── 📁 centers/
│   │       └── 📄 page.tsx           # /about/centers - 센터 위치
│   │
│   ├── 📁 programs/                  # 프로그램 관련 페이지
│   │   ├── 📄 page.tsx               # /programs - 프로그램 메인
│   │   ├── 📁 corporate/
│   │   │   └── 📄 page.tsx           # /programs/corporate - 기업 상담
│   │   ├── 📁 education/
│   │   │   └── 📄 page.tsx           # /programs/education - 교육기관 상담
│   │   ├── 📁 seminar/
│   │   │   └── 📄 page.tsx           # /programs/seminar - 강연/세미나
│   │   ├── 📁 apply/
│   │   │   └── 📄 page.tsx           # /programs/apply - 프로그램 신청
│   │   └── 📁 self-test/
│   │       └── 📄 page.tsx           # /programs/self-test - 자가진단
│   │
│   ├── 📁 community/                 # 커뮤니티 페이지
│   │   ├── 📁 notice/
│   │   │   └── 📄 page.tsx           # /community/notice - 공지사항
│   │   └── 📁 faq/
│   │       └── 📄 page.tsx           # /community/faq - FAQ
│   │
│   ├── 📁 consult/                   # 상담 신청
│   │   └── 📄 page.tsx               # /consult
│   │
│   ├── 📁 login/                     # 로그인
│   │   └── 📄 page.tsx               # /login
│   │
│   ├── 📁 signup/                    # 회원가입
│   │   └── 📄 page.tsx               # /signup
│   │
│   ├── 📄 layout.tsx                 # 전역 레이아웃 (모든 페이지에 적용)
│   ├── 📄 page.tsx                   # 홈페이지 (/)
│   └── 📄 globals.css                # 전역 CSS 스타일
│
├── 📁 components/                    # 재사용 가능한 React 컴포넌트
│   ├── 📄 Header.tsx                 # 상단 네비게이션 바
│   ├── 📄 Footer.tsx                 # 하단 푸터
│   ├── 📄 HeroSlider.tsx             # 메인 히어로 이미지 슬라이더
│   ├── 📄 ProgramSection.tsx         # 프로그램 소개 섹션
│   ├── 📄 ExpertSection.tsx          # 전문가 소개 섹션
│   ├── 📄 TestimonialSection.tsx     # 고객 후기 섹션
│   ├── 📄 CenterSection.tsx          # 센터 소개 섹션
│   ├── 📄 VisionSection.tsx          # 비전 섹션
│   └── 📄 QuickConsult.tsx           # 빠른 상담 플로팅 버튼
│
├── 📁 public/                        # 정적 파일 (이미지, 폰트 등)
│   ├── 🖼️ center1.jpg
│   ├── 🖼️ center2.jpg
│   └── 🖼️ center3.jpg
│
├── 📄 package.json                   # 프로젝트 의존성 및 스크립트
├── 📄 package-lock.json              # 의존성 잠금 파일
├── 📄 tsconfig.json                  # TypeScript 설정
├── 📄 tailwind.config.ts             # Tailwind CSS 설정
├── 📄 next.config.ts                 # Next.js 설정
├── 📄 postcss.config.mjs             # PostCSS 설정
├── 📄 next-env.d.ts                  # Next.js 타입 정의
│
├── 📄 README.md                      # 프로젝트 소개 및 시작 가이드
├── 📄 CONTRIBUTING.md                # 협업 및 기여 가이드
├── 📄 PROJECT_STRUCTURE.md           # 이 문서
├── 📄 DEPLOY_GUIDE.md                # 배포 가이드
├── 📄 FIGMA_GUIDE.md                 # Figma 디자인 가이드
└── 📄 IMAGE_GUIDE.md                 # 이미지 최적화 가이드
```

## 🗂️ 폴더별 상세 설명

### 📁 `app/` - 애플리케이션 페이지

Next.js 15의 App Router를 사용합니다. 각 폴더는 URL 경로와 매핑됩니다.

#### 파일 컨벤션
- `page.tsx` - 해당 경로의 UI를 정의
- `layout.tsx` - 여러 페이지 간 공유되는 레이아웃
- `loading.tsx` - 로딩 UI (선택사항)
- `error.tsx` - 에러 UI (선택사항)

#### 주요 페이지 상세

##### 🏠 홈페이지 (`app/page.tsx`)
```typescript
// 포함 컴포넌트:
- HeroSlider: 메인 배너 슬라이더
- ProgramSection: 주요 프로그램 3가지 소개
- ExpertSection: 전문가 팀 소개
- TestimonialSection: 고객 후기
- CenterSection: 센터 위치 및 정보
```

##### 📖 센터 소개 (`app/about/`)
```
/about          - 센터 소개 메인 (준비 중)
/about/story    - 센터 설립 배경과 이야기
/about/vision   - 센터의 비전과 핵심 가치
/about/centers  - 센터 위치 및 시설 안내
```

##### 📚 프로그램 (`app/programs/`)
```
/programs                - 프로그램 소개 메인 (준비 중)
/programs/corporate     - 기업 상담 (완성 ✅)
/programs/education     - 교육기관 상담 (완성 ✅)
/programs/seminar       - 강연 및 세미나 (완성 ✅)
/programs/apply         - 프로그램 신청서
/programs/self-test     - 온라인 자가진단
```

##### 💬 커뮤니티 (`app/community/`)
```
/community/notice  - 공지사항 목록 및 상세
/community/faq     - 자주 묻는 질문
```

##### 👤 회원 (`app/login/`, `app/signup/`)
```
/login   - 로그인 페이지
/signup  - 회원가입 페이지
```

##### 📞 상담 (`app/consult/`)
```
/consult - 상담 신청 폼
         - React Hook Form + Zod 검증 사용
```

### 📁 `components/` - 재사용 컴포넌트

모든 페이지에서 재사용 가능한 UI 컴포넌트를 관리합니다.

#### 레이아웃 컴포넌트

```typescript
// Header.tsx - 상단 네비게이션
- 로고
- 메뉴 (센터 소개, 프로그램, 커뮤니티, 상담 신청)
- 로그인/회원가입 버튼
- 모바일 햄버거 메뉴

// Footer.tsx - 하단 푸터
- 센터 정보 (주소, 전화번호, 이메일)
- 빠른 링크
- 소셜 미디어 링크
- 저작권 정보
```

#### 홈페이지 전용 컴포넌트

```typescript
// HeroSlider.tsx
- Swiper 라이브러리 사용
- 자동 재생 슬라이더
- 페이지네이션 표시

// ProgramSection.tsx
- 3가지 주요 프로그램 카드
- 각 카드 클릭 시 상세 페이지로 이동

// ExpertSection.tsx
- 전문가 프로필 카드
- 이름, 전문분야, 소개

// TestimonialSection.tsx
- 고객 후기 표시
- 슬라이더 형태로 여러 후기 표시

// CenterSection.tsx
- 센터 이미지 갤러리
- 센터 소개 텍스트

// VisionSection.tsx
- 센터의 비전과 미션 표시

// QuickConsult.tsx
- 화면 우하단 고정 버튼
- 클릭 시 상담 신청 페이지로 이동
```

### 📁 `public/` - 정적 파일

브라우저에서 직접 접근 가능한 파일들을 저장합니다.

```
public/
├── center1.jpg     - 센터 이미지 1
├── center2.jpg     - 센터 이미지 2
└── center3.jpg     - 센터 이미지 3

# 추가 가능한 파일:
- favicon.ico       - 파비콘
- robots.txt        - 검색엔진 크롤러 설정
- sitemap.xml       - 사이트맵
- images/           - 이미지 폴더
- fonts/            - 웹폰트 폴더
```

## 📄 설정 파일 설명

### `package.json`
```json
{
  "scripts": {
    "dev": "next dev",           // 개발 서버 (localhost:3000)
    "build": "next build",       // 프로덕션 빌드
    "start": "next start",       // 프로덕션 서버
    "lint": "next lint"          // ESLint 검사
  }
}
```

### `tsconfig.json`
- TypeScript 컴파일러 옵션
- 경로 별칭 설정 (`@/components` 등)
- 타입 체크 규칙

### `tailwind.config.ts`
- Tailwind CSS 커스텀 설정
- 색상 팔레트 확장
- 반응형 브레이크포인트
- 플러그인 설정

### `next.config.ts`
- Next.js 프레임워크 설정
- 이미지 최적화 도메인
- 환경 변수
- 리다이렉트 규칙

## 🎯 주요 라이브러리 및 역할

### 핵심 라이브러리

| 라이브러리 | 버전 | 역할 |
|-----------|------|------|
| Next.js | 15.5.5 | 프레임워크 (SSR, 라우팅, 최적화) |
| React | 18.3.1 | UI 라이브러리 |
| TypeScript | 5.7.3 | 타입 안전성 |
| Tailwind CSS | 3.4.17 | 유틸리티 CSS 프레임워크 |

### UI 라이브러리

| 라이브러리 | 역할 |
|-----------|------|
| lucide-react | 아이콘 컴포넌트 |
| swiper | 이미지 슬라이더 |

### 폼 관리

| 라이브러리 | 역할 |
|-----------|------|
| react-hook-form | 폼 상태 관리 |
| zod | 스키마 검증 |
| @hookform/resolvers | Zod + React Hook Form 통합 |

## 📊 파일 추가 가이드

### 새 페이지 추가

1. `app/` 폴더에 새 디렉토리 생성
2. `page.tsx` 파일 추가
3. 컴포넌트 작성

```typescript
// app/새페이지/page.tsx
export default function 새페이지() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-light text-gray-900 mb-8">
          새 페이지
        </h1>
        {/* 내용 */}
      </div>
    </div>
  );
}
```

### 새 컴포넌트 추가

1. `components/` 폴더에 파일 생성
2. 타입 정의와 함께 컴포넌트 작성
3. 필요한 곳에서 import

```typescript
// components/새컴포넌트.tsx
interface 새컴포넌트Props {
  title: string;
  description?: string;
}

export function 새컴포넌트({ title, description }: 새컴포넌트Props) {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### 정적 파일 추가

1. `public/` 폴더에 파일 추가
2. 코드에서 `/파일명`으로 참조

```typescript
// 이미지 사용 예시
import Image from 'next/image';

<Image 
  src="/새이미지.jpg" 
  alt="설명"
  width={800}
  height={600}
/>
```

## 🔍 파일 찾기 팁

### 특정 기능을 수정하고 싶을 때

| 수정하고 싶은 것 | 파일 위치 |
|----------------|----------|
| 메인 페이지 내용 | `app/page.tsx` |
| 헤더 메뉴 | `components/Header.tsx` |
| 푸터 정보 | `components/Footer.tsx` |
| 기업 상담 페이지 | `app/programs/corporate/page.tsx` |
| 전역 스타일 | `app/globals.css` |
| 색상 테마 | `tailwind.config.ts` |

### 새 기능을 추가하고 싶을 때

| 추가하고 싶은 것 | 작업 위치 |
|----------------|----------|
| 새 페이지 | `app/새경로/page.tsx` |
| 재사용 컴포넌트 | `components/새컴포넌트.tsx` |
| 이미지/파일 | `public/` |
| 새 라이브러리 | `npm install 라이브러리명` |

## 📚 추가 참고 문서

- [README.md](./README.md) - 프로젝트 시작 가이드
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 협업 가이드
- [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md) - 배포 방법
- [FIGMA_GUIDE.md](./FIGMA_GUIDE.md) - 디자인 시스템
- [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) - 이미지 최적화

---

**프로젝트 구조에 대한 질문이 있으시면 언제든지 문의해주세요!** 📖

