"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatCard } from "./StatCard";
import { IndustryChart } from "./Chart";
import { Code, Cpu, TrendingUp, Building2, ShieldCheck, Sparkles, Flame, CheckCircle2 } from "lucide-react";

// TODO: Replace with live verified company data & placement statistics from SRKR/Tier-2 placement portals
const COMPANY_TIERS = [
  {
    tier: "Tier 1: MAANG & Global Tech Giants",
    badge: "Package Expectation: ₹25L - ₹50L+",
    description: "Rigorously tests advanced DSA (DP, Graphs, Trees), System Design, and CS core depth.",
    accent: "border-[#4de8f0]/40 text-[#4de8f0] bg-[#4de8f0]/10",
    companies: [
      { name: "Google", role: "DSA (5 rounds) + LLD/HLD" },
      { name: "Amazon", role: "DSA + Leadership Principles" },
      { name: "Microsoft", role: "DSA + Problem Solving + OS" },
      { name: "Meta", role: "Speed DSA + Code Quality" },
      { name: "Netflix", role: "System Design + High-scale Java/Go" },
      { name: "Adobe", role: "DSA + Math + C++ Algorithms" },
      { name: "Apple", role: "Low-level OS + DSA + Systems" },
      { name: "Uber", role: "High-scale DSA + Graph Optimization" },
    ],
  },
  {
    tier: "Tier 2: High-Growth Product Unicorns",
    badge: "Package Expectation: ₹12L - ₹28L",
    description: "Evaluates strong Web Dev/Full-stack proficiency combined with solid medium-hard DSA.",
    accent: "border-[#9d7bff]/40 text-[#9d7bff] bg-[#9d7bff]/10",
    companies: [
      { name: "Flipkart", role: "DSA + Machine Coding Round" },
      { name: "Razorpay", role: "Full-Stack + Node/React + DSA" },
      { name: "Zoho", role: "C/C++ Logic + Advanced Programming" },
      { name: "Swiggy", role: "DSA + Microservices Architecture" },
      { name: "Zomato", role: "Web Dev + System Scalability" },
      { name: "CRED", role: "Frontend/Backend Deep Dives" },
      { name: "Atlassian", role: "Code Craftsmanship + DSA" },
      { name: "PhonePe", role: "Concurrency + Database Tuning" },
    ],
  },
  {
    tier: "Tier 3: SRKR & Tier-2 Campus Recruiters",
    badge: "Package Expectation: ₹4.5L - ₹10L",
    description: "Primary focus on DBMS/SQL, OOP concepts, Python/Java basics, Aptitude, and Web fundamentals.",
    accent: "border-[#38bdf8]/40 text-[#38bdf8] bg-[#38bdf8]/10",
    companies: [
      { name: "TCS (Digital/Ninja)", role: "Aptitude + SQL + Java/Python" },
      { name: "Infosys (Power Programmer)", role: "HackWithInfy DSA + Hackerrank" },
      { name: "Wipro (Turbo)", role: "Coding + Core CS Fundamentals" },
      { name: "Cognizant (GenC Next)", role: "DSA + SQL Queries + Web" },
      { name: "Accenture (FSE)", role: "Critical Reasoning + Pseudocode" },
      { name: "Hexaware", role: "Java/C# OOPs + SQL Joins" },
      { name: "Virtusa", role: "Full Stack Java/Spring Boot" },
      { name: "Persistent", role: "Data Structures + DBMS + OS" },
    ],
  },
];

export function SectionTrends() {
  return (
    <section id="trends" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#4de8f0]/10 via-[#9d7bff]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4de8f0]/10 border border-[#4de8f0]/30 text-[#4de8f0] text-xs font-mono font-medium">
          <Flame className="w-3.5 h-3.5 animate-bounce" />
          <span>SECTION I • INDUSTRY RECRUITMENT REALITY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Why DSA, Web Dev, and CS Fundamentals <span className="text-gradient-cyan">Run the Industry</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Top tech companies don't just test syntax—they filter candidates based on algorithmic thinking, system scalability, and core computing foundations. Here is how hiring breaks down.
        </p>
      </motion.div>

      {/* Animated Stat Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <StatCard
          value="85%"
          label="DSA Weightage in Shortlisting"
          subtext="Share of technical interview rounds at product companies that test data structures & problem solving."
          icon={Code}
          accentColor="cyan"
          trend="+12% YoY"
        />
        <StatCard
          value="3 - 5"
          label="Coding & Algo Rounds"
          subtext="Typical number of technical rounds candidates navigate before securing tier-1 software offers."
          icon={Cpu}
          accentColor="violet"
          trend="Product Standard"
        />
        <StatCard
          value="42%"
          label="Full-Stack Job Growth"
          subtext="Year-over-year increase in demand for candidates with React/Next.js and backend API project experience."
          icon={TrendingUp}
          accentColor="cyan"
          trend="High Demand"
        />
      </motion.div>

      {/* Interactive Recharts Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <IndustryChart />
      </motion.div>

      {/* Company Tiers Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
              <Building2 className="w-6 h-6 text-[#4de8f0]" />
              <span>Top Recruiting Tiers & Hiring Expectations</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Scroll horizontally to explore target companies from MAANG giants to SRKR campus recruiters.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#4de8f0]" />
            <span>Updated for 2026 Season</span>
          </div>
        </div>

        {/* Tier Cards */}
        <div className="space-y-6">
          {COMPANY_TIERS.map((tierGroup, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-2xl glass-card border border-white/[0.08] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium ${tierGroup.accent}`}>
                    {tierGroup.badge}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">{tierGroup.tier}</h4>
                </div>
                <p className="text-xs text-slate-400 max-w-md">{tierGroup.description}</p>
              </div>

              {/* Company chips horizontal scroll */}
              <div className="flex gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
                {tierGroup.companies.map((company, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-xl bg-[#0b0e1a]/90 border border-white/10 hover:border-[#4de8f0]/40 transition-all shrink-0 min-w-[200px] group/chip"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover/chip:text-[#4de8f0]">
                      <CheckCircle2 className="w-4 h-4 text-[#4de8f0] shrink-0" />
                      <span>{company.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 font-mono">{company.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
