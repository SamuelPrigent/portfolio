"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import BlogCard from "@/components/blog-card";
import type { BlogPost } from "@/types";

export default function TagPageClient({
  tag,
  posts,
  readingTimes,
}: {
  tag: string;
  posts: BlogPost[];
  readingTimes: Record<string, string>;
}) {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 pb-20 pt-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Tous les articles
      </Link>

      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
            #{tag}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {posts.length} article{posts.length > 1 ? "s" : ""}
          </p>
        </m.div>

        <div className="mt-8 space-y-1">
          {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} readingTime={readingTimes[post.slug] ?? "1 min"} index={i} />
            ))}
        </div>
      </LazyMotion>
    </main>
  );
}
