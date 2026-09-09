import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Badge } from "@/components/ui";
import { FOOTER_SECTIONS } from "@/config/navigation";
import { Shield, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090d16] text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" showSubtitle={false} />
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
              NIRMAYA (Networked Interoperable Records Medical Assets & Your Archives) 
              is a standardized health informatics platform uniting patient vaults, 
              clinical provider EMRs, and diagnostic laboratories into an interoperable FHIR network.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Badge variant="fhir" size="sm">
                HL7 FHIR R4
              </Badge>
              <Badge variant="abdm" size="sm">
                ABHA Verified
              </Badge>
              <Badge variant="verified" size="sm">
                Consent Driven
              </Badge>
            </div>
          </div>

          {/* Navigation Section Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Project Credit Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span>
              &copy; {new Date().getFullYear()} NIRMAYA Health Network. Final Year Major Project in Health Informatics.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>FastAPI 0.115+</span>
            <span>•</span>
            <span>Next.js 15 App Router</span>
            <span>•</span>
            <span>PostgreSQL 16 & Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
