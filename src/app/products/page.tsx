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

        <section className="pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8">
              {PRODUCTS.map((product, i) => {
                const Icon = iconMap[product.icon];
                const isViolet = product.color === "violet";
                const isLive = product.status === "live";

                return (
                  <div
                    key={product.id}
                    className={cn(
                      "glass-card rounded-2xl border border-border",
                      "p-5 sm:p-8 lg:p-12",
                      "grid lg:grid-cols-2 gap-8 lg:gap-10 items-start lg:items-center",
                      isLive && "ring-1 ring-violet/20"
                    )}
                  >
                    {/* Left — info */}
                    <div className={i % 2 !== 0 ? "lg:order-2" : ""}>

                      {/* Icon + name row */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className={cn(
                          "w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0",
                          isViolet ? "bg-violet-muted" : "bg-cyan-muted"
                        )}>
                          <Icon className={cn("w-6 h-6 sm:w-7 sm:h-7", isViolet ? "text-violet" : "text-cyan")} />
                        </div>
                        <div className="min-w-0">
                          {/* Badge above title on mobile to prevent overflow */}
                          <div className="mb-1">
                            {isLive
                              ? <Badge variant="success" dot>Live</Badge>
                              : <Badge variant="default" dot>Coming Soon</Badge>}
                          </div>
                          <h2 className="font-display font-bold text-xl sm:text-2xl text-fg leading-tight">
                            {product.name}
                          </h2>
                          <p className="text-fg-muted text-sm mt-0.5">{product.tagline}</p>
                        </div>
                      </div>

                      <p className="text-fg-muted leading-relaxed mb-6 text-sm sm:text-base">
                        {product.description}
                      </p>

                      {/* Buttons — stack on mobile, row on sm+ */}
                      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                        {isLive ? (
                          <>
                            <Button asChild className="w-full sm:w-auto">
                              <Link href={`/products/${product.id}`}>
                                Explore {product.name}
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                            <Button variant="secondary" asChild className="w-full sm:w-auto">
                              <Link href="/#contact">Book Demo</Link>
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" asChild className="w-full sm:w-auto">
                            <Link href="/#contact">Join Waitlist</Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Right — features */}
                    <div className={cn(
                      "border-t border-border pt-5 lg:border-t-0 lg:pt-0",
                      "lg:border-l lg:border-border lg:pl-10",
                      i % 2 !== 0 ? "lg:order-1 lg:border-l-0 lg:border-r lg:pr-10 lg:pl-0" : ""
                    )}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-4">
                        What&apos;s included
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-sm text-fg-muted">
                            <div className={cn(
                              "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                              isViolet ? "bg-violet" : "bg-cyan"
                            )}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span>{feature}</span>
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
