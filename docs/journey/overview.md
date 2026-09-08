# Roadmap & Micro-Commit Methodology

## 1. The 4-Month Disciplined Pacing

NIRMAYA is developed across a structured **4-month (16-week / 80-working-day)** timeline. To maintain technical rigor and continuous documentation, progress is neither rushed nor deferred:

```
[ Month 1: Foundation, Schemas & RBAC Auth ] -> Milestone v0.1.0
                 |
[ Month 2: Discovery, Scheduling Engine & Dashboards ] -> Milestone v0.2.0
                 |
[ Month 3: Clinical EMR, Lab Gateway & HL7 FHIR Interoperability ] -> Milestone v0.3.0
                 |
[ Month 4: Polish, Security Hardening, Deployment & Academic Presentation ] -> Release v1.0.0
```

---

## 2. The 10+ Daily Atomic Micro-Commit Protocol

A core engineering principle of this project is the **10+ Micro-Commit Daily Standard**:
1. **Granular Breakdown:** Every working day's scope is sliced into at least 10 discrete, verifiable micro-commits.
2. **Conventional Commits:** Each commit follows the standardized specification (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`).
3. **No Monolithic Dumps:** Code is committed and pushed continuously as each unit of work (config, schema, endpoint, test, doc) is completed.
4. **GitBook Synchronization:** The development journey, design decisions, and architectural rationales are synchronized in real-time with GitBook via markdown files.

---

## 3. Milestone Hierarchy

- **v0.1.0 (Month 1):** Clean monorepo, robust database models, Alembic migrations, Supabase RBAC authentication, and multi-role onboarding.
- **v0.2.0 (Month 2):** Doctor search and discovery engine, calendar availability algorithms, race-condition safe appointment booking, and role-specific dashboards.
- **v0.3.0 (Month 3):** Provider consultation workspace, prescription PDF generator, diagnostic lab report ingest, longitudinal patient vault, HL7 FHIR R4 Bundle export, and simulated ABHA registration.
- **v1.0.0 (Month 4):** Real-time WebSockets, WCAG 2.1 AA accessibility audit, rate-limiting security headers, production containerization (Docker), live cloud deployment, and full academic project report.
