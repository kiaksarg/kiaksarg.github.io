// pages/_app.tsx
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../theme/theme-toggle";
import MDXWrapper from "../components/MDXComponents";

import "react-medium-image-zoom/dist/styles.css";
import "../globals.css";
import "../zoom-theme.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white scroll-smooth`}
      >
        {/* ---------- Header ---------- */}
        <header className="sticky top-0 bg-white dark:bg-black z-50">
          <div className="mx-auto max-w-screen-lg flex items-center justify-between px-4 py-4">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded"
              />
            </Link>
            <nav className="flex items-center space-x-6 text-sm uppercase">
              <Nav href="/">Home</Nav>
              <Nav href="/projects">Projects</Nav>
              <Nav href="/blog">Blog</Nav>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        {/* ---------- Page ---------- */}
        <main className="mx-auto max-w-screen-lg px-4">
          <MDXWrapper>
            <Component {...pageProps} />
          </MDXWrapper>
        </main>
      </div>
    </ThemeProvider>
  );
}

function Nav({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-black dark:text-white hover:text-blue-400 transition-colors duration-200 font-medium tracking-wide"
    >
      {children}
    </Link>
  );
}
