# DigitalShelf

DigitalShelf는 디지털 상품 스토어 데모를 위한 Next.js 기반 프론트 MVP입니다. 홈, 상품 목록, 상품 상세, 장바구니, 체크아웃까지 고객 프론트의 핵심 구매 흐름을 한 번에 시연할 수 있도록 구성했습니다.

## 기술 스택
- Next.js 16
- React 19
- Tailwind CSS 4

## 주요 화면
- 홈: 대표 상품과 큐레이션 구조를 보여주는 랜딩
- 상품 목록: 카테고리 필터와 가격 비교가 가능한 카탈로그
- 상품 상세: 상품 설명, 포함 항목, 포맷, 연관 상품 노출
- 장바구니: 수량 조절과 총액 확인
- 체크아웃: 입력 검증과 주문 완료 메시지를 포함한 데모 결제

## 실행 방법
```bash
cd /Users/revy/workspace_revy/sample_front_mvp/DigitalShelf
npm install
bash script/all-start.sh
```

개발 서버 기본 주소는 [http://localhost:3000](http://localhost:3000) 입니다.

## 스크립트
- `bash script/all-start.sh`: 개발 서버 시작
- `bash script/all-stop.sh`: 개발 서버 중지
- `bash script/all-restart.sh`: 개발 서버 재시작

실행 후 출력되는 정보:
- URL: `http://localhost:3000`
- 데모 계정 이메일: `demo@digitalshelf.local`
- 데모 팀명: `DigitalShelf Labs`

## 데모 안내
- 상품 카드의 `담기` 버튼으로 장바구니에 추가할 수 있습니다.
- 장바구니에서 수량을 조절한 뒤 체크아웃으로 이동할 수 있습니다.
- 체크아웃 화면은 기본 데모 계정 정보가 자동 입력되어 있습니다.
- 결제 완료 후 주문 번호와 안내 메시지가 표시되고 상품 목록으로 이동합니다.

## 개발 메모
- 장바구니 상태는 브라우저 `localStorage`에 저장됩니다.
- 상품 데이터는 정적 목업 데이터로 구성되어 있어 데모 용도에 적합합니다.
- 서비스 계층은 `src/services`에 분리해 두었습니다.
