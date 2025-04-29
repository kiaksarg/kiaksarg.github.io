// components/ZoomImage.tsx
"use client";

// 1) make sure you import the default styles
import "react-medium-image-zoom/dist/styles.css";

import Image, { ImageProps } from "next/image";
import Zoom, { ZoomProps } from "react-medium-image-zoom";

export interface ZoomImageProps extends ImageProps {
  fill?: boolean;
  zoomProps?: Partial<ZoomProps>;
}

export function ZoomImage({
  fill = false,
  className,
  style,
  zoomProps,
  ...imgProps
}: ZoomImageProps) {
  // 2) choose inline-block vs block so Zoom measures correctly
  const wrapStyle: React.CSSProperties = fill
    ? { display: "block", width: "100%" }
    : { display: "inline-block" };

  // 3) if using fill, the Image needs a positioned parent
  const containerStyles: React.CSSProperties = fill
    ? { position: "relative", width: "100%", height: "100%" }
    : {};

  // merge in any user-provided style
  const imageStyles: React.CSSProperties = {
    objectFit: style?.objectFit ?? "cover",
    width: fill ? undefined : "100%",
    height: fill ? undefined : "auto",
    ...style,
  };

  return (
    <Zoom wrapStyle={wrapStyle} {...zoomProps}>
      <div style={containerStyles}>
        <Image
          className={className}
          fill={fill}
          sizes="100vw"
          style={imageStyles}
          {...imgProps}
        />
      </div>
    </Zoom>
  );
}
