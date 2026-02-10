"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import BlogCard from "@/components/blog-card";
import type { BlogPost } from "@/types";

export default function BlogListClient({
  posts,
  readingTimes,
}: {
  posts: BlogPost[];
  readingTimes: Record<string, string>;
}) {
  if (posts.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        Aucun article pour le moment. Revenez bientôt !
      </p>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="space-y-1">
        {posts.map((post, i) => (
            <BlogCard
              key={post.slug}
              post={post}
              readingTime={readingTimes[post.slug] ?? "1 min"}
              index={i}
            />
          ))}
      </div>
    </LazyMotion>
  );
}
