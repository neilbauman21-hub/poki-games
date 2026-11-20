#!/bin/sh
set -eu
cd "$(dirname "$0")"
PORT="${PORT:-8765}"
python3 -m http.server "$PORT" --bind 127.0.0.1 >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT INT TERM
sleep 1
if ! kill -0 "$SERVER_PID" 2>/dev/null; then
  echo "Could not start the local server on port $PORT." >&2
  exit 1
fi
open "http://127.0.0.1:$PORT/index.html"
wait "$SERVER_PID"
