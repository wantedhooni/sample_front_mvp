#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PID_FILE="$PROJECT_ROOT/.digitalshelf-dev.pid"
LOG_FILE="$PROJECT_ROOT/.digitalshelf-dev.log"

if [[ -f "$PID_FILE" ]]; then
  EXISTING_PID="$(cat "$PID_FILE")"
  if kill -0 "$EXISTING_PID" >/dev/null 2>&1; then
    echo "DigitalShelf 개발 서버가 이미 실행 중입니다. PID: $EXISTING_PID"
    echo "URL: http://localhost:3000"
    exit 0
  fi
fi

cd "$PROJECT_ROOT"
nohup npm run dev >"$LOG_FILE" 2>&1 &
SERVER_PID=$!
echo "$SERVER_PID" >"$PID_FILE"

sleep 3

echo "DigitalShelf 개발 서버를 시작했습니다."
echo "PID: $SERVER_PID"
echo "URL: http://localhost:3000"
echo "데모 계정 이메일: demo@digitalshelf.local"
echo "데모 팀명: DigitalShelf Labs"
echo "로그 파일: $LOG_FILE"
