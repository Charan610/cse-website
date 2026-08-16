"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, CheckSquare, Square, ExternalLink, Zap, Layers, Sparkles, BookOpen } from "lucide-react";

interface TopicItem {
  id: string;
  name: string;
  desc: string;
  phase: "Foundation" | "Intermediate" | "Advanced" | "Interview-Ready";
  estimatedHours: string;
  tags: string[];
}

const STAGES_LIST = [
  { id: "cpp-basics", num: "01", label: "C++ Basics" },
  { id: "stl", num: "02", label: "STL Containers", highlight: true },
  { id: "math-recursion", num: "03", label: "Math & Recursion" },
  { id: "sorting-searching", num: "04", label: "Sorting & Searching" },
  { id: "arrays-strings", num: "05", label: "Arrays & Strings" },
  { id: "linked-lists", num: "06", label: "Linked Lists" },
  { id: "stacks-queues", num: "07", label: "Stacks & Queues" },
  { id: "trees", num: "08", label: "Trees & BST" },
  { id: "graphs", num: "09", label: "Graphs & Networks" },
  { id: "greedy", num: "10", label: "Greedy Algos" },
  { id: "dynamic-programming", num: "11", label: "Dynamic Prog" },
  { id: "advanced", num: "12", label: "Advanced Topics" },
];

const DSA_TOPICS: TopicItem[] = [
  { id: "dsa-1", name: "Arrays & Time Complexity", desc: "Two pointers, Sliding window, Prefix sums, Cadet's Algorithm.", phase: "Foundation", estimatedHours: "15 hrs", tags: ["Easy-Med", "Crucial"] },
  { id: "dsa-2", name: "Strings & Pattern Matching", desc: "Anagrams, Palindromes, KMP algorithm, Rabin-Karp hashing.", phase: "Foundation", estimatedHours: "12 hrs", tags: ["Strings", "Basics"] },
  { id: "dsa-3", name: "Linked List (Singly & Doubly)", desc: "Reversing, Fast/Slow pointers, Cycle detection, Merge sort LL.", phase: "Foundation", estimatedHours: "10 hrs", tags: ["Pointers", "Core"] },
  { id: "dsa-4", name: "Stacks & Queues", desc: "Next Greater Element, Monotonic Stack, LRU Cache implementation.", phase: "Intermediate", estimatedHours: "14 hrs", tags: ["Stack", "Queue"] },
  { id: "dsa-5", name: "Binary Trees & BST", desc: "Pre/In/Post Traversal, Height/Diameter, LCA, Lowest Common Ancestor.", phase: "Intermediate", estimatedHours: "20 hrs", tags: ["Trees", "Recursion"] },
  { id: "dsa-6", name: "Heaps & Priority Queues", desc: "Top K Frequent elements, Median in stream, K-way merge.", phase: "Intermediate", estimatedHours: "12 hrs", tags: ["Heap", "Sorting"] },
  { id: "dsa-7", name: "Graphs & Network Algorithms", desc: "BFS/DFS, Dijkstra, Bellman-Ford, Topological Sort, Disjoint Set Union (DSU).", phase: "Advanced", estimatedHours: "25 hrs", tags: ["Graphs", "High Impact"] },
  { id: "dsa-8", name: "Dynamic Programming (DP)", desc: "1D/2D DP, 0/1 Knapsack, LCS, LIS, Matrix Chain Multiplication, Digit DP.", phase: "Advanced", estimatedHours: "35 hrs", tags: ["Hard", "Tier-1 Focus"] },
  { id: "dsa-9", name: "Greedy Algorithms", desc: "Activity selection, Fractional Knapsack, N meetings in one room.", phase: "Intermediate", estimatedHours: "10 hrs", tags: ["Logic", "Greedy"] },
  { id: "dsa-10", name: "Tries & Advanced Trees", desc: "Prefix trees, Auto-complete engines, Segment Trees, Fenwick Trees.", phase: "Interview-Ready", estimatedHours: "15 hrs", tags: ["Advanced", "System"] },
];

