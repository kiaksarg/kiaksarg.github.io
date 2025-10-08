"use client";

import { MDXProvider } from "@mdx-js/react";
import type { MDXComponents } from "mdx/types";
import React from "react";
import Link from "next/link";
import { Github, Globe, Youtube, Link2 } from "lucide-react";
import { ZoomImage } from "./ZoomImage";
import Head from 'next/head'


// Custom anchor element for MDX links without underline or icon
const A: MDXComponents['a'] = ({ href, children, ...rest }) => {
  const isInternal = href?.startsWith('/') || href?.startsWith('#');
  // Tailwind classes for clean link: no underline, subtle color change
  const baseClasses = [
    'inline-block',
    'font-medium',
    'text-indigo-600',
    'dark:text-indigo-400',
    'hover:text-indigo-800',
    'dark:hover:text-indigo-200',
    'transition-colors',
    'duration-200',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-indigo-500',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-white',
    'dark:focus-visible:ring-offset-black'
  ].join(' ');

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
  // p: (props) => <p className="mb-4 leading-relaxed" {...props} />,  
  a: A,  // styled link component without underline or icon

  /* --- Images & Zoom --- */
  ZoomImage,

  /* --- Lucide Icons for MDX usage --- */
  Github,
  Globe,
  Youtube,
  Link2,
  Head
};

export default function MDXComponents({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
}
