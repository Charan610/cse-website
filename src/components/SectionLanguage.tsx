"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs } from "./Tabs";
import { Code2, Zap, Check, X, ShieldAlert, Sparkles, Scale, Terminal } from "lucide-react";

const LANGUAGE_DETAILS = {
  cpp: {
    name: "C++ (STL)",
    tagline: "The Unrivaled Speed King for Competitive Programming",
    syntaxFeel: "Low-level feel with direct memory management pointers, fast I/O, and rich STL templates.",
    stl: "std::vector, std::unordered_map, std::priority_queue, std::set, std::sort (IntroSort).",
    interviewUsage: "Globally accepted at 100% of tech firms. Preferred for high-frequency trading and backend systems.",
    cpSpeed: "0.01s - Lightning fast. Built-in fast I/O (`cin.tie(NULL)`) makes it the gold standard in competitive coding.",
    pros: [
      "Blazing execution speed — essential for strict time limits on Codeforces & LeetCode Hard.",
      "Rich Standard Template Library (STL) provides optimized data structures.",
      "Teaches deep memory & pointer mechanics (useful for OS and C/C++ interview questions).",
    ],
    cons: [
      "Steeper learning curve with manual memory concepts & verbose template syntax.",
      "No built-in BigInteger support for handling huge numbers beyond uint64_t.",
    ],
    verdict: "Best if: You target competitive programming (Codeforces/CodeChef) or want peak execution speed for MAANG coding rounds.",
    codeSnippet: `// C++ Fast I/O & Vector Sorting
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    vector<int> nums = {5, 2, 9, 1};
    sort(nums.begin(), nums.end());
    return 0;
}`,
  },
  java: {
    name: "Java (Collections)",
    tagline: "The Corporate Enterprise & Campus Placement Benchmark",
    syntaxFeel: "Strictly object-oriented, strongly typed, verbose syntax, garbage collection.",
    stl: "ArrayList, HashMap, PriorityQueue, TreeSet, Collections.sort (Timsort).",
    interviewUsage: "Standard language taught at most engineering universities (SRKR/JNTUK). Highly favored in product & service interviews.",
    cpSpeed: "0.05s - Very fast after JVM warm-up. Easily passes LeetCode TLE limits when written efficiently.",
    pros: [
      "Clean object-oriented structure makes complex graph & OOP interview questions intuitive.",
      "Built-in BigInteger and BigDecimal for high-precision arithmetic.",
      "Huge industry hiring demand for Spring Boot, Android, and enterprise backend roles.",
    ],
    cons: [
      "Boilerplate syntax (e.g. `public static void main(String[] args)`) requires more typing under pressure.",
      "Slightly slower startup time compared to compiled C++ binary.",
    ],
    verdict: "Best if: You prefer structured OOP, target campus placements (SRKR/JNTUK), or aim for Java Backend & Enterprise roles.",
    codeSnippet: `// Java HashMap & PriorityQueue
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        pq.add(42);
    }
}`,
  },
  python: {
    name: "Python 3",
    tagline: "Rapid Prototyping & Ultra-Clean Code Syntax",
    syntaxFeel: "Pseudo-code like clarity, dynamic typing, minimal syntax noise, highly expressive.",
    stl: "list, dict, set, collections.deque, heapq module, bisect module.",
    interviewUsage: "Widely accepted in 98%+ of tech interviews. Excellent for short timed coding interviews.",
    cpSpeed: "0.20s - Slower execution speed. May hit TLE on tight CP platforms like Codeforces unless optimized.",
    pros: [
      "Write 50% fewer lines of code during 45-minute timed interview rounds.",
      "Arbitrary precision integers by default — zero risk of integer overflow bugs.",
      "Natural bridge to AI, Data Science, and Machine Learning workflows.",
    ],
    cons: [
      "Interpreted execution speed can occasionally trigger Time Limit Exceeded (TLE).",
      "Hides low-level pointer/memory mechanics which might leave gaps during OS/System interviews.",
    ],
    verdict: "Best if: You want to code fast during timed interviews, eliminate syntax overhead, or focus on Web/AI engineering.",
    codeSnippet: `# Python Heap & Dictionary Comprehension
import heapq

nums = [5, 2, 9, 1]
heapq.heapify(nums)  # O(N) min-heap creation
top_val = heapq.heappop(nums)
freq = {x: nums.count(x) for x in set(nums)}`,
  },
};

const MATRIX_DATA = [
  { metric: "Learning Curve", cpp: "Moderate - Hard", java: "Moderate", python: "Very Easy" },
  { metric: "Interview Acceptance", cpp: "100%", java: "100%", python: "98%" },
  { metric: "Community & STL Docs", cpp: "Extensive", java: "Massive", python: "Huge" },
  { metric: "Execution Speed", cpp: "⚡⚡⚡⚡⚡ (Fastest)", java: "⚡⚡⚡⚡ (Fast)", python: "⚡⚡⚡ (Moderate)" },
  { metric: "Syntax Verbosity", cpp: "High", java: "Very High", python: "Minimal" },
];

