"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Code2, Compass, Layers, Briefcase, Bot, Building2, Globe, Cpu } from "lucide-react";

export const NAV_ITEMS = [
  { id: "trends", label: "Industry Trends", icon: Compass, badge: "Tab 1" },
  { id: "companies", label: "Top Companies", icon: Building2, badge: "Tab 2" },
  { id: "languages", label: "DSA Languages", icon: Code2, badge: "Tab 3" },
  { id: "dsa-roadmap", label: "DSA Roadmap", icon: Layers, badge: "Tab 4" },
  { id: "webdev-roadmap", label: "Web Dev Roadmap", icon: Globe, badge: "Tab 5" },
  { id: "core-cse", label: "Core CSE & JNTUK", icon: Cpu, badge: "Tab 6" },
  { id: "internships-projects", label: "Projects & Skills", icon: Briefcase, badge: "Tab 7" },
  { id: "ai-assistant", label: "AI Assistant", icon: Bot, badge: "Tab 8" },
];

interface NavbarProps {
  activeTab: string;
  onSelectTab: (id: string) => void;
}

export function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSelect = (id: string) => {
    onSelectTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#051424]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleSelect("trends")}
          className="flex items-center gap-2.5 group cursor-pointer text-left shrink-0"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-[#4de8f0]/20 to-[#9d7bff]/20 border border-[#4de8f0]/30 group-hover:border-[#4de8f0] transition-colors">
            <Terminal className="w-5 h-5 text-[#4de8f0] group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1 font-sora">
              CSE<span className="text-gradient-cyan">Guide</span>
            </span>
            <span className="block text-[10px] text-slate-400 font-mono tracking-wider -mt-1">
              SEPARATE TABS EDITION
            </span>
          </div>
        </button>

        {/* Desktop Nav Tabs */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-[#122131]/90 border border-white/[0.08] backdrop-blur-md overflow-x-auto no-scrollbar max-w-full">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTabBadge"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4de8f0]/25 via-[#9d7bff]/20 to-[#4de8f0]/25 border border-[#4de8f0]/40 shadow-[0_0_15px_rgba(77,232,240,0.2)]"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? "text-[#4de8f0]" : ""}`} />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white flex items-center gap-2 text-xs font-mono"
          aria-label="Toggle navigation menu"
        >
          <span className="text-[#4de8f0]">Select Tab</span>
          {isMobileMenuOpen ? <X className="w-5 h-5 text-[#4de8f0]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#051424]/98 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#4de8f0]/20 to-[#9d7bff]/20 text-white border border-[#4de8f0]/40 font-semibold"
                        : "text-slate-300 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#4de8f0]" : "text-slate-400"}`} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
