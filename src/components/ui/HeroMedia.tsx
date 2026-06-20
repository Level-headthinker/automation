import { HERO_MEDIA } from "@/lib/constants";

/**
 * Renders the AI-generated hero visual (video or image) inside a clean,
 * glowing rounded frame. Driven entirely by HERO_MEDIA in constants.ts.
 * If HERO_MEDIA.type === "none", the Hero shows its dashboard mockup instead,
 * so this component is only mounted when a real asset is configured.
 */
export function HeroMedia() {
  const m = HERO_MEDIA;

  return (
    <div className="relative">
      {/* Glow behind */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(0,102,204,0.28), transparent 70%)",
          filter: "blur(44px)",
          transform: "translateY(12px)",
        }}
      />

      {/* Framed media */}
      <div
        className="relative rounded-2xl overflow-hidden border border-border"
        style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,102,204,0.14)" }}
      >
        {m.type === "video" ? (
          <video
            className="w-full h-auto block"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={m.poster || undefined}
          >
            {m.webm ? <source src={m.webm} type="video/webm" /> : null}
            <source src={m.src} type="video/mp4" />
          </video>
        ) : (
          // image / gif
          // eslint-disable-next-line @next/next/no-img-element
          <img src={m.src} alt={m.alt} className="w-full h-auto block" loading="eager" />
        )}
      </div>
    </div>
  );
}
