"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Send, Lock, X, ArrowRight } from "lucide-react";

export function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [promptInput, setPromptInput] = useState("");

  const MOCK_PROMPTS = [
    "Explain Dynamic Programming Memoization vs Tabulation with C++ examples.",
    "Which SQL joins should I practice for Tier-1 Product drives?",
    "What is the step-by-step roadmap to become a Next.js Full Stack developer?",
    "How do I explain my DSA Visualizer project in an interview round?",
  ];

  return (
    <>
      {/* Floating Chat Trigger Bubble (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-3.5 sm:p-4 rounded-full bg-[#121318] text-[#48B5AC] border border-[#48B5AC]/40 shadow-[0_4px_25px_rgba(72,181,172,0.25)] flex items-center justify-center group cursor-pointer"
          aria-label="Open AI Assistant"
        >
          {/* Subtle Ambient Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-[#48B5AC]/20 animate-ping pointer-events-none opacity-40" />

          {isOpen ? (
            <X className="w-6 h-6 text-white transition-transform duration-200" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-6 h-6 text-[#48B5AC] group-hover:rotate-12 transition-transform duration-200" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D68F5C] border border-[#0A0A0D]" />
            </div>
          )}
        </motion.button>
      </div>

      {/* Slide-over / Modal Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Floating Assistant Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[480px] max-h-[80vh] flex flex-col rounded-3xl bg-[#121318]/95 backdrop-blur-2xl border border-[#48B5AC]/30 shadow-2xl shadow-black/80 z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between bg-[#181A22]/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#48B5AC]/15 text-[#48B5AC] border border-[#48B5AC]/30">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-white">AI Study Assistant</h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#D68F5C]/20 text-[#D68F5C] border border-[#D68F5C]/30">
                        PREVIEW
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono">Trained on CSE Roadmap & DSA Curriculum</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                  aria-label="Close Assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body Content */}
              <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
                {/* Coming Soon Notice */}
                <div className="p-3 rounded-2xl bg-[#48B5AC]/10 border border-[#48B5AC]/25 flex items-start gap-2.5 text-slate-300">
                  <Sparkles className="w-4 h-4 text-[#48B5AC] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Intelligent Companion</span>
                    <span className="text-[11px] text-slate-400 leading-relaxed">
                      Answers DSA doubts, clarifies Core CS questions, and provides tailored learning roadmaps.
                    </span>
                  </div>
                </div>

                {/* Mock Conversation Stream */}
                <div className="space-y-3">
                  {/* User Question */}
                  <div className="flex items-start justify-end gap-2.5">
                    <div className="max-w-[80%] p-3 rounded-2xl bg-[#D68F5C]/15 border border-[#D68F5C]/30 text-slate-100 text-xs">
                      What is the most efficient way to master Graph Algorithms for product company rounds?
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-[#D68F5C]/20 text-[#D68F5C] font-mono text-[10px] flex items-center justify-center font-bold shrink-0">
                      YOU
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#48B5AC]/20 text-[#48B5AC] flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="max-w-[85%] p-3.5 rounded-2xl bg-[#181A22] border border-white/[0.08] text-slate-200 text-xs space-y-2">
                      <p>
                        Start with adjacency list representations, then master <strong>BFS/DFS traversals</strong>. Next, practice cycle detection in directed graphs (Kahn’s Topological Sort) before tackling shortest paths (Dijkstra) and Minimum Spanning Trees (Kruskal’s DSU).
                      </p>
                      <div className="p-2 rounded-lg bg-black/40 border border-white/5 font-mono text-[10px] text-[#48B5AC]">
                        Tip: 80% of graph interview questions reduce to standard BFS/DFS or Disjoint Set Union!
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sample Prompt Pills */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">Suggested prompts:</span>
                  <div className="space-y-1.5">
                    {MOCK_PROMPTS.map((prompt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPromptInput(prompt)}
                        className="w-full p-2.5 rounded-xl bg-[#181A22] border border-white/5 text-[11px] text-slate-300 text-left hover:border-[#48B5AC]/30 hover:text-white transition-colors flex items-center justify-between gap-2"
                      >
                        <span className="truncate">{prompt}</span>
                        <ArrowRight className="w-3 h-3 text-slate-500 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input Footer */}
              <div className="p-3 sm:p-4 border-t border-white/[0.08] bg-[#181A22]/80">
                <div className="relative">
                  <input
                    type="text"
                    disabled
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder="AI Study Assistant (Fine-tuning in progress...)"
                    className="w-full pl-4 pr-12 py-3 rounded-xl bg-[#0A0A0D] border border-[#48B5AC]/30 text-xs text-slate-300 placeholder:text-slate-500 focus:outline-none cursor-not-allowed"
                  />
                  <button
                    disabled
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-[#48B5AC]/30 text-slate-400 cursor-not-allowed"
                    aria-label="Send query"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
