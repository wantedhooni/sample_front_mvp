#!/bin/bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PID_FILE="$PROJECT_ROOT/.run/next-dev.pid"

if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  kill "$(cat "$PID_FILE")"
  rm "$PID_FILE"
  echo "InsightHub 개발 서버를 종료했습니다."
else
  echo "실행 중인 InsightHub 개발 서버를 찾지 못했습니다."
fi
