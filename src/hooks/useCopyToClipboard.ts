import { useEffect, useState } from "react";

export function useCopyToClipboard(text: string, resetDelay = 1000) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timeout = window.setTimeout(() => setIsCopied(false), resetDelay);
    return () => window.clearTimeout(timeout);
  }, [isCopied, resetDelay]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  };

  return { isCopied, copy };
}
