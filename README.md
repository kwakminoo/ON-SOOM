# 온ː숨 (ON-SOOM) 상담센터 웹사이트

온ː숨은 사람의 회복과 성장을 돕는 전문 상담센터입니다. 이 프로젝트는 온ː숨의 공식 웹사이트를 구현한 Next.js 기반 웹 애플리케이션입니다.

## 🌟 프로젝트 소개

온ː숨은 개인 상담부터 기업 코칭, 교육기관 연계 프로그램, 강연 및 세미나까지 다양한 성장 프로그램을 제공합니다.

**핵심 가치**

- 개인의 내면 성장과 회복
- 사람 중심의 리더십과 조직문화
- 청년과 학생들의 자기 이해와 진로 설계
- 성찰과 변화를 위한 강연과 세미나

## 🛠 기술 스택

- **Framework**: Next.js 15.5.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React (아이콘), Swiper (슬라이더)
- **Form Management**: React Hook Form + Zod
- **Package Manager**: npm

## 📁 프로젝트 구조

```
WEBTEST/
├── app/                          # Next.js App Router 페이지
│   ├── about/                    # 센터 소개 페이지
│   │   ├── page.tsx              # 센터 소개 메인
│   │   ├── story/                # 센터 이야기
│   │   ├── vision/               # 센터 비전
│   │   └── centers/              # 센터 위치
│   ├── programs/                 # 프로그램 페이지
│   │   ├── page.tsx              # 프로그램 메인
│   │   ├── corporate/            # 기업 상담
│   │   ├── education/            # 교육기관 상담
│   │   ├── seminar/              # 강연 및 세미나
│   │   ├── apply/                # 프로그램 신청
│   │   └── self-test/            # 자가 진단
│   ├── community/                # 커뮤니티 페이지
│   │   ├── notice/               # 공지사항
│   │   └── faq/                  # 자주 묻는 질문
│   ├── consult/                  # 상담 신청
│   ├── login/                    # 로그인
│   ├── signup/                   # 회원가입
│   ├── layout.tsx                # 전역 레이아웃 (헤더/푸터)
│   ├── page.tsx                  # 메인 홈페이지
│   └── globals.css               # 전역 스타일
│
├── components/                   # 재사용 가능한 컴포넌트
│   ├── Header.tsx                # 네비게이션 헤더
│   ├── Footer.tsx                # 푸터
│   ├── HeroSlider.tsx            # 메인 히어로 슬라이더
│   ├── ProgramSection.tsx        # 프로그램 섹션
│   ├── ExpertSection.tsx         # 전문가 섹션
│   ├── TestimonialSection.tsx    # 후기 섹션
│   ├── CenterSection.tsx         # 센터 소개 섹션
│   ├── VisionSection.tsx         # 비전 섹션
│   └── QuickConsult.tsx          # 빠른 상담 버튼
│
├── public/                       # 정적 파일 (이미지 등)
│   ├── center1.jpg
│   ├── center2.jpg
│   └── center3.jpg
│
├── package.json                  # 프로젝트 의존성
├── tsconfig.json                 # TypeScript 설정
├── tailwind.config.ts            # Tailwind CSS 설정
├── next.config.ts                # Next.js 설정
├── postcss.config.mjs            # PostCSS 설정
├── DEPLOY_GUIDE.md               # 배포 가이드
├── FIGMA_GUIDE.md                # Figma 디자인 가이드
└── IMAGE_GUIDE.md                # 이미지 가이드
```

## 🚀 시작하기

### 1. 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 2. 설치

