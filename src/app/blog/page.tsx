import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero, GradientText } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog — AI Automation Insights",
  description:
    "Insights on AI automation, clinic management, and building better service businesses. Written by the Raahnex team.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          label="Insights"
          labelVariant="cyan"
          title={
            <>
              AI Automation for<br />
              <GradientText>Service Businesses</GradientText>
            </>
          }
          description="Practical guides, data-driven insights, and honest takes on building AI automation for clinics, restaurants, and beyond."
        />

        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-fg-muted text-lg">Articles coming soon. Check back shortly.</p>
              </div>
            ) : (
              <>
                {/* Featured post */}
                {featured && (
                  <div className="mb-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-4">
                      Featured Article
                    </p>
                    <BlogCard post={featured} featured />
                  </div>
                )}

                {/* Remaining posts */}
                {rest.length > 0 && (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle mb-4 mt-10">
                      More Articles
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {rest.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
