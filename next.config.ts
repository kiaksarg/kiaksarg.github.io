import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

// your GitHub project repo name:

const nextConfig: NextConfig = {
  output: "export", // static-export mode
  trailingSlash: true, // /about/index.html
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: { unoptimized: true },


};

export default withContentCollections(nextConfig);
