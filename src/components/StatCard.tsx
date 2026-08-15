"use client";

import React from "react";
import { motion } from "framer-motion";
import { Info, LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  subtext: string;
  icon: LucideIcon;
  accentColor?: "teal" | "copper" | "cyan" | "violet";
  trend?: string;
}

export function StatCard({ value, label, subtext, icon: Icon, accentColor = "teal", trend }: StatCardProps) {
  const isTeal = accentColor === "teal" || accentColor === "cyan";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative p-6 rounded-2xl glass-card ${
        isTeal ? "hover:border-[#48B5AC]/40" : "glass-card-copper"
      } group overflow-hidden`}
    >
      {/* Background radial glow */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100 ${
          isTeal ? "bg-[#48B5AC]/15 opacity-40" : "bg-[#D68F5C]/15 opacity-40"
        }`}
      />

      <div className="flex items-start justify-between gap-4 mb-4">
        <div
          className={`p-3 rounded-xl border ${
            isTeal
              ? "bg-[#48B5AC]/10 border-[#48B5AC]/30 text-[#48B5AC]"
              : "bg-[#D68F5C]/10 border-[#D68F5C]/30 text-[#D68F5C]"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>

        {trend && (
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${
              isTeal
                ? "bg-[#48B5AC]/10 text-[#48B5AC] border-[#48B5AC]/25"
                : "bg-[#D68F5C]/10 text-[#D68F5C] border-[#D68F5C]/25"
            }`}
          >
            {trend}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-baseline gap-1 font-mono">
          <span className={isTeal ? "text-gradient-teal" : "text-gradient-copper"}>{value}</span>
        </div>
        <h3 className="text-base font-semibold text-slate-200">{label}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{subtext}</p>
      </div>

      {/* Illustrative estimate badge */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5 font-mono">
          <Info className="w-3 h-3 text-slate-400" />
          Industry Benchmark
        </span>
      </div>
    </motion.div>
  );
}
