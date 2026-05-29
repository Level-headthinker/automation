"use client";

import { motion } from "framer-motion";
import {
  Stethoscope, UtensilsCrossed, Building2, HeadphonesIcon,
  Check, ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, type ProductStatus } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  UtensilsCrossed,
  Building2,
  HeadphonesIcon,
};

function statusBadge(status: ProductStatus) {
  if (status === "live")
    return <Badge variant="success" dot>Live</Badge>;
  if (status === "beta")
    return <Badge variant="cyan" dot>Beta</Badge>;
  return <Badge variant="default" dot>Coming Soon</Badge>;
}

export function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="flex justify-center mb-4"
          >
            <SectionLabel>Our Products</SectionLabel>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-fg mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The <GradientText>AI Ecosystem</GradientText> for Service Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="text-lg text-fg-muted max-w-2xl mx-auto"
          >
            One platform, multiple industry solutions. Each product is purpose-built
            for its vertical — not a generic chatbot in disguise.
          </motion.p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PRODUCTS.map((product, i) => {
            const Icon = iconMap[product.icon];
            const isViolet = product.color === "violet";

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className={cn(
                  "glass-card rounded-2xl border border-border p-6 sm:p-8 relative overflow-hidden",
                  "hover:border-border-strong transition-all duration-300 group",
                  product.status === "live" && "ring-1 ring-violet/20"
                )}
              >
                {/* Background glow on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: isViolet
                      ? "radial-gradient(ellipse 60% 40% at 0% 0%, rgba(124,58,237,0.06), transparent)"
                      : "radial-gradient(ellipse 60% 40% at 100% 0%, rgba(6,182,212,0.06), transparent)",
                  }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
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
                    <div>
                      <h3 className="font-display font-bold text-xl text-fg">
                        {product.name}
                      </h3>
                      <p className="text-sm text-fg-muted">{product.tagline}</p>
                    </div>
                  </div>
                  {statusBadge(product.status)}
                </div>

                {/* Description */}
                <p className="text-fg-muted leading-relaxed mb-6 text-sm sm:text-base">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-fg-muted"
                    >
                      <Check
                        className={cn(
                          "w-4 h-4 flex-shrink-0",
                          isViolet ? "text-violet" : "text-cyan"
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={product.status === "live" ? "primary" : "secondary"}
                  size="sm"
                  className="group/btn"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {product.status === "live" ? "Get Started" : "Join Waitlist"}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-150" />
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
