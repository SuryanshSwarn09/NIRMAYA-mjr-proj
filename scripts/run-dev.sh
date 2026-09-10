#!/usr/bin/env bash
# ==============================================================================
# NIRMAYA Local Monorepo Development Launcher (POSIX Bash)
# Launches FastAPI Backend (:8000) and Next.js Frontend (:3000) concurrently
# ==============================================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

echo ""
echo "================================================================"
echo "         NIRMAYA Healthcare Interoperability Network            "
echo "                  Local Development Launcher                    "
echo "================================================================"
echo ""

# 1. Run Pre-flight Health Check
echo "[1/3] Running pre-flight system diagnostics..."
python3 "$ROOT_DIR/scripts/doctor.py"

# 2. Display System Dashboard
echo ""
echo "[2/3] Services Overview:"
echo "  -> Frontend Portal:  http://localhost:3000"
echo "  -> FastAPI Core API: http://localhost:8000"
echo "  -> OpenAPI Swagger:  http://localhost:8000/docs"
echo "  -> GitBook Docs:     ./docs/SUMMARY.md"
echo ""

# 3. Launch Backend in background with trap
echo "[3/3] Launching FastAPI backend server..."
cd "$ROOT_DIR/backend"
if [ -d ".venv" ]; then
    source .venv/bin/activate || source .venv/Scripts/activate
fi
uvicorn app.main:app --reload --port 8000 &
BACKEND_PID=$!

cleanup() {
    echo ""
    echo "Stopping NIRMAYA development processes..."
    kill $BACKEND_PID 2>/dev/null || true
    exit 0
}

trap cleanup SIGINT SIGTERM EXIT

# 4. Launch Frontend in foreground
echo "Starting Next.js 15 App Router in current shell..."
cd "$ROOT_DIR/frontend"
npm run dev
