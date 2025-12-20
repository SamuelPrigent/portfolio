import type { PropsWithChildren } from "react";

export default function SectionTitleSmall({ children }: PropsWithChildren) {
  return (
    <p className="text-[14.5px] font-medium uppercase tracking-wider text-primary">
      {children}
    </p>
  );
}
