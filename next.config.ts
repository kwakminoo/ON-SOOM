import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
    qualities: [75, 90, 100],
  },
  // 파일 업로드 크기 제한 - 매우 큰 값으로 설정 (10GB)
  experimental: {
    serverActions: {
      bodySizeLimit: "10gb",
    },
  },
};

export default nextConfig;


