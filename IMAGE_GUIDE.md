# 🖼️ 이미지 교체 완벽 가이드

이 문서는 웹사이트의 모든 이미지를 교체하는 방법을 단계별로 안내합니다.

## 📋 목차

1. [준비하기](#준비하기)
2. [이미지 목록](#이미지-목록)
3. [교체 방법](#교체-방법)
4. [주의사항](#주의사항)

---

## 준비하기

### 1. 폴더 구조 생성

프로젝트 루트에서 다음 폴더들을 생성하세요:

```bash
public/
  images/
    logo/
    programs/
    experts/
    hero/
```

### 2. 이미지 파일명 규칙

- 소문자 사용
- 공백 대신 하이픈(-) 사용
- 예: `individual-counseling.jpg`, `expert-kim.jpg`

---

## 이미지 목록

### 🎯 로고 이미지 (2개)

#### 1. 메인 로고
- **파일명**: `logo-main.png`
- **위치**: `public/images/logo/logo-main.png`
- **사양**: 200x200px, PNG, 투명 배경
- **사용처**:
  - `components/Header.tsx` (23-26줄)
  - `components/Footer.tsx` (10-17줄)

**교체 방법**:
```typescript
// components/Header.tsx (23-26줄)
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-xl">MC</span>
</div>

// ↓ 이렇게 변경

<Image 
  src="/images/logo/logo-main.png" 
  alt="마음케어 로고"
  width={40}
  height={40}
/>
```

---

### 🎨 프로그램 이미지 (6개)

모든 이미지: **800x600px, JPG/PNG**

#### 1. 개인 심리상담
- **파일명**: `individual-counseling.jpg`
- **위치**: `public/images/programs/individual-counseling.jpg`
- **컴포넌트**: `components/ProgramSection.tsx` (16줄)

#### 2. 커플 상담
- **파일명**: `couple-counseling.jpg`
- **위치**: `public/images/programs/couple-counseling.jpg`
- **컴포넌트**: `components/ProgramSection.tsx` (23줄)

#### 3. 직장인 상담
- **파일명**: `workplace-counseling.jpg`
- **위치**: `public/images/programs/workplace-counseling.jpg`
- **컴포넌트**: `components/ProgramSection.tsx` (30줄)

#### 4. 온라인 상담
- **파일명**: `online-counseling.jpg`
- **위치**: `public/images/programs/online-counseling.jpg`
- **컴포넌트**: `components/ProgramSection.tsx` (37줄)

#### 5. 심리검사
- **파일명**: `psychological-test.jpg`
- **위치**: `public/images/programs/psychological-test.jpg`
- **컴포넌트**: `components/ProgramSection.tsx` (44줄)

#### 6. 진로 상담
- **파일명**: `career-counseling.jpg`
- **위치**: `public/images/programs/career-counseling.jpg`
- **컴포넌트**: `components/ProgramSection.tsx` (51줄)

**일괄 교체 방법**:

`components/ProgramSection.tsx` 파일에서:

```typescript
// 현재 (9-62줄)
const programs = [
  {
    id: 1,
    title: "개인 심리상담",
    image: "https://images.unsplash.com/photo-573...",
  },
  // ...
];

// ↓ 이렇게 변경

const programs = [
  {
    id: 1,
    title: "개인 심리상담",
    image: "/images/programs/individual-counseling.jpg",
  },
  {
    id: 2,
    title: "커플 상담",
    image: "/images/programs/couple-counseling.jpg",
  },
  {
    id: 3,
    title: "직장인 상담",
    image: "/images/programs/workplace-counseling.jpg",
  },
  {
    id: 4,
    title: "온라인 상담",
    image: "/images/programs/online-counseling.jpg",
  },
  {
    id: 5,
    title: "심리검사",
    image: "/images/programs/psychological-test.jpg",
  },
  {
    id: 6,
    title: "진로 상담",
    image: "/images/programs/career-counseling.jpg",
  },
];
```

---

### 👨‍⚕️ 전문가 이미지 (4개)

모든 이미지: **600x600px (정사각형), JPG/PNG**

#### 1. 김하늘 상담사
- **파일명**: `expert-kim.jpg`
- **위치**: `public/images/experts/expert-kim.jpg`
- **컴포넌트**: `components/ExpertSection.tsx` (12줄)

#### 2. 이민준 상담사
- **파일명**: `expert-lee.jpg`
- **위치**: `public/images/experts/expert-lee.jpg`
- **컴포넌트**: `components/ExpertSection.tsx` (19줄)

#### 3. 박서연 상담사
- **파일명**: `expert-park.jpg`
- **위치**: `public/images/experts/expert-park.jpg`
- **컴포넌트**: `components/ExpertSection.tsx` (26줄)

#### 4. 최지우 상담사
- **파일명**: `expert-choi.jpg`
- **위치**: `public/images/experts/expert-choi.jpg`
- **컴포넌트**: `components/ExpertSection.tsx` (33줄)

**일괄 교체 방법**:

`components/ExpertSection.tsx` 파일에서:

```typescript
// 현재 (6-35줄)
const experts = [
  {
    id: 1,
    name: "김하늘 상담사",
    image: "https://images.unsplash.com/photo-...",
  },
  // ...
];

// ↓ 이렇게 변경

const experts = [
  {
    id: 1,
    name: "김하늘 상담사",
    image: "/images/experts/expert-kim.jpg",
  },
  {
    id: 2,
    name: "이민준 상담사",
    image: "/images/experts/expert-lee.jpg",
  },
  {
    id: 3,
    name: "박서연 상담사",
    image: "/images/experts/expert-park.jpg",
  },
  {
    id: 4,
    name: "최지우 상담사",
    image: "/images/experts/expert-choi.jpg",
  },
];
```

---

## 교체 방법

### 방법 1: 파일 찾기 및 바꾸기 (권장)

VS Code 또는 Cursor에서:

1. **Ctrl + Shift + F** (Windows) 또는 **Cmd + Shift + F** (Mac)
2. 검색: `https://images.unsplash.com`
3. 모든 결과 확인
4. 각 파일에서 해당 URL을 `/images/...` 경로로 교체

### 방법 2: 한 파일씩 수정

#### Header.tsx
```typescript
// 22-26줄 교체
import Image from "next/image";

<Image 
  src="/images/logo/logo-main.png" 
  alt="마음케어 로고"
  width={40}
  height={40}
  className="rounded-lg"
/>
```

#### ProgramSection.tsx
```typescript
// 9-62줄: programs 배열의 모든 image 속성 교체
image: "/images/programs/[파일명].jpg"
```

#### ExpertSection.tsx
```typescript
// 6-35줄: experts 배열의 모든 image 속성 교체
image: "/images/experts/[파일명].jpg"
```

---

## 주의사항

### ⚠️ Next.js Image 최적화

`next.config.ts`에서 외부 이미지 도메인 설정 제거:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    // 로컬 이미지만 사용하므로 이 설정은 필요 없음
  },
};
```

### ✅ 이미지 최적화 팁

1. **압축**: TinyPNG, Squoosh 등으로 이미지 용량 줄이기
2. **포맷**: 사진은 JPG, 로고/아이콘은 PNG 사용
3. **WebP**: 더 나은 압축률을 위해 WebP 포맷 사용 고려

### 🔍 확인 사항

이미지 교체 후 다음을 확인하세요:

```bash
# 개발 서버 재시작
npm run dev

# 브라우저에서 확인
http://localhost:3000

# 빌드 테스트
npm run build
```

### 📱 반응형 확인

모든 화면 크기에서 이미지가 잘 보이는지 확인:

- 모바일: 375px
- 태블릿: 768px
- 데스크톱: 1440px

---

## 빠른 체크리스트

교체 완료 후 확인:

- [ ] 로고 이미지 (헤더)
- [ ] 로고 이미지 (푸터)
- [ ] 프로그램 이미지 6개
- [ ] 전문가 이미지 4개
- [ ] 모든 이미지가 public/images/ 폴더에 있음
- [ ] 파일명이 코드와 일치
- [ ] 개발 서버에서 정상 표시
- [ ] 빌드 성공
- [ ] 모든 화면 크기에서 확인

---

## 추가 지원이 필요하신가요?

이미지 교체 중 문제가 발생하면:

1. 파일 경로 확인
2. 파일명 확인 (대소문자 구분)
3. 이미지 파일 확장자 확인
4. 브라우저 콘솔에서 오류 메시지 확인

모든 것이 정상인데도 이미지가 안 보인다면:
```bash
# 캐시 삭제
rm -rf .next
# 재시작
npm run dev
```




