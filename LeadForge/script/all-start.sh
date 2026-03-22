#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
RUNTIME_DIR="$ROOT_DIR/.runtime"
PID_FILE="$RUNTIME_DIR/leadforge.pid"
LOG_FILE="$RUNTIME_DIR/leadforge.log"
PORT="${PORT:-3100}"

mkdir -p "$RUNTIME_DIR"

if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "LeadForge 개발 서버가 이미 실행 중입니다. PID=$(cat "$PID_FILE")"
else
  cd "$ROOT_DIR"
  nohup npm run dev >"$LOG_FILE" 2>&1 &
  echo $! >"$PID_FILE"
fi

echo "서버 기동 확인 중..."
for _ in {1..20}; do
  if curl -fsS "http://127.0.0.1:$PORT" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

echo ""
echo "LeadForge 실행 정보"
echo "- 접속 URL: http://127.0.0.1:$PORT"
echo "- 블로그 URL: http://127.0.0.1:$PORT/blog"
echo "- 문의 테스트: 메인 페이지 하단 문의 폼 제출"
echo "- 저장 파일: $ROOT_DIR/data/leads.json"
echo "- 데모 계정: 없음 (비회원 문의 테스트 방식)"
