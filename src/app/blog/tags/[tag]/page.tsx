import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllTagSlugs, getPostsByTag, getTagLabel } from "@/data/blog";
import { articleComponents } from "@/content/blog";
import { getReadingTime } from "@/lib/reading-time";
import TagPageClient from "./tag-page-client";

export const dynamicParams = false;

type Props = {
  params: Promise<{ tag: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const label = getTagLabel(tag) ?? tag;
  return {
    title: `#${label} | Blog | Samuel Prigent`,
  };
}

export function generateStaticParams() {
  return getAllTagSlugs().map(({ slug }) => ({ tag: slug }));
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  const label = getTagLabel(tag) ?? tag;

  const readingTimes: Record<string, string> = {};
  for (const post of posts) {
    const Article = articleComponents[post.slug];
    if (Article) readingTimes[post.slug] = getReadingTime(Article);
  }

  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <TagPageClient tag={label} posts={sorted} readingTimes={readingTimes} />;
}
