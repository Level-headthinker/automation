"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope, UtensilsCrossed, Building2, HeadphonesIcon,
  Check, ArrowRight, Zap,
} from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, type ProductStatus } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, UtensilsCrossed, Building2, HeadphonesIcon,
};

function StatusBadge({ status }: { status: ProductStatus }) {
  if (status === "live") return <Badge variant="success" dot>Live Now</Badge>;
  if (status === "beta") return <Badge variant="cyan" dot>Beta</Badge>;
  return <Badge variant="default" dot>Coming Soon</Badge>;
}

export function Products() {
  const [active, setActive] = useState(0);
  const product = PRODUCTS[active];
  const Icon = iconMap[product.icon];
  const isViolet = product.color === "violet";

  return (
    <section id="products" className="py-20 sm:py-28 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} className="flex justify-center mb-4">
            <SectionLabel>Products</SectionLabel>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg mb-4"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.55rem)" }}>
            One Platform. <GradientText>Every Industry.</GradientText>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-fg-muted max-w-2xl mx-auto">
            Purpose-built AI for each vertical — not a generic chatbot rebranded four times.
          </motion.p>
        </div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {PRODUCTS.map((p, i) => {
            const TabIcon = iconMap[p.icon];
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium",
                  "transition-all duration-250 relative",
                  active === i
                    ? "text-white shadow-[0_0_20px_rgba(0,102,204,0.4)]"
                    : "bg-bg border border-border text-fg-muted hover:text-fg hover:border-border-strong"
                )}
              >
                {active === i && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--gradient)" }}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <TabIcon className="w-3.5 h-3.5" />
                  {p.name}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Product card — animated on tab switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "glass-card rounded-2xl border overflow-hidden",
              product.status === "live"
                ? "border-violet/30 shadow-[0_0_60px_rgba(0,102,204,0.12)] electric-border"
                : "glow-card border-border"
            )}
          >
            <div className="grid lg:grid-cols-5">
              {/* Left info panel */}
              <div className="lg:col-span-3 p-7 sm:p-10">
                {/* Icon + status */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center",
                    isViolet ? "bg-violet-muted" : "bg-cyan-muted"
                  )}>
                    <Icon className={cn("w-7 h-7", isViolet ? "text-violet" : "text-cyan")} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-2xl text-fg">{product.name}</h3>
                      <StatusBadge status={product.status} />
                    </div>
                    <p className="text-sm text-fg-muted">{product.tagline}</p>
                  </div>
                </div>

                <p className="text-fg-muted leading-relaxed mb-8">{product.description}</p>

                {/* Features list */}
                <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                  {product.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                      className="flex items-center gap-2.5 text-sm text-fg-muted"
                    >
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                        isViolet ? "bg-violet" : "bg-cyan"
                      )}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {f}
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {product.status === "live" ? (
                    <>
                      <Button asChild className="w-full sm:w-auto">
                        <Link href="/products/clinicbot">
                          Explore {product.name} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="secondary" asChild className="w-full sm:w-auto">
                        <Link href="/demo">Book Demo</Link>
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                      <Link href="/demo">Join Waitlist</Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Right visual panel */}
              <div className={cn(
                "lg:col-span-2 relative hidden lg:flex flex-col items-center justify-center p-8",
                "border-l border-border"
              )}
                style={{
                  background: isViolet
                    ? "radial-gradient(ellipse at 60% 40%, rgba(0,102,204,0.08), transparent 70%)"
                    : "radial-gradient(ellipse at 60% 40%, rgba(14,165,233,0.08), transparent 70%)",
                }}
              >
                {/* Decorative circles */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-border opacity-40" />
                <div className="absolute bottom-8 left-6 w-12 h-12 rounded-full border border-border opacity-30" />

                {/* Central icon display */}
                <motion.div
                  key={`icon-${active}`}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mb-6"
                >
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-lg"
                    style={{ background: isViolet ? "var(--gradient)" : "linear-gradient(135deg, var(--cyan), #0284c7)" }}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  {product.status === "live" && (
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 border-2 border-bg flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-white" fill="white" />
                    </div>
                  )}
                </motion.div>

                <p className="text-center text-sm font-semibold text-fg mb-1">{product.name}</p>
                <p className="text-center text-xs text-fg-muted">{product.tagline}</p>

                {/* Orbit dots */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      background: isViolet ? "var(--violet)" : "var(--cyan)",
                      top: `${15 + i * 12}%`,
                      right: `${8 + (i % 3) * 6}%`,
                      opacity: 0.3 + i * 0.1,
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
