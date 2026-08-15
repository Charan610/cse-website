"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TabOption {
  id: string;
  label: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface TabsProps {
  tabs: TabOption[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "pills" | "buttons" | "underlined";
}

export function Tabs({ tabs, activeTab, onChange, className = "", variant = "pills" }: TabsProps) {
  return (
    <div
      className={`inline-flex p-1.5 rounded-2xl bg-[#121318]/90 border border-white/[0.08] backdrop-blur-md overflow-x-auto no-scrollbar max-w-full ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(tab.id)}
            className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap z-10 ${
              isActive
                ? "text-white font-semibold"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={`activeTabHighlight-${variant}`}
                className="absolute inset-0 rounded-xl bg-[#48B5AC]/20 border border-[#48B5AC]/40 shadow-[0_0_20px_rgba(72,181,172,0.15)] z-0"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
              />
            )}

            {Icon && (
              <Icon
                className={`w-4 h-4 relative z-10 transition-colors ${
                  isActive ? "text-[#48B5AC]" : "text-slate-400"
                }`}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
            {tab.badge && (
              <span
                className={`relative z-10 px-2 py-0.5 text-[10px] font-mono rounded-full ${
                  isActive
                    ? "bg-[#48B5AC]/20 text-[#48B5AC] border border-[#48B5AC]/40"
                    : "bg-white/[0.06] text-slate-400"
                }`}
              >
                {tab.badge}
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
