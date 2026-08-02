"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, CheckSquare, Square } from "lucide-react";

interface TopicItem {
  id: string;
  name: string;
  desc: string;
  phase: "Foundation" | "Intermediate" | "Advanced" | "Interview-Ready";
  estimatedHours: string;
  tags: string[];
}

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9d7bff]/10 border border-[#9d7bff]/30 text-[#9d7bff] text-xs font-mono font-medium">
          <Globe className="w-3.5 h-3.5" />
          <span>FULL-STACK WEB PATHWAY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-sora">
          Web Dev <span className="text-gradient-violet">Stack & Roadmap</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          From HTML/JS fundamentals to Next.js full-stack architectures, databases, and Vercel cloud deployment.
        </p>
      </motion.div>

      {/* Progress & Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="px-3 py-1 rounded-xl bg-[#9d7bff]/10 border border-[#9d7bff]/30 text-xs font-mono text-[#9d7bff] font-bold">
            {totalDone} / {WEBDEV_TOPICS.length} Completed ({progressPercent}%)
          </div>
          <div className="w-32 bg-white/10 h-2 rounded-full overflow-hidden hidden sm:block">
            <div
              className="bg-gradient-to-r from-[#9d7bff] to-[#4de8f0] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 p-1 bg-[#090c16] rounded-xl border border-white/10 shrink-0 text-xs font-medium">
          <span className="text-slate-400 pl-2 font-mono">View:</span>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "list"
                ? "bg-[#9d7bff]/20 text-[#9d7bff] border border-[#9d7bff]/30 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All List
          </button>
          <button
            onClick={() => setViewMode("phase")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              viewMode === "phase"
                ? "bg-[#4de8f0]/20 text-[#4de8f0] border border-[#4de8f0]/30 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Phase-wise
          </button>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WEBDEV_TOPICS.map((topic) => {
          const isDone = !!completedItems[topic.id];
          return (
            <div
              key={topic.id}
              onClick={() => toggleCheck(topic.id)}
              className={`p-4 rounded-xl glass-card border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                isDone ? "bg-emerald-950/20 border-emerald-500/40" : "border-white/10 hover:border-[#9d7bff]/30"
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
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#4de8f0]/10 text-[#4de8f0] border border-[#4de8f0]/20">
                    {topic.phase}
                  </span>
                  {topic.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
