#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
RUNTIME_DIR="$ROOT_DIR/.runtime"
PID_FILE="$RUNTIME_DIR/leadforge.pid"

if [[ ! -f "$PID_FILE" ]]; then
  echo "실행 중인 LeadForge PID 파일이 없습니다."
  exit 0
fi

PID="$(cat "$PID_FILE")"

if kill -0 "$PID" 2>/dev/null; then
  kill "$PID"
  echo "LeadForge 개발 서버를 종료했습니다. PID=$PID"
else
  echo "PID 파일은 있으나 프로세스가 이미 종료되어 있습니다. PID=$PID"
fi

rm -f "$PID_FILE"
