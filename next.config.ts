import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    experimental: {
        // reactCompiler: true
    },
    images: {
        domains: ["s3-alpha-sig.figma.com", "placehold.co", "robohash.org"]
    },
};

export default nextConfig;
