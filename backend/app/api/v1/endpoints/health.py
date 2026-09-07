from fastapi import APIRouter
from datetime import datetime, timezone
from app.core.config import settings

router = APIRouter()


@router.get("/health", tags=["Health"])
async def health_check():
    """System health check endpoint verifying API service availability."""
    return {
        "status": "healthy",
        "project": settings.PROJECT_NAME,
        "full_name": settings.PROJECT_FULL_NAME,
        "version": settings.VERSION,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "standards": ["HL7 FHIR R4", "ABDM Simulated"],
    }
