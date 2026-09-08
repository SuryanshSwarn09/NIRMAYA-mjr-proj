# Technology Stack & Rationale

## 1. Architectural Stack Selection

The technological stack for NIRMAYA was deliberately chosen to reflect modern, production-grade enterprise healthcare systems rather than basic educational prototypes:

```
[ Frontend: Next.js 15 + Tailwind CSS v4 + Framer Motion ]
                             | (JSON / HTTPS)
[ Backend: FastAPI + Pydantic v2 + SQLAlchemy 2.0 ]
              /              |              \
             v               v               v
    [ PostgreSQL 16 ]  [ Supabase Auth ]  [ Supabase Storage ]
```

---

## 2. In-Depth Architectural Rationale

### Frontend: Next.js 15 (App Router) & React 19
- **Server Components & Streaming:** Heavy clinical record lists and medical timelines stream progressively without client-side waterfalls.
- **Strict TypeScript Enforcement:** Guarantees strong typing for complex HL7 FHIR resource interfaces.
- **Tailwind CSS v4:** Directly leverages CSS custom properties and the `@theme` directive, producing smaller bundles and rapid design iteration for clinical color palettes.
- **Framer Motion:** Adds subtle micro-interactions to clinical status changes, modal drawers, and timeline state transitions without compromising medical readability.

### Backend: FastAPI (Python 3.11)
- **High-Throughput Asynchronous Performance:** Starlette/Uvicorn ASGI foundation handles concurrent patient searches and slot reservations efficiently.
- **Pydantic v2 Validation:** Automatic parsing and strict type-validation of intricate HL7 FHIR JSON payloads with near C-speed execution.
- **Extensibility for Healthcare AI:** Choosing Python allows seamless future integration with clinical AI models—such as OCR pipelines for extracting parameters from paper lab reports, or LLM-driven clinical summarization.

### Database: PostgreSQL 16 via SQLAlchemy 2.0 & Alembic
- **Relational Integrity:** Medical records demand ACID guarantees; appointments, encounters, prescriptions, and lab tests cannot afford orphan records or inconsistent state.
- **Row-Level Locking:** Prevents double-booking collisions when multiple patients attempt to reserve the same doctor appointment slot concurrently.
- **Alembic Migrations:** Provides version-controlled, reproducible schema migrations across environments.

### Authentication & Storage: Supabase
- **Role-Based Access Control (RBAC):** Built-in JWT tokens convey user roles (`patient`, `doctor`, `lab`, `admin`), cryptographically verified in FastAPI middleware.
- **Presigned S3-Compatible Storage:** Encrypted lab report PDFs remain private; access is gated behind short-lived presigned URLs generated on demand only for authorized record owners.
