"use client";

import React, { useState } from "react";
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
  Cell,
} from "recharts";
import { BarChart3, Radar as RadarIcon } from "lucide-react";

// TODO: Update these hiring emphasis weights with exact latest 2026 industry survey dataset when available.
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
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#4de8f0]/10 text-[#4de8f0] border border-[#4de8f0]/30">
              Interactive Data
            </span>
          </h3>
          <p className="text-xs text-slate-400">
            Comparing relative recruitment weightage between Product (MAANG/Unicorn) vs Service/Campus roles.
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 p-1 bg-[#090c16] rounded-xl border border-white/10 shrink-0">
          <button
            onClick={() => setChartType("bar")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              chartType === "bar"
                ? "bg-[#4de8f0]/20 text-[#4de8f0] border border-[#4de8f0]/40 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Bar View</span>
          </button>
          <button
            onClick={() => setChartType("radar")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              chartType === "radar"
                ? "bg-[#9d7bff]/20 text-[#9d7bff] border border-[#9d7bff]/40 font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <RadarIcon className="w-3.5 h-3.5" />
            <span>Radar View</span>
          </button>
        </div>
      </div>

      {/* Chart container */}
      <div className="w-full h-[320px] sm:h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart data={HIRING_DATA} margin={{ top: 20, right: 20, left: -20, bottom: 25 }}>
              <XAxis
                dataKey="domain"
                stroke="#94a3b8"
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: "#334155" }}
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
              <YAxis stroke="#94a3b8" fontSize={11} domain={[0, 100]} unit="%" axisLine={{ stroke: "#334155" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0d111d",
                  borderColor: "rgba(77, 232, 240, 0.3)",
                  borderRadius: "12px",
                  color: "#f8fafc",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
                itemStyle={{ fontSize: "12px", padding: "2px 0" }}
                labelStyle={{ fontWeight: "bold", color: "#4de8f0", marginBottom: "4px" }}
              />
              <Legend
                wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }}
                iconType="circle"
              />
              <Bar
                dataKey="productCompanies"
                name="Product / Tier-1 Firms (%)"
                fill="url(#cyanGradient)"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="serviceCompanies"
                name="Campus / Service Firms (%)"
                fill="url(#violetGradient)"
                radius={[6, 6, 0, 0]}
              />
              <defs>
                <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4de8f0" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#4de8f0" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="violetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9d7bff" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#9d7bff" stopOpacity={0.3} />
                </linearGradient>
              </defs>
            </BarChart>
          ) : (
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RADAR_DATA}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={11} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" fontSize={10} />
              <Radar
                name="Product Companies (MAANG / Unicorns)"
                dataKey="tier1Product"
                stroke="#4de8f0"
                fill="#4de8f0"
                fillOpacity={0.35}
              />
              <Radar
                name="Campus Recruiters (TCS, Wipro, Infosys, etc.)"
                dataKey="tier2Campus"
                stroke="#9d7bff"
                fill="#9d7bff"
                fillOpacity={0.3}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0d111d",
                  borderColor: "rgba(157, 123, 255, 0.3)",
                  borderRadius: "12px",
                  color: "#f8fafc",
                }}
              />
              <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px" }} />
            </RadarChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>* Data represents approximate industry weighting across hiring rounds</span>
        <span className="font-mono text-slate-500">Source: Industry Recruiters & Campus Insights (SRKR/Tier-2)</span>
      </div>
    </div>
  );
}
