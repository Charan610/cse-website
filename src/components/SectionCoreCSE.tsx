"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, GraduationCap } from "lucide-react";

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

export function SectionCoreCSE() {
  return (
    <section id="core-cse" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-[#48B5AC] text-xs font-mono font-medium">
          <Cpu className="w-3.5 h-3.5" />
          <span>TAB 4 OF 7 • COMPUTER SCIENCE FUNDAMENTALS</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight font-sora">
          Core CSE & <span className="text-gradient-teal">JNTUK/SRKR Subjects</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Detailed guide on Operating Systems, DBMS, Networks, OOP, and university subjects (DMGT, DLCO) for interviews.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CORE_SUBJECTS.map((subject, idx) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            whileHover={{ y: -3, scale: 1.01 }}
            className={`p-6 rounded-2xl glass-card border ${
              subject.isJNTUKSpecial ? "border-[#D68F5C]/40 bg-[#18151A]/80" : "border-white/[0.08]"
            } space-y-4 flex flex-col justify-between`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-[#48B5AC] bg-[#48B5AC]/10 border border-[#48B5AC]/30 px-2.5 py-0.5 rounded-full">
                  {subject.code}
                </span>
                {subject.isJNTUKSpecial && (
                  <span className="text-[10px] font-mono text-[#D68F5C] bg-[#D68F5C]/20 border border-[#D68F5C]/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <GraduationCap className="w-3 h-3" /> JNTUK Special
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-white font-sora">{subject.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{subject.desc}</p>

              {/* Key topics */}
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

            {/* Why it matters */}
            <div className="mt-4 pt-3 border-t border-white/[0.08] text-xs text-slate-400 bg-black/20 p-3 rounded-xl">
              <span className="font-semibold text-[#48B5AC] block mb-1">Why It Matters in Interviews:</span>
              {subject.whyItMatters}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
