// next.config.js
import { withContentCollections } from "@content-collections/next";

// replace this with your *actual* GitHub repo name:
const repoName = "kiaksarg.github.io";

export default withContentCollections({
  output: "export",
  trailingSlash: true,
  basePath: `/${repoName}`,       // ← applies to *all* pages
  assetPrefix: `/${repoName}/`,   // ← makes client JS/JSON/CSS load from /<repoName>/_next/…
  pageExtensions: ["js","jsx","ts","tsx"],
  images: { unoptimized: true },
});
