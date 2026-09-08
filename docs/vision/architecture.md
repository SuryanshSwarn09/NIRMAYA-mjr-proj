# The 3-Pillar Unified Network Architecture

## 1. Network Topography

NIRMAYA is architected around three foundational healthcare stakeholders, unified through an asynchronous data bus and standards-compliant API layer:

```
                            +--------------------------+
                            |      Patient Vault       |
                            | (Longitudinal History,   |
                            |  Consent Management)     |
                            +--------------------------+
                                         |
                                         v
+--------------------------+    +------------------+    +--------------------------+
|       Provider EMR       |--->|  NIRMAYA Gateway |<---|     Diagnostic Lab       |
| (Consultation, Vitals,   |    | (FHIR R4 & ABDM) |    | (Observations, Stamped   |
|  e-Prescriptions)        |    +------------------+    |  Diagnostic Reports)     |
+--------------------------+                            +--------------------------+
```

---

## 2. The Three Architectural Pillars

### Pillar 1: Patient Health Vault
- **Self-Sovereign Records:** Patients own their longitudinal healthcare records across all life stages.
- **Consent Delegation Engine:** Patients can generate time-bound, role-restricted consent artefacts permitting specific practitioners to view their medical history during a consultation window.
- **Identity Unification:** Integrates a simulated 14-digit Ayushman Bharat Health Account (ABHA) number and `@abdm` handle.

### Pillar 2: Provider (Doctor) EMR
- **Clinical Workspace:** Clinicians review verified historical data, record vitals (BP, SpO2, Heart Rate), and formulate clinical diagnoses.
- **Standardized e-Prescribing:** Formulates medication items containing active pharmaceutical ingredients (API), strength, dosage, route, and frequency.
- **FHIR Export:** Automatically maps clinical notes to FHIR `Encounter`, `Condition`, and `MedicationRequest` resources.

### Pillar 3: Diagnostic (Lab) Gateway
- **Dual-Channel Upload:** Partner laboratories upload digitally stamped laboratory PDFs alongside structured quantitative test observations (e.g., HbA1c in %, Fasting Glucose in mg/dL).
- **Direct Vault Ingestion:** Test results automatically update the patient's longitudinal observation trends and alert the referring physician.

---

## 3. Technology Layering

| Layer | Technology | Architectural Function |
|---|---|---|
| **Presentation** | Next.js 15 (App Router), Tailwind CSS v4, Framer Motion | Server-rendered clinical views, responsive layouts, micro-animations |
| **API & Validation** | FastAPI (Python 3.11), Pydantic v2 | High-throughput asynchronous routing, strict schema enforcement |
| **Relational Data** | PostgreSQL via SQLAlchemy 2.0 (ORM) & Alembic | ACID transactions, referential integrity, relational modeling |
| **Auth & Assets** | Supabase Auth & Storage | Role-based access control, cryptographic JWTs, presigned medical PDF URLs |
| **Interoperability** | HL7 FHIR Release 4 & ABDM Simulator | Standard JSON resources, FHIR Bundles, simulated HIU/HIP consent exchange |
