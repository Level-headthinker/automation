"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare, Mic, Users, BarChart3, Check, ArrowRight, Stethoscope,
} from "lucide-react";
import Link from "next/link";

// ── Dark-band palette (explicit so it looks right in light theme too) ──
const C = {
  panel: "rgba(255,255,255,0.03)",
  panelSolid: "#0f1626",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.14)",
  blue: "#3b9eff",
  sky: "#38bdf8",
  textHi: "rgba(255,255,255,0.92)",
  textMid: "rgba(255,255,255,0.62)",
  textLo: "rgba(255,255,255,0.38)",
};

interface Feature {
  key: string;
  label: string;
  eyebrow: string;
  badge?: string;
  icon: React.ElementType;
  heading: string;
  description: string;
  bullets: string[];
  cta?: { label: string; href: string };
}

const FEATURES: Feature[] = [
  {
    key: "chatbot",
    label: "AI Chatbot",
    eyebrow: "Conversational AI",
    badge: "New Release",
    icon: MessageSquare,
    heading: "Understand exactly what your patients ask",
    description:
      "Every enquiry is handled instantly in English, Urdu, or Roman Urdu. The AI collects details, books appointments, and never sleeps — so no patient is ever left waiting.",
    bullets: [
      "Native multilingual understanding (EN / UR / Roman Urdu)",
      "Web widget + WhatsApp Business API",
      "Returning-patient recognition",
      "Sub-2-second response time",
    ],
    cta: { label: "Explore ClinicBot", href: "/products/clinicbot" },
  },
  {
    key: "voice",
    label: "Voice Agent",
    eyebrow: "AI Phone Line",
    icon: Mic,
    heading: "Answer every call, even when you can't",
    description:
      "When your front desk is busy or closed, the AI voice agent picks up, understands the caller, and books the appointment — turning missed calls into booked patients.",
    bullets: [
      "Natural voice conversation",
      "Books directly from a phone call",
      "Escalates complex calls to staff",
      "Works 24/7, holidays included",
    ],
  },
  {
    key: "crm",
    label: "Patient CRM",
    eyebrow: "Records & History",
    icon: Users,
    heading: "Every patient, organised automatically",
    description:
      "Each conversation becomes a structured patient record — visit history, prescriptions, follow-up dates — all searchable from one clean dashboard.",
    bullets: [
      "Auto-built patient profiles",
      "Visit history & prescriptions",
      "CNIC-based lookup",
      "Follow-up reminders",
    ],
  },
  {
    key: "analytics",
    label: "Analytics",
    eyebrow: "Performance",
    icon: BarChart3,
    heading: "Use real data for measurable growth",
    description:
      "Capture every appointment, lead, and conversation, then score performance across branches and doctors. Each week makes your clinic measurably better.",
    bullets: [
      "Appointment & lead conversion tracking",
      "Doctor performance scoring",
      "Busiest-hours heatmap",
      "Branch-by-branch comparison",
    ],
  },
];

// ════════════════════════════════════════════════════════════
// MOCKUPS (one per feature, dark-styled like LangChain)
// ════════════════════════════════════════════════════════════

function MockShell({ title, badge, children }: { title: string; badge: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden w-full"
      style={{ background: C.panel, border: `1px solid ${C.borderStrong}`, boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}>
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: `1px solid ${C.border}`, background: "rgba(255,255,255,0.02)" }}>
        <div className="flex items-center gap-2">
          <Stethoscope className="w-3.5 h-3.5" style={{ color: C.blue }} />
          <span className="text-xs font-medium" style={{ color: C.textMid }}>{title}</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full"
          style={{ background: "rgba(59,158,255,0.12)", color: C.blue }}>{badge}</span>
      </div>
      {children}
    </div>
  );
}

