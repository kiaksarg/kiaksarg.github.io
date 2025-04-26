"use client";

import Image, { ImageProps } from 'next/image';
import Zoom from 'react-medium-image-zoom';

export function ZoomImage(props: ImageProps & { fill?: boolean }) {
  const { alt = '', fill, style, ...rest } = props;
  return (
    <Zoom>
      <Image
        alt={alt}
        fill={fill}
        sizes="100vw"
        style={{
          objectFit: style?.objectFit ?? 'cover',
          width: fill ? undefined : '100%',
          height: fill ? undefined : 'auto',
        }}
        {...rest}
      />
    </Zoom>
  );
}
