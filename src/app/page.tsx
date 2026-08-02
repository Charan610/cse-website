"use client";

import React, { useState, useEffect } from "react";
import { Navbar, NAV_ITEMS } from "@/components/Navbar";
import { Toast } from "@/components/Toast";
import { SectionTrends } from "@/components/SectionTrends";
import { SectionCompanies } from "@/components/SectionCompanies";
import { SectionLanguage } from "@/components/SectionLanguage";
import { SectionDSARoadmap } from "@/components/SectionDSARoadmap";
import { SectionWebDevRoadmap } from "@/components/SectionWebDevRoadmap";
import { SectionCoreCSE } from "@/components/SectionCoreCSE";
import { SectionInternships } from "@/components/SectionInternships";
import { SectionAIAssistant } from "@/components/SectionAIAssistant";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("trends");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && NAV_ITEMS.some((item) => item.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentIndex = NAV_ITEMS.findIndex((item) => item.id === activeTab);
  const prevSlide = currentIndex > 0 ? NAV_ITEMS[currentIndex - 1] : null;
  const nextSlide = currentIndex < NAV_ITEMS.length - 1 ? NAV_ITEMS[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen bg-[#051424] text-[#d4e4fa] selection:bg-[#4de8f0]/30 selection:text-[#4de8f0] overflow-hidden flex flex-col justify-between">
      {/* Lumina Atmospheric Grid & Glow Overlays */}
      <div className="fixed inset-0 bg-grid-lumina opacity-60 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#4de8f0]/10 via-[#9d7bff]/5 to-transparent blur-[160px] pointer-events-none z-0" />

      {/* Sticky Navigation Bar */}
      <Navbar activeTab={activeTab} onSelectTab={handleTabChange} />

      {/* Main Slide Workspace */}
      <main className="relative z-10 pt-20 sm:pt-24 pb-12 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Top-level Separate Tabs Switcher Bar */}
        <div className="my-6 p-2 rounded-2xl glass-panel border border-white/10 flex items-center justify-start gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {NAV_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`relative px-3.5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-[#4de8f0]/25 via-[#9d7bff]/20 to-[#4de8f0]/25 border border-[#4de8f0]/40 shadow-[0_0_20px_rgba(77,232,240,0.2)] font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                    isActive ? "bg-[#4de8f0] text-[#051424]" : "bg-white/10 text-slate-400"
                  }`}
                >
                  0{idx + 1}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#4de8f0]" : "text-slate-400"}`} />
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Single Component Display Per Tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {activeTab === "trends" && <SectionTrends />}
            {activeTab === "companies" && <SectionCompanies />}
            {activeTab === "languages" && <SectionLanguage />}
            {activeTab === "dsa-roadmap" && <SectionDSARoadmap />}
            {activeTab === "webdev-roadmap" && <SectionWebDevRoadmap />}
            {activeTab === "core-cse" && <SectionCoreCSE />}
            {activeTab === "internships-projects" && <SectionInternships />}
            {activeTab === "ai-assistant" && <SectionAIAssistant />}
          </motion.div>
        </AnimatePresence>

        {/* Previous / Next Tab Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevSlide ? (
            <button
              onClick={() => handleTabChange(prevSlide.id)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl glass-card border border-white/10 hover:border-[#4de8f0]/40 text-xs font-mono text-slate-300 hover:text-white flex items-center justify-center gap-2 group transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#4de8f0] group-hover:-translate-x-1 transition-transform" />
              <span>Previous Tab: {prevSlide.label}</span>
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}

          <div className="text-xs font-mono text-slate-400 text-center">
            Tab <span className="text-[#4de8f0] font-bold">{currentIndex + 1}</span> of {NAV_ITEMS.length}
          </div>

          {nextSlide ? (
            <button
              onClick={() => handleTabChange(nextSlide.id)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#4de8f0]/20 to-[#9d7bff]/20 border border-[#4de8f0]/40 hover:border-[#4de8f0] text-xs font-mono text-white font-semibold flex items-center justify-center gap-2 group transition-all"
            >
              <span>Next Tab: {nextSlide.label}</span>
              <ArrowRight className="w-4 h-4 text-[#4de8f0] group-hover:translate-x-1 transition-transform" />
            </button>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#010f1f]/80 backdrop-blur-xl py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#122131] border border-[#4de8f0]/30">
              <Terminal className="w-4 h-4 text-[#4de8f0]" />
            </div>
            <div>
              <span className="font-bold text-sm text-white tracking-tight font-sora">
                CSE<span className="text-gradient-cyan">Guide</span>
              </span>
              <p className="text-[11px] text-slate-400 font-mono">
                Built with love by Charan, with AI • Modular Separate Tabs Edition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
            <a
              href="https://instagram.com/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4de8f0] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 text-[#9d7bff] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      <Toast />
    </div>
  );
}