function ChatMockup() {
  const msgs = [
    { r: "bot", t: "Assalam o alaikum! How can I help you today?" },
    { r: "user", t: "mujhe Dr. Ahmed se appointment chahiye" },
    { r: "bot", t: "Zaroor! Friday 10:00 AM available hai. Naam aur number?" },
    { r: "user", t: "Sara Khan, 0301-1234567" },
    { r: "bot", t: "✅ Confirmed! WhatsApp reminder bhej diya jayega." },
  ];
  return (
    <MockShell title="ClinicBot — Live" badge="Online">
      <div className="p-4 space-y-2.5">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.r === "user" ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[78%] px-3 py-2 rounded-xl text-xs leading-relaxed"
              style={{
                background: m.r === "user" ? C.blue : C.panelSolid,
                color: m.r === "user" ? "#fff" : C.textMid,
                border: m.r === "user" ? "none" : `1px solid ${C.border}`,
              }}>
              {m.t}
            </div>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

function VoiceMockup() {
  return (
    <MockShell title="Voice Agent — Call Trace" badge="15.78s">
      <div className="p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(59,158,255,0.15)", border: `1px solid ${C.border}` }}>
            <Mic className="w-5 h-5" style={{ color: C.blue }} />
          </div>
          <div className="flex gap-0.5 items-end h-8 flex-1">
            {[4, 7, 11, 6, 9, 5, 12, 8, 5, 10, 7, 4, 9, 6, 11, 5].map((h, i) => (
              <motion.div key={i} className="flex-1 rounded-full" style={{ background: C.blue }}
                animate={{ height: [h * 1.5, h * 2.6, h * 1.5] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.06 }} />
            ))}
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            { t: "0.0s", s: "Call received", c: C.sky },
            { t: "2.1s", s: "Patient: \"Book me with the skin doctor\"", c: C.textMid },
            { t: "5.4s", s: "Matched: Dr. Sara (Dermatology)", c: C.blue },
            { t: "9.8s", s: "Collected name + phone", c: C.textMid },
            { t: "15.7s", s: "Appointment confirmed ✓", c: "#34d399" },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3 text-xs">
              <span className="font-mono w-10 flex-shrink-0" style={{ color: C.textLo }}>{row.t}</span>
              <span style={{ color: row.c }}>{row.s}</span>
            </div>
          ))}
        </div>
      </div>
    </MockShell>
  );
}

function CrmMockup() {
  const patients = [
    { n: "Sara Khan", v: 4, s: "Active", c: "#34d399" },
    { n: "Ali Hassan", v: 2, s: "Follow-up", c: "#fbbf24" },
    { n: "Fatima Malik", v: 7, s: "Active", c: "#34d399" },
    { n: "Bilal Ahmed", v: 1, s: "New", c: C.sky },
    { n: "Ayesha Noor", v: 5, s: "Active", c: "#34d399" },
  ];
  return (
    <MockShell title="Patient Records" badge="248 total">
      <div className="p-4 space-y-2">
        {patients.map((p) => (
          <div key={p.n}
            className="flex items-center justify-between rounded-lg px-3 py-2.5"
            style={{ background: C.panelSolid, border: `1px solid ${C.border}` }}>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{ background: "rgba(59,158,255,0.15)", color: C.blue }}>
                {p.n[0]}
              </div>
              <div>
                <div className="text-xs font-medium" style={{ color: C.textHi }}>{p.n}</div>
                <div className="text-[10px]" style={{ color: C.textLo }}>{p.v} visits</div>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-medium"
              style={{ background: `${p.c}1a`, color: p.c }}>{p.s}</span>
          </div>
        ))}
      </div>
    </MockShell>
  );
}