export function SectionLanguage() {
  const [activeLang, setActiveLang] = useState<"cpp" | "java" | "python">("cpp");
  const selected = LANGUAGE_DETAILS[activeLang];

  return (
    <section id="language" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#9d7bff]/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#9d7bff]/10 border border-[#9d7bff]/30 text-[#9d7bff] text-xs font-mono font-medium">
          <Code2 className="w-3.5 h-3.5" />
          <span>SECTION II • LANGUAGE ARCHITECTURE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          C++, Java, or Python for DSA — <span className="text-gradient-violet">Which Should You Learn?</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          The best DSA language is the one you know deeply. Compare execution speeds, standard libraries, syntax verbosity, and interview trade-offs.
        </p>
      </motion.div>

      {/* Language Selector Tabs */}
      <div className="flex justify-center mb-10">
        <Tabs
          tabs={[
            { id: "cpp", label: "C++ (STL)", badge: "CP Gold Standard" },
            { id: "java", label: "Java (Collections)", badge: "Campus & Corporate" },
            { id: "python", label: "Python 3", badge: "Rapid Syntax" },
          ]}
          activeTab={activeLang}
          onChange={(id) => setActiveLang(id as "cpp" | "java" | "python")}
        />
      </div>

      {/* Main Tab Content Card */}
      <motion.div
        key={activeLang}
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16"
      >
        {/* Left column: Overview & Pros/Cons */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#4de8f0] uppercase tracking-wider">{selected.tagline}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{selected.name}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[#090d18] border border-white/5 space-y-1">
                <span className="text-slate-400 font-mono">Syntax & Feel</span>
                <p className="text-slate-200">{selected.syntaxFeel}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#090d18] border border-white/5 space-y-1">
                <span className="text-slate-400 font-mono">Standard Library</span>
                <p className="text-slate-200">{selected.stl}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#090d18] border border-white/5 space-y-1">
                <span className="text-slate-400 font-mono">Interview Usage</span>
                <p className="text-slate-200">{selected.interviewUsage}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#090d18] border border-white/5 space-y-1">
                <span className="text-slate-400 font-mono">CP Speed Rating</span>
                <p className="text-[#4de8f0] font-semibold">{selected.cpSpeed}</p>
              </div>
            </div>

            {/* Pros and Cons lists */}
            <div className="space-y-4 pt-2 border-t border-white/10">
              <div>
                <h4 className="text-sm font-semibold text-emerald-400 flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4" /> Key Advantages for DSA
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selected.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-rose-400 flex items-center gap-2 mb-2">
                  <X className="w-4 h-4" /> Potential Drawbacks
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selected.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#4de8f0]/10 to-[#9d7bff]/10 border border-[#4de8f0]/30 text-xs sm:text-sm font-medium text-slate-200">
              <span className="font-bold text-[#4de8f0] block mb-0.5">Verdict:</span>
              {selected.verdict}
            </div>
          </div>
        </div>

        {/* Right column: Code snippet display */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="h-full p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#4de8f0]" />
                <span className="text-xs font-mono text-slate-300">DSA Syntax Feel</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-300">
                {activeLang.toUpperCase()}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#05070c] border border-white/5 overflow-x-auto font-mono text-xs text-emerald-400 leading-relaxed">
              <pre>{selected.codeSnippet}</pre>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <Zap className="w-4 h-4 text-[#9d7bff]" />
                <span>Pro Interview Tip</span>
              </div>
              <p>
                Recruiters test your <strong>algorithmic logic</strong>, not language trivia. Stick with ONE language for 6+ months until you master Pointers/Collections effortlessly.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Side-by-side Matrix Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#4de8f0]" />
          <span>Side-by-Side Language Matrix</span>
        </h3>

        <div className="overflow-x-auto rounded-2xl glass-panel border border-white/10">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04] font-mono text-slate-300">
                <th className="p-4">Metric / Parameter</th>
                <th className="p-4 text-[#4de8f0]">C++ (STL)</th>
                <th className="p-4 text-[#9d7bff]">Java (Collections)</th>
                <th className="p-4 text-[#38bdf8]">Python 3</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {MATRIX_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-semibold text-white">{row.metric}</td>
                  <td className="p-4 font-mono">{row.cpp}</td>
                  <td className="p-4 font-mono">{row.java}</td>
                  <td className="p-4 font-mono">{row.python}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Neutral Recommendation Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d1222] via-[#121028] to-[#0d1222] border border-[#9d7bff]/30 space-y-3"
      >
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#9d7bff]" />
          <span>Neutral Verdict: Which Should You Pick Today?</span>
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          If you are starting from scratch in 1st/2nd year, pick <strong>C++</strong> if you want competitive programming, or <strong>Java</strong> if you follow SRKR/JNTUK syllabus and campus drives. If you are in 3rd/4th year with limited time before interviews, pick <strong>Python</strong> to implement solutions rapidly. Switching languages later takes only 1-2 weeks once concepts are clear.
        </p>
      </motion.div>
    </section>
  );
}
