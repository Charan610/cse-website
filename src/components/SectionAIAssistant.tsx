"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles, Send, Lock, MessageSquare, Terminal, Zap, ArrowRight } from "lucide-react";

export function SectionAIAssistant() {
  const [promptInput, setPromptInput] = useState("");

  const MOCK_PROMPTS = [
    "Explain Dynamic Programming Memoization vs Tabulation with C++ examples.",
    "Which SQL joins should I practice for SRKR / TCS Digital campus drives?",
    "What is the step-by-step roadmap to become a Next.js Full Stack developer?",
    "How do I explain my DSA Visualizer project in a MAANG interview round?",
  ];

  return (
    <section id="ai-assistant" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#4de8f0]/15 via-[#9d7bff]/15 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4de8f0]/10 border border-[#4de8f0]/30 text-[#4de8f0] text-xs font-mono font-medium">
          <Bot className="w-3.5 h-3.5" />
          <span>SECTION V • INTELLIGENT COMPANION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Ask Anything — <span className="text-gradient-cyan">AI Study Assistant</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          An interactive AI companion trained on every DSA topic, language comparison, core CS subject, and placement roadmap featured on this website.
        </p>
      </motion.div>

      {/* AI Assistant Container with "Coming Soon" Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-3xl glass-panel border border-[#4de8f0]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden group"
      >
        {/* Subtle decorative top bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4de8f0] via-[#9d7bff] to-[#4de8f0]" />

        {/* Coming Soon Overlay Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#4de8f0]/10 via-[#9d7bff]/10 to-[#4de8f0]/10 border border-[#4de8f0]/30 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#4de8f0]/20 text-[#4de8f0] border border-[#4de8f0]/40 shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">AI Study Bot Interface</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#4de8f0] text-[#051424]">
                  COMING SOON
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Currently in fine-tuning stage. Will answer DSA doubts, optimize code complexity, and simulate technical HR questions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[#4de8f0] bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 shrink-0">
            <Lock className="w-3.5 h-3.5 text-[#9d7bff]" />
            <span>v2026.2 Launching Next</span>
          </div>
        </div>

        {/* Mock Chat Conversation History */}
        <div className="space-y-4 mb-8">
          {/* User Mock Message */}
          <div className="flex items-start justify-end gap-3">
            <div className="max-w-lg p-4 rounded-2xl bg-[#9d7bff]/20 border border-[#9d7bff]/40 text-xs sm:text-sm text-slate-100 font-sans leading-relaxed">
              <p>What is the most efficient way to master Graph Algorithms for product company rounds?</p>
            </div>
            <div className="w-8 h-8 rounded-xl bg-[#9d7bff]/30 border border-[#9d7bff]/50 text-white font-mono text-xs flex items-center justify-center font-bold shrink-0">
              YOU
            </div>
          </div>

          {/* AI Mock Response */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#4de8f0]/20 border border-[#4de8f0]/40 text-[#4de8f0] flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="max-w-xl p-5 rounded-2xl bg-[#081220]/90 border border-white/10 text-xs sm:text-sm text-slate-200 space-y-2.5 font-sans leading-relaxed">
              <div className="flex items-center gap-2 text-xs font-mono text-[#4de8f0]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CSE AI Assistant • Verified Guidance</span>
              </div>
              <p>
                Start with matrix & adjacency list representations, then master <strong>BFS/DFS traversals</strong>. Next, practice cycle detection in directed graphs (Kahn’s Topological Sort) before tackling shortest paths (Dijkstra) and Minimum Spanning Trees (Kruskal’s DSU).
              </p>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 font-mono text-[11px] text-emerald-400">
                Tip: 80% of graph interview questions reduce to standard BFS/DFS or Disjoint Set Union!
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Prompts Pills */}
        <div className="space-y-2 mb-6">
          <span className="text-xs font-mono text-slate-400 block">Sample Questions You Will Be Able to Ask:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {MOCK_PROMPTS.map((prompt, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#09101c] border border-white/5 text-xs text-slate-300 flex items-center justify-between gap-2 hover:border-[#4de8f0]/30 transition-colors cursor-not-allowed opacity-80"
              >
                <span className="truncate">{prompt}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Disabled Interactive Chat Input Bar */}
        <div className="relative">
          <input
            type="text"
            disabled
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="AI Chat assistant coming soon... (Ask anything about DSA, Core CS, or Web Dev)"
            className="w-full pl-5 pr-14 py-4 rounded-2xl bg-[#070b14]/90 border border-[#4de8f0]/30 text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none cursor-not-allowed"
          />
          <button
            disabled
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-gradient-to-r from-[#4de8f0]/40 to-[#9d7bff]/40 text-slate-400 cursor-not-allowed opacity-60"
            aria-label="Send query"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
