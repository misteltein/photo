import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/photo", // GitHub Pages のリポジトリ名
  assetPrefix: "/photo/",
};

export default nextConfig;

