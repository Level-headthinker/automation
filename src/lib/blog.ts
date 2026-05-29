import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverGradient: string;
  content: string;
}

export interface BlogPostMeta extends Omit<BlogPost, "content"> {}

marked.setOptions({ async: false });

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: data.slug ?? file.replace(/\.mdx?$/, ""),
        title: data.title ?? "",
        excerpt: data.excerpt ?? "",
        date: data.date ?? "",
        readTime: data.readTime ?? "5 min read",
        category: data.category ?? "General",
        coverGradient: data.coverGradient ?? "from-violet-500 to-cyan-500",
      } as BlogPostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const files = fs.readdirSync(BLOG_DIR);
  const file = files.find((f) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf-8");
    const { data } = matter(raw);
    return (data.slug ?? f.replace(/\.mdx?$/, "")) === slug;
  });

  if (!file) return null;

  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const { data, content } = matter(raw);
  const html = marked(content) as string;

  return {
    slug,
    title: data.title ?? "",
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    readTime: data.readTime ?? "5 min read",
    category: data.category ?? "General",
    coverGradient: data.coverGradient ?? "from-violet-500 to-cyan-500",
    content: html,
  };
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
