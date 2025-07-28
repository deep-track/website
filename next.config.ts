import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Temporarily disable rewrites to test direct PostHog connection
  // async rewrites() {
  //   return [
  //     {
  //       source: "/ingest/static/:path*",
  //       destination: "https://us-assets.i.posthog.com/static/:path*",
  //     },
  //     {
  //       source: "/ingest/:path*",
  //       destination: "https://us.i.posthog.com/:path*",
  //     },
  //   ];
  // },
  // This is required to support PostHog's reverse proxy
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
