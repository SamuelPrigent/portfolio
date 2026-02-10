import { type ReactElement, type ComponentType, isValidElement } from "react";

const WORDS_PER_MINUTE = 200;

/** Recursively extract text from a React element tree */
function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(extractText).join(" ");
  }

  if (isValidElement(node)) {
    return extractText((node as ReactElement<{ children?: React.ReactNode }>).props.children);
  }

  return "";
}

/** Calculate reading time from a JSX article component */
export function getReadingTime(Article: ComponentType): string {
  const element = (Article as () => React.ReactNode)();
  const text = extractText(element);
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return `${minutes} min`;
}