function AnalyticsMockup() {
  const rows = [
    { id: "#102", doc: "Dr. Ahmed", conv: 0.86, score: "92" },
    { id: "#101", doc: "Dr. Sara", conv: 0.74, score: "88" },
    { id: "#100", doc: "Dr. Bilal", conv: 0.68, score: "81" },
    { id: "#99", doc: "Dr. Noor", conv: 0.81, score: "90" },
  ];
  return (
    <MockShell title="Performance" badge="This week">
      <div className="p-4">
        <div className="flex items-end gap-2 h-20 mb-4 px-1">
          {[55, 70, 45, 85, 60, 92, 75, 88, 65, 95].map((h, i) => (
            <motion.div key={i} className="flex-1 rounded-t-sm"
              style={{ background: i % 2 === 0 ? C.blue : C.sky, opacity: 0.85 }}
              initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }} />
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="grid grid-cols-[1fr_auto_auto] gap-3 px-2 pb-1.5 text-[10px] uppercase tracking-wider"
            style={{ color: C.textLo, borderBottom: `1px solid ${C.border}` }}>
            <span>Doctor</span><span className="w-16 text-right">Conversion</span><span className="w-8 text-right">Score</span>
          </div>
          {rows.map((r) => (
            <div key={r.id} className="grid grid-cols-[1fr_auto_auto] gap-3 items-center px-2 py-1.5 text-xs"
              style={{ color: C.textMid }}>
              <span style={{ color: C.textHi }}>{r.doc}</span>
              <div className="w-16 flex items-center justify-end">
                <div className="w-10 h-1.5 rounded-full overflow-hidden" style={{ background: C.panelSolid }}>
                  <div className="h-full rounded-full" style={{ width: `${r.conv * 100}%`, background: C.blue }} />
                </div>
              </div>
              <span className="w-8 text-right font-mono" style={{ color: C.sky }}>{r.score}</span>
            </div>
          ))}
        </div>
      </div>
    </MockShell>
  );
}

const MOCKUPS = [ChatMockup, VoiceMockup, CrmMockup, AnalyticsMockup];

// ════════════════════════════════════════════════════════════
// TEXT BLOCK (shared by desktop + mobile)
// ════════════════════════════════════════════════════════════
function PanelText({ f, dim }: { f: Feature; dim?: boolean }) {
  const Icon = f.icon;
  return (
    <motion.div animate={{ opacity: dim ? 0.4 : 1 }} transition={{ duration: 0.3 }} className="max-w-[500px]">
      {f.badge ? (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(59,158,255,0.08)",
            border: "1px solid rgba(59,158,255,0.4)",
            boxShadow: "0 0 24px rgba(59,158,255,0.25)",
          }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.blue, boxShadow: `0 0 6px ${C.blue}` }} />
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: C.blue }}>{f.badge}</span>
        </div>
      ) : (
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(59,158,255,0.13)", border: `1px solid ${C.border}` }}>
            <Icon className="w-5 h-5" style={{ color: C.blue }} />
          </div>
          <span className="font-mono text-sm" style={{ color: C.blue }}>{f.eyebrow}</span>
        </div>
      )}
      {/* heading → description uses a large gap (mb-14) so it never blinds together */}
      <h3 className="font-display font-semibold mb-14 leading-[1.1]"
        style={{ color: C.textHi, fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}>
        {f.heading}
      </h3>
      <p className="text-base leading-relaxed mb-8" style={{ color: C.textMid }}>{f.description}</p>
      <ul className="space-y-3 mb-8">
        {f.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: C.textMid }}>
            <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: C.blue }} />{b}
          </li>
        ))}
      </ul>
      {f.cta && (
        <Link href={f.cta.href}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/5"
          style={{ border: `1px solid ${C.borderStrong}`, color: C.textHi }}>
          {f.cta.label}<ArrowRight className="w-3.5 h-3.5" style={{ color: C.blue }} />
        </Link>
      )}
    </motion.div>
  );
}

