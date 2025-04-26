// next.config.js
import { withContentCollections } from "@content-collections/next";

export default withContentCollections({
  output: "export",
  trailingSlash: false,      // ← switch to no-slash export
  pageExtensions: ["js","jsx","ts","tsx"],
  images: { unoptimized: true },
});
