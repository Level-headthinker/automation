"use client";

import { motion } from "framer-motion";
import { Stethoscope, UtensilsCrossed, Building2, HeadphonesIcon } from "lucide-react";
import { TRUST_STATS } from "@/lib/constants";

const industryIcons = [
  { icon: Stethoscope, label: "Healthcare" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Building2, label: "Real Estate" },
  { icon: HeadphonesIcon, label: "Support" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display font-bold text-3xl sm:text-4xl gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-fg-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Industry pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-medium text-fg-subtle uppercase tracking-wider mr-2">
            Built for:
          </span>
          {industryIcons.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg text-sm font-medium text-fg-muted hover:border-border-strong hover:text-fg transition-all duration-150"
            >
              <Icon className="w-3.5 h-3.5 text-violet" />
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
