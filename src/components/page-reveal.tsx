"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function PageReveal({ children }: PropsWithChildren) {
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduce ? 0 : 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
