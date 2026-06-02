"use client";

import { motion } from "framer-motion";

interface LightRaysProps {
  /** intensity: 0–1 */
  intensity?: number;
  className?: string;
}

export function LightRays({ intensity = 1, className = "" }: LightRaysProps) {
  const alpha = (base: number) => base * intensity;

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* ── Central bright source point ── */}
      <div
        className="absolute"
        style={{
          top: "-4px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "2px",
          height: "2px",
          boxShadow: [
            `0 0 40px 40px rgba(124,58,237,${alpha(0.22)})`,
            `0 0 100px 80px rgba(124,58,237,${alpha(0.12)})`,
            `0 0 180px 120px rgba(6,182,212,${alpha(0.08)})`,
            `0 0 280px 160px rgba(124,58,237,${alpha(0.05)})`,
          ].join(","),
        }}
      />

      {/* ── Conic gradient ray fan ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "90vh",
          background: `conic-gradient(
            from 260deg at 50% 0%,
            transparent 0deg,
            rgba(124,58,237,${alpha(0.055)}) 8deg,
            transparent 16deg,
            transparent 22deg,
            rgba(6,182,212,${alpha(0.04)}) 30deg,
            transparent 38deg,
            transparent 46deg,
            rgba(124,58,237,${alpha(0.05)}) 54deg,
            transparent 62deg,
            transparent 72deg,
            rgba(6,182,212,${alpha(0.035)}) 80deg,
            transparent 88deg,
            transparent 100deg,
            rgba(124,58,237,${alpha(0.045)}) 108deg,
            transparent 116deg
          )`,
          maskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
      />

      {/* ── Soft radial glow spread ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "140%",
          height: "60vh",
          background: `radial-gradient(
            ellipse 55% 45% at 50% 0%,
            rgba(124,58,237,${alpha(0.14)}) 0%,
            rgba(6,182,212,${alpha(0.07)}) 30%,
            transparent 65%
          )`,
          filter: "blur(24px)",
        }}
      />

      {/* ── Animated slow-pulse overlay ── */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "40vh",
          background: `radial-gradient(
            ellipse 40% 30% at 50% 0%,
            rgba(124,58,237,${alpha(0.1)}) 0%,
            transparent 70%
          )`,
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Individual sharp rays (thin lines) ── */}
      {[-55, -38, -22, -8, 8, 22, 38, 55].map((angle, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            width: i % 2 === 0 ? "1.5px" : "1px",
            height: "45vh",
            transformOrigin: "50% 0%",
            transform: `translateX(-50%) rotate(${angle}deg)`,
            background:
              i % 2 === 0
                ? `linear-gradient(to bottom, rgba(124,58,237,${alpha(0.22)}), transparent)`
                : `linear-gradient(to bottom, rgba(6,182,212,${alpha(0.16)}), transparent)`,
            filter: "blur(1.5px)",
          }}
        />
      ))}
    </div>
  );
}