```bash
# 저장소 클론
git clone <repository-url>
cd WEBTEST

# 의존성 설치
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 4. 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📄 주요 페이지 설명

### 홈페이지 (`/`)

- 메인 히어로 슬라이더
- 프로그램 소개 섹션
- 전문가 소개
- 고객 후기
- 센터 소개
- 빠른 상담 버튼

### 센터 소개 (`/about`)

- `/about` - 센터 소개 메인
- `/about/story` - 센터 이야기
- `/about/vision` - 센터 비전
- `/about/centers` - 센터 위치 및 정보

### 프로그램 (`/programs`)

- `/programs` - 프로그램 메인 페이지
- `/programs/corporate` - **기업 상담 (Corporate Coaching)**
  - 조직문화 개선 및 리더십 개발
  - 워크숍, 리더십 코칭, 피드백 시스템
  - 컬러 테마: 블루
- `/programs/education` - **교육기관 상담 (Youth & Campus Growth)**
  - 청년/학생 대상 성장 프로그램
  - 진로·자존감·관계성장 중심
  - 컬러 테마: 그린
- `/programs/seminar` - **강연 및 세미나 (Talks & Seminars)**
  - 리더십, 회복탄력성, 마음 성장 주제
  - 키노트, 세미나, 워크숍, 토크 콘서트
  - 컬러 테마: 퍼플
- `/programs/apply` - 프로그램 신청
- `/programs/self-test` - 자가 진단 테스트

### 커뮤니티 (`/community`)

- `/community/notice` - 공지사항
- `/community/faq` - 자주 묻는 질문

### 상담 및 회원

- `/consult` - 상담 신청
- `/login` - 로그인
- `/signup` - 회원가입

## 🎨 컴포넌트 설명

### 레이아웃 컴포넌트

- **Header.tsx**: 네비게이션 메뉴, 반응형 모바일 메뉴
- **Footer.tsx**: 센터 정보, 링크, 소셜 미디어

### 홈페이지 컴포넌트

- **HeroSlider.tsx**: Swiper를 이용한 메인 슬라이더
- **ProgramSection.tsx**: 주요 프로그램 카드 표시
- **ExpertSection.tsx**: 전문가 프로필 섹션
- **TestimonialSection.tsx**: 고객 후기 표시
- **CenterSection.tsx**: 센터 위치 및 정보
- **VisionSection.tsx**: 센터 비전 표시
- **QuickConsult.tsx**: 고정된 빠른 상담 버튼

## 💻 개발 가이드

### 코드 스타일

- TypeScript를 사용하며 `any` 타입은 금지
- Tailwind CSS로 스타일링
- 컴포넌트는 함수형 컴포넌트 사용
- 50줄 이내의 작은 함수로 분리

### 페이지 추가 방법

1. `app/` 폴더에 새 폴더 생성
2. `page.tsx` 파일 생성
3. 필요시 `layout.tsx`로 레이아웃 설정

### 컴포넌트 추가 방법

1. `components/` 폴더에 새 `.tsx` 파일 생성
2. 함수형 컴포넌트로 작성
3. 필요한 곳에서 import하여 사용

### 스타일링 가이드

- Tailwind CSS 유틸리티 클래스 우선 사용
- 일관된 색상 팔레트 사용:
  - 기업: `blue-600`
  - 교육: `green-600`
  - 세미나: `purple-600`
- 반응형: `md:`, `lg:` 브레이크포인트 활용

## 🎯 브랜드 컬러 가이드

- **기업 상담**: Blue (`#2563eb`)
- **교육기관**: Green (`#16a34a`)
- **강연/세미나**: Purple (`#9333ea`)
- **메인 텍스트**: Gray 900 (`#111827`)
- **보조 텍스트**: Gray 600 (`#4b5563`)

## 📱 반응형 디자인

- **Mobile**: < 768px
- **Tablet**: 768px ~ 1024px
- **Desktop**: > 1024px

모든 페이지는 모바일 우선으로 디자인되었습니다.

## 🔧 환경 설정

필요시 `.env.local` 파일을 생성하여 환경 변수를 설정할 수 있습니다:

```env
# 예시
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📚 추가 문서

- [배포 가이드](./DEPLOY_GUIDE.md) - Vercel 배포 방법
- [Figma 가이드](./FIGMA_GUIDE.md) - 디자인 시스템
- [이미지 가이드](./IMAGE_GUIDE.md) - 이미지 최적화 가이드

## 🐛 문제 해결

### 개발 서버가 시작되지 않을 때

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
rm package-lock.json
npm install
```

### 빌드 오류 발생 시

```bash
# Next.js 캐시 삭제
rm -rf .next
npm run build
```

## 📞 문의

프로젝트 관련 문의사항은 이슈를 등록하거나 팀원에게 연락해주세요.

---

**온ː숨 - 숨을 트고, 삶이 확장됩니다** 🌿
