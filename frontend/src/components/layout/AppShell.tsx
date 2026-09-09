"use client";

import React, { useState } from "react";
import { SystemStatusBar } from "./SystemStatusBar";
import { Navbar } from "./Navbar";
import { MobileNav } from "./MobileNav";
import { Footer } from "./Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-sky-500/20">
      {/* 1. Global Interoperability & Live Node Status Bar */}
      <SystemStatusBar />

      {/* 2. Primary Navigation Header */}
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
      />

      {/* 3. Animated Mobile Sheet Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* 4. Main Page Viewport Container */}
      <main className="flex-1 w-full">{children}</main>

      {/* 5. Enterprise Healthcare Footer */}
      <Footer />
    </div>
  );
}
