"""System metadata and FHIR capability discovery endpoint."""

from fastapi import APIRouter, status
from typing import List, Dict, Any
from app.core.config import settings
from app.schemas.common import APIResponse
from pydantic import BaseModel, Field

router = APIRouter()


class SupportedCodeSystem(BaseModel):
    name: str
    uri: str
    description: str


class CapabilityProfile(BaseModel):
    """Clinical interoperability capability profile."""

    fhir_version: str = "4.0.1 (R4)"
    supported_resources: List[str]
    abdm_milestones: List[str]
    code_systems: List[SupportedCodeSystem]
    capabilities: Dict[str, bool]


@router.get(
    "/meta",
    response_model=APIResponse[CapabilityProfile],
    status_code=status.HTTP_200_OK,
    tags=["Interoperability & Metadata"],
    summary="Discover HL7 FHIR capabilities, code systems, and ABDM milestones",
)
async def get_system_capabilities() -> APIResponse[CapabilityProfile]:
    """Provide machine-readable specification of active interoperability interfaces."""
    profile = CapabilityProfile(
        fhir_version=f"4.0.1 ({settings.FHIR_VERSION})",
        supported_resources=[
            "Patient",
            "Practitioner",
            "PractitionerRole",
            "Appointment",
            "Encounter",
            "Condition",
            "Observation",
            "MedicationRequest",
            "DiagnosticReport",
            "Bundle",
        ],
        abdm_milestones=[
            "M1_ABHA_CREATION_AND_VERIFICATION",
            "M2_HIP_HEALTH_RECORD_LINKING",
            "M3_HIU_CONSENT_DRIVEN_DATA_EXCHANGE",
        ],
        code_systems=[
            SupportedCodeSystem(
                name="LOINC",
                uri="http://loinc.org",
                description="Logical Observation Identifiers Names and Codes for laboratory diagnostics",
            ),
            SupportedCodeSystem(
                name="SNOMED-CT",
                uri="http://snomed.info/sct",
                description="Systematized Nomenclature of Medicine Clinical Terms for diagnoses",
            ),
            SupportedCodeSystem(
                name="RxNorm",
                uri="http://www.nlm.nih.gov/research/umls/rxnorm",
                description="Standardized nomenclature for clinical medications and active ingredients",
            ),
        ],
        capabilities={
            "longitudinal_vault": True,
            "structured_e_prescriptions": True,
            "diagnostic_pdf_stamping": True,
            "consent_revocation": True,
            "realtime_telemetry": True,
        },
    )

    return APIResponse[CapabilityProfile](
        success=True,
        message="NIRMAYA FHIR capability statement retrieved",
        data=profile,
    )
