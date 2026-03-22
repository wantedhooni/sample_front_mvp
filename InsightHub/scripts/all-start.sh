#!/bin/bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PID_FILE="$PROJECT_ROOT/.run/next-dev.pid"
LOG_FILE="$PROJECT_ROOT/.run/next-dev.log"
APP_URL="http://localhost:3100"
NEXT_BIN="$PROJECT_ROOT/node_modules/.bin/next"

mkdir -p "$PROJECT_ROOT/.run"

if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "InsightHub 개발 서버가 이미 실행 중입니다. PID: $(cat "$PID_FILE")"
else
  cd "$PROJECT_ROOT"

  if [ ! -x "$NEXT_BIN" ]; then
    echo "Next.js 실행 파일을 찾지 못했습니다. 먼저 npm install 을 실행하세요."
    exit 1
  fi

  nohup "$NEXT_BIN" dev --hostname 0.0.0.0 --port 3100 >"$LOG_FILE" 2>&1 < /dev/null &
  echo $! >"$PID_FILE"

  for _ in $(seq 1 10); do
    if kill -0 "$(cat "$PID_FILE")" 2>/dev/null && curl -s "$APP_URL" >/dev/null 2>&1; then
      break
    fi
    sleep 1
  done

  if ! kill -0 "$(cat "$PID_FILE")" 2>/dev/null || ! curl -s "$APP_URL" >/dev/null 2>&1; then
    echo "InsightHub 개발 서버 시작에 실패했습니다."
    echo "로그 파일: $LOG_FILE"
    exit 1
  fi
fi

echo "InsightHub 실행 정보"
echo "URL: $APP_URL"
echo "데모 계정: demo@insighthub.local / Passw0rd!"
echo "로그 파일: $LOG_FILE"
