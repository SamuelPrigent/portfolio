import type { PropsWithChildren } from "react";

export function SectionLabel({ children }: PropsWithChildren) {
  return (
    <p className="text-[13px] font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </p>
  );
}

export function SectionHeading({ children }: PropsWithChildren) {
  return (
    <h2 className="mt-1 font-serif text-[2.2rem] font-normal text-foreground max-sm:text-[1.85rem]">
      {children}
    </h2>
  );
}
