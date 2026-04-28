import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Default is 60s; 0 reduces stale optimized images when you overwrite same path under /public. */
    minimumCacheTTL: 0,
  },
};

export default nextConfig;
