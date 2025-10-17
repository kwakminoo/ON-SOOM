# 🎨 피그마로 이전하기 가이드

완성된 웹사이트를 피그마로 가져가는 방법을 안내합니다.

## 📋 방법 1: HTML to Figma 플러그인 (권장)

가장 쉽고 빠른 방법입니다.

### 1단계: 웹사이트 배포
```bash
# Vercel 배포 (무료)
npm install -g vercel
vercel deploy

# 또는 로컬에서 실행
npm run dev
# http://localhost:3001 접속
```

### 2단계: Figma 플러그인 설치

1. **Figma 실행**
2. **Plugins** 메뉴 → **Browse plugins in Community** 검색
3. 다음 플러그인 중 하나 설치:
   - **"html.to.design"** (권장)
   - **"HTML To Figma"**
   - **"Anima"**

### 3단계: 플러그인 실행

#### html.to.design 사용법:
1. Figma에서 새 파일 생성
2. Plugins → html.to.design 실행
3. 웹사이트 URL 입력: `http://localhost:3001` 또는 배포 URL
4. "Import" 클릭
5. 자동으로 디자인 변환 완료!

**장점:**
- ✅ 자동 변환으로 시간 절약
- ✅ 스타일, 레이아웃 그대로 유지
- ✅ 컴포넌트 자동 생성

**단점:**
- ⚠️ 일부 애니메이션/인터랙션은 수동 작업 필요
- ⚠️ 이미지는 URL 링크로 가져와짐

---

## 📋 방법 2: 스타일 가이드 기반 수동 작업

더 정교한 디자인이 필요한 경우

### 1단계: 색상 팔레트 설정

피그마에서 Color Styles 생성:

```
Primary Colors:
- primary-50: #f0f9ff
- primary-100: #e0f2fe
- primary-500: #0ea5e9 (메인)
- primary-600: #0284c7
- primary-700: #0369a1

Accent Colors:
- accent-50: #fdf4ff
- accent-500: #d946ef (메인)
- accent-600: #c026d3
- accent-700: #a21caf

Grayscale:
- gray-50: #f9fafb
- gray-100: #f3f4f6
- gray-600: #4b5563
- gray-900: #111827
```

### 2단계: 타이포그래피 설정

Text Styles 생성:

```
Headings:
- H1: Inter, 36-60px, Bold
- H2: Inter, 32-48px, Bold  
- H3: Inter, 24-32px, Bold
- H4: Inter, 20-24px, Semibold

Body:
- Body Large: Inter, 18-20px, Regular
- Body: Inter, 16px, Regular
- Body Small: Inter, 14px, Regular
- Caption: Inter, 12px, Regular
```

### 3단계: 컴포넌트 생성

#### 버튼 컴포넌트
1. **Primary Button**
   - 배경: Linear Gradient (primary-500 → accent-500)
   - 텍스트: White, 16px, Semibold
   - 패딩: 12px 24px
   - 둥근 모서리: 9999px (완전 둥근 버튼)

2. **Secondary Button**
   - 배경: White
   - 테두리: 2px, primary-500
   - 텍스트: primary-600, 16px, Semibold

#### 카드 컴포넌트
- 배경: White
- 그림자: 0 10px 15px rgba(0,0,0,0.1)
- 둥근 모서리: 16px
- 호버 효과: shadow-xl

### 4단계: 레이아웃 프레임 생성

#### 데스크톱 (1440px)
```
- Header: 1440x64px
- Hero Section: 1440x600px
- Content Sections: max-width 1280px, centered
- Footer: 1440x auto
```

#### 모바일 (375px)
```
- Header: 375x64px
- Hero Section: 375x500px
- Content: full width, 16px padding
```

---

## 📋 방법 3: 피그마 API 사용 (고급)

프로그래밍 방식으로 피그마 파일 생성

### 준비사항
- 피그마 Personal Access Token (이미 발급받음)
- Node.js 스크립트

