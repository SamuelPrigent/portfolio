import { forwardRef, useEffect, type ImgHTMLAttributes } from "react";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  preload?: boolean;
  type?: string;
};

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  ({ src = "", preload = false, type = "image/webp", ...imgProps }, ref) => {
    useEffect(() => {
      if (!preload || !src) return;

      const linkEl = document.createElement("link");
      linkEl.rel = "preload";
      linkEl.as = "image";
      linkEl.href = src;
      if (type) {
        linkEl.type = type;
      }

      document.head.appendChild(linkEl);

      return () => {
        document.head.removeChild(linkEl);
      };
    }, [preload, src, type]);

    return <img ref={ref} src={src} {...imgProps} />;
  },
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
