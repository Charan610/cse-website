"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  Zap,
  Award,
  FolderGit2,
  TrendingUp,
  Sparkles,
  Users,
} from "lucide-react";

const RECRUITER_SKILLS = [
  { name: "Git & GitHub Workflow", category: "Core", priority: "Must Have" },
  { name: "DSA & Problem Solving", category: "Core", priority: "Must Have" },
  { name: "Full-Stack Web (React/Next + Node)", category: "Dev", priority: "High" },
  { name: "RESTful APIs & JSON Schema", category: "Dev", priority: "Must Have" },
  { name: "Database Design (PostgreSQL / MongoDB)", category: "Data", priority: "High" },
  { name: "System Design Awareness (LLD/HLD)", category: "Architecture", priority: "High" },
  { name: "Authentication & Security (JWT/OAuth)", category: "Security", priority: "High" },
  { name: "Docker Containerization Basics", category: "DevOps", priority: "Bonus" },
  { name: "Technical Communication & Resume Stories", category: "Soft Skills", priority: "Must Have" },
];

interface ProjectIdea {
  id: string;
  title: string;
  category: "DSA Visualizer" | "Full-Stack CRUD" | "AI-Integrated" | "Realtime System" | "OS Simulator";
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  techStack: string[];
  resumeImpact: string;
  badgeColor: string;
}

const PROJECT_IDEAS: ProjectIdea[] = [
  {
    id: "proj-1",
    title: "Interactive DSA Algorithm Visualizer",
    category: "DSA Visualizer",
    description: "An animated step-by-step canvas rendering graph traversals (BFS/DFS), Sorting algorithms, and Dynamic Programming state transitions in real time.",
    difficulty: "Intermediate",
    techStack: ["React", "TypeScript", "Canvas API / Framer Motion", "Tailwind CSS"],
    resumeImpact: "Demonstrates deep understanding of algorithm internals, time complexity, and data representation.",
    badgeColor: "bg-[#48B5AC]/10 text-[#48B5AC] border-[#48B5AC]/30",
  },
  {
    id: "proj-2",
    title: "Full-Stack Campus Placement Portal",
    category: "Full-Stack CRUD",
    description: "End-to-end recruitment management dashboard with role-based auth (Students, TPO Officers, Recruiters), resume parsing, and interview slot booking.",
    difficulty: "Intermediate",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    resumeImpact: "Proves production-grade full-stack skills, relational database design, and real-world CRUD execution.",
    badgeColor: "bg-[#D68F5C]/10 text-[#D68F5C] border-[#D68F5C]/30",
  },
  {
    id: "proj-3",
    title: "AI-Powered Code Reviewer & DSA Coach",
    category: "AI-Integrated",
    description: "LLM-driven assistant that analyzes student code submissions, highlights time-complexity inefficiencies, and generates test case hints without revealing answers.",
    difficulty: "Advanced",
    techStack: ["React", "Next.js Route Handlers", "Google Gemini API", "Tailwind CSS"],
    resumeImpact: "Sets candidate apart immediately by demonstrating generative AI integration and modern API design.",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "proj-4",
    title: "Real-Time Collaborative Code Editor",
    category: "Realtime System",
    description: "Multi-user browser code workspace with real-time cursor tracking, syntax highlighting, and WebSockets synchronization.",
    difficulty: "Advanced",
    techStack: ["React", "Node.js", "Socket.io / WebSockets", "Monaco Editor"],
    resumeImpact: "Highlights awareness of network latency, pub/sub concurrency, and WebSocket protocols.",
    badgeColor: "bg-[#48B5AC]/10 text-[#48B5AC] border-[#48B5AC]/30",
  },
  {
    id: "proj-5",
    title: "Mini OS Shell & Memory Allocator Simulator",
    category: "OS Simulator",
    description: "Web interface modeling Operating System process scheduling algorithms (Round Robin, Priority) and First-Fit memory allocation blocks.",
    difficulty: "Intermediate",
    techStack: ["TypeScript", "React", "Chart.js", "OS Mechanics"],
    resumeImpact: "Directly bridges core CSE academic concepts (OS/DLCO) with visual frontend software engineering.",
    badgeColor: "bg-[#D68F5C]/10 text-[#D68F5C] border-[#D68F5C]/30",
  },
  {
    id: "proj-6",
    title: "High-Concurrency E-Commerce Order API",
    category: "Full-Stack CRUD",
    description: "Backend microservice engineered with Redis caching and rate-limiting to prevent race conditions during high-volume flash sales.",
    difficulty: "Advanced",
    techStack: ["Node.js / Go", "Redis", "PostgreSQL", "Docker", "Swagger Docs"],
    resumeImpact: "High impact for product company backend roles (Flipkart, Swiggy, Amazon).",
    badgeColor: "bg-[#48B5AC]/10 text-[#48B5AC] border-[#48B5AC]/30",
  },
];