export function SectionDSARoadmap() {
  const [viewMode, setViewMode] = useState<"list" | "phase">("list");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCompletedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const PHASES: Array<"Foundation" | "Intermediate" | "Advanced" | "Interview-Ready"> = [
    "Foundation",
    "Intermediate",
    "Advanced",
    "Interview-Ready",
  ];

  const totalDone = Object.values(completedItems).filter(Boolean).length;
  const progressPercent = Math.round((totalDone / DSA_TOPICS.length) * 100);

  return (
    <section id="dsa-roadmap" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-[#48B5AC] text-xs font-mono font-medium">
          <Code className="w-3.5 h-3.5" />
          <span>TAB 5 OF 7 • ALGORITHMIC CURRICULUM</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight font-sora">
          DSA Topic <span className="text-gradient-teal">Roadmap & Progress</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Complete step-by-step Data Structures & Algorithms topic checklists for technical interview rounds.
        </p>
      </motion.div>

      {/* =========================================================================
          FIRST IN SECTION: FEATURED ANIMATED 12-STAGE C++ & DSA ROADMAP HERO
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -2 }}
        className="relative overflow-hidden rounded-2xl glass-panel border border-[#48B5AC]/30 p-6 sm:p-8 bg-gradient-to-br from-[#121620] via-[#101217] to-[#15121b] shadow-2xl transition-all"
      >
        {/* Animated glowing beam line */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#48B5AC] to-transparent"
        />

        {/* Ambient Glow Pill */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#48B5AC]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#D68F5C]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#48B5AC]/15 border border-[#48B5AC]/30 text-[#48B5AC] text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#48B5AC] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRIMARY LEARNING BLUEPRINT · 12 STAGES</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-sora leading-snug">
              C++ to Advanced Data Structures &amp; Algorithms Roadmap
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Complete structured sequence from C++ memory mechanics and battle-tested STL containers (<code className="text-[#48B5AC] font-mono text-xs">#stl</code>) to advanced Dynamic Programming, Graph Theory, and interview checkpoints.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href="/dsa-roadmap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#48B5AC] to-[#3aa097] text-[#0A0A0C] font-mono text-xs font-bold shadow-lg shadow-[#48B5AC]/20 hover:shadow-[#48B5AC]/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>LAUNCH FULL ROADMAP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="/dsa-roadmap.html#stl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#D68F5C]/15 border border-[#D68F5C]/40 text-[#D68F5C] hover:bg-[#D68F5C]/25 hover:text-white font-mono text-xs font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              title="Jump directly to Stage 02: Standard Template Library"
            >
              <Zap className="w-4 h-4 text-[#D68F5C]" />
              <span>⚡ 02 · STL SPEC</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick Jump Stage Chips */}
        <div className="mt-6 pt-5 border-t border-white/[0.08]">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-3.5 h-3.5 text-[#48B5AC]" />
            <span className="text-xs font-mono font-medium text-slate-400">DIRECT JUMP TO ANY STAGE (OPENS IN NEW TAB):</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {STAGES_LIST.map((st) => (
              <a
                key={st.id}
                href={`/dsa-roadmap.html#${st.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all hover:scale-105 ${
                  st.highlight
                    ? "bg-[#48B5AC]/20 border border-[#48B5AC]/40 text-[#48B5AC] font-bold hover:bg-[#48B5AC] hover:text-black"
                    : "bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-[#48B5AC]/40 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <span className="text-[10px] opacity-60">{st.num}</span>
                <span>{st.label}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Progress & Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/[0.08]">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="px-3 py-1 rounded-xl bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-xs font-mono text-[#48B5AC] font-bold">
            {totalDone} / {DSA_TOPICS.length} Completed ({progressPercent}%)
          </div>
          <div className="w-32 bg-white/10 h-2 rounded-full overflow-hidden hidden sm:block">
            <div
              className="bg-gradient-to-r from-[#48B5AC] to-[#D68F5C] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2 p-1 bg-[#121318] rounded-xl border border-white/[0.08] shrink-0 text-xs font-medium">
          <span className="text-slate-400 pl-2 font-mono">Filter:</span>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "list"
                ? "bg-[#48B5AC]/20 text-[#48B5AC] border border-[#48B5AC]/30 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All List
          </button>
          <button
            onClick={() => setViewMode("phase")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "phase"
                ? "bg-[#D68F5C]/20 text-[#D68F5C] border border-[#D68F5C]/30 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Phase-wise
          </button>
        </div>
      </div>

      {/* List / Phase Rendering */}
      {viewMode === "list" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DSA_TOPICS.map((topic, idx) => {
            const isDone = !!completedItems[topic.id];
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                onClick={() => toggleCheck(topic.id)}
                className={`p-4 rounded-xl glass-card border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                  isDone
                    ? "bg-emerald-950/20 border-emerald-500/40"
                    : "border-white/[0.08] hover:border-[#48B5AC]/30"
                }`}
              >
                <button className="mt-0.5 text-slate-400 shrink-0">
                  {isDone ? (
                    <CheckSquare className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </button>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className={`text-sm font-bold ${isDone ? "line-through text-slate-400" : "text-white"}`}>
                      {topic.name}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded shrink-0">
                      {topic.estimatedHours}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{topic.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D68F5C]/10 text-[#D68F5C] border border-[#D68F5C]/20">
                      {topic.phase}
                    </span>
                    {topic.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-8">
          {PHASES.map((phase, pIdx) => {
            const phaseTopics = DSA_TOPICS.filter((t) => t.phase === phase);
            return (
              <div key={pIdx} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-[#48B5AC] font-mono font-bold flex items-center justify-center text-sm">
                    0{pIdx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white font-sora">{phase} Phase</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:pl-11">
                  {phaseTopics.map((topic) => {
                    const isDone = !!completedItems[topic.id];
                    return (
                      <div
                        key={topic.id}
                        onClick={() => toggleCheck(topic.id)}
                        className={`p-4 rounded-xl glass-card border transition-all cursor-pointer select-none flex items-start gap-3 ${
                          isDone ? "bg-emerald-950/20 border-emerald-500/40" : "border-white/[0.08] hover:border-[#48B5AC]/30"
                        }`}
                      >
                        <button className="mt-0.5 text-slate-400 shrink-0">
                          {isDone ? <CheckSquare className="w-5 h-5 text-emerald-400" /> : <Square className="w-5 h-5 text-slate-400" />}
                        </button>
                        <div>
                          <h4 className={`text-sm font-bold ${isDone ? "line-through text-slate-400" : "text-white"}`}>
                            {topic.name}
                          </h4>
                          <p className="text-xs text-slate-300 mt-1">{topic.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
