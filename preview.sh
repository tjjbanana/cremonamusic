#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"
HOST="127.0.0.1"

printf 'Preview URL: http://%s:%s/index.html\n' "$HOST" "$PORT"
printf 'Press Ctrl+C to stop the server.\n'

exec python -m http.server "$PORT" --bind "$HOST"
