import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",  // ← `docs/` にビルド結果を出力 
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "/photo", // GitHub Pages のリポジトリ名
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "/photo/",
};

export default nextConfig;
