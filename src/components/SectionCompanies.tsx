"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, CheckCircle2, Award } from "lucide-react";

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

export function SectionCompanies() {
  return (
    <section id="companies" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4de8f0]/10 border border-[#4de8f0]/30 text-[#4de8f0] text-xs font-mono font-medium">
          <Award className="w-3.5 h-3.5" />
          <span>RECRUITER TIERS & PLACEMENT BENCHMARKS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-sora">
          Top Recruiting Tiers & <span className="text-gradient-cyan">Hiring Expectations</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          From MAANG tech giants to SRKR campus recruiters, explore what interview rounds expect across package tiers.
        </p>
      </motion.div>

      {/* Tier Cards */}
      <div className="space-y-6 pt-4">
        {COMPANY_TIERS.map((tierGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl glass-card border border-white/[0.08] space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-1">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-medium ${tierGroup.accent}`}>
                  {tierGroup.badge}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 font-sora">{tierGroup.tier}</h3>
              </div>
              <p className="text-xs text-slate-300 max-w-md">{tierGroup.description}</p>
            </div>

            {/* Company chips horizontal scroll */}
            <div className="flex gap-3 overflow-x-auto pb-2 pt-2 no-scrollbar scroll-smooth">
              {tierGroup.companies.map((company, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3.5 rounded-xl bg-[#081220] border border-white/10 hover:border-[#4de8f0]/40 transition-all shrink-0 min-w-[210px] group/chip"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover/chip:text-[#4de8f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#4de8f0] shrink-0" />
                    <span>{company.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">{company.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
