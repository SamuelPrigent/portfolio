import type { PropsWithChildren } from "react";

export default function SectionTitleBig({ children }: PropsWithChildren) {
  return (
    <h2 className="mt-[5px] text-[2.17rem] font-semibold text-slate-900 max-[389px]:text-[30px]">
      {children}
    </h2>
  );
}
