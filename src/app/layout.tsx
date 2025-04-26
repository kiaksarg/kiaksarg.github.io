import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "./theme/theme-toggle";
import MDXWrapper from "./components/MDXComponents";
import "react-medium-image-zoom/dist/styles.css";
import "./zoom-theme.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arash Goodarzi",
  description: "Interaction Designer & Full‑Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="antialiased bg-white text-black dark:bg-black dark:text-white"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 bg-white dark:bg-black  z-50">
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
                <Link
                  href="/"
                  className="text-black dark:text-white hover:text-blue-400 transition-colors duration-200 font-medium tracking-wide"
                >
                  Home
                </Link>
                {/* <Link
                    href="/about-me"
                    className="text-black dark:text-white hover:text-blue-400 transition-colors duration-200 font-medium tracking-wide"
                  >
                    About
                  </Link> */}
                <Link
                  href="/projects"
                  className="text-black dark:text-white hover:text-blue-400 transition-colors duration-200 font-medium tracking-wide"
                >
                  Projects
                </Link>
                <Link
                  href="/blog"
                  className="text-black dark:text-white hover:text-blue-400 transition-colors duration-200 font-medium tracking-wide"
                >
                  Blog
                </Link>
                <ThemeToggle />
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-screen-lg px-4">
            <MDXWrapper>{children}</MDXWrapper>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
