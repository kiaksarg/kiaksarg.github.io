// components/RenderMDX.tsx
"use client";

import { useMDXComponent } from "@content-collections/mdx/react";
import { mdxComponents } from "./MDXComponents";

export default function RenderMDX({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={mdxComponents} />;
}
