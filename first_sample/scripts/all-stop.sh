#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PID_FILE="$PROJECT_ROOT/.next/dev.pid"

if [[ ! -f "$PID_FILE" ]]; then
  echo "중지할 개발 서버 PID 파일이 없습니다."
  exit 0
fi

TARGET_PID="$(cat "$PID_FILE")"

if kill -0 "$TARGET_PID" >/dev/null 2>&1; then
  kill "$TARGET_PID"
  echo "개발 서버를 종료했습니다. PID: $TARGET_PID"
else
  echo "이미 종료된 PID입니다. PID: $TARGET_PID"
fi

rm -f "$PID_FILE"
