# Vercel 배포 가이드

## 🚀 자동 배포

GitHub에 푸시하면 Vercel이 자동으로 배포를 시작합니다.
- 배포 상태: https://vercel.com/dashboard (로그인 필요)

---

## ⚙️ 환경변수 설정 (필수!)

카카오톡 채팅 기능이 정상 작동하려면 Vercel에 환경변수를 설정해야 합니다.

### 1. Vercel 대시보드 접속
1. https://vercel.com 로그인
2. 프로젝트 선택

### 2. 환경변수 추가
1. **Settings** 탭 클릭
2. **Environment Variables** 메뉴 선택
3. 아래 환경변수 추가:

```
Name: NEXT_PUBLIC_KAKAO_CHANNEL_URL
Value: http://pf.kakao.com/_당신의채널ID/chat
```

**예시:**
```
Name: NEXT_PUBLIC_KAKAO_CHANNEL_URL
Value: http://pf.kakao.com/_xjAxexj/chat
```

### 3. 환경 선택
- **Production** ✅ (체크)
- **Preview** ✅ (체크)
- **Development** ✅ (체크)

### 4. 저장
**Save** 버튼 클릭

---

## 🔄 재배포

환경변수를 추가한 후:

### 방법 1: 자동 재배포
1. **Deployments** 탭 클릭
2. 최신 배포 옆의 **⋯** (점 3개) 클릭
3. **Redeploy** 선택

### 방법 2: 수동 푸시
```bash
git commit --allow-empty -m "chore: trigger redeploy"
git push origin main
```

---

## ✅ 배포 확인

### 1. 빌드 성공 확인
- Vercel 대시보드에서 **Building...** → **Ready** 상태 확인
- 에러가 있다면 로그 확인

### 2. 사이트 접속
- 배포 URL 클릭 (예: https://your-project.vercel.app)

### 3. 카카오톡 버튼 테스트
- 우측 하단 카카오톡 버튼 클릭
- 채팅창이 정상적으로 열리는지 확인

---

## 🐛 문제 해결

### 빌드 에러 발생 시

#### 1. 로그 확인
- Vercel 대시보드 > Deployments > 실패한 배포 클릭
- **Build Logs** 확인

#### 2. 로컬에서 빌드 테스트
```bash
npm run build
```

#### 3. 일반적인 에러 해결

**TypeScript 에러:**
```bash
# 타입 체크
npm run type-check
```

**Lint 에러:**
```bash
# 린트 체크
npm run lint

# 자동 수정
npm run lint -- --fix
```

**의존성 문제:**
```bash
# node_modules 재설치
rm -rf node_modules
npm install
```

### 환경변수가 작동하지 않을 때

1. **환경변수 이름 확인**
   - `NEXT_PUBLIC_` 접두사 필수
   - 대소문자 정확히 입력

2. **재배포 확인**
   - 환경변수 추가 후 반드시 재배포 필요

3. **브라우저 캐시 삭제**
   - Ctrl + Shift + R (강력 새로고침)

### 카카오톡 버튼이 작동하지 않을 때

1. **환경변수 확인**
   ```bash
   # 로컬 개발 서버에서 확인
   console.log(process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL)
   ```

2. **채널 URL 형식 확인**
   - 올바른 형식: `http://pf.kakao.com/_채널ID/chat`
   - `/chat` 포함 여부 확인

3. **채널 ID 확인**
   - 카카오톡 채널 관리자 센터에서 재확인

---

## 📊 배포 상태 확인

### Vercel 대시보드
- 빌드 시간
- 배포 URL
- 빌드 로그
- 트래픽 통계

### GitHub 저장소
- Actions 탭에서 자동 배포 상태 확인
- Commit 옆 체크마크(✅) 또는 X(❌) 표시

---

## 🔐 보안 체크리스트

- [ ] `.env.local` 파일이 `.gitignore`에 포함되어 있는지 확인
- [ ] 환경변수가 GitHub에 업로드되지 않았는지 확인
- [ ] Vercel 환경변수가 올바르게 설정되었는지 확인
- [ ] API 키나 비밀 정보가 코드에 하드코딩되지 않았는지 확인

---

## 🎯 배포 후 테스트 체크리스트

- [ ] 홈페이지 로딩
- [ ] 모든 페이지 네비게이션
- [ ] 카카오톡 버튼 클릭
- [ ] 온라인 신청 폼 작동
- [ ] 공지사항/FAQ 페이지
- [ ] 자가진단 테스트
- [ ] 모바일 반응형 확인

---

## 💡 유용한 명령어

```bash
# 로컬 빌드 테스트
npm run build

# 빌드 결과물 로컬 실행
npm run start

# 타입 체크
npm run type-check

# 린트 체크
npm run lint

# 개발 서버 실행
npm run dev
```

---

## 📞 추가 도움

- [Vercel 문서](https://vercel.com/docs)
- [Next.js 배포 가이드](https://nextjs.org/docs/deployment)
- [Vercel 환경변수 가이드](https://vercel.com/docs/projects/environment-variables)

