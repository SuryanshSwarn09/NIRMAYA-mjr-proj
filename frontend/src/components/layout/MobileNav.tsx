"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MAIN_NAV_ITEMS } from "@/config/navigation";
import { Badge, Button } from "@/components/ui";
import { 
  ShieldCheck, 
  Stethoscope, 
  FlaskConical, 
  Database, 
  Layers, 
  Activity,
  X,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const ICON_MAP = {
  ShieldCheck,
  Stethoscope,
  FlaskConical,
  Database,
  Layers,
  Activity,
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-in Navigation Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 260 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-[#090d16] border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xl lg:hidden"
          >
            <div>
              {/* Header with Close Action */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">
                    Navigation
                  </span>
                  <Badge variant="verified" size="sm">
                    NIRMAYA
                  </Badge>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close navigation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items List */}
              <div className="mt-6 space-y-2">
                {MAIN_NAV_ITEMS.map((item) => {
                  const Icon = ICON_MAP[item.iconName] || Activity;
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "group flex items-center justify-between p-3 rounded-xl transition-all",
                        isActive
                          ? "bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-lg",
                            isActive
                              ? "bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950"
                              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold">
                              {item.title}
                            </span>
                            {item.badge && (
                              <Badge
                                variant={item.badgeVariant || "default"}
                                size="sm"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Authentication Buttons */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              <Link href="/login" onClick={onClose} className="block w-full">
                <Button variant="outline" size="md" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/register" onClick={onClose} className="block w-full">
                <Button variant="emerald" size="md" className="w-full">
                  Register with ABHA
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
