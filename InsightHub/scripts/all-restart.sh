#!/bin/bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

"$PROJECT_ROOT/scripts/all-stop.sh" || true
"$PROJECT_ROOT/scripts/all-start.sh"
