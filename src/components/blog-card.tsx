"use client";

import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import type { BlogPost } from "@/types";

export default function BlogCard({
  post,
  readingTime,
  index = 0,
}: {
  post: BlogPost;
  readingTime: string;
  index?: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="flex gap-5 rounded-xl border border-transparent px-4 py-5 transition-all duration-200 hover:border-border hover:bg-accent/50 max-sm:flex-col">
          {post.image && (
            <div className="flex w-[200px] shrink-0 items-center max-sm:w-full">
              <Image
                src={post.image}
                alt={`Aperçu : ${post.title}`}
                width={200}
                height={120}
                className="h-[120px] w-full rounded-lg object-cover"
              />
            </div>
          )}

          <div className="flex flex-1 flex-col">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>&middot;</span>
              <span>{readingTime}</span>
            </div>

            <h3 className="mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-foreground">
              {post.title}
            </h3>

            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </m.div>
  );
}
