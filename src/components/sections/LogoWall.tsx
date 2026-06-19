"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, Building2, Heart, Activity, Plus,
  Shield, Cross, Users, Zap, Globe,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// PLACEHOLDER LOGOS — replace `name`/`icon` with your real client
// logos (ideally white SVGs) once you have signed customers.
// Do NOT use third-party brand logos for companies that are not
// actually Raahnex clients.
// ─────────────────────────────────────────────────────────────
const LOGOS = [
  { name: "City Clinic",    icon: Stethoscope },
  { name: "MedCare",        icon: Plus },
  { name: "Al-Shifa",       icon: Cross },
  { name: "HealthPlus",     icon: Heart },
  { name: "PrimeCare",      icon: Activity },
  { name: "VitaClinic",     icon: Shield },
  { name: "WellNest",       icon: Building2 },
  { name: "CareFirst",      icon: Users },
  { name: "MediTrust",      icon: Zap },
  { name: "Apex Health",    icon: Globe },
];

export function LogoWall() {
  return (
    <section className="relative overflow-hidden bg-[#070b14] py-16 sm:py-20">
      {/* subtle top/bottom edge fade so the dark band blends */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* faint glow accent */}
      <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(0,102,204,0.18), transparent 70%)", filter: "blur(40px)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium uppercase tracking-widest text-white/50 mb-12"
        >
          Trusted by clinics &amp; businesses across Pakistan and beyond
        </motion.p>

        {/* Logo grid — 2 rows, white logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center">
          {LOGOS.map((logo, i) => {
            const Icon = logo.icon;
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 5) * 0.07 + Math.floor(i / 5) * 0.1, duration: 0.45 }}
                className="flex items-center gap-2.5 text-white/65 hover:text-white transition-colors duration-300"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" strokeWidth={1.75} />
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight whitespace-nowrap">
                  {logo.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
