"""Custom ASGI middleware for performance telemetry and security headers."""

import time
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from app.core.cors import get_security_headers


class PerformanceTelemetryMiddleware(BaseHTTPMiddleware):
    """Calculates sub-millisecond execution time and appends diagnostic telemetry."""

    async def dispatch(self, request: Request, call_next) -> Response:
        start_time = time.perf_counter()
        response: Response = await call_next(request)
        process_time_ms = (time.perf_counter() - start_time) * 1000.0

        # Inject execution benchmark header
        response.headers["X-Process-Time"] = f"{process_time_ms:.2f}ms"

        # Inject standard security headers
        for header, value in get_security_headers().items():
            response.headers[header] = value

        return response
