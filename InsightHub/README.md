# InsightHub

InsightHub는 검색 유입, 콘텐츠 탐색, 북마크, 유료 전환 흐름을 한 번에 시연할 수 있도록 만든 구독형 리서치/뉴스 서비스 프론트 MVP입니다.

## 기술 스택
- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

## 구현 화면
- 랜딩 페이지: 서비스 가치 제안, 전환 퍼널, 추천 아티클, 구독 유도
- 카테고리 페이지: 주제별 아카이브와 탐색 구조
- 아티클 상세 페이지: 핵심 인사이트, 본문, 프리미엄 전환 CTA
- 북마크 페이지: 저장된 아티클 목록과 재방문 유도 구조
- 구독 페이지: 플랜 비교와 결제 전환 영역

## 실행 방법
```bash
npm install
bash scripts/all-start.sh
```

개발 서버 종료:

```bash
bash scripts/all-stop.sh
```

개발 서버 재시작:

```bash
bash scripts/all-restart.sh
```

## 접속 정보
- URL: http://localhost:3100
- 데모 계정: `demo@insighthub.local`
- 데모 비밀번호: `Passw0rd!`

## 주요 구조
- `src/app`: App Router 페이지
- `src/components`: 공통 UI 컴포넌트
- `src/services`: 콘텐츠/플랜 조회 서비스
- `src/types`: 도메인 타입 정의
- `scripts`: 프로젝트 실행/중지/재시작 스크립트

## 검증 명령
```bash
npm run lint
npm run build
```
