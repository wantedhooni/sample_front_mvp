# sample_front_mvp

고객용 MVP 프론트엔드를 빠르게 시작하기 위한 Next.js 기반 프로젝트다.  
App Router, React, Tailwind CSS, TypeScript를 사용하며 데모 가능한 메인 화면과 공통 실행 스크립트를 포함한다.

## 기술 스택

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- ESLint

## 실행 방법

```bash
npm install
npm run dev
```

브라우저 접속 주소는 `http://localhost:3000` 이다.

## 공통 스크립트

프로젝트 루트의 `scripts` 폴더에 전체 실행용 스크립트를 제공한다.

- `./scripts/all-start.sh`: 개발 서버 실행
- `./scripts/all-stop.sh`: 개발 서버 종료
- `./scripts/all-restart.sh`: 개발 서버 재시작

`all-start.sh`, `all-restart.sh` 실행 후 아래 정보를 출력한다.

- 접속 URL: `http://localhost:3000`
- 데모 계정: 없음

## 품질 검증

아래 명령으로 기본 검증을 수행한다.

```bash
npm run lint
npm run typecheck
npm run build
```

## 현재 포함 내용

- 고객용 랜딩형 메인 페이지
- 정적 데이터 기반 홈 화면 서비스 모듈
- 반응형 레이아웃과 기본 SEO 메타데이터
- 프로젝트 공통 실행 스크립트
