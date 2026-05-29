"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { HERO } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient glow orbs */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-glow pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "1.5s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-8"
        >
          <Badge variant="violet" dot size="md">
            {HERO.badge}
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <h1
            className="font-display font-bold tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            <span className="block text-fg">{HERO.headline[0]}</span>
            <GradientText className="block">
              {HERO.headline[1]}
            </GradientText>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg sm:text-xl text-fg-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group"
          >
            {HERO.cta_primary.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group"
          >
            <Play className="w-4 h-4 text-violet" />
            {HERO.cta_secondary.label}
          </Button>
        </motion.div>

        {/* Trust note */}
        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm text-fg-subtle"
        >
          {HERO.trust_note}
        </motion.p>

        {/* Dashboard Mockup */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 relative max-w-4xl mx-auto animate-float"
        >
          {/* Glow behind mockup */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.2), transparent)",
              filter: "blur(20px)",
              transform: "translateY(20px)",
            }}
          />

          {/* Mockup card */}
          <div className="relative glass-card rounded-2xl border border-border shadow-md overflow-hidden">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-elevated">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-surface border border-border rounded-md px-3 py-1 text-xs text-fg-subtle font-mono">
                  app.tapzero.ai/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard preview content */}
            <div className="p-6 bg-bg min-h-48">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Today's Appointments", value: "24", color: "violet" },
                  { label: "New Leads", value: "8", color: "cyan" },
                  { label: "Confirmed", value: "19", color: "emerald" },
                  { label: "Pending", value: "5", color: "amber" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 border border-border"
                  >
                    <div
                      className="text-2xl font-display font-bold mb-1"
                      style={{
                        color:
                          stat.color === "violet"
                            ? "var(--violet)"
                            : stat.color === "cyan"
                            ? "var(--cyan)"
                            : stat.color === "emerald"
                            ? "#10b981"
                            : "#f59e0b",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-fg-subtle">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Fake chat conversation */}
              <div className="glass-card rounded-xl border border-border p-4 space-y-3">
                <div className="text-xs font-semibold text-fg-subtle uppercase tracking-wider mb-3">
                  Live Chat — ClinicBot
                </div>
                {[
                  { role: "user", text: "Hi, I need to book an appointment with Dr. Ahmed" },
                  { role: "bot", text: "Of course! Dr. Ahmed is available tomorrow at 10:00 AM. Shall I confirm?" },
                  { role: "user", text: "Yes please, my name is Sara, 0301-1234567" },
                  { role: "bot", text: "✅ Confirmed! Appointment with Dr. Ahmed on Friday at 10:00 AM. Reminder will be sent via WhatsApp." },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-xl text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-violet text-white"
                          : "bg-surface border border-border text-fg-muted"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
