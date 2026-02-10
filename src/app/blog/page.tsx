import type { Metadata } from "next";
import { blogPosts, getAllTagSlugs } from "@/data/blog";
import { articleComponents } from "@/content/blog";
import { getReadingTime } from "@/lib/reading-time";
import BlogListClient from "./blog-list-client";

export const metadata: Metadata = {
  title: "Blog | Samuel Prigent",
  description: "Articles techniques sur le développement web et logiciel.",
};

function computeReadingTimes(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const post of blogPosts) {
    const Article = articleComponents[post.slug];
    if (Article) map[post.slug] = getReadingTime(Article);
  }
  return map;
}

export default function BlogPage() {
  const tagSlugs = getAllTagSlugs();
  const readingTimes = computeReadingTimes();

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 pb-20 pt-12">
      <div className="text-left">
        <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground">
          Blog
        </h1>
        <p className="mt-2 text-base text-muted-foreground">
          Réflexions et retours d&apos;expérience sur le développement.
        </p>
      </div>

      {/* Tags filter */}
      {tagSlugs.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {tagSlugs.map(({ slug, label }) => (
            <a
              key={slug}
              href={`/blog/tags/${slug}`}
              className="rounded-md border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              #{label}
            </a>
          ))}
        </div>
      )}

      <div className="mt-8">
        <BlogListClient
          posts={[...blogPosts].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )}
          readingTimes={readingTimes}
        />
      </div>
    </main>
  );
}
