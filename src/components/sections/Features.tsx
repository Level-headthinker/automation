"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mic, MessageCircle, Users, GitBranch, BarChart3 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Mic,
  MessageCircle,
  Users,
  GitBranch,
  BarChart3,
};

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Features</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The Complete <GradientText>AI Stack</GradientText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="text-lg text-fg-muted max-w-2xl mx-auto"
          >
            Every tool your service business needs to automate operations, capture leads,
            and delight customers — built into a single platform.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            const isViolet = feature.color === "violet";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-card rounded-2xl border border-border p-6 hover:border-border-strong transition-all duration-300 group"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200",
                    isViolet ? "bg-violet-muted" : "bg-cyan-muted"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-6 h-6",
                      isViolet ? "text-violet" : "text-cyan"
                    )}
                  />
                </div>
                <h3 className="font-display font-semibold text-lg text-fg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-fg-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
