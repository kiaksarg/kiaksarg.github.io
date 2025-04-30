// components/ZoomImage.tsx
"use client";

import React from "react";
import "react-medium-image-zoom/dist/styles.css";
import Image, { ImageProps } from "next/image";
import Zoom, { UncontrolledProps } from "react-medium-image-zoom";

export interface ZoomImageProps extends ImageProps {
  /** Pass additional props straight through to <Zoom>. */
  zoomProps?: Partial<UncontrolledProps>;
}

export function ZoomImage({
  alt,
  className,
  style,
  zoomProps,
  ...imgProps
}: ZoomImageProps) {
  // common image styles
  const imageStyles: React.CSSProperties = {
    objectFit: style?.objectFit ?? "cover",
    ...style,
  };

  return (
    <Zoom {...(zoomProps as UncontrolledProps)}>
      {/* no extra wrapper—this <Image>’s parent is the aspect-ratio box
          you create in MDX (`relative aspect-[16/9]`). */}
      <Image
        alt={alt}
        className={className}
        fill     /* always use `fill` in this component */
        sizes="100vw"
        style={imageStyles}
        {...imgProps}
      />
    </Zoom>
  );
}
