"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Toast } from "@/components/Toast";
import { SectionTrends } from "@/components/SectionTrends";
import { SectionLanguage } from "@/components/SectionLanguage";
import { SectionRoadmap } from "@/components/SectionRoadmap";
import { SectionInternships } from "@/components/SectionInternships";
import { SectionAIAssistant } from "@/components/SectionAIAssistant";
import { motion } from "framer-motion";
import { Terminal, Heart, Sparkles, Code2, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#051424] text-[#d4e4fa] selection:bg-[#4de8f0]/30 selection:text-[#4de8f0] overflow-hidden">
      {/* Lumina Atmospheric Grid & Glow Overlays */}
      <div className="fixed inset-0 bg-grid-lumina opacity-60 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#4de8f0]/10 via-[#9d7bff]/5 to-transparent blur-[160px] pointer-events-none z-0" />

      {/* Sticky Glass Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20 sm:pt-28 space-y-12 sm:space-y-20">
        {/* Hero Header */}
        <section className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#122131] border border-[#4de8f0]/30 text-xs font-mono text-[#4de8f0] shadow-[0_0_20px_rgba(77,232,240,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-[#4de8f0] animate-pulse" />
            <span>CINEMATIC ARCHITECTURE • CSE CAREER & DSA GUIDE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto font-sora"
          >
            Master <span className="text-gradient-cyan">DSA & Full-Stack</span> for Top Engineering Careers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            A single-page interactive guide for Computer Science & Engineering students covering recruitment reality, language tradeoffs, topic roadmaps, and resume projects.
          </motion.p>

          {/* Quick jump pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3 pt-2 font-mono text-xs"
          >
            <a
              href="#trends"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#4de8f0]/20 to-[#9d7bff]/20 border border-[#4de8f0]/40 text-white font-medium hover:border-[#4de8f0] transition-colors flex items-center gap-1.5"
            >
              <span>Explore Industry Trends</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#4de8f0]" />
            </a>
            <a
              href="#roadmap"
              className="px-4 py-2 rounded-xl bg-[#122131] border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors flex items-center gap-1.5"
            >
              <span>View Topic Roadmaps</span>
            </a>
          </motion.div>
        </section>

        {/* SECTION I - Industry Trends */}
        <SectionTrends />

        {/* SECTION II - Choosing Your DSA Language */}
        <SectionLanguage />

        {/* SECTION III - Topic Roadmaps */}
        <SectionRoadmap />

        {/* SECTION IV - Internships and Projects */}
        <SectionInternships />

        {/* SECTION V - AI Assistant */}
        <SectionAIAssistant />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#010f1f]/80 backdrop-blur-xl mt-20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#122131] border border-[#4de8f0]/30">
              <Terminal className="w-5 h-5 text-[#4de8f0]" />
            </div>
            <div>
              <span className="font-bold text-base text-white tracking-tight font-sora">
                CSE<span className="text-gradient-cyan">Guide</span>
              </span>
              <p className="text-xs text-slate-400 font-mono">
                Built with love by Charan, with AI • Lumina Developer System
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
              <svg className="w-4 h-4 text-[#9d7bff] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="#trends"
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Dismissible Toast Notification */}
      <Toast />
    </div>
  );
}
