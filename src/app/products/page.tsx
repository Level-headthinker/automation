import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Stethoscope, UtensilsCrossed, Building2, HeadphonesIcon } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero, GradientText } from "@/components/ui/PageHero";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AI-powered automation products for clinics, restaurants, real estate, and customer support — built for Pakistan and beyond.",
};

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, UtensilsCrossed, Building2, HeadphonesIcon,
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          label="Our Products"
          title={<>The <GradientText>AI Ecosystem</GradientText> for Service Businesses</>}
          description="Every product is purpose-built for its industry — not a generic chatbot with a logo swap. Each one is trained on real workflows, real languages, and real patient or customer expectations."
        />

        {/* Products grid */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {PRODUCTS.map((product, i) => {
                const Icon = iconMap[product.icon];
                const isViolet = product.color === "violet";
                const isLive = product.status === "live";

                return (
                  <div
                    key={product.id}
                    className={cn(
                      "glass-card rounded-2xl border border-border p-8 lg:p-12",
                      "grid lg:grid-cols-2 gap-10 items-center",
                      isLive && "ring-1 ring-violet/20"
                    )}
                  >
                    {/* Left — info */}
                    <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center",
                          isViolet ? "bg-violet-muted" : "bg-cyan-muted"
                        )}>
                          <Icon className={cn("w-7 h-7", isViolet ? "text-violet" : "text-cyan")} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="font-display font-bold text-2xl text-fg">{product.name}</h2>
                            {isLive
                              ? <Badge variant="success" dot>Live</Badge>
                              : <Badge variant="default" dot>Coming Soon</Badge>}
                          </div>
                          <p className="text-fg-muted text-sm">{product.tagline}</p>
                        </div>
                      </div>

                      <p className="text-fg-muted leading-relaxed mb-8">{product.description}</p>

                      <div className="flex gap-3">
                        {isLive ? (
                          <>
                            <Button asChild>
                              <Link href={`/products/${product.id}`}>
                                Explore {product.name} <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                            <Button variant="secondary" asChild>
                              <Link href="/#contact">Book Demo</Link>
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" asChild>
                            <Link href="/#contact">Join Waitlist</Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Right — features */}
                    <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-4">
                        What&apos;s included
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm text-fg-muted">
                            <div className={cn(
                              "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                              isViolet ? "bg-violet" : "bg-cyan"
                            )}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
