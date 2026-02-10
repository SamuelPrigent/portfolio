import type { BlogPost } from "@/types";
import comands from "../../public/images/blog/commands.png"

export const blogPosts: BlogPost[] = [
  {
    slug: "veille-tech-linkedin",
    title: "Arrête d'utiliser LinkedIn pour faire de la veille tech",
    date: "2026-01-12",
    excerpt:
      "L'algorithme LinkedIn favorise le reach, pas la vérité. Les paniques tech se succèdent mais les chiffres racontent une toute autre histoire.",
    tags: ["linkedin", "veille"],
    image: "/images/blog/veille-tech-linkedin.webp",
  },
  {
    slug: "claude-code-commandes-custom",
    title: "La puissance des commandes custom Claude Code",
    date: "2026-02-09",
    excerpt:
      "Les skills font le buzz, mais les commandes custom sont la vraie fonctionnalité qui change la manière de travailler avec l'IA. Workflows reproductibles, contrôle total.",
    tags: ["claude-code", "productivité"],
    image: "/images/blog/claude-code-commandes-custom.webp",
  },
];

/** Normalize a tag to a URL-safe ASCII slug */
export function slugifyTag(tag: string): string {
  return tag
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** All unique tags as { slug, label } pairs */
export function getAllTagSlugs(): { slug: string; label: string }[] {
  const map = new Map<string, string>();
  blogPosts.forEach((post) =>
    post.tags.forEach((t) => {
      const s = slugifyTag(t);
      if (!map.has(s)) map.set(s, t);
    })
  );
  return Array.from(map.entries())
    .map(([slug, label]) => ({ slug, label }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getPostsByTag(tagSlug: string): BlogPost[] {
  return blogPosts.filter((post) =>
    post.tags.some((t) => slugifyTag(t) === tagSlug)
  );
}

/** Find the display label for a tag slug */
export function getTagLabel(tagSlug: string): string | undefined {
  for (const post of blogPosts) {
    for (const t of post.tags) {
      if (slugifyTag(t) === tagSlug) return t;
    }
  }
  return undefined;
}

/** Sorted posts by date descending (most recent first) */
const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

/** Get prev/next articles relative to the current slug (follows display order: newest → oldest) */
export function getAdjacentPosts(slug: string) {
  const index = sortedPosts.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? sortedPosts[index - 1] : null,
    next: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null,
  };
}
