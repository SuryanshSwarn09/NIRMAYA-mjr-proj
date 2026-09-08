# HL7 FHIR Release 4 Mappings

## 1. What is HL7 FHIR?

**Fast Healthcare Interoperability Resources (FHIR)** is the next-generation standards framework created by **Health Level Seven International (HL7)**. FHIR combines the best features of HL7's v2, v3, and CDA product lines while leveraging modern web technologies (RESTful JSON APIs, OAuth2, and standardized data types).

In NIRMAYA, all health-related data models are mapped directly to official **HL7 FHIR Release 4 (R4)** specifications.

---

## 2. Resource Mapping Matrix

| NIRMAYA Relational Entity | Corresponding FHIR R4 Resource | Purpose & Clinical Scope |
|---|---|---|
| `User` (Role: Patient) & `Patient` | `Patient` | Demographic identity, date of birth, biological sex, contact details, ABHA identifier |
| `User` (Role: Doctor) & `DoctorProfile` | `Practitioner` & `PractitionerRole` | Medical registration council number, specialty, clinical qualifications, hospital affiliation |
| `Appointment` & Consultation | `Encounter` | Clinical interaction between patient and doctor, status, class (ambulatory), start/end times |
| Clinical Diagnosis | `Condition` | Primary diagnosis, verification status, severity, onset date |
| Vital Signs & Lab Findings | `Observation` | Quantitative health metrics (Blood Pressure, Heart Rate, SpO2, Blood Glucose, HbA1c) |
| `Prescription` & Medications | `MedicationRequest` | Prescribed drug orders, dosage instructions, frequency, route, duration, prescriber link |
| Laboratory Test Report | `DiagnosticReport` | Diagnostic test result bundle including laboratory metadata, observation references, and PDF attachment |
| Health Record Vault Export | `Bundle` (type: `document`) | Standardized, tamper-evident JSON container enclosing all longitudinal clinical resources for interoperability |

---

## 3. Sample FHIR R4 Resource Representation

### FHIR `Observation` (Quantitative Blood Glucose)
```json
{
  "resourceType": "Observation",
  "id": "obs-bg-001",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "laboratory",
          "display": "Laboratory"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "2339-0",
        "display": "Glucose [Mass/volume] in Blood"
      }
    ],
    "text": "Fasting Blood Glucose"
  },
  "subject": {
    "reference": "Patient/pat-nirmaya-101",
    "display": "Patient John Doe"
  },
  "effectiveDateTime": "2026-09-08T08:30:00+05:30",
  "valueQuantity": {
    "value": 98.5,
    "unit": "mg/dL",
    "system": "http://unitsofmeasure.org",
    "code": "mg/dL"
  },
  "referenceRange": [
    {
      "low": { "value": 70, "unit": "mg/dL" },
      "high": { "value": 99, "unit": "mg/dL" }
    }
  ]
}
```
