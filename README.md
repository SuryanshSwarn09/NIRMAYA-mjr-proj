# NIRMAYA: Networked Interoperable Records Medical Assets & Your Archives

> **A Unified Health Interoperability Network & Longitudinal Patient Vault**  
> Built on **HL7 FHIR Release 4** & simulated **ABDM (Ayushman Bharat Digital Mission)** standards.

---

## Overview

**NIRMAYA** is an enterprise-grade digital health interoperability platform designed as a standout final-year major project. Instead of isolated database silos, NIRMAYA structures patient health records around modern healthcare data standards:

- **Patient Health Vault:** Central locker where patients own and manage their longitudinal medical history, diagnostic reports, and appointments.
- **Provider (Doctor) EMR:** Clinical workspace for verified patient timeline reviews, encounter documentation, and structured e-prescriptions (`FHIR MedicationRequest`).
- **Diagnostic (Lab) Gateway:** Secured gateway for partner laboratories to upload test results (both binary PDFs and structured `FHIR Observation` data).
- **Interoperability Hub:** Native export of standard HL7 FHIR R4 JSON Bundles and simulation of the Ayushman Bharat Health Account (ABHA) ecosystem.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion |
| **Backend** | FastAPI (Python 3.11), Pydantic v2, SQLAlchemy 2.0 |
| **Database** | PostgreSQL via SQLAlchemy ORM & Alembic migrations |
| **Auth & Storage**| Supabase Auth (RBAC & JWT verification) & Supabase Storage (Encrypted PDFs) |
| **Standards** | HL7 FHIR R4 (`Patient`, `Practitioner`, `Observation`, `MedicationRequest`, `Bundle`), Simulated ABDM/ABHA |

---

## Project Structure

```
nirmaya/
├── frontend/             # Next.js 15 App Router frontend
├── backend/              # FastAPI Python backend
│   └── app/
│       ├── api/v1/       # Versioned REST endpoints
│       ├── core/         # Settings, security & config
│       ├── models/       # SQLAlchemy database models
│       ├── schemas/      # Pydantic schemas
│       ├── fhir/         # HL7 FHIR R4 models & serializers
│       └── abdm/         # Simulated ABHA & consent logic
├── docs/                 # Documentation, architecture & CHANGELOG
└── README.md             # Project documentation
```

---

## Getting Started

### Backend Setup
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Unix:
source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
Interactive API documentation will be available at [http://localhost:8000/docs](http://localhost:8000/docs).

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The web application will be available at [http://localhost:3000](http://localhost:3000).

---

## Roadmap & Development Log

Development is paced systematically across 4 months (16 weeks, 80 daily micro-commits). See [`docs/CHANGELOG.md`](docs/CHANGELOG.md) for detailed daily progress and atomic commit history.
