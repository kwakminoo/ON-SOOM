# Vercel 배포 가이드

## 🚀 자동 배포

GitHub에 푸시하면 Vercel이 자동으로 배포를 시작합니다.
- 배포 상태: https://vercel.com/dashboard (로그인 필요)

---

## 📋 빠른 참조: 필수 환경변수 목록

Vercel에 추가해야 하는 환경변수:

| 환경변수 이름 | 설명 | 필수 여부 |
|------------|------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL | ✅ 필수 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon public 키 | ✅ 필수 |
| `NEXT_PUBLIC_KAKAO_CHANNEL_URL` | 카카오톡 채널 URL | ⚪ 선택 |

**설정 위치:**
- Vercel 대시보드 > 프로젝트 > Settings > Environment Variables

---

## ⚙️ 환경변수 설정 (필수!)

웹사이트가 정상 작동하려면 Vercel에 환경변수를 설정해야 합니다.

### 1. Vercel 대시보드 접속
1. https://vercel.com 로그인
2. 프로젝트 선택

### 2. 환경변수 추가
1. **Settings** 탭 클릭
2. **Environment Variables** 메뉴 선택
3. 아래 환경변수들을 하나씩 추가:

#### 📌 Supabase 환경변수 (필수)

**환경변수 1:**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://your-project-id.supabase.co
```

**환경변수 2:**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Supabase 키 확인 방법:**
1. [Supabase 대시보드](https://app.supabase.com/) 접속
2. 프로젝트 선택
3. 좌측 메뉴 **Settings** (⚙️) 클릭
4. **API** 메뉴 클릭
5. **Project URL**과 **anon public** 키 복사

**예시:**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://abcdefghijklmnop.supabase.co

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### 📌 카카오톡 채널 환경변수 (선택사항)

**환경변수 3:**
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
각 환경변수 추가 시:
- **Production** ✅ (체크) - 실제 운영 환경
- **Preview** ✅ (체크) - PR 미리보기 환경
- **Development** ✅ (체크) - 개발 환경

### 4. 저장
각 환경변수마다 **Save** 버튼 클릭

### 5. 환경변수 확인
추가한 환경변수 목록:
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ✅ `NEXT_PUBLIC_KAKAO_CHANNEL_URL` (선택사항)

---

## 🔧 Vercel CLI로 환경변수 추가 (대안 방법)

터미널에서 직접 환경변수를 추가할 수도 있습니다:

### 1. Vercel CLI 설치
```bash
npm i -g vercel
```

### 2. 로그인
```bash
vercel login
```

### 3. 프로젝트 연결
```bash
vercel link
```

### 4. 환경변수 추가
```bash
# Supabase URL
vercel env add NEXT_PUBLIC_SUPABASE_URL production preview development

# Supabase Anon Key
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production preview development

# 카카오톡 채널 URL (선택사항)
vercel env add NEXT_PUBLIC_KAKAO_CHANNEL_URL production preview development
```

각 명령어 실행 시 값 입력을 요청합니다.

### 5. 환경변수 확인
```bash
vercel env ls
```

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
   - `NEXT_PUBLIC_` 접두사 필수 (클라이언트에서 사용하는 변수)
   - 대소문자 정확히 입력
   - 공백이나 특수문자 없이 입력

2. **재배포 확인**
   - 환경변수 추가 후 반드시 재배포 필요
   - Vercel 대시보드에서 **Redeploy** 클릭

3. **브라우저 캐시 삭제**
   - Ctrl + Shift + R (강력 새로고침)
   - 또는 시크릿 모드에서 테스트

4. **환경변수 값 확인**
   - Vercel 대시보드 > Settings > Environment Variables
   - 값이 올바르게 입력되었는지 확인
   - 따옴표나 공백이 포함되지 않았는지 확인

### Supabase 연결 오류 발생 시

1. **환경변수 확인**
   ```bash
   # Vercel 대시보드에서 확인
   # 또는 배포 로그에서 확인
   ```

2. **Supabase 프로젝트 상태 확인**
   - Supabase 대시보드에서 프로젝트가 활성화되어 있는지 확인
   - API 키가 만료되지 않았는지 확인

3. **테이블 존재 확인**
   - Supabase 대시보드 > Table Editor
   - `posts`, `users` 등 필요한 테이블이 생성되었는지 확인
   - `sql-scripts/current.sql` 실행 여부 확인

4. **RLS (Row Level Security) 정책 확인**
   - Supabase 대시보드 > Authentication > Policies
   - 개발 단계에서는 RLS를 비활성화하거나 모든 사용자에게 권한 부여

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

