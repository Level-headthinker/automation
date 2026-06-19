"use client";

import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  r: number; g: number; b: number; // RGB color components
  pulseOffset: number;
}

interface ParticleNetworkProps {
  count?: number;
  maxDistance?: number;
  speed?: number;
  opacity?: number;
  className?: string;
}

export function ParticleNetwork({
  count = 75,
  maxDistance = 135,
  speed = 0.32,
  opacity = 0.72,
  className = "",
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Sizing ────────────────────────────────────────────────
    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width  = rect.width  * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };
    setSize();

    const W = () => canvas.getBoundingClientRect().width;
    const H = () => canvas.getBoundingClientRect().height;

    // ── Dot factory ───────────────────────────────────────────
    const mkDot = (): Dot => {
      // LangChain blues — electric blue, sky blue, light blue sparks
      const roll = Math.random();
      let r: number, g: number, b: number;
      if      (roll < 0.42) { r = 0;   g = 102; b = 204; }  // electric blue
      else if (roll < 0.76) { r = 14;  g = 165; b = 233; }  // sky blue
      else if (roll < 0.92) { r = 59;  g = 158; b = 255; }  // light blue
      else                  { r = 120; g = 180; b = 255; }  // pale blue spark

      return {
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 1.7 + 0.4,
        opacity: Math.random() * 0.55 + 0.15,
        r, g, b,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    };

    let dots: Dot[] = Array.from({ length: count }, mkDot);
    let animId: number;
    let t = 0;

    // ── Draw loop ──────────────────────────────────────────────
    const draw = () => {
      t += 0.008;
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);

      // ─ Connections (drawn first, behind dots) ─
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const strength = 1 - dist / maxDistance;
            // Blend the two dot colors for the line
            const lr = Math.round((dots[i].r + dots[j].r) / 2);
            const lg = Math.round((dots[i].g + dots[j].g) / 2);
            const lb = Math.round((dots[i].b + dots[j].b) / 2);

            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(${lr},${lg},${lb},${strength * 0.22 * opacity})`;
            ctx.lineWidth = strength * 0.85;
            ctx.stroke();
          }
        }
      }

      // ─ Dots ─
      dots.forEach(d => {
        // Drift
        d.x += d.vx;
        d.y += d.vy;

        // Wrap (seamless)
        if (d.x < 0)  d.x = w;
        if (d.x > w)  d.x = 0;
        if (d.y < 0)  d.y = h;
        if (d.y > h)  d.y = 0;

        // Pulse opacity
        const pulse = 0.85 + Math.sin(t + d.pulseOffset) * 0.15;
        const alpha = d.opacity * pulse * opacity;

        // Glow aura
        const glowRadius = d.radius * 5;
        const grd = ctx.createRadialGradient(
          d.x, d.y, 0,
          d.x, d.y, glowRadius
        );
        grd.addColorStop(0, `rgba(${d.r},${d.g},${d.b},${alpha * 0.45})`);
        grd.addColorStop(1, `rgba(${d.r},${d.g},${d.b},0)`);
        ctx.beginPath();
        ctx.arc(d.x, d.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${d.r},${d.g},${d.b},${alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    // ── Resize handler ─────────────────────────────────────────
    const onResize = () => {
      setSize();
      // Re-scatter dots to new dimensions
      dots = Array.from({ length: count }, mkDot);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, maxDistance, speed, opacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
