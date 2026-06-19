"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  isDiamond: boolean;
  moveY: number;
  moveX: number;
  glows: boolean;
}

interface ParticleFieldProps {
  count?: number;
  /** Zone of the page: "hero" = denser at top, "full" = spread evenly */
  zone?: "hero" | "full";
  className?: string;
}

export function ParticleField({
  count = 48,
  zone = "hero",
  className = "",
}: ParticleFieldProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: count }, (_, i) => {
      const x = Math.random() * 100;
      // "hero" zone concentrates particles in the top 70%
      const y = zone === "hero"
        ? Math.random() * 80
        : Math.random() * 100;

      const roll = Math.random();
      const color =
        roll < 0.38 ? "rgba(0,102,204,0.9)"    // violet
        : roll < 0.72 ? "rgba(14,165,233,0.85)"   // cyan
        : roll < 0.88 ? "rgba(167,139,250,0.7)"  // violet-light
        : "rgba(255,255,255,0.45)";               // white spark

      return {
        id: i,
        x,
        y,
        size: Math.random() * 2.4 + 0.6,         // 0.6 – 3px
        color,
        duration: Math.random() * 12 + 7,         // 7 – 19s
        delay: Math.random() * 8,
        opacity: Math.random() * 0.55 + 0.08,
        isDiamond: Math.random() > 0.62,
        moveY: -(12 + Math.random() * 22),
        moveX: (Math.random() - 0.5) * 14,
        glows: Math.random() > 0.72,
      };
    });
    setParticles(generated);
  }, [count, zone]);

  if (particles.length === 0) return null;

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.isDiamond ? "2px" : "50%",
            rotate: p.isDiamond ? "45deg" : "0deg",
            background: p.color,
            boxShadow: p.glows
              ? `0 0 ${p.size * 4}px ${p.size * 2}px ${p.color}`
              : "none",
          }}
          animate={{
            y: [0, p.moveY, 0],
            x: [0, p.moveX, 0],
            opacity: [p.opacity * 0.25, p.opacity, p.opacity * 0.25],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
