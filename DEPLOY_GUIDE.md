# 🚀 Vercel 배포 가이드

피그마 플러그인이 웹사이트에 접근하려면 공개 URL이 필요합니다.

## Vercel로 무료 배포하기

### 1단계: Vercel CLI 설치
```bash
npm install -g vercel
```

### 2단계: 배포
```bash
vercel
```

프롬프트에서:
- Set up and deploy? → **Y**
- Which scope? → 본인 계정 선택
- Link to existing project? → **N**
- Project name? → **Enter** (기본값 사용)
- Directory? → **Enter** (현재 디렉토리)
- Override settings? → **N**

### 3단계: 배포 완료
몇 초 후 배포 URL이 생성됩니다:
```
✅ Production: https://onsoom-xxxx.vercel.app
```

이 URL을 복사하세요!

---

## 피그마로 가져가기

### 1단계: 피그마에서 플러그인 설치
1. **Figma 실행**
2. **Plugins** 메뉴 → **Browse plugins in Community**
3. **"html.to.design"** 검색 및 설치

### 2단계: 변환
1. 피그마에서 **새 파일 생성**
2. **Plugins** → **html.to.design** 실행
3. **배포된 URL 입력**: `https://onsoom-xxxx.vercel.app`
4. **Import** 클릭
5. **자동 변환 완료!** 🎉

---

## 대안: 로컬 터널링 (고급)

ngrok 등으로 로컬 서버를 임시로 공개할 수도 있습니다:

```bash
# ngrok 설치
npm install -g ngrok

# 터널 생성
ngrok http 3001
```

생성된 공개 URL을 플러그인에 입력하면 됩니다.



