"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs } from "./Tabs";
import {
  CheckSquare,
  Square,
  Layers,
  Code,
  Globe,
  Database,
  Cpu,
  BookOpen,
  Sparkles,
  ToggleLeft,
  ToggleRight,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

// --- DATA STRUCTURES & ROADMAP CONTENT ---

interface TopicItem {
  id: string;
  name: string;
  desc: string;
  phase: "Foundation" | "Intermediate" | "Advanced" | "Interview-Ready";
  estimatedHours: string;
  tags: string[];
}

const DSA_TOPICS: TopicItem[] = [
  { id: "dsa-1", name: "Arrays & Time Complexity", desc: "Two pointers, Sliding window, Prefix sums, Cadet's Algorithm.", phase: "Foundation", estimatedHours: "15 hrs", tags: ["Easy-Med", "Crucial"] },
  { id: "dsa-2", name: "Strings & Pattern Matching", desc: "Anagrams, Palindromes, KMP algorithm, Rabin-Karp hashing.", phase: "Foundation", estimatedHours: "12 hrs", tags: ["Strings", "Basics"] },
  { id: "dsa-3", name: "Linked List (Singly & Doubly)", desc: "Reversing, Fast/Slow pointers, Cycle detection, Merge sort LL.", phase: "Foundation", estimatedHours: "10 hrs", tags: ["Pointers", "Core"] },
  { id: "dsa-4", name: "Stacks & Queues", desc: "Next Greater Element, Monotonic Stack, LRU Cache implementation.", phase: "Intermediate", estimatedHours: "14 hrs", tags: ["Stack", "Queue"] },
  { id: "dsa-5", name: "Binary Trees & BST", desc: "Pre/In/Post Traversal, Height/Diameter, LCA, Lowest Common Ancestor.", phase: "Intermediate", estimatedHours: "20 hrs", tags: ["Trees", "Recursion"] },
  { id: "dsa-6", name: "Heaps & Priority Queues", desc: "Top K Frequent elements, Median in stream, K-way merge.", phase: "Intermediate", estimatedHours: "12 hrs", tags: ["Heap", "Sorting"] },
  { id: "dsa-7", name: "Graphs & Network Algorithms", desc: "BFS/DFS, Dijkstra, Bellman-Ford, Topological Sort, Disjoint Set Union (DSU).", phase: "Advanced", estimatedHours: "25 hrs", tags: ["Graphs", "High Impact"] },
  { id: "dsa-8", name: "Dynamic Programming (DP)", desc: "1D/2D DP, 0/1 Knapsack, LCS, LIS, Matrix Chain Multiplication, Digit DP.", phase: "Advanced", estimatedHours: "35 hrs", tags: ["Hard", "MAANG Filter"] },
  { id: "dsa-9", name: "Greedy Algorithms", desc: "Activity selection, Fractional Knapsack, N meetings in one room.", phase: "Intermediate", estimatedHours: "10 hrs", tags: ["Logic", "Greedy"] },
  { id: "dsa-10", name: "Tries & Advanced Trees", desc: "Prefix trees, Auto-complete engines, Segment Trees, Fenwick Trees.", phase: "Interview-Ready", estimatedHours: "15 hrs", tags: ["Advanced", "System"] },
];

const WEBDEV_TOPICS: TopicItem[] = [
  { id: "wd-1", name: "HTML5 & Modern CSS3", desc: "Semantic tags, Flexbox, CSS Grid, Responsive Design, CSS Variables.", phase: "Foundation", estimatedHours: "10 hrs", tags: ["Frontend", "Basics"] },
  { id: "wd-2", name: "JavaScript ES6+ Core", desc: "Event Loop, Closures, Promises, Async/Await, Prototypes, DOM manipulation.", phase: "Foundation", estimatedHours: "20 hrs", tags: ["JS", "Must Know"] },
  { id: "wd-3", name: "React 19 & State Management", desc: "Components, Hooks (useEffect, useMemo), Context API, Zustand/Redux.", phase: "Intermediate", estimatedHours: "30 hrs", tags: ["React", "High Demand"] },
  { id: "wd-4", name: "Next.js (App Router)", desc: "Server Components (RSC), SSR, SSG, Route Handlers, SEO Optimization.", phase: "Intermediate", estimatedHours: "25 hrs", tags: ["NextJS", "Modern"] },
  { id: "wd-5", name: "Node.js & Express APIs", desc: "RESTful API architecture, Middleware, Middleware pipelines, Input validation.", phase: "Intermediate", estimatedHours: "20 hrs", tags: ["Backend", "Express"] },
  { id: "wd-6", name: "Databases (SQL & NoSQL)", desc: "PostgreSQL schema design, Indexing, MongoDB aggregation, ORMs (Prisma).", phase: "Advanced", estimatedHours: "22 hrs", tags: ["SQL", "Databases"] },
  { id: "wd-7", name: "Authentication & Security", desc: "JWT tokens, OAuth 2.0, NextAuth, HTTPS, CORS, Password hashing (bcrypt).", phase: "Advanced", estimatedHours: "15 hrs", tags: ["Security", "Auth"] },
  { id: "wd-8", name: "Deployment & CI/CD", desc: "Vercel, Docker basics, GitHub Actions, AWS S3/EC2 hosting, Nginx reverse proxy.", phase: "Interview-Ready", estimatedHours: "18 hrs", tags: ["DevOps", "Cloud"] },
];

interface CoreSubject {
  id: string;
  name: string;
  code: string;
  interviewWeight: string;
  desc: string;
  keyTopics: string[];
  whyItMatters: string;
  isJNTUKSpecial?: boolean;
}

const CORE_SUBJECTS: CoreSubject[] = [
  {
    id: "cs-os",
    name: "Operating Systems (OS)",
    code: "CS-OS301",
    interviewWeight: "High (Tested in 90%+ rounds)",
    desc: "Process management, threads, concurrency, and virtual memory systems.",
    keyTopics: ["Process vs Thread", "CPU Scheduling (RR, SJF)", "Deadlocks & Banker's Algo", "Paging & Virtual Memory", "Semaphores & Mutex"],
    whyItMatters: "Recruiters ask OS concepts to evaluate how well you understand multi-threading, concurrency bugs, and system-level performance.",
  },
  {
    id: "cs-dbms",
    name: "Database Management Systems (DBMS)",
    code: "CS-DB302",
    interviewWeight: "Critical (Essential for Backend & Campus)",
    desc: "Relational data design, SQL queries, normalization, and ACID guarantees.",
    keyTopics: ["SQL Joins & Group By", "Normalization (1NF to BCNF)", "ACID Properties & Transactions", "B-Trees & Database Indexing", "NoSQL vs SQL"],
    whyItMatters: "SQL live query writing is mandatory in 80%+ tier-2 campus drives (SRKR) and backend system interviews.",
  },
  {
    id: "cs-cn",
    name: "Computer Networks (CN)",
    code: "CS-CN303",
    interviewWeight: "High (Web & Cloud Roles)",
    desc: "OSI 7-Layer model, TCP/IP protocol stack, routing, and Web HTTP security.",
    keyTopics: ["OSI & TCP/IP Layers", "TCP vs UDP Handshakes", "HTTP vs HTTPS & SSL/TLS", "DNS Resolution Flow", "IP Addressing & Subnetting"],
    whyItMatters: "Crucial for answering how web browsers fetch data (`What happens when you type google.com`), API latency, and network troubleshooting.",
  },
  {
    id: "cs-oop",
    name: "Object-Oriented Programming (OOP)",
    code: "CS-OOP201",
    interviewWeight: "Critical (Universal Benchmark)",
    desc: "Encapsulation, Inheritance, Polymorphism, Abstraction, and SOLID design rules.",
    keyTopics: ["4 Pillars of OOP", "Method Overloading vs Overriding", "Abstract Classes vs Interfaces", "SOLID Principles", "Design Patterns (Singleton, Factory)"],
    whyItMatters: "Every Java/C++ interview begins with OOP design questions. Expect scenario questions like 'Design a Parking Lot'.",
  },
  {
    id: "cs-dmgt",
    name: "Discrete Mathematics & Graph Theory (DMGT)",
    code: "JNTUK-DMGT",
    interviewWeight: "Medium (Underpins DSA Logic)",
    desc: "Set theory, logic proofs, combinatorics, graph theory, and recurrence relations.",
    keyTopics: ["Propositional Logic", "Pigeonhole Principle", "Graph Isomorphism & Euler Paths", "Recurrence Relations (Master Theorem)"],
    whyItMatters: "JNTUK / Tier-2 core subject! Builds mathematical rigor needed for analyzing algorithm time complexity (Big-O) and Graph proofs.",
    isJNTUKSpecial: true,
  },
  {
    id: "cs-dlco",
    name: "Digital Logic & Computer Organization (DLCO)",
    code: "JNTUK-DLCO",
    interviewWeight: "Medium (Hardware-Software Bridge)",
    desc: "Logic gates, Boolean algebra, CPU registers, pipelining, and cache memory hierarchy.",
    keyTopics: ["K-Maps & Boolean Reduction", "Multiplexers & Flip-Flops", "Instruction Set Architecture (ISA)", "Cache Memory (Direct, Associative)"],
    whyItMatters: "JNTUK core curriculum subject! Explains how software executes on hardware (Cache L1/L2 hits, Register manipulation, Bitwise ops).",
    isJNTUKSpecial: true,
  },
];

export function SectionRoadmap() {
  const [activeTab, setActiveTab] = useState<"dsa" | "webdev" | "core">("dsa");
  const [viewMode, setViewMode] = useState<"list" | "phase">("list");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCompletedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getTopics = () => (activeTab === "dsa" ? DSA_TOPICS : WEBDEV_TOPICS);

  const PHASES: Array<"Foundation" | "Intermediate" | "Advanced" | "Interview-Ready"> = [
    "Foundation",
    "Intermediate",
    "Advanced",
    "Interview-Ready",
  ];

  return (
    <section id="roadmap" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#48B5AC]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-[#48B5AC] text-xs font-mono font-medium">
          <Layers className="w-3.5 h-3.5" />
          <span>SECTION III • CURATED PATHWAYS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Your Roadmap — <span className="text-gradient-cyan">DSA, Web Dev, Core CSE</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Structured step-by-step topic checklists designed for engineering students. Track your preparation progress interactively.
        </p>
      </motion.div>

      {/* Top Controls: 3 Tabs + View Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <Tabs
          tabs={[
            { id: "dsa", label: "DSA Topics", icon: Code, badge: `${DSA_TOPICS.length} Modules` },
            { id: "webdev", label: "Web Dev Stack", icon: Globe, badge: `${WEBDEV_TOPICS.length} Modules` },
            { id: "core", label: "Core CSE Subjects", icon: Cpu, badge: "OS, DBMS, JNTUK" },
          ]}
          activeTab={activeTab}
          onChange={(id) => setActiveTab(id as "dsa" | "webdev" | "core")}
        />

        {/* Toggle between List-wise and Phase-wise (Only for DSA & Web Dev) */}
        {activeTab !== "core" && (
          <div className="flex items-center gap-2 p-1 bg-[#0c101d] rounded-xl border border-white/10 shrink-0 text-xs font-medium">
            <span className="text-slate-400 pl-2 font-mono">View Mode:</span>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-[#48B5AC]/20 text-[#48B5AC] border border-[#48B5AC]/30 font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              List-wise
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
        )}
      </div>

      {/* Content Rendering */}
      <AnimatePresence mode="wait">
        {activeTab !== "core" ? (
          <motion.div
            key={`${activeTab}-${viewMode}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {viewMode === "list" ? (
              // List-wise view
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getTopics().map((topic) => {
                  const isDone = !!completedItems[topic.id];
                  return (
                    <div
                      key={topic.id}
                      onClick={() => toggleCheck(topic.id)}
                      className={`p-4 rounded-xl glass-card border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                        isDone
                          ? "bg-emerald-950/20 border-emerald-500/40"
                          : "border-white/10 hover:border-[#48B5AC]/30"
                      }`}
                    >
                      <button className="mt-0.5 text-slate-400 hover:text-[#48B5AC] transition-colors shrink-0">
                        {isDone ? (
                          <CheckSquare className="w-5 h-5 text-emerald-400 fill-emerald-950" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-400" />
                        )}
                      </button>

                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4
                            className={`text-sm font-bold transition-all ${
                              isDone ? "line-through text-slate-400" : "text-white"
                            }`}
                          >
                            {topic.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded shrink-0">
                            {topic.estimatedHours}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">{topic.desc}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#D68F5C]/10 text-[#D68F5C] border border-[#D68F5C]/20">
                            {topic.phase}
                          </span>
                          {topic.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Phase-wise view
              <div className="space-y-8">
                {PHASES.map((phase, pIdx) => {
                  const phaseTopics = getTopics().filter((t) => t.phase === phase);
                  if (phaseTopics.length === 0) return null;

                  return (
                    <div key={pIdx} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-[#48B5AC] font-mono font-bold flex items-center justify-center text-sm">
                          0{pIdx + 1}
                        </div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <span>{phase} Phase</span>
                          <span className="text-xs font-mono text-slate-400 font-normal">
                            ({phaseTopics.length} topics)
                          </span>
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-11">
                        {phaseTopics.map((topic) => {
                          const isDone = !!completedItems[topic.id];
                          return (
                            <div
                              key={topic.id}
                              onClick={() => toggleCheck(topic.id)}
                              className={`p-4 rounded-xl glass-card border transition-all cursor-pointer select-none flex items-start gap-3 ${
                                isDone
                                  ? "bg-emerald-950/20 border-emerald-500/40"
                                  : "border-white/10 hover:border-[#48B5AC]/30"
                              }`}
                            >
                              <button className="mt-0.5 text-slate-400 shrink-0">
                                {isDone ? (
                                  <CheckSquare className="w-5 h-5 text-emerald-400" />
                                ) : (
                                  <Square className="w-5 h-5 text-slate-400" />
                                )}
                              </button>
                              <div>
                                <h4
                                  className={`text-sm font-bold ${
                                    isDone ? "line-through text-slate-400" : "text-white"
                                  }`}
                                >
                                  {topic.name}
                                </h4>
                                <p className="text-xs text-slate-400 mt-1">{topic.desc}</p>
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
          </motion.div>
        ) : (
          // Core CSE Subjects View
          <motion.div
            key="core"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CORE_SUBJECTS.map((subject) => (
              <div
                key={subject.id}
                className={`p-6 rounded-2xl glass-card border ${
                  subject.isJNTUKSpecial ? "border-[#D68F5C]/40 bg-[#120e24]/70" : "border-white/10"
                } space-y-4 flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-[#48B5AC] bg-[#48B5AC]/10 border border-[#48B5AC]/30 px-2.5 py-0.5 rounded-full">
                      {subject.code}
                    </span>
                    {subject.isJNTUKSpecial && (
                      <span className="text-[10px] font-mono text-[#D68F5C] bg-[#D68F5C]/20 border border-[#D68F5C]/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" /> JNTUK / SRKR Special
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white">{subject.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{subject.desc}</p>

                  {/* Key interview topics */}
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      Key Interview Questions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {subject.keyTopics.map((kt, kIdx) => (
                        <span
                          key={kIdx}
                          className="text-[11px] bg-white/[0.05] border border-white/10 px-2 py-1 rounded-md text-slate-200 font-mono"
                        >
                          {kt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Why it matters note */}
                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-400 bg-black/20 p-3 rounded-xl">
                  <span className="font-semibold text-[#48B5AC] block mb-1">Why It Matters in Interviews:</span>
                  {subject.whyItMatters}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
