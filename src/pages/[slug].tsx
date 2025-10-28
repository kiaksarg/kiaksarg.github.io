// pages/[slug].tsx
import Head from "next/head";
import Link from "next/link";

const redirects: Record<string, string> = {
  bm: "/projects/danish-business-management-platform",
  viewshift: "/projects/viewshift",
  scroll: "/projects/scrolllab",
  scrl: "/scrolllab",
};

// Pre-generate static pages for each alias (required for `next export`)
export async function getStaticPaths() {
  const paths = Object.keys(redirects).map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const target = redirects[slug] ?? null;
  return { props: { slug, target } };
}

export default function RedirectPage({
  slug,
  target,
}: {
  slug: string;
  target: string | null;
}) {
  if (!target) {
    // This won’t actually render at runtime because fallback: false,
    // but keeps the component safe.
    return (
      <main
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <Head>
          <meta name="robots" content="noindex,follow" />
          <title>404 – Not Found</title>
        </Head>
        <div>
          <h1>404 – Not Found</h1>
          <p>
            No redirect defined for <code>/{slug}</code>.
          </p>
          <Link href="/">Go home</Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        {/* Works with JS off on static hosts */}
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={target} />
        <title>Redirecting…</title>
      </Head>

      {/* Simple fallback UI */}
      <main
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            border: "3px solid #ccc",
            borderTop: "3px solid #555",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        Redirecting to{" "}
        <Link href={target} style={{ textDecoration: "underline" }}>
          {target}
        </Link>
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
