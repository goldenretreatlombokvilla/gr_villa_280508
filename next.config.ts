import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: true,
    urlImports: ["https://utfs.io/f/**"]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/**"
      }
    ]
  }
};

export default withNextVideo(nextConfig);
