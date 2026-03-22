#!/usr/bin/env bash

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

"$PROJECT_ROOT/scripts/all-stop.sh"
"$PROJECT_ROOT/scripts/all-start.sh"
