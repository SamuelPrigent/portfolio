import { LazyMotion, domAnimation, m } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { type PropsWithChildren, useLayoutEffect } from "react";

export default function PageReveal({ children }: PropsWithChildren) {
  const shouldReduce = useReducedMotion();

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

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
