// pages/_app.tsx
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "../theme/theme-toggle"; // Assuming this path is correct
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from Font Awesome set
import { TbFileCv } from "react-icons/tb"; // Import CV icon from Tabler Icons set
import MDXWrapper from "../components/MDXComponents"; // Assuming this path is correct

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
  // Use the provided GitHub URL
  const GITHUB_URL = "https://github.com/kiaksarg";
  // Assumed CV path based on previous examples (update if different)
  const CV_URL = "/arashg_cv.pdf";
  // Define icon size
  const ICON_SIZE = 19; // Smaller icon size (default is 24)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Head>
        {/* SVG for modern, sharp scaling */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Fallback PNGs */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white scroll-smooth`}
      >
        {/* ---------- Header (No Border) ---------- */}
        <header className="sticky top-0 bg-white dark:bg-black z-50">
          {/* Main flex container: justify-between pushes left/right groups apart */}
          <div className="mx-auto max-w-screen-lg flex items-center justify-between px-4 py-4">
            {/* Left Group: Logo + Main Navigation */}
            <div className="flex items-center gap-3 sm:gap-6">
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
                <Link
                  href="/blog"
                  className="hidden sm:inline-block text-black dark:text-white hover:text-blue-400 transition-colors duration-200 font-medium tracking-wide"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Right Group: GitHub Link + CV Link + Theme Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* GitHub Link */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="
      text-gray-500 dark:text-gray-400  /* Base color (Light mode slightly darker) */
      hover:text-gray-700 dark:hover:text-gray-300 /* Hover color */
      transition-colors duration-200
    "
              >
                <FaGithub size={ICON_SIZE} />
              </a>

              {/* CV Link */}
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
                title="Download CV"
                className="
      text-gray-500 dark:text-gray-400 /* Base color (Light mode slightly darker) */
      hover:text-gray-700 dark:hover:text-gray-300 /* Hover color */
      transition-colors hidden sm:inline-block duration-200
    "
              >
                <TbFileCv size={ICON_SIZE} />
              </a>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
          {/* Optional: Add separate nav for mobile view if main nav is hidden */}
          {/* <nav className="sm:hidden px-4 pb-4"> ... mobile nav links ... </nav> */}
        </header>

        {/* ---------- Page ---------- */}
        <main className="mx-auto max-w-screen-lg px-4 min-h-screen pb-8">
          <MDXWrapper>
            <Component {...pageProps} />
          </MDXWrapper>
        </main>

        {/* ---------- Footer (Optional) ---------- */}
        {/* ... */}
      </div>
    </ThemeProvider>
  );
}

// NavLink component remains the same
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
