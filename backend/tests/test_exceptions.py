"""Unit test suite for application exceptions and structured error envelopes."""

import pytest
from httpx import AsyncClient
from app.core.exceptions import (
    AppException,
    EntityNotFoundException,
    PermissionDeniedException,
)
from app.schemas.common import ErrorDetail


def test_app_exception_attributes():
    """Verify base AppException property assignment."""
    detail = ErrorDetail(location="body.patient_id", message="Invalid ABHA format")
    exc = AppException(
        message="Patient record validation failure",
        error_code="PATIENT_VALIDATION_ERROR",
        status_code=422,
        details=[detail],
    )
    assert exc.message == "Patient record validation failure"
    assert exc.error_code == "PATIENT_VALIDATION_ERROR"
    assert exc.status_code == 422
    assert len(exc.details) == 1
    assert exc.details[0].location == "body.patient_id"


def test_entity_not_found_exception():
    """Verify EntityNotFoundException defaults and formatting."""
    exc = EntityNotFoundException(entity_name="Prescription", entity_id="rx-9001")
    assert exc.status_code == 404
    assert exc.error_code == "NOT_FOUND"
    assert "Prescription with identifier 'rx-9001' not found" in exc.message


def test_permission_denied_exception():
    """Verify PermissionDeniedException defaults."""
    exc = PermissionDeniedException("Doctor lacks valid consent token for patient vault")
    assert exc.status_code == 403
    assert exc.error_code == "FORBIDDEN"
    assert "Doctor lacks valid consent token" in exc.message


@pytest.mark.asyncio
async def test_not_found_error_payload_envelope(client: AsyncClient):
    """Verify standard ErrorResponse schema on non-existent endpoints."""
    res = await client.get("/api/v1/invalid-route-probe")
    assert res.status_code == 404
    body = res.json()
    assert body["success"] is False
    assert body["error_code"] == "HTTP_404"
    assert "timestamp" in body
