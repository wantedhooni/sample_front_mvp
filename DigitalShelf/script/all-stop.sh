#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PID_FILE="$PROJECT_ROOT/.digitalshelf-dev.pid"

if [[ ! -f "$PID_FILE" ]]; then
  echo "실행 중인 DigitalShelf 개발 서버 PID 파일이 없습니다."
  exit 0
fi

SERVER_PID="$(cat "$PID_FILE")"

if kill -0 "$SERVER_PID" >/dev/null 2>&1; then
  kill "$SERVER_PID"
  echo "DigitalShelf 개발 서버를 중지했습니다. PID: $SERVER_PID"
else
  echo "이미 종료된 PID입니다: $SERVER_PID"
fi

rm -f "$PID_FILE"
