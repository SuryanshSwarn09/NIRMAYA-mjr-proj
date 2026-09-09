"""Health check and system telemetry schemas."""

from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional, List


class StandardsCompliance(BaseModel):
    """Healthcare data standards compliance indicators."""

    fhir_version: str = Field(default="R4", description="HL7 FHIR specification release")
    abdm_sandbox: bool = Field(default=True, description="Ayushman Bharat Digital Mission connectivity")
    loinc_mapped: bool = Field(default=True, description="Logical Observation Identifiers Names and Codes")
    snomed_ct_ready: bool = Field(default=True, description="SNOMED Clinical Terms clinical ontology readiness")


class DatabaseHealth(BaseModel):
    """Relational database connection telemetry."""

    status: str = Field(default="healthy", description="Database connection status")
    driver: str = Field(default="postgresql+asyncpg", description="Underlying DB driver")
    latency_ms: Optional[float] = Field(default=None, description="Roundtrip query latency in ms")


class SystemHealthResponse(BaseModel):
    """Enterprise health verification payload."""

    status: str = Field(default="healthy", description="Overall cluster health state")
    project: str = Field(default="NIRMAYA")
    full_name: str
    version: str
    environment: str
    uptime_seconds: float = Field(ge=0.0)
    timestamp: datetime
    standards: StandardsCompliance
    database: DatabaseHealth
