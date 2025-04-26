import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const isProd = process.env.NODE_ENV === "production";
// your GitHub project repo name:
const repoName = "kiaksarg";

const nextConfig: NextConfig = {
  output: "export", // static-export mode
  trailingSlash: true, // /about/index.html
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: { unoptimized: true },

  // only when building for GH Pages:
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}` : "",

};

export default withContentCollections(nextConfig);
