import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className,
  showSubtitle = true,
  size = "md",
}: BrandLogoProps) {
  const iconSizes = {
    sm: "h-8 w-8 text-sm rounded-lg",
    md: "h-10 w-10 text-lg rounded-xl",
    lg: "h-12 w-12 text-xl rounded-2xl",
  };

  const titleSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3 select-none transition-transform active:scale-[0.99]",
        className
      )}
    >
      {/* Brand Icon Badge */}
      <div
        className={cn(
          "bg-gradient-to-tr from-slate-900 via-sky-700 to-emerald-500 flex items-center justify-center text-white font-extrabold shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/30 transition-shadow",
          iconSizes[size]
        )}
      >
        <span>N</span>
      </div>

      {/* Brand Text Hierarchy */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 dark:from-white dark:via-sky-200 dark:to-white bg-clip-text text-transparent leading-none",
              titleSizes[size]
            )}
          >
            NIRMAYA
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/60 leading-none">
            Network
          </span>
        </div>

        {showSubtitle && (
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium tracking-tight mt-1 hidden sm:block">
            Networked Interoperable Records Medical Assets & Your Archives
          </p>
        )}
      </div>
    </Link>
  );
}
