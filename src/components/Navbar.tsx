"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X, Code2, Compass, Layers, Briefcase, Bot } from "lucide-react";

export const NAV_ITEMS = [
  { id: "trends", label: "Industry Trends", icon: Compass, badge: "Slide 1" },
  { id: "language", label: "DSA Language", icon: Code2, badge: "Slide 2" },
  { id: "roadmap", label: "Roadmaps", icon: Layers, badge: "Slide 3" },
  { id: "internships", label: "Internships & Projects", icon: Briefcase, badge: "Slide 4" },
  { id: "ai-assistant", label: "AI Assistant", icon: Bot, badge: "Slide 5" },
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
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#051424]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleSelect("trends")}
          className="flex items-center gap-2.5 group cursor-pointer text-left"
        >
          <div className="p-2 rounded-xl bg-gradient-to-br from-[#4de8f0]/20 to-[#9d7bff]/20 border border-[#4de8f0]/30 group-hover:border-[#4de8f0] transition-colors">
            <Terminal className="w-5 h-5 text-[#4de8f0] group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1 font-sora">
              CSE<span className="text-gradient-cyan">Guide</span>
            </span>
            <span className="block text-[10px] text-slate-400 font-mono tracking-wider -mt-1">
              LUMINA SLIDE DECK EDITION
            </span>
          </div>
        </button>

        {/* Desktop Nav Tabs */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-[#122131]/80 border border-white/[0.08] backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabHeaderBadge"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4de8f0]/20 via-[#9d7bff]/20 to-[#4de8f0]/20 border border-[#4de8f0]/40 shadow-[0_0_15px_rgba(77,232,240,0.2)]"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? "text-[#4de8f0]" : ""}`} />
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Version Badge */}
        <div className="hidden lg:flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#4de8f0] bg-[#4de8f0]/10 border border-[#4de8f0]/30">
            Slide Mode Active
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6 text-[#4de8f0]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#051424]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#4de8f0]/20 to-[#9d7bff]/20 text-white border border-[#4de8f0]/40 font-semibold"
                        : "text-slate-300 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
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
