import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  /* config options here */
  experimental: {
    typedRoutes: true,
    urlImports: ["https://utfs.io/f/**", "https://0ip50gjf5z.ufs.sh/f/**"]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/f/**"
      },
      {
        protocol: "https",
        hostname: "0ip50gjf5z.ufs.sh",
        pathname: "/f/**"
      }
    ]
  }
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
