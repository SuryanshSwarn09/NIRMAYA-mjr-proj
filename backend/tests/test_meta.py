"""Unit test suite for /api/v1/meta capabilities discovery endpoint."""

import pytest
from httpx import AsyncClient


@pytest.mark.asyncio
async def test_meta_capabilities_endpoint(client: AsyncClient):
    """Verify FHIR capability statement and ABDM milestone metadata."""
    res = await client.get("/api/v1/meta")
    assert res.status_code == 200
    payload = res.json()

    # Check Envelope
    assert payload["success"] is True
    assert "NIRMAYA FHIR capability statement retrieved" in payload["message"]
    assert "timestamp" in payload

    # Check Capability Profile
    data = payload["data"]
    assert "4.0.1" in data["fhir_version"]
    assert "R4" in data["fhir_version"]

    # Verify Resources
    resources = data["supported_resources"]
    assert "Patient" in resources
    assert "Practitioner" in resources
    assert "Observation" in resources
    assert "MedicationRequest" in resources
    assert "DiagnosticReport" in resources
    assert "Bundle" in resources

    # Verify ABDM Milestones
    milestones = data["abdm_milestones"]
    assert any("M1" in m for m in milestones)
    assert any("M2" in m for m in milestones)
    assert any("M3" in m for m in milestones)

    # Verify Code Systems
    code_systems = [cs["name"] for cs in data["code_systems"]]
    assert "LOINC" in code_systems
    assert "SNOMED-CT" in code_systems
    assert "RxNorm" in code_systems

    # Verify Telemetry Headers on Meta
    assert "X-Process-Time" in res.headers
    assert "X-Request-ID" in res.headers
