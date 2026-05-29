import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg px-4 text-center relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(124,58,237,0.08), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-violet flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(124,58,237,0.4)]">
          <Zap className="w-8 h-8 text-white" fill="white" />
        </div>
        <div
          className="font-display font-bold gradient-text mb-4"
          style={{ fontSize: "clamp(5rem, 15vw, 9rem)", lineHeight: 1 }}
        >
          404
        </div>
        <h1 className="font-display font-bold text-fg text-2xl sm:text-3xl mb-3">
          Page Not Found
        </h1>
        <p className="text-fg-muted max-w-sm mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              Go Home <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="secondary" asChild size="lg">
            <Link href="/products">View Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
