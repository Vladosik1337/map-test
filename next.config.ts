import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // <=== enables static exports

  images: {
    domains: ["cdn.lystio.co"],
  },
};

export default nextConfig;
