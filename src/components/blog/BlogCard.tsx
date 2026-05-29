import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { type BlogPostMeta, formatDate } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group glass-card rounded-2xl border border-border overflow-hidden",
        "hover:border-border-strong transition-all duration-300 flex flex-col",
        featured && "md:flex-row"
      )}
    >
      {/* Gradient header */}
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "md:w-2/5 min-h-48" : "h-44"
        )}
        style={{
          background: `linear-gradient(135deg, var(--violet), var(--cyan))`,
          opacity: 0.9,
        }}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        {/* Category chip */}
        <div className="absolute top-4 left-4">
          <Badge variant="default" className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
            <Tag className="w-3 h-3" />
            {post.category}
          </Badge>
        </div>
        {/* Decorative circles */}
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/5 translate-x-8 translate-y-8" />
        <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-white/5 -translate-x-6 -translate-y-6" />
      </div>

      {/* Content */}
      <div className={cn("p-6 flex flex-col flex-1", featured && "md:p-8")}>
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-fg-subtle mb-3">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className={cn(
          "font-display font-bold text-fg mb-3 leading-snug group-hover:text-violet transition-colors duration-150",
          featured ? "text-xl sm:text-2xl" : "text-lg"
        )}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-fg-muted leading-relaxed flex-1 mb-4">
          {post.excerpt}
        </p>

        {/* Read more */}
        <div className="flex items-center gap-1.5 text-sm font-medium text-violet group-hover:gap-2.5 transition-all duration-200">
          Read article
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
