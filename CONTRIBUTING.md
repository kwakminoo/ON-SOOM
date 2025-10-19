# 기여 가이드 (Contributing Guide)

온ː숨 웹사이트 프로젝트에 기여해주셔서 감사합니다! 이 문서는 프로젝트에 효과적으로 기여하는 방법을 안내합니다.

## 🔄 개발 워크플로우

### 1. 브랜치 전략

```
main              # 프로덕션 배포용 브랜치 (항상 안정적인 상태 유지)
  ├── develop     # 개발용 메인 브랜치
      ├── feature/기능명    # 새 기능 개발
      ├── fix/버그명        # 버그 수정
      └── refactor/대상     # 리팩토링
```

### 2. 브랜치 명명 규칙

- **기능 추가**: `feature/기능명`
  - 예: `feature/payment-system`, `feature/blog-section`
- **버그 수정**: `fix/버그명`
  - 예: `fix/login-error`, `fix/mobile-menu`
- **리팩토링**: `refactor/대상`
  - 예: `refactor/header-component`, `refactor/api-calls`
- **문서 수정**: `docs/내용`
  - 예: `docs/readme-update`, `docs/api-guide`

### 3. 작업 프로세스

```bash
# 1. 최신 develop 브랜치로 업데이트
git checkout develop
git pull origin develop

# 2. 새 작업 브랜치 생성
git checkout -b feature/새로운-기능

# 3. 작업 진행 및 커밋
git add .
git commit -m "feat: 새로운 기능 추가"

# 4. 원격 저장소에 푸시
git push origin feature/새로운-기능

# 5. Pull Request 생성
# GitHub에서 develop 브랜치로 PR 생성
```

## 📝 커밋 메시지 규칙

### 형식

```
타입: 제목

본문 (선택사항)

푸터 (선택사항)
```

### 타입

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등 (기능 변경 없음)
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가 또는 수정
- `chore`: 빌드, 패키지 매니저 설정 등

### 예시

```bash
# 좋은 예
git commit -m "feat: 기업 상담 페이지 추가"
git commit -m "fix: 모바일 메뉴 오버플로우 버그 수정"
git commit -m "docs: README에 설치 가이드 추가"
git commit -m "style: Tailwind 클래스 정렬"

# 나쁜 예
git commit -m "업데이트"
git commit -m "수정함"
git commit -m "ㅁㄴㅇㄹ"
```

## 🎨 코딩 컨벤션

### TypeScript

```typescript
// ✅ 좋은 예
interface UserProfile {
  name: string;
  email: string;
  age: number;
}

function getUserProfile(userId: string): Promise<UserProfile> {
  // 구현
}

// ❌ 나쁜 예
function getUser(id: any): any {
  // 구현
}
```

### React 컴포넌트

```typescript
// ✅ 좋은 예 - 함수형 컴포넌트
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === 'primary' ? 'bg-blue-600' : 'bg-gray-600'
      }`}
    >
      {label}
    </button>
  );
}

// ❌ 나쁜 예
export const Button = (props: any) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};
```

### Tailwind CSS 스타일링

```typescript
// ✅ 좋은 예 - 명확하고 읽기 쉬운 클래스
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">제목</h2>
</div>

// ❌ 나쁜 예 - 너무 긴 클래스 문자열
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
```

### 파일 및 폴더 명명

```
✅ 좋은 예
components/
  ├── Header.tsx
  ├── Footer.tsx
  └── ProgramSection.tsx

app/
  ├── programs/
  │   ├── corporate/
  │   │   └── page.tsx
  │   └── education/
  │       └── page.tsx

❌ 나쁜 예
components/
  ├── header.tsx
  ├── Footer_Component.tsx
  └── program-section.tsx
```

## 📋 Pull Request 가이드

### PR 체크리스트

PR을 생성하기 전에 다음을 확인하세요:

- [ ] 코드가 정상적으로 빌드되는가? (`npm run build`)
- [ ] 린트 에러가 없는가? (`npm run lint`)
- [ ] 변경사항이 의도한 대로 동작하는가?
- [ ] 모바일/태블릿/데스크톱에서 모두 정상 작동하는가?
- [ ] 커밋 메시지가 규칙을 따르는가?
- [ ] 불필요한 파일이 포함되지 않았는가? (node_modules, .env 등)

### PR 템플릿

```markdown
## 변경 사항
- 기업 상담 페이지 추가
- 반응형 디자인 적용

## 변경 이유
- 사용자가 기업 상담 프로그램 정보를 쉽게 확인할 수 있도록 함

## 테스트 방법
1. `npm run dev` 실행
2. `/programs/corporate` 페이지 접속
3. 모바일, 태블릿, 데스크톱 화면 크기에서 확인

## 스크린샷
(화면 캡처 이미지 첨부)

## 관련 이슈
Closes #123
```

## 🧪 테스트

### 로컬 테스트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드 테스트
npm run build
npm start

# 린트 체크
npm run lint
```

### 브라우저 테스트

다음 브라우저에서 테스트를 권장합니다:

- Chrome (최신 버전)
- Safari (최신 버전)
- Firefox (최신 버전)
- Edge (최신 버전)
- 모바일: iOS Safari, Android Chrome

### 반응형 테스트 체크리스트

- [ ] 모바일 (375px ~ 767px)
- [ ] 태블릿 (768px ~ 1023px)
- [ ] 데스크톱 (1024px ~)

## 🚫 주의사항

### 절대 커밋하면 안 되는 것들

```
❌ node_modules/
❌ .env, .env.local (환경 변수)
❌ .DS_Store (macOS)
❌ *.log (로그 파일)
❌ .next/ (Next.js 빌드 폴더)
❌ 개인정보나 API 키
```

### 코드 리뷰 받을 때

- 변경 사항에 대한 명확한 설명 제공
- 리뷰어의 피드백을 긍정적으로 수용
- 필요시 추가 설명이나 수정 진행
- 승인 후 merge 진행

## 📞 도움이 필요할 때

- **기술적 문제**: GitHub Issues에 질문 등록
- **긴급한 버그**: Slack 또는 Discord 채널에 알림
- **기능 제안**: GitHub Discussions에 아이디어 공유

## 🎯 리뷰 포인트

코드 리뷰 시 다음 사항을 확인합니다:

### 기능성
- 요구사항을 충족하는가?
- 엣지 케이스를 고려했는가?
- 에러 처리가 적절한가?

### 코드 품질
- TypeScript 타입이 명확한가?
- 컴포넌트가 재사용 가능한가?
- 불필요한 중복 코드가 없는가?

### 성능
- 불필요한 리렌더링이 없는가?
- 이미지가 최적화되었는가?
- 번들 크기에 영향을 주지 않는가?

### 접근성
- 키보드 네비게이션이 가능한가?
- 스크린 리더 지원이 되는가?
- 색상 대비가 충분한가?

## 📚 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod 스키마 검증](https://zod.dev/)

---

**함께 만들어가는 온ː숨, 감사합니다!** 🙏

