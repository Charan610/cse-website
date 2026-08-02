"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Sparkles, ExternalLink } from "lucide-react";

export function Toast() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Keep visible for 15 seconds so users can easily see & tap Instagram link
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 max-w-sm w-[calc(100vw-2.5rem)] sm:w-auto"
        >
          <div className="relative p-4 rounded-2xl glass-panel bg-[#09111e]/95 border border-[#4de8f0]/40 shadow-[0_10px_40px_rgba(77,232,240,0.25)] backdrop-blur-2xl group overflow-hidden">
            {/* Top Cyan-to-Violet Animated Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#4de8f0] via-[#9d7bff] to-[#4de8f0] animate-pulse" />

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#4de8f0]/25 to-[#9d7bff]/25 text-[#4de8f0] border border-[#4de8f0]/40 shrink-0 shadow-[0_0_15px_rgba(77,232,240,0.3)]">
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: "6s" }} />
              </div>

              <div className="flex-1 min-w-0 pr-2 space-y-2">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-200">
                  Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline animate-bounce" /> by{" "}
                  <span className="font-bold text-white font-sora">Charan</span>, with AI
                </div>

                <a
                  href="https://instagram.com/PLACEHOLDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#4de8f0]/15 via-[#9d7bff]/20 to-[#4de8f0]/15 border border-[#4de8f0]/40 text-xs font-mono font-semibold text-[#4de8f0] hover:text-white hover:border-[#4de8f0] transition-all group/link shadow-sm hover:shadow-[0_0_20px_rgba(77,232,240,0.3)]"
                >
                  <svg className="w-3.5 h-3.5 text-[#9d7bff] group-hover/link:text-[#4de8f0] transition-colors fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>My Instagram Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-[#4de8f0] transition-colors" />
                </a>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0"
                aria-label="Dismiss toast"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 15-second progress bar indicator */}
            <div className="mt-3 w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 15, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#4de8f0] to-[#9d7bff]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
