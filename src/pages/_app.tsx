// pages/_app.tsx
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../theme/theme-toggle";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import MDXWrapper from "../components/MDXComponents";

import "react-medium-image-zoom/dist/styles.css";
import "../styles/globals.css";
import "../styles/zoom-theme.css";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const GITHUB_URL = "https://github.com/kiaksarg";
  const CV_URL = "/arashg_cv.pdf";
  const ICON_SIZE = 19;

  // JSON-LD structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arash Goodarzi",
    alternateName: "Arash Goudarzi",
    jobTitle: "Interaction Designer & Full-stack Developer",
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        {/* Inject Schema.org JSON-LD for professional SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-surface text-black dark:bg-black dark:text-white scroll-smooth`}
      >
        {/* ---------- Header ---------- */}
        <header className="sticky top-0 bg-surface dark:bg-black z-50">
          <div className="mx-auto max-w-screen-lg flex items-center px-4 py-4 gap-3">
            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
              <Link href="/" aria-label="Homepage Logo">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded"
                  priority
                />
              </Link>
              <nav
                className="
          pb-0.5 sm:pb-0
          flex items-center
          gap-2 sm:gap-4
          text-sm uppercase
          overflow-x-auto
          flex-nowrap
          hide-scrollbar
          min-w-0
          nav-limit-width-below-340"
              >
                <Nav href="/">Home</Nav>
                <Nav href="/projects">Projects</Nav>
                <Nav href="/teaching">Teaching</Nav>
                <Nav href="/blog">Blog</Nav>
              </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-auto">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="
          text-gray-500 dark:text-gray-400
          hover:text-gray-700 dark:hover:text-gray-300
          transition-colors duration-200
        "
              >
                <FaGithub size={ICON_SIZE} />
              </a>

              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
                title="Download CV"
                className="
          text-gray-500 dark:text-gray-400
          hover:text-gray-700 dark:hover:text-gray-300
          transition-colors duration-200
        "
              >
                <TbFileCv size={ICON_SIZE} />
              </a>

              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* ---------- Page ---------- */}
        <main className="mx-auto max-w-screen-lg px-4 min-h-screen pb-8">
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
