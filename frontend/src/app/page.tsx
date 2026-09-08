import { Badge, Button, Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui";
import { 
  ShieldCheck, 
  Activity, 
  FileSpreadsheet, 
  Stethoscope, 
  FlaskConical, 
  Lock, 
  Share2, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Layers
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50/50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-sky-500/20">
      {/* Top Banner: Standard Compliance */}
      <div className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/50 backdrop-blur-sm px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">NIRMAYA Health Interoperability Node: Active</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 dark:text-slate-400">ABDM Sandbox Connected</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="fhir" size="sm">HL7 FHIR R4</Badge>
            <Badge variant="abdm" size="sm">ABHA Ready</Badge>
            <Badge variant="verified" size="sm">v0.1.0-alpha</Badge>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-slate-900 to-sky-600 dark:from-sky-500 dark:to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-sky-500/10">
              N
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 dark:from-white dark:via-sky-200 dark:to-white bg-clip-text text-transparent">
                  NIRMAYA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/50">
                  Network
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-tight hidden sm:block">
                Networked Interoperable Records Medical Assets & Your Archives
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#vault" className="hover:text-slate-900 dark:hover:text-white transition-colors">Patient Vault</a>
            <a href="#emr" className="hover:text-slate-900 dark:hover:text-white transition-colors">Doctor EMR</a>
            <a href="#lab" className="hover:text-slate-900 dark:hover:text-white transition-colors">Diagnostic Gateway</a>
            <a href="#fhir" className="hover:text-slate-900 dark:hover:text-white transition-colors">FHIR Standards</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="emerald" size="sm">
              Register with ABHA
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800/60 text-xs font-semibold text-sky-700 dark:text-sky-300 mb-6">
              <Layers className="h-3.5 w-3.5" />
              <span>Ayushman Bharat Digital Mission (ABDM) Compatible Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Unifying Clinical Data Across the{" "}
              <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Healthcare Continuum
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              NIRMAYA bridges patient health records, provider encounters, and diagnostic laboratories into an interoperable, standard-compliant HL7 FHIR R4 network with consent-driven data ownership.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg">
                Explore Clinical Portals
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Database className="h-4 w-4" />
                View FHIR R4 Schema
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Zero Data Silos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Longitudinal History</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>ABHA Identity Linked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Network Pillars */}
      <section className="py-16 bg-white dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="fhir" className="mb-3">Interoperable Ecosystem</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Three Pillars of the NIRMAYA Network
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Engineered with discrete role permissions, guaranteed data integrity, and compliance at every touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Patient Vault */}
            <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle>Patient Health Vault</CardTitle>
                  <Badge variant="verified">Self-Sovereign</Badge>
                </div>
                <CardDescription>
                  Longitudinal health record locker with full patient consent control.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-2">
                  <Activity className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>Consolidated timeline of prescriptions, labs, and diagnoses.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="h-4 w-4 text-emerald-600 mt-0.5" />
                  <span>Granular doctor-level time-bound access delegation.</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  <span>Enter Vault Portal</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </Card>

            {/* Pillar 2: Doctor EMR */}
            <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle>Provider (Doctor) EMR</CardTitle>
                  <Badge variant="fhir">Clinical EMR</Badge>
                </div>
                <CardDescription>
                  High-efficiency clinical workspace for encounter notes and prescriptions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-2">
                  <Share2 className="h-4 w-4 text-sky-600 mt-0.5" />
                  <span>Instant access to verified patient past medical history.</span>
                </div>
                <div className="flex items-start gap-2">
                  <FileSpreadsheet className="h-4 w-4 text-sky-600 mt-0.5" />
                  <span>Structured e-prescriptions generating FHIR MedicationRequests.</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  <span>Open EMR Console</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </Card>

            {/* Pillar 3: Diagnostic Gateway */}
            <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle>Diagnostic Gateway</CardTitle>
                  <Badge variant="abdm">Lab Portal</Badge>
                </div>
                <CardDescription>
                  Direct ingest portal for accredited laboratories and imaging centers.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-2">
                  <Activity className="h-4 w-4 text-indigo-600 mt-0.5" />
                  <span>Dual upload: Cryptographic PDF + Structured FHIR Observations.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Database className="h-4 w-4 text-indigo-600 mt-0.5" />
                  <span>Automated linkage to Patient ABHA identifier and vault.</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="w-full justify-between">
                  <span>Access Lab Gateway</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090d16] py-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-slate-100">NIRMAYA</span>
            <span>— Final Year Major Project (Health Informatics)</span>
          </div>
          <div className="flex items-center gap-4">
            <span>FastAPI Core</span>
            <span>•</span>
            <span>Next.js 15 App Router</span>
            <span>•</span>
            <span>PostgreSQL & Supabase</span>
            <span>•</span>
            <span>HL7 FHIR R4</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
