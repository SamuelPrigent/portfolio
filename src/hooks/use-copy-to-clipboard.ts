"use client";

import { useCallback, useRef, useState } from "react";

export function useCopyToClipboard(text: string, resetDelay = 1000) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsCopied(false), resetDelay);
    });
  }, [text, resetDelay]);

  return { isCopied, copy };
}
