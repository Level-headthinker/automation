"use client";

import { motion } from "framer-motion";
import {
  MessageSquare, Mic, MessageCircle, Users, GitBranch, BarChart3,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "Multilingual AI in English, Urdu & Roman Urdu. Embeds on any website or WhatsApp number. Responds in under 2 seconds.",
    color: "violet",
    size: "wide",
    preview: (
      <div className="mt-4 space-y-2">
        {[
          { r: "user", t: "I need an appointment" },
          { r: "bot", t: "Sure! Which doctor and when?" },
          { r: "user", t: "Dr. Ahmed, tomorrow morning" },
          { r: "bot", t: "✅ Booked for 10 AM tomorrow!" },
        ].map((m, i) => (
          <div key={i} className={`flex ${m.r === "user" ? "justify-end" : "justify-start"}`}>
            <div className={cn("px-2.5 py-1.5 rounded-lg text-[11px] max-w-[75%]",
              m.r === "user" ? "bg-violet text-white" : "bg-elevated border border-border text-fg-muted")}>
              {m.t}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Mic,
    title: "Voice Agent",
    description: "AI answers your clinic phone 24/7. Books appointments from voice calls — no human needed.",
    color: "cyan",
    size: "normal",
    preview: (
      <div className="mt-4 flex flex-col items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-cyan-muted border border-border flex items-center justify-center">
          <Mic className="w-5 h-5 text-cyan" />
        </div>
        <motion.div className="flex gap-0.5 items-end h-6"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}>
          {[3, 6, 9, 5, 7, 4, 8, 6, 3].map((h, i) => (
            <motion.div key={i} className="w-1 bg-cyan rounded-full"
              animate={{ height: [h * 2, h * 3, h * 2] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }} />
          ))}
        </motion.div>
        <span className="text-[10px] text-fg-subtle">Listening…</span>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Patient CRM",
    description: "Full patient records, visit history, prescriptions and follow-up tracking in one dashboard.",
    color: "violet",
    size: "tall",
    preview: (
      <div className="mt-4 space-y-2">
        {[
          { name: "Sara Khan", visits: 4, status: "Active" },
          { name: "Ali Hassan", visits: 2, status: "Follow-up" },
          { name: "Fatima Malik", visits: 7, status: "Active" },
        ].map((p) => (
          <div key={p.name} className="flex items-center justify-between bg-elevated rounded-lg px-2.5 py-2 border border-border">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-violet-muted flex items-center justify-center text-[9px] font-bold text-violet">
                {p.name[0]}
              </div>
              <div>
                <div className="text-[11px] font-medium text-fg">{p.name}</div>
                <div className="text-[10px] text-fg-subtle">{p.visits} visits</div>
              </div>
            </div>
            <span className={cn("text-[9px] px-1.5 py-0.5 rounded-full font-medium",
              p.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400")}>
              {p.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "Reminders, confirmations, and follow-ups sent automatically via WhatsApp Business API.",
    color: "cyan",
    size: "normal",
    preview: (
      <div className="mt-3 space-y-1.5">
        {["Appointment confirmed ✓", "Reminder: 24h before ✓", "Reminder: 2h before ✓", "Follow-up sent ✓"].map((m) => (
          <div key={m} className="flex items-center gap-2 text-[11px] text-fg-muted">
            <div className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
            {m}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Live metrics on appointments, leads, no-shows, busiest hours and doctor utilisation.",
    color: "violet",
    size: "wide",
    preview: (
      <div className="mt-4 flex items-end gap-1.5 h-12">
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{ background: i % 3 === 0 ? "var(--violet)" : i % 3 === 1 ? "var(--cyan)" : "var(--violet-muted)", opacity: 0.7 + i * 0.02 }}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: GitBranch,
    title: "Multi-Branch",
    description: "Manage unlimited clinic locations from one dashboard with branch-level access control.",
    color: "cyan",
    size: "normal",
    preview: (
      <div className="mt-3 space-y-1.5">
        {["Main Branch — Karachi", "Branch 2 — Lahore", "Branch 3 — Islamabad"].map((b, i) => (
          <div key={b} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: i === 0 ? "var(--violet)" : "var(--cyan)" }} />
            <span className="text-[11px] text-fg-muted">{b}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="flex justify-center mb-4">
            <SectionLabel>Features</SectionLabel>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg mb-4"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}>
            The Complete <GradientText>AI Stack</GradientText>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-fg-muted max-w-xl mx-auto">
            Every tool your clinic needs — built in, not bolted on.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const isViolet = feature.color === "violet";
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: "easeOut" }}
                className={cn(
                  "glow-card spotlight-card glass-card rounded-2xl border border-border p-5 sm:p-6",
                  "hover:border-border-strong transition-all duration-300 group overflow-hidden",
                  feature.size === "wide" && "bento-wide",
                  feature.size === "tall" && "bento-tall",
                )}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    "group-hover:scale-110 transition-transform duration-200",
                    isViolet ? "bg-violet-muted" : "bg-cyan-muted"
                  )}>
                    <Icon className={cn("w-5 h-5", isViolet ? "text-violet" : "text-cyan")} />
                  </div>
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full animate-pulse",
                    isViolet ? "bg-violet" : "bg-cyan"
                  )} />
                </div>

                <h3 className="font-display font-semibold text-fg text-base sm:text-lg mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-fg-muted leading-relaxed">
                  {feature.description}
                </p>

                {/* Mini preview */}
                {feature.preview}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
