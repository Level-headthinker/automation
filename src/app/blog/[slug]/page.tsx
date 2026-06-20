import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-28 pb-12 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,102,204,0.08), transparent 70%)",
            }}
          />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" />
              Back to Blog
            </Link>

            {/* Category + meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Badge variant="violet">
                <Tag className="w-3 h-3" />
                {post.category}
              </Badge>
              <span className="text-sm text-fg-subtle">{formatDate(post.date)}</span>
              <span className="text-fg-subtle">·</span>
              <span className="text-sm text-fg-subtle flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display font-bold text-fg leading-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-fg-muted leading-relaxed border-l-2 border-violet pl-4">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Article content */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
              className="prose-tapzero"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface border-y border-border">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-fg text-2xl sm:text-3xl mb-3">
              Ready to Automate Your Clinic?
            </h2>
            <p className="text-fg-muted mb-6">
              Book a free 30-minute demo and see ClinicBot running live for your practice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/demo">
                  Book a Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild size="lg">
                <Link href="/products/clinicbot">See ClinicBot Features</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="font-display font-bold text-xl text-fg mb-6">More Articles</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="glass-card rounded-xl border border-border p-5 hover:border-border-strong transition-all duration-200 group"
                  >
                    <Badge variant="default" className="mb-3">
                      <Tag className="w-3 h-3" />
                      {p.category}
                    </Badge>
                    <h4 className="font-semibold text-fg text-sm leading-snug mb-2 group-hover:text-violet transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs text-fg-subtle">{formatDate(p.date)} · {p.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
