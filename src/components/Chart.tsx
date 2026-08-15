"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import { BarChart3, Radar as RadarIcon } from "lucide-react";

const HIRING_DATA = [
  { domain: "DSA & Problem Solving", productCompanies: 92, serviceCompanies: 65, importance: "Critical" },
  { domain: "Web Development", productCompanies: 85, serviceCompanies: 78, importance: "High" },
  { domain: "Core CS (DBMS/OS/CN)", productCompanies: 78, serviceCompanies: 82, importance: "High" },
  { domain: "OOP & System Design", productCompanies: 88, serviceCompanies: 60, importance: "Critical" },
  { domain: "Projects & Git", productCompanies: 82, serviceCompanies: 70, importance: "Medium" },
];

const RADAR_DATA = [
  { subject: "DSA Algorithms", tier1Product: 95, tier2Campus: 60 },
  { subject: "Web Dev & Frameworks", tier1Product: 80, tier2Campus: 75 },
  { subject: "DBMS & SQL", tier1Product: 85, tier2Campus: 90 },
  { subject: "Operating Systems", tier1Product: 80, tier2Campus: 70 },
  { subject: "Computer Networks", tier1Product: 75, tier2Campus: 65 },
  { subject: "OOP Concepts", tier1Product: 90, tier2Campus: 85 },
];

export function IndustryChart() {
  const [chartType, setChartType] = useState<"bar" | "radar">("bar");

  return (
    <div className="w-full rounded-2xl glass-panel p-5 sm:p-7 border border-white/[0.08]">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Interview Weightage by Domain</span>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#48B5AC]/10 text-[#48B5AC] border border-[#48B5AC]/30">
              Interactive Data
            </span>
          </h3>
          <p className="text-xs text-slate-400">
            Comparing relative recruitment weightage between Product (MAANG/Unicorn) vs Service/Campus roles.
          </p>
        </div>

        {/* View mode toggle with Framer Motion */}
        <div className="flex items-center gap-1 p-1 bg-[#0A0A0D] rounded-xl border border-white/[0.08] shrink-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setChartType("bar")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              chartType === "bar"
                ? "bg-[#48B5AC]/20 text-[#48B5AC] border border-[#48B5AC]/40 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Bar View</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setChartType("radar")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              chartType === "radar"
                ? "bg-[#D68F5C]/20 text-[#D68F5C] border border-[#D68F5C]/40 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <RadarIcon className="w-3.5 h-3.5" />
            <span>Radar View</span>
          </motion.button>
        </div>
      </div>

      {/* Chart container with animated crossfade */}
      <div className="w-full h-[320px] sm:h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={chartType}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "bar" ? (
                <BarChart data={HIRING_DATA} margin={{ top: 20, right: 20, left: -20, bottom: 25 }}>
                  <XAxis
                    dataKey="domain"
                    stroke="#94a3b8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: "#242731" }}
                    interval={0}
                    tick={({ x, y, payload }) => (
                      <g transform={`translate(${x},${y})`}>
                        <text
                          x={0}
                          y={0}
                          dy={12}
                          textAnchor="end"
                          fill="#94a3b8"
                          fontSize={11}
                          transform="rotate(-20)"
                        >
                          {payload.value}
                        </text>
                      </g>
                    )}
                  />
                  <YAxis stroke="#94a3b8" fontSize={11} domain={[0, 100]} unit="%" axisLine={{ stroke: "#242731" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#121318",
                      borderColor: "rgba(72, 181, 172, 0.3)",
                      borderRadius: "12px",
                      color: "#f8fafc",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                    }}
                    itemStyle={{ fontSize: "12px", padding: "2px 0" }}
                    labelStyle={{ fontWeight: "bold", color: "#48B5AC", marginBottom: "4px" }}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }}
                    iconType="circle"
                  />
                  <Bar
                    dataKey="productCompanies"
                    name="Product / Tier-1 Firms (%)"
                    fill="url(#tealGradient)"
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={true}
                    animationDuration={850}
                    animationEasing="ease-out"
                  />
                  <Bar
                    dataKey="serviceCompanies"
                    name="Campus / Service Firms (%)"
                    fill="url(#copperGradient)"
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={true}
                    animationDuration={850}
                    animationEasing="ease-out"
                  />
                  <defs>
                    <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#48B5AC" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#48B5AC" stopOpacity={0.3} />
                    </linearGradient>
                    <linearGradient id="copperGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D68F5C" stopOpacity={0.9} />
                      <stop offset="100%" stopColor="#D68F5C" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                </BarChart>
              ) : (
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RADAR_DATA}>
                  <PolarGrid stroke="#242731" />
                  <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={11} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#334155" fontSize={10} />
                  <Radar
                    name="Product Companies (Tier-1 / High Scale)"
                    dataKey="tier1Product"
                    stroke="#48B5AC"
                    fill="#48B5AC"
                    fillOpacity={0.35}
                    isAnimationActive={true}
                    animationDuration={850}
                    animationEasing="ease-out"
                  />
                  <Radar
                    name="Campus Recruiters (TCS, Wipro, Infosys, etc.)"
                    dataKey="tier2Campus"
                    stroke="#D68F5C"
                    fill="#D68F5C"
                    fillOpacity={0.3}
                    isAnimationActive={true}
                    animationDuration={850}
                    animationEasing="ease-out"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#121318",
                      borderColor: "rgba(214, 143, 92, 0.3)",
                      borderRadius: "12px",
                      color: "#f8fafc",
                    }}
                  />
                  <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px" }} />
                </RadarChart>
              )}
            </ResponsiveContainer>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>* Data represents approximate industry weighting across hiring rounds</span>
        <span className="font-mono text-slate-500">Source: Industry Recruiters & Campus Insights</span>
      </div>
    </div>
  );
}
