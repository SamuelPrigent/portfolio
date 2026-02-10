"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function PageReveal({ children }: PropsWithChildren) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
