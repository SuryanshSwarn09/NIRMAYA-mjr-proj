# ==============================================================================
# NIRMAYA Local Monorepo Development Launcher (Windows PowerShell)
# Launches FastAPI Backend (:8000) and Next.js Frontend (:3000) concurrently
# ==============================================================================

$RootPath = Split-Path -Parent $PSScriptRoot
Set-Location $RootPath

Write-Host ""
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "         NIRMAYA Healthcare Interoperability Network            " -ForegroundColor Cyan
Write-Host "                  Local Development Launcher                    " -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Run Pre-flight Health Check
Write-Host "[1/3] Running pre-flight system diagnostics..." -ForegroundColor Yellow
& "$RootPath\backend\.venv\Scripts\python.exe" "$RootPath\scripts\doctor.py"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Pre-flight checks failed. Please resolve above issues." -ForegroundColor Red
    exit 1
}

# 2. Display System Dashboard
Write-Host ""
Write-Host "[2/3] Preparing services..." -ForegroundColor Yellow
Write-Host "  -> Frontend Portal:  http://localhost:3000" -ForegroundColor Green
Write-Host "  -> FastAPI Core API: http://localhost:8000" -ForegroundColor Green
Write-Host "  -> OpenAPI Swagger:  http://localhost:8000/docs" -ForegroundColor Green
Write-Host "  -> GitBook Docs:     ./docs/SUMMARY.md" -ForegroundColor Green
Write-Host ""

# 3. Launch Backend in new window/job
Write-Host "[3/3] Launching background services..." -ForegroundColor Yellow

$BackendCmd = "Set-Location '$RootPath\backend'; & '.\.venv\Scripts\python.exe' -m uvicorn app.main:app --reload --port 8000"
Start-Process powershell -ArgumentList "-NoExit", "-Command", $BackendCmd -Title "NIRMAYA FastAPI Backend (:8000)"

# 4. Launch Frontend in foreground
Write-Host "Starting Next.js 15 App Router in current shell..." -ForegroundColor Cyan
Set-Location "$RootPath\frontend"
npm run dev
