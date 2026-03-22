# LeadForge

LeadForge는 브랜드 홈페이지와 문의 리드 수집 흐름을 한 번에 시연할 수 있는 SaaS MVP입니다.  
랜딩, 기능 소개, 가격 정책, 문의 폼, 블로그를 포함하며 문의 데이터는 로컬 JSON 파일에 저장됩니다.

## 기술 스택

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

## 주요 화면

- 메인 랜딩 페이지
- 기능 소개 섹션
- 가격 정책 섹션
- 문의 리드 수집 폼
- 블로그 목록 페이지
- 블로그 상세 페이지

## 실행 방법

### 1. 일반 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://127.0.0.1:3100`으로 접속합니다.

### 2. 스크립트 실행

```bash
./script/all-start.sh
./script/all-stop.sh
./script/all-restart.sh
```

`all-start.sh`, `all-restart.sh` 실행 시 아래 정보를 함께 출력합니다.

- 접속 URL
- 블로그 URL
- 문의 테스트 방법
- 리드 저장 파일 위치
- 데모 계정 정보

## 문의 데이터 저장

- 저장 파일: `data/leads.json`
- 문의 폼 제출 시 로컬 파일에 최신 순으로 저장됩니다.

## 검증 명령

```bash
npm run lint
npm run build
```

## 프로젝트 구조

```text
src/
  app/
    api/leads/route.ts
    blog/
  components/
  data/
  services/
  types/
script/
data/leads.json
```

## 참고

- 인증 기능은 포함하지 않았습니다.
- 데모 계정 없이 비회원 문의 테스트 방식으로 확인할 수 있습니다.