// ════════════════════════════════════════════════════════════
// MAIN — sticky rail + right-bleeding scrolling panels
// ════════════════════════════════════════════════════════════
export function Engine() {
  const [active, setActive] = useState(0);
  const dRefs = useRef<(HTMLDivElement | null)[]>([]);   // desktop panels
  const mRefs = useRef<(HTMLDivElement | null)[]>([]);   // mobile panels

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    [...dRefs.current, ...mRefs.current].forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (refs: typeof dRefs, i: number) =>
    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });

  return (
    /* No overflow on the section — keeps the sticky rail working. The
       right-bleeding image is clipped by the body (overflow-x:hidden). */
    <section className="relative bg-[#070b14] py-20 sm:py-28">
      {/* top edge + ambient glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div aria-hidden className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(59,158,255,0.1), transparent 70%)", filter: "blur(90px)" }} />

      {/* ───────────────── DESKTOP ─────────────────
          Left-padded to align with the site container, but NO right padding /
          max-width — so the panels run all the way to the viewport's right edge
          and the mockups sit flush right with no gap. */}
      <div className="hidden lg:block"
        style={{ paddingLeft: "max(1.5rem, calc((100vw - 1280px) / 2))" }}>

        {/* ── 4 ZONES: [space] [rail] [content] [image] ──
            outer grid = space(64) · rail(210) · panels(1fr).
            Content + image are the 3rd/4th zones, split inside each panel. */}
        <div className="relative grid grid-cols-[64px_210px_1fr]">

          {/* vertical line + node-dot live in the SPACE column (grid left edge) */}
          <div aria-hidden className="absolute left-0 top-0 bottom-0 w-px" style={{ background: C.border }} />
          <div aria-hidden className="absolute left-0 top-0 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
            style={{ background: C.blue, boxShadow: `0 0 10px ${C.blue}` }} />

          {/* ZONE 1 — space (empty; holds the line) */}
          <div aria-hidden />

          {/* ZONE 2 — sticky rail, vertically centered in the viewport */}
          <aside>
            <div className="sticky top-0 h-screen flex items-center">
              <div>
                <div className="font-mono text-base mb-8 tracking-wide" style={{ color: C.textLo }}>
                  Raahnex Engine
                </div>
                <nav className="space-y-3.5">
                  {FEATURES.map((f, i) => (
                    <button
                      key={f.key}
                      onClick={() => scrollTo(dRefs, i)}
                      className="flex items-center gap-3 w-full text-left font-mono text-lg transition-colors duration-200"
                      style={{ color: active === i ? C.blue : C.textLo }}
                    >
                      <span className="rounded-full transition-all duration-200 flex-shrink-0"
                        style={{
                          width: active === i ? 8 : 6,
                          height: active === i ? 8 : 6,
                          background: active === i ? C.blue : "transparent",
                          border: active === i ? "none" : `1px solid ${C.textLo}`,
                          boxShadow: active === i ? `0 0 8px ${C.blue}` : "none",
                        }} />
                      {f.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* ZONES 3 & 4 — panels: content (1fr) | portrait image (flush right) */}
          <div>
            {FEATURES.map((f, i) => {
              const Mock = MOCKUPS[i];
              return (
                <div
                  key={f.key}
                  data-index={i}
                  ref={(el) => { dRefs.current[i] = el; }}
                  className={`min-h-[85vh] flex items-center py-28 ${i > 0 ? "border-t" : ""}`}
                  style={i > 0 ? { borderColor: C.border } : undefined}
                >
                  <div className="grid grid-cols-[1fr_minmax(300px,360px)] gap-x-16 xl:gap-x-24 items-center w-full">
                    {/* ZONE 3 — content */}
                    <PanelText f={f} dim={active !== i} />
                    {/* ZONE 4 — portrait image, flush to viewport right with slight bleed */}
                    <div className="relative min-h-[440px]">
                      <motion.div
                        animate={{ opacity: active === i ? 1 : 0.4, x: active === i ? 0 : 20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute top-1/2 -translate-y-1/2 w-[360px]"
                        style={{ right: "-40px" }}
                      >
                        <Mock />
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ───────────────── MOBILE ───────────────── */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6">
          <div className="font-mono text-sm mb-5" style={{ color: C.textLo }}>Raahnex Engine</div>

          {/* sticky horizontal rail */}
          <div className="sticky top-16 z-20 -mx-4 px-4 py-3 mb-8 flex gap-2 overflow-x-auto"
            style={{ background: "#070b14", borderBottom: `1px solid ${C.border}` }}>
            {FEATURES.map((f, i) => (
              <button key={f.key} onClick={() => scrollTo(mRefs, i)}
                className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all"
                style={{
                  color: active === i ? "#fff" : C.textMid,
                  background: active === i ? C.blue : "rgba(255,255,255,0.04)",
                  border: `1px solid ${active === i ? C.blue : C.border}`,
                }}>
                {f.label}
              </button>
            ))}
          </div>

          <div>
            {FEATURES.map((f, i) => {
              const Mock = MOCKUPS[i];
              return (
                <div key={f.key} data-index={i} ref={(el) => { mRefs.current[i] = el; }}
                  className={i > 0 ? "mt-16 pt-16 border-t" : ""}
                  style={i > 0 ? { borderColor: C.border } : undefined}>
                  <PanelText f={f} />
                  <div className="mt-8">
                    <Mock />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </section>
  );
}
