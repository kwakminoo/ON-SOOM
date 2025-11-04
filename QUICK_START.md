# 빠른 시작 가이드 (Quick Start)

새로운 팀원을 위한 5분 안에 시작하는 가이드입니다! 🚀

## ⚡ 5분 안에 시작하기

### 1️⃣ 저장소 클론

```bash
git clone <repository-url>
cd WEBTEST
```

### 2️⃣ 의존성 설치

```bash
npm install
```

설치 시간: 약 2-3분 ⏱️

### 3️⃣ 개발 서버 실행

```bash
npm run dev
```

### 4️⃣ 브라우저에서 확인

[http://localhost:3000](http://localhost:3000) 열기

✅ 완료! 이제 개발을 시작할 수 있습니다.

## 📋 첫 번째 할 일 체크리스트

- [ ] 프로젝트 클론 완료
- [ ] npm install 완료
- [ ] 개발 서버 실행 확인
- [ ] 브라우저에서 홈페이지 확인
- [ ] [README.md](./README.md) 읽기
- [ ] [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) 읽기
- [ ] [CONTRIBUTING.md](./CONTRIBUTING.md) 읽기

## 🗺️ 주요 페이지 둘러보기

개발 서버를 실행한 후 다음 페이지들을 확인해보세요:

### 홈페이지
```
http://localhost:3000
```
- 메인 슬라이더
- 프로그램 소개
- 전문가 소개
- 고객 후기

### 프로그램 페이지
```
http://localhost:3000/programs/corporate    # 기업 상담
http://localhost:3000/programs/education    # 교육기관 상담
http://localhost:3000/programs/seminar      # 강연/세미나
```

### 센터 소개
```
http://localhost:3000/about/story           # 센터 이야기
http://localhost:3000/about/vision          # 센터 비전
http://localhost:3000/about/centers         # 센터 위치
```

## 🛠️ 첫 번째 코드 수정해보기

### 1. 헤더 메뉴 텍스트 변경

```typescript
// components/Header.tsx 파일 열기
// 메뉴 항목 찾아서 수정

const menuItems = [
  { name: '센터 소개', href: '/about' },
  { name: '프로그램', href: '/programs' },
  { name: '커뮤니티', href: '/community' },
  { name: '상담 신청', href: '/consult' },
];

// ↓ 원하는 대로 수정
```

저장하면 자동으로 브라우저에 반영됩니다! (Hot Reload)

### 2. 홈페이지 제목 변경

```typescript
// app/page.tsx 파일 열기
// h1 태그 찾아서 수정

<h1 className="text-5xl md:text-7xl font-light text-white mb-6">
  온ː숨
</h1>

// ↓ 원하는 대로 수정
```

### 3. 색상 변경

```typescript
// tailwind.config.ts 파일 열기
// 색상 팔레트 확인 및 수정 가능

// 기본 색상:
// blue-600  → 기업 상담
// green-600 → 교육기관 상담
// purple-600 → 강연/세미나
```

## 📝 개발 워크플로우

### 새 작업 시작

```bash
# 1. 최신 코드 받기
git checkout develop
git pull origin develop

# 2. 새 브랜치 만들기
git checkout -b feature/나의-기능

# 3. 코드 수정

# 4. 커밋
git add .
git commit -m "feat: 새 기능 추가"

# 5. 푸시
git push origin feature/나의-기능

# 6. GitHub에서 Pull Request 생성
```

## 🎨 스타일링 팁

### Tailwind CSS 클래스 사용

```typescript
// ✅ 좋은 예
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">제목</h2>
</div>

// 자주 사용하는 클래스:
// - flex, grid: 레이아웃
// - p-4, m-4: 패딩, 마진 (4 = 1rem = 16px)
// - text-lg, text-2xl: 텍스트 크기
// - bg-blue-600: 배경색
// - rounded-lg: 둥근 모서리
// - shadow-md: 그림자
```

### 반응형 디자인

```typescript
// 모바일 → 태블릿 → 데스크톱 순서
<div className="
  text-base          // 모든 화면
  md:text-lg         // 태블릿 이상 (768px~)
  lg:text-xl         // 데스크톱 (1024px~)
">
  반응형 텍스트
</div>
```

## 🐛 문제 해결

### 개발 서버가 안 켜질 때

```bash
# 1. 포트가 이미 사용 중인 경우
# 다른 터미널에서 실행 중인 npm run dev 종료

# 2. 캐시 삭제
rm -rf .next
rm -rf node_modules
npm install
npm run dev
```

### 스타일이 적용 안 될 때

```bash
# Tailwind 캐시 삭제
rm -rf .next
npm run dev
```

### 타입 에러가 날 때

```bash
# TypeScript 체크
npm run build

# 타입 에러 확인하고 수정
```

## 📚 더 알아보기

### 필수 문서
1. [README.md](./README.md) - 프로젝트 전체 개요
2. [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - 폴더 구조 상세
3. [CONTRIBUTING.md](./CONTRIBUTING.md) - 협업 가이드

### 기술 문서
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/handbook/intro.html)

### 온보딩 체크리스트

- [ ] 프로젝트 클론 완료
- [ ] 개발 서버 실행 성공
- [ ] 모든 주요 페이지 확인
- [ ] 첫 번째 코드 수정 완료
- [ ] README 문서 읽기
- [ ] Git 브랜치 전략 이해
- [ ] 커밋 메시지 규칙 숙지
- [ ] 팀원에게 인사하기 👋

## 🙋 도움이 필요할 때

### 질문하기 좋은 곳
- **기술적 질문**: GitHub Issues
- **긴급 문제**: 팀 채팅방 (Slack/Discord)
- **코드 리뷰**: Pull Request에서

### 자주 묻는 질문 (FAQ)

**Q: 포트를 변경하고 싶어요**
```bash
# package.json 수정
"dev": "next dev -p 3001"
```

**Q: 이미지는 어디에 추가하나요?**
```
public/ 폴더에 추가하고
/이미지명.jpg 로 사용
```

**Q: 새 페이지를 만들려면?**
```
app/새경로/page.tsx 파일 생성
```

**Q: 컴포넌트를 재사용하려면?**
```
components/ 폴더에 만들고
import { 컴포넌트명 } from '@/components/컴포넌트명'
```

## 🎯 다음 단계

시작을 완료했다면:

1. 📖 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) 읽고 프로젝트 구조 파악
2. 🔧 간단한 텍스트 수정으로 연습
3. 🎨 스타일 변경해보기
4. 🌿 새 브랜치 만들어서 작업 시작
5. 📝 첫 Pull Request 만들기

---

**환영합니다! 함께 온ː숨을 만들어가요** 🌟

