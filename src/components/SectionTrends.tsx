"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatCard } from "./StatCard";
import { IndustryChart } from "./Chart";
import { Code, Cpu, TrendingUp, Flame, Compass } from "lucide-react";

export function SectionTrends() {
  return (
    <section id="trends" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-3xl mx-auto space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#48B5AC]/10 border border-[#48B5AC]/30 text-[#48B5AC] text-xs font-mono font-medium">
          <Compass className="w-3.5 h-3.5" />
          <span>TAB 1 OF 7 • INDUSTRY RECRUITMENT REALITY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight font-sora">
          Why DSA, Web Dev, & CS Fundamentals <span className="text-gradient-teal">Run the Industry</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Top tech companies filter candidates based on algorithmic thinking, system scalability, and core computing foundations. Here is how hiring breaks down.
        </p>
      </motion.div>

      {/* Animated Stat Cards */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <StatCard
          value="85%"
          label="DSA Weightage in Shortlisting"
          subtext="Share of technical interview rounds at product companies that test data structures & problem solving."
          icon={Code}
          accentColor="teal"
          trend="+12% YoY"
        />
        <StatCard
          value="3 - 5"
          label="Coding & Algo Rounds"
          subtext="Typical number of technical rounds candidates navigate before securing tier-1 software offers."
          icon={Cpu}
          accentColor="copper"
          trend="Product Standard"
        />
        <StatCard
          value="42%"
          label="Full-Stack Job Growth"
          subtext="Year-over-year increase in demand for candidates with React/Next.js and backend API project experience."
          icon={TrendingUp}
          accentColor="teal"
          trend="High Demand"
        />
      </motion.div>

      {/* Interactive Recharts Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <IndustryChart />
      </motion.div>
    </section>
  );
}
