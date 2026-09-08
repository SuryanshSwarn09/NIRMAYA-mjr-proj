# Ayushman Bharat Digital Mission (ABDM) & ABHA Simulation

## 1. Context & Purpose

The **Ayushman Bharat Digital Mission (ABDM)**, launched by the National Health Authority (NHA) of India, establishes a unified digital healthcare infrastructure across the nation. In NIRMAYA, we simulate key ABDM milestones (M1, M2, and M3 compliance) to demonstrate enterprise-grade compliance awareness:

- **M1:** ABHA ID generation, verification, and linkage to patient profiles.
- **M2:** Health Information Provider (HIP) integration — generating FHIR records (prescriptions, diagnostic reports).
- **M3:** Health Information User (HIU) & Consent Manager — requesting, authorizing, and securely exchanging health data via consent tokens.

---

## 2. ABHA Identification Scheme

In NIRMAYA, each patient can generate or link a simulated ABHA identity:
- **14-digit ABHA Number:** A unique, tamper-evident numeric identifier formatted as `XX-XXXX-XXXX-XXXX` (e.g., `91-4521-8830-1092`).
- **ABHA Address:** A memorable, user-selected health handle under the official national namespace: `<username>@abdm` (e.g., `suryansh@abdm`).
- **OTP Verification Challenge:** Simulated multi-factor SMS/Aadhaar OTP handshake confirming identity ownership during vault creation.

---

## 3. Simulated Consent-Driven Data Exchange Flow

```
+-----------+                +-----------------+                +-----------+
|  Doctor   |                | NIRMAYA Consent |                |  Patient  |
|  (HIU)    |                |   Manager (CM)  |                |   (HIP)   |
+-----------+                +-----------------+                +-----------+
      |                               |                               |
      | 1. Request Consultation Consent |                               |
      |------------------------------>|                               |
      |                               | 2. Push Notification / Prompt |
      |                               |------------------------------>|
      |                               |                               |
      |                               | 3. Patient Approves Access    |
      |                               |<------------------------------|
      |                               |    (Valid for: 2 Hours)       |
      | 4. Issue Encrypted FHIR Token |                               |
      |<------------------------------|                               |
      |                               |                               |
      | 5. Query Patient Vault Bundle |                               |
      |==============================================================>|
```

### Consent Artefact Schema Attributes
1. **Consent ID:** Unique UUID for the transaction.
2. **Patient ABHA:** The target patient whose records are requested.
3. **Practitioner ID:** The verified doctor requesting access.
4. **Purpose:** Clinical consultation / emergency care / diagnostic review.
5. **HiTypes:** Specific record categories (`Prescription`, `DiagnosticReport`, `DischargeSummary`).
6. **Date Range:** Historical interval for records included.
7. **Expiry Timestamp:** Exact UTC timestamp after which access is revoked automatically.
