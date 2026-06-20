"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LightRays } from "@/components/ui/LightRays";
import { HeroMedia } from "@/components/ui/HeroMedia";
import { HERO, HERO_MEDIA } from "@/lib/constants";

// Lazy-load the canvas particle network so it never blocks first paint
const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork").then((m) => m.ParticleNetwork),
  { ssr: false }
);

// ── Cycling text ──────────────────────────────────────────────
function CyclingText({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className="relative inline-block" style={{ minWidth: "1em" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-block gradient-text"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ── Floating badge ────────────────────────────────────────────
function FloatBadge({ icon: Icon, text, color, className, delay = 0 }: {
  icon: React.ElementType; text: string; color: "green" | "cyan";
  className?: string; delay?: number;
}) {
  const bg = color === "green" ? "#10b981" : "var(--cyan)";
  return (
    <motion.div
      className={`absolute glass-card rounded-xl border border-border px-3 py-2 hidden sm:flex items-center gap-2 z-20 ${className}`}
      style={{ boxShadow: `0 8px 32px rgba(0,0,0,0.25), 0 0 12px ${bg}22` }}
      initial={{ opacity: 0, scale: 0.8, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: bg, boxShadow: `0 0 8px ${bg}60` }}>
        <Icon className="w-2.5 h-2.5 text-white" />
      </div>
      <span className="text-xs font-semibold text-fg whitespace-nowrap">{text}</span>
    </motion.div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background — subtle particles + single soft top glow */}
      <ParticleNetwork count={42} maxDistance={120} speed={0.24} opacity={0.45} />
      <LightRays intensity={0.6} />
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "900px", height: "560px",
            background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(0,102,204,0.18), transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Centered copy ── */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-7 flex justify-center"
          >
            <Badge variant="violet" dot size="md">{HERO.badge}</Badge>
          </motion.div>

          <motion.h1
            className="font-display font-black text-fg leading-[1.04] tracking-tighter mb-6"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)" }}
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">{HERO.headline}</span>
            <CyclingText words={HERO.cyclingWords} />
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-fg-muted leading-relaxed mb-9 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {HERO.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-6"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button size="lg" asChild className="group w-full sm:w-auto">
              <Link href="/demo">
                {HERO.cta_primary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto group">
              <Link href="/products">
                <Play className="w-4 h-4 text-violet group-hover:scale-110 transition-transform" />
                {HERO.cta_secondary.label}
              </Link>
            </Button>
          </motion.div>

          <motion.p
            className="text-xs text-fg-subtle"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          >
            {HERO.trust_note}
          </motion.p>
        </div>

        {/* ── Hero visual (centered, below copy) ──
            Shows your AI media clip/image when HERO_MEDIA.type !== "none",
            otherwise the built-in dashboard mockup. */}
        <motion.div
          className="relative max-w-4xl mx-auto mt-14 sm:mt-16"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {HERO_MEDIA.type !== "none" ? (
            <HeroMedia />
          ) : (
          <>
          {/* Glow behind */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,102,204,0.22), transparent 70%)",
              filter: "blur(40px)", transform: "translateY(10px)",
            }} />

          <div className="relative glass-card rounded-2xl border border-border overflow-hidden"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,102,204,0.12)" }}>
            {/* Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated">
              <div className="flex gap-1.5">
                {["bg-red-400","bg-yellow-400","bg-green-400"].map(c => (
                  <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-bg border border-border rounded-md px-3 py-1 text-xs text-fg-subtle font-mono text-center sm:text-left">
                  app.raahnex.ai/dashboard
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-fg-subtle">Live</span>
              </div>
            </div>

            {/* Content: stats + chat side by side on desktop, stacked on mobile */}
            <div className="p-4 sm:p-6 bg-bg grid md:grid-cols-2 gap-4">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 content-start">
                {[
                  { v: "24", l: "Today's Appointments", c: "violet" },
                  { v: "8",  l: "New Leads",  c: "cyan"   },
                  { v: "19", l: "Confirmed",   c: "green"  },
                  { v: "3",  l: "Pending",   c: "amber"  },
                ].map((s) => (
                  <div key={s.l} className="glass-card rounded-xl p-3.5 border border-border">
                    <div className="font-display font-bold text-2xl leading-none mb-1"
                      style={{ color: s.c === "violet" ? "var(--violet)" : s.c === "cyan" ? "var(--cyan)" : s.c === "green" ? "#10b981" : "#f59e0b" }}>
                      {s.v}
                    </div>
                    <div className="text-[11px] text-fg-subtle">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Chat */}
              <div className="glass-card rounded-xl border border-border p-4 space-y-2.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-fg-subtle uppercase tracking-wider">Raahnex AI · Live</span>
                  <Badge variant="success" dot size="sm">Active</Badge>
                </div>
                {[
                  { r: "user", t: "I need to book with Dr. Ahmed" },
                  { r: "bot",  t: "Friday 10 AM is available. Name & phone?" },
                  { r: "user", t: "Sara Khan, 0301-1234567" },
                  { r: "bot",  t: "✅ Booked! WhatsApp reminder will be sent." },
                ].map((m, i) => (
                  <div key={i} className={`flex ${m.r === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`px-3 py-1.5 rounded-xl text-[11px] max-w-[85%] leading-relaxed ${
                      m.r === "user" ? "bg-violet text-white" : "bg-surface border border-border text-fg-muted"
                    }`}>{m.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badges (desktop only) */}
          <FloatBadge icon={CheckCircle} text="Appointment confirmed" color="green"
            className="-top-4 -left-4 animate-float-b" delay={1.0} />
          <FloatBadge icon={Users} text="New lead captured" color="cyan"
            className="-bottom-4 -right-4 animate-float-a" delay={1.2} />
          </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
