import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts, getAdjacentPosts, slugifyTag } from "@/data/blog";
import { articleComponents } from "@/content/blog";
import { getReadingTime } from "@/lib/reading-time";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Samuel Prigent`,
    description: post.excerpt,
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const Article = articleComponents[slug];
  if (!Article) notFound();

  const readingTime = getReadingTime(Article);
  const { prev, next } = getAdjacentPosts(slug);

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
        Retour au blog
      </Link>

      <article className="mt-8">
        <header>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={768}
              height={400}
              className="w-[400px] rounded-lg object-cover"
              priority
            />
          )}

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
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

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tags/${slugifyTag(tag)}`}
                className="rounded-md border border-border bg-accent px-2.5 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </header>

        <div className="prose-custom mt-10">
          <Article />
        </div>
      </article>

      {/* Back to Top */}
      <div className="mt-16 border-t border-border pt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
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
            <path d="m18 15-6-6-6 6" />
          </svg>
          Back to Top
        </a>
      </div>

      {/* Prev / Next pagination */}
      {(prev || next) && (
        <nav className="mt-8 border-t border-border pt-8">
          <div className="flex items-stretch justify-between gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex items-center gap-3 text-left"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Article précédent
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-xs text-muted-foreground">
                    Article suivant
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                    {next.title}
                  </p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}
    </main>
  );
}
