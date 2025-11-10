"use client";

import { MDXProvider } from "@mdx-js/react";
import type { MDXComponents } from "mdx/types";
import React from "react";
import Link from "next/link";
import { Github, Globe, Youtube, Link2, FileText } from "lucide-react";
import { ZoomImage } from "./ZoomImage";
import Head from "next/head";

// Anchor
const A: MDXComponents["a"] = ({ href, children, ...rest }) => {
  const isInternal = href?.startsWith("/") || href?.startsWith("#");
  const baseClasses = [
    "inline-block",
    "font-medium",
    "text-indigo-600",
    "dark:text-indigo-400",
    "hover:text-indigo-800",
    "dark:hover:text-indigo-200",
    "transition-colors duration-200",
    "focus:outline-none",
    "focus-visible:ring-2 focus-visible:ring-indigo-500",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-white dark:focus-visible:ring-offset-black",
  ].join(" ");

  if (isInternal && href) {
    return (
      <Link href={href} className={baseClasses} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
      {...rest}
    >
      {children}
    </a>
  );
};

export const mdxComponents: MDXComponents = {
  /* --- Headings --- */
  h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />,

  /* --- Text --- */
  a: A,

  /* --- Images & Zoom --- */
  ZoomImage,

  /* --- Lucide Icons for MDX usage --- */
  Github,
  Globe,
  Youtube,
  Link2,
  FileText,
  Head,

  /* --- Tables (padding + borders + zebra + responsive) --- */
  table: ({ children, ...props }) => (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
      <table {...props} className="w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  ),
  thead: (props) => (
    <thead {...props} className="bg-zinc-50 dark:bg-zinc-900/40" />
  ),
  tbody: (props) => <tbody {...props} />,
  tr: (props) => (
    <tr
      {...props}
      className="[&:nth-child(even)]:bg-zinc-50/60 dark:[&:nth-child(even)]:bg-zinc-900/20"
    />
  ),
  th: (props) => (
    <th
      {...props}
      className="px-3 py-2 text-left font-semibold border-b border-zinc-200 dark:border-zinc-800 align-top"
    />
  ),
  td: (props) => (
    <td
      {...props}
      className="px-3 py-2 align-top border-b border-zinc-200 dark:border-zinc-800"
    />
  ),
};

export default function MDXComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}
