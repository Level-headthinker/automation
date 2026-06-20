"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { BRAND } from "@/lib/constants";

// Rotating "what Raahnex does" lines — so a slow load feels intentional,
// not broken. The user always has something to read.
const TIPS = [
  "Booking appointments while you sleep…",
  "Capturing every lead automatically…",
  "Answering patients in English & Urdu…",
  "Putting your front desk on autopilot…",
];

const HOLD_MS = 2400;   // how long the intro stays before fading out
const C = "#3b9eff";    // brand blue on the dark intro

export function IntroReveal() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(0);

  useEffect(() => {
    // Show once per browser session only
    if (sessionStorage.getItem("raahnex_intro")) return;
    sessionStorage.setItem("raahnex_intro", "1");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShow(true);
    // lock scroll while the intro is up
    document.body.style.overflow = "hidden";

    const hold = reduce ? 600 : HOLD_MS;
    const hide = setTimeout(() => setShow(false), hold);
    const rotate = setInterval(() => setTip((p) => (p + 1) % TIPS.length), 700);

    return () => {
      clearTimeout(hide);
      clearInterval(rotate);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = ""; }}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#070b14" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* ambient glow */}
          <div aria-hidden className="absolute pointer-events-none"
            style={{
              width: 520, height: 520,
              background: "radial-gradient(circle, rgba(59,158,255,0.18), transparent 70%)",
              filter: "blur(40px)",
            }} />

          <div className="relative flex flex-col items-center">
            {/* ── Logo: draw-on ring + popping mark ── */}
            <div className="relative w-24 h-24 flex items-center justify-center mb-7">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle
                  cx="50" cy="50" r="46" fill="none" stroke={C} strokeWidth="2"
                  strokeLinecap="round" strokeDasharray="289"
                  initial={{ strokeDashoffset: 289, opacity: 0.3 }}
                  animate={{ strokeDashoffset: 0, opacity: 1 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                  style={{ filter: `drop-shadow(0 0 6px ${C})` }}
                />
              </svg>
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--gradient)", boxShadow: `0 0 24px ${C}` }}
                initial={{ scale: 0.4, opacity: 0, rotate: -20 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 }}
              >
                <Zap className="w-6 h-6 text-white" fill="white" />
              </motion.div>
            </div>

            {/* ── Wordmark ── */}
            <motion.span
              className="font-display font-black text-2xl tracking-[0.25em] uppercase"
              style={{ color: "#f1f5fb" }}
              initial={{ opacity: 0, y: 14, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.25em" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              {BRAND.name}
            </motion.span>

            {/* ── Rotating tip (the "not stuck" reassurance) ── */}
            <div className="h-5 mt-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={tip}
                  className="text-xs sm:text-sm text-center"
                  style={{ color: "#8b9dc3" }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {TIPS[tip]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* ── Progress bar ── */}
            <div className="mt-6 w-44 h-[3px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.08)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "var(--gradient)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: HOLD_MS / 1000, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
