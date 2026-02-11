"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center text-lg text-foreground transition-colors hover:text-foreground/80"
        >
          <span className="font-sans text-base font-medium max-[350px]:text-[16px] max-[320px]:text-[14.5px]">samuelprigent</span>
          <span className="font-mono text-base font-medium max-[350px]:text-[16px] max-[320px]:text-[14.5px]">.com</span>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/blog"
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              pathname?.startsWith("/blog")
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            Blog
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
