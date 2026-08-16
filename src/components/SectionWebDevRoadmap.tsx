"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, CheckSquare, Square, ExternalLink, Zap, Layers, Sparkles, BookOpen } from "lucide-react";

interface TopicItem {
  id: string;
  name: string;
  desc: string;
  phase: "Foundation" | "Intermediate" | "Advanced" | "Interview-Ready";
  estimatedHours: string;
  tags: string[];
}

const WEBDEV_STAGES = [
  { id: "stage-1", num: "01", label: "Fundamentals" },
  { id: "stage-2", num: "02", label: "Frontend", highlight: true },
  { id: "stage-3", num: "03", label: "Backend" },
  { id: "stage-4", num: "04", label: "Data & Infra" },
  { id: "stage-5", num: "05", label: "Ship It" },
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

export function SectionWebDevRoadmap() {
  const [viewMode, setViewMode] = useState<"list" | "phase">("list");
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCompletedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalDone = Object.values(completedItems).filter(Boolean).length;
  const progressPercent = Math.round((totalDone / WEBDEV_TOPICS.length) * 100);

  return (
    <section id="webdev-roadmap" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-[#48B5AC] text-xs font-mono font-medium">
          <Globe className="w-3.5 h-3.5" />
          <span>TAB 4 OF 7 • FULL-STACK WEB PATHWAY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight font-sora">
          Web Dev <span className="text-gradient-teal">Stack & Roadmap</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          From HTML/JS fundamentals to Next.js full-stack architectures, databases, and cloud deployment.
        </p>
      </motion.div>

      {/* =========================================================================
          FIRST IN SECTION: FEATURED ANIMATED 5-STAGE FULL-STACK WEB DEV HERO
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -2 }}
        className="relative overflow-hidden rounded-2xl glass-panel border border-[#48B5AC]/30 p-6 sm:p-8 bg-gradient-to-br from-[#10141d] via-[#101217] to-[#17131b] shadow-2xl transition-all"
      >
        {/* Animated glowing beam line */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#48B5AC] to-transparent"
        />

        {/* Ambient Glow Pills */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#48B5AC]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#D68F5C]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#48B5AC]/15 border border-[#48B5AC]/30 text-[#48B5AC] text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#48B5AC] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5" />
              <span>FULL-STACK BUILD TRACK · 5 STAGES</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-sora leading-snug">
              The Road from Zero to Shipping Full-Stack (2026)
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Ordered the way real engineering teams and projects need them: HTML/CSS/JS core, TypeScript, React/Next.js App Router, Backend APIs, Docker/Infra, and AI/LLM production integration.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href="/webdev-roadmap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#48B5AC] to-[#3aa097] text-[#0A0A0C] font-mono text-xs font-bold shadow-lg shadow-[#48B5AC]/20 hover:shadow-[#48B5AC]/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>LAUNCH WEB DEV ROADMAP</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="/webdev-roadmap.html#stage-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#D68F5C]/15 border border-[#D68F5C]/40 text-[#D68F5C] hover:bg-[#D68F5C]/25 hover:text-white font-mono text-xs font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              title="Jump directly to Stage 02: Frontend (TypeScript, React, Next.js)"
            >
              <Zap className="w-4 h-4 text-[#D68F5C]" />
              <span>⚡ 02 · FRONTEND</span>
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
            {WEBDEV_STAGES.map((st) => (
              <a
                key={st.id}
                href={`/webdev-roadmap.html#${st.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all hover:scale-105 ${
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
            {totalDone} / {WEBDEV_TOPICS.length} Completed ({progressPercent}%)
          </div>
          <div className="w-32 bg-white/10 h-2 rounded-full overflow-hidden hidden sm:block">
            <div
              className="bg-gradient-to-r from-[#48B5AC] to-[#D68F5C] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 p-1 bg-[#121318] rounded-xl border border-white/[0.08] shrink-0 text-xs font-medium">
          <span className="text-slate-400 pl-2 font-mono">View:</span>
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

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WEBDEV_TOPICS.map((topic, idx) => {
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
                isDone ? "bg-emerald-950/20 border-emerald-500/40" : "border-white/[0.08] hover:border-[#48B5AC]/30"
              }`}
            >
              <button className="mt-0.5 text-slate-400 shrink-0">
                {isDone ? <CheckSquare className="w-5 h-5 text-emerald-400" /> : <Square className="w-5 h-5 text-slate-400" />}
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
    </section>
  );
}
