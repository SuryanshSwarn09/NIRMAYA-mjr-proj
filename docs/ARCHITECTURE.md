# NIRMAYA System Architecture & Data Flow Specification

**Project:** NIRMAYA (Networked Interoperable Records Medical Assets & Your Archives)  
**Specification Release:** 1.0 (HL7 FHIR R4 & Simulated ABDM M1/M2/M3)  
**Academic Target:** Final Year Major Project in Health Informatics

---

## 1. Architectural Philosophy & Overview

NIRMAYA is engineered as a **Unified Health Interoperability Network**. Unlike traditional siloed healthcare applications that isolate patient data within proprietary schema boundaries, NIRMAYA structures all medical records, encounter notes, and diagnostic observations around international healthcare standards: **HL7 FHIR Release 4** and India's **Ayushman Bharat Digital Mission (ABDM)**.

```
                              +---------------------------------------+
                              |            NIRMAYA PLATFORM           |
                              +---------------------------------------+
                                                 |
             +-----------------------------------+-----------------------------------+
             |                                   |                                   |
             v                                   v                                   v
+-------------------------+         +-------------------------+         +-------------------------+
|   Patient Health Vault  |         |   Provider (Doctor) EMR |         | Diagnostic Lab Gateway  |
| (Appointments, Records, |         | (Encounter Notes, Rx,   |         | (Report Uploads,        |
|  ABHA ID, Timeline)     |         |  Clinical History)      |         |  Structured Parameters) |
+-------------------------+         +-------------------------+         +-------------------------+
             |                                   |                                   |
             +-----------------------------------+-----------------------------------+
                                                 |
                                          HTTPS / JSON API
                                                 |
                                                 v
                            +-----------------------------------------+
                            | Next.js 15 App Router + Tailwind CSS v4 |
                            | Framer Motion + TanStack Query          |
                            +-----------------------------------------+
                                                 |
                                          HTTPS / JSON API
                                                 |
                                                 v
                            +-----------------------------------------+
                            |     FastAPI (Python 3.11/3.12) Core     |
                            |  Pydantic v2 + SQLAlchemy 2.0 (ORM)     |
                            +-----------------------------------------+
                              /            |             \
                             /             |              \
                            v              v               v
            +-------------------+ +------------------+ +-----------------------+
            | PostgreSQL Engine | | Supabase Auth &  | | HL7 FHIR R4 & ABDM    |
            | (Relational DB &  | | Storage Buckets  | | Interoperability Hub  |
            |  Alembic Schema)  | | (PDF Reports)    | | (FHIR Bundles, ABHA)  |
            +-------------------+ +------------------+ +-----------------------+
```

---

## 2. The Three Network Stakeholders

### A. Patient Health Vault (Health Information Provider & Owner)
- Centralized, longitudinal health locker owned by the patient.
- Integrates simulated 14-digit ABHA ID (`XX-XXXX-XXXX-XXXX`) and memorable `<user>@abdm` handle.
- Granular consent manager allowing patients to grant or revoke time-bound access to specific doctors.
- Unified chronological medical timeline rendering prescriptions, lab results, and vitals.

### B. Provider (Doctor) EMR (Health Information User)
- Clinical consultation console providing verified historical timeline review upon patient consent.
- Vitals recording interface (BP, Pulse, SpO2, Temperature).
- Structured e-prescription builder with pharmaceutical ingredient autocompletion.
- Automatic transformation of consultation notes into FHIR `Encounter`, `Condition`, and `MedicationRequest`.

### C. Diagnostic (Lab) Gateway (Health Information Provider)
- Direct ingestion portal for accredited diagnostic centers and imaging clinics.
- Dual-channel report submission:
  1. Cryptographically stamped PDF report stored in private encrypted object storage.
  2. Structured quantitative `Observation` parameters (e.g. HbA1c in %, Fasting Glucose in mg/dL) stored in relational tables for longitudinal trend analysis.
- Automatic linkage to patient vault and instant notification dispatch.

---

## 3. Clinical Data Flows

### A. Consultation & Prescription Data Flow
```
1. Patient books appointment slot -> Atomic row-level lock in PostgreSQL
2. Doctor reviews historical timeline -> Verified via active Consent Token
3. Doctor documents encounter -> Saves Clinical Impression & Vitals
4. Doctor formulates e-Prescription -> Generates FHIR MedicationRequest
5. System renders signed PDF -> Digitally signed prescription archived in Patient Vault
```

### B. Diagnostic Upload & Ingestion Flow
```
1. Diagnostic Lab selects Patient by ABHA -> System verifies accredited lab role
2. Lab uploads binary report PDF -> Presigned URL generated, stored in private bucket
3. Lab inputs quantitative observations -> Formats into FHIR Observation resources
4. Atomic commit -> Updates patient longitudinal observations and notifies doctor
```

### C. Simulated ABDM Consent-Driven Exchange Flow
```
Doctor (HIU) -> Requests Access -> Consent Manager (CM) -> Pushes Prompt to Patient (HIP)
Patient Approves (Duration: 2 Hours, Scope: Prescriptions + Labs)
Consent Manager -> Issues Signed Consent Token -> Doctor decrypts and reviews FHIR Bundle
```

---

## 4. Security & Compliance Architecture

1. **Role-Based Access Control (RBAC):** Strict enforcement across 4 primary roles: `patient`, `doctor`, `lab`, `admin`.
2. **Audit Telemetry:** Every API transaction injects and logs an `X-Request-ID` UUID4 correlation identifier, recording client IP, endpoint, response status, and duration in `X-Process-Time`.
3. **Storage Security:** All clinical documents (PDFs, scans) reside in private Supabase Storage buckets accessible exclusively through short-lived presigned URLs.
4. **OWASP & Healthcare Headers:** Enforces `nosniff`, `DENY` clickjacking protection, modern content security policies, and parameterized query execution to prevent SQL injection.
