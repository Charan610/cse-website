"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Terminal, ArrowRight, CheckCircle2 } from "lucide-react";

export default function IntroGatePage() {
  const [showExitNote, setShowExitNote] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0D] text-[#E4E7EE] selection:bg-[#48B5AC]/30 selection:text-[#48B5AC] flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-x-hidden">
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="fixed inset-0 bg-grid-lumina opacity-25 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#48B5AC]/10 via-[#D68F5C]/5 to-transparent blur-[140px] pointer-events-none z-0" />

      {/* Header Stamp */}
      <header className="relative z-10 max-w-2xl mx-auto w-full flex items-center justify-between pb-8 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#48B5AC]/15 border border-[#48B5AC]/30 text-[#48B5AC]">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
            CSE Guide <span className="text-slate-600">/</span> Note Before Entering
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#48B5AC] bg-[#48B5AC]/10 px-2.5 py-0.5 rounded-full border border-[#48B5AC]/20">
          30-SEC READ
        </span>
      </header>

      {/* Main Gate Card */}
      <main className="relative z-10 max-w-2xl mx-auto w-full my-auto py-10 sm:py-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Beat 1: Blunt opening */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-sora leading-snug">
              This site is built around one idea:{" "}
              <span className="text-gradient-teal">DSA decides most of your shortlist.</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
              If that doesn’t interest you right now, this guide probably isn’t for you — and that’s completely fine.
            </p>
          </motion.div>

          {/* Beat 2: Why it matters */}
          <motion.div
            variants={itemVariants}
            className="p-5 sm:p-6 rounded-2xl glass-card border border-white/[0.08] space-y-2 bg-[#121318]/70"
          >
            <span className="text-xs font-mono text-[#D68F5C] uppercase tracking-wider block">
              The Hiring Reality
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Most technical interview rounds at product and growing tech firms test core problem solving — arrays, trees, graphs, and dynamic programming invariants — regardless of the specific role. University marks and attendance give you eligibility; solving problems under time pressure gets you shortlisted.
            </p>
          </motion.div>

          {/* Beat 3: What actually stops most students */}
          <motion.div variants={itemVariants} className="space-y-3.5">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              What actually stops most students:
            </h2>
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-[#121318]/60 border border-white/[0.05] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#48B5AC] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  <strong className="text-white font-medium">Not knowing where to start</strong> — paralyzed by dozens of conflicting sheets and fragmented opinions online.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121318]/60 border border-white/[0.05] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#48B5AC] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  <strong className="text-white font-medium">Starting late</strong> — telling yourself <em>&ldquo;I&rsquo;ll begin after this semester&rsquo;s exams&rdquo;</em> every single term.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121318]/60 border border-white/[0.05] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#48B5AC] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  <strong className="text-white font-medium">Comparing progress to others</strong> and quitting early instead of maintaining quiet consistency.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#121318]/60 border border-white/[0.05] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#48B5AC] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  <strong className="text-white font-medium">Treating DSA as optional</strong> rather than the foundational skill that determines technical shortlists.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Beat 4: One-line pitch */}
          <motion.div variants={itemVariants} className="pt-2">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono border-l-2 border-[#48B5AC] pl-4 py-1">
              This site gives you one cohesive path: which language to pick, which subjects to prioritize, and a clean roadmap to follow — no more deciding what to do next, just doing it.
            </p>
          </motion.div>

          {/* Beat 5: Two-way exit */}
          <motion.div variants={itemVariants} className="pt-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/guide"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#48B5AC] hover:bg-[#5CC2B8] text-[#0A0A0D] font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(72,181,172,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>I&rsquo;m in — show me the path</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setShowExitNote(!showExitNote)}
                className="text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors py-2 px-3"
              >
                Not for me right now
              </button>
            </div>

            {/* Polite no-guilt feedback if user clicks "Not for me" */}
            <AnimatePresence>
              {showExitNote && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-400 font-mono overflow-hidden space-y-1.5"
                >
                  <p>
                    No worries at all. Whenever you feel ready to prepare for technical interviews, bookmark this and come back anytime.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    You can still explore the full guide whenever you want by visiting{" "}
                    <Link href="/guide" className="text-[#48B5AC] underline underline-offset-2">
                      /guide
                    </Link>
                    .
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-2xl mx-auto w-full pt-8 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>Curated with love by Charan</span>
        <span>2026 Edition</span>
      </footer>
    </div>
  );
}
