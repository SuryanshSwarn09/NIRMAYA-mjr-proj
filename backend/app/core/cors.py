"""CORS resolution and enterprise security headers configuration."""

from typing import List, Dict
from app.core.config import settings


def get_allowed_origins() -> List[str]:
    """Retrieve normalized list of permitted CORS origins.

    Includes configured origins and ensures no trailing slashes.
    """
    origins = set()
    for origin in settings.BACKEND_CORS_ORIGINS:
        cleaned = origin.strip().rstrip("/")
        if cleaned:
            origins.add(cleaned)
    return sorted(list(origins))


def get_security_headers() -> Dict[str, str]:
    """Provide standard security headers for healthcare information compliance."""
    return {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(), camera=(), microphone=()",
        "X-Permitted-Cross-Domain-Policies": "none",
    }
