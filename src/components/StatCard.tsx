"use client";

import React from "react";
import { motion } from "framer-motion";
import { Info, LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  subtext: string;
  icon: LucideIcon;
  accentColor?: "cyan" | "violet";
  trend?: string;
}

export function StatCard({ value, label, subtext, icon: Icon, accentColor = "cyan", trend }: StatCardProps) {
  const isCyan = accentColor === "cyan";

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative p-6 rounded-2xl glass-card ${
        isCyan ? "hover:border-[#4de8f0]/40" : "glass-card-violet"
      } group overflow-hidden`}
    >
      {/* Background radial glow */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100 ${
          isCyan ? "bg-[#4de8f0]/15 opacity-50" : "bg-[#9d7bff]/20 opacity-50"
        }`}
      />

      <div className="flex items-start justify-between gap-4 mb-4">
        <div
          className={`p-3 rounded-xl border ${
            isCyan
              ? "bg-[#4de8f0]/10 border-[#4de8f0]/30 text-[#4de8f0]"
              : "bg-[#9d7bff]/10 border-[#9d7bff]/30 text-[#9d7bff]"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>

        {trend && (
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${
              isCyan
                ? "bg-[#4de8f0]/10 text-[#4de8f0] border-[#4de8f0]/25"
                : "bg-[#9d7bff]/10 text-[#9d7bff] border-[#9d7bff]/25"
            }`}
          >
            {trend}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-baseline gap-1 font-mono">
          <span className={isCyan ? "text-gradient-cyan" : "text-gradient-violet"}>{value}</span>
        </div>
        <h3 className="text-base font-semibold text-slate-200">{label}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{subtext}</p>
      </div>

      {/* Illustrative estimate badge */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5 font-mono">
          <Info className="w-3 h-3 text-slate-400" />
          Industry Estimate (Approx)
        </span>
        {/* TODO: Replace with live verified metrics API or verified source dataset link */}
      </div>
    </motion.div>
  );
}
