import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RotationGainsAlias() {
  const router = useRouter();

  // --- client-side redirect ---
  useEffect(() => {
    router.replace("/projects/viewshift");
  }, [router]);

  return (
    <>
      <Head>
        {/* Works even if JS is off */}
        <meta httpEquiv="refresh" content="0; url=/projects/viewshift" />
        {/* Avoid duplicate indexing */}
        <meta name="robots" content="noindex,follow" />
        {/* Tell crawlers which page is canonical */}
        <link rel="canonical" href="/projects/viewshift" />
        <title>ViewShift</title>
      </Head>

      {/* Simple loading UI */}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            border: "3px solid #ccc",
            borderTop: "3px solid #555",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        Redirecting to{" "}
        <Link
          href="/projects/viewshift"
          style={{ textDecoration: "underline" }}
        >
          ViewShift
        </Link>
        {/* Inline spinner animation keyframes */}
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </main>
    </>
  );
}