### 스크립트 예시
```typescript
// figma-export.ts
import { Client } from 'figma-api';

const client = new Client({
  personalAccessToken: 'YOUR_TOKEN'
});

// 새 파일 생성
const file = await client.createFile({
  name: '마음케어 상담센터'
});

// 프레임 추가
// 색상 스타일 추가
// 컴포넌트 추가
```

**참고:** 이 방법은 고급 사용자를 위한 것으로, 복잡한 설정이 필요합니다.

---

## 🎯 권장 워크플로우

### 초기 작업
1. **html.to.design**으로 자동 변환
2. 피그마에서 레이어 정리
3. 컴포넌트화 및 스타일 정리

### 이미지 교체 시
1. 로컬에서 이미지 교체
2. 브라우저에서 확인
3. 피그마에서 해당 이미지만 수동 교체

### 디자인 수정 시
1. 피그마에서 먼저 디자인 수정
2. 코드에 반영
3. 동기화

---

## 📸 스크린샷을 피그마로 가져오기

가장 간단한 방법:

1. `.playwright-mcp/` 폴더의 스크린샷 확인:
   - `website-complete.png` (전체 페이지)
   - `website-mobile.png` (모바일 뷰)

2. 피그마에서:
   - 파일 드래그 앤 드롭
   - 또는 Ctrl+Shift+K → 이미지 배치

3. 스크린샷 위에 벡터 요소로 재작업

---

## 🔧 피그마 플러그인 추천

### 디자인 자동화
- **html.to.design**: 웹사이트 → 피그마
- **Anima**: 피그마 → 코드
- **Figma to Code**: 컴포넌트 → React

### 이미지 최적화
- **TinyImage Compressor**: 이미지 압축
- **Remove BG**: 배경 제거
- **Unsplash**: 무료 이미지 삽입

### 디자인 시스템
- **Design System Manager**: 스타일 관리
- **Token Studio**: 디자인 토큰
- **Component Replacer**: 컴포넌트 일괄 교체

---

## 📝 체크리스트

피그마 이전 후 확인사항:

- [ ] 모든 색상이 Color Styles로 정의됨
- [ ] 모든 텍스트가 Text Styles 사용
- [ ] 반복되는 요소가 Components화 됨
- [ ] 이미지가 제대로 표시됨
- [ ] 데스크톱/태블릿/모바일 버전 모두 있음
- [ ] Auto Layout 적용됨
- [ ] 페이지 구조가 명확함 (예: Home, About, Programs 등)

---

## 🆘 문제 해결

### 플러그인이 URL을 읽지 못할 때
```bash
# Vercel로 배포하고 공개 URL 사용
vercel --prod
# 생성된 URL을 플러그인에 입력
```

### 스타일이 제대로 변환되지 않을 때
- 로컬 폰트 대신 Google Fonts 사용
- 복잡한 CSS 애니메이션 제거
- 그라디언트 확인

### 이미지가 깨질 때
- 이미지 URL이 공개적으로 접근 가능한지 확인
- Unsplash 이미지는 원본 URL 사용
- 필요시 이미지를 로컬로 다운로드 후 피그마에 직접 업로드

---

## 💡 팁

### 컴포넌트 이름 규칙
```
- Components/
  - Buttons/
    - Primary
    - Secondary
  - Cards/
    - Program Card
    - Expert Card
  - Sections/
    - Hero
    - Footer
```

### Auto Layout 활용
- 헤더: Horizontal, Space Between
- 카드 그리드: Grid (4 columns)
- 폼: Vertical, Fixed spacing (16px)

### 반응형 설정
- Constraints 활용
- Min/Max width 설정
- 모바일/태블릿/데스크톱 프레임 분리

---

## 📞 추가 도움

더 자세한 피그마 이전이 필요하시면:
1. 스크린샷 기반 수동 재작업
2. 디자인 시스템 구축
3. 컴포넌트 라이브러리 생성

모두 지원 가능합니다!




