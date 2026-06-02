"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";
import { TRUST_STATS, MARQUEE_ITEMS } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface py-10 sm:py-14 overflow-hidden">
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <motion.p
          className="text-center text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by service businesses across Pakistan and beyond
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-display font-bold gradient-text mb-1"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
                {stat.value}
              </div>
              <div className="text-sm text-fg-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="space-y-3">
        <Marquee
          items={MARQUEE_ITEMS}
          className="text-fg-subtle"
          itemClassName="text-fg-subtle"
        />
        <Marquee
          items={MARQUEE_ITEMS}
          reverse
          className="text-fg-subtle"
          itemClassName="text-fg-subtle"
        />
      </div>
    </section>
  );
}
