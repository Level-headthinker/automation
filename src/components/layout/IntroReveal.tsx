"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import { BRAND } from "@/lib/constants";

// Rotating "what Raahnex does" lines — so the wait reads as intentional.
const TIPS = [
  "Booking appointments while you sleep…",
  "Capturing every lead automatically…",
  "Answering patients in English & Urdu…",
  "Putting your front desk on autopilot…",
];

const MIN_MS = 6000;    // always visible at least this long (never a flash)
const MAX_MS = 30000;   // hard safety cap — never trap the user
const C = "#3b9eff";    // brand blue

export function IntroReveal() {
  const [show, setShow] = useState(true);   // start visible = a real loader
  const [tip, setTip] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    const start = Date.now();
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, MIN_MS - (Date.now() - start));
      window.setTimeout(() => setShow(false), wait);
    };

    if (reduce) {
      window.setTimeout(() => setShow(false), 500);
    } else if (document.readyState === "complete") {
      finish();                                   // page already loaded → respect MIN
    } else {
      window.addEventListener("load", finish, { once: true }); // dismiss when ready
    }

    const cap = window.setTimeout(finish, MAX_MS);            // safety
    const skip = () => { if (Date.now() - start > MIN_MS) finish(); }; // click to skip
    window.addEventListener("pointerdown", skip);
    const rotate = window.setInterval(() => setTip((p) => (p + 1) % TIPS.length), 1600);

    return () => {
      window.removeEventListener("load", finish);
      window.removeEventListener("pointerdown", skip);
      window.clearTimeout(cap);
      window.clearInterval(rotate);
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
                  transition={{ duration: 1.2, ease: "easeInOut" }}
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

            {/* ── Rotating tip ── */}
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
                transition={{ duration: MIN_MS / 1000, ease: "easeInOut" }}
              />
            </div>

            {/* skip hint */}
            <motion.p
              className="mt-5 text-[10px] tracking-widest uppercase"
              style={{ color: "#3d4f6b" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: MIN_MS / 1000 }}
            >
              Click to enter
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