export function SectionInternships() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "DSA Visualizer", "Full-Stack CRUD", "AI-Integrated", "Realtime System", "OS Simulator"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECT_IDEAS
      : PROJECT_IDEAS.filter((p) => p.category === selectedCategory);

  return (
    <section id="internships" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-[#48B5AC]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-[#48B5AC] text-xs font-mono font-medium">
          <Briefcase className="w-3.5 h-3.5" />
          <span>TAB 7 OF 7 • CAREER EXECUTION &amp; PORTFOLIO</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight font-sora">
          Projects & Skills That <span className="text-gradient-teal">Get You Hired</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Recruiters spend an average of 6 seconds reviewing a resume. Stand out with verified industry skills, resume-worthy project builds, and internship experience.
        </p>
      </motion.div>

      {/* SUB-BLOCK A: Skills Recruiters Look For */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#48B5AC]" />
              <span>Core Skills Recruiters Scan For</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Essential skill keywords prioritized during initial ATS filters and technical HR screens.
            </p>
          </div>
          <span className="hidden sm:inline-flex text-xs font-mono text-[#48B5AC] bg-[#48B5AC]/10 px-3 py-1 rounded-full border border-[#48B5AC]/30">
            Keyword Cloud
          </span>
        </div>

        {/* Skill tag cloud */}
        <div className="flex flex-wrap gap-2.5">
          {RECRUITER_SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-3 rounded-xl glass-card border border-white/[0.08] hover:border-[#48B5AC]/40 flex items-center gap-2.5 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#48B5AC] shadow-[0_0_8px_#48B5AC]" />
              <span className="font-mono text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                {skill.name}
              </span>
              <span
                className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                  skill.priority === "Must Have"
                    ? "bg-[#48B5AC]/15 text-[#48B5AC] border border-[#48B5AC]/30"
                    : "bg-white/5 text-slate-400"
                }`}
              >
                {skill.priority}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SUB-BLOCK B: Reliable Project Ideas */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-[#D68F5C]" />
              <span>6 High-Impact Project Ideas for Your Resume</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Avoid generic todo-list apps. Build projects that demonstrate algorithmic, database, and system-level thinking.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-[#48B5AC]/20 text-[#48B5AC] border border-[#48B5AC]/40 font-semibold"
                    : "bg-white/[0.04] text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="p-6 rounded-2xl glass-card border border-white/[0.08] flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
                    {project.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      project.difficulty === "Advanced"
                        ? "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {project.difficulty}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-[#48B5AC] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#48B5AC] transition-colors shrink-0" />
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono bg-[#0A0A0D] border border-white/10 px-2 py-0.5 rounded text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume Impact callout */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] text-xs text-slate-400 bg-black/20 p-3 rounded-xl">
                <span className="font-semibold text-[#D68F5C] block mb-0.5">Resume & Interview Value:</span>
                {project.resumeImpact}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SUB-BLOCK C: How Internships Help */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="p-6 sm:p-8 rounded-2xl glass-panel border border-[#48B5AC]/30 space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#48B5AC] uppercase tracking-wider">Career Catalyst</span>
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#48B5AC]" />
              <span>How Even One Internship Dramatically Changes Your Career Trajectory</span>
            </h3>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 shrink-0">
            3x Higher Interview Callback Rate
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-[#121318] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <TrendingUp className="w-4 h-4 text-[#48B5AC]" />
              <span>1. Resume Filter Bypass</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Recruiters filter out 70%+ of cold student resumes without prior work experience. A single 2-month internship immediately moves your profile to the top candidate bucket.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#121318] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Sparkles className="w-4 h-4 text-[#D68F5C]" />
              <span>2. Authentic Interview Stories</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In technical HR & manager rounds, answering behavioral questions (`Describe a production bug you fixed` or `How did you optimize API latency?`) becomes natural and convincing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#121318] border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>3. PPOs & Referral Networks</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Over 40% of tech interns receive Pre-Placement Offers (PPOs) before campus placement season even starts, bypassing competitive college pool drives entirely.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
