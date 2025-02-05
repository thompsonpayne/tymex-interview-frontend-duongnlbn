import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        reactCompiler: true
    },
    images: {
        domains: ["s3-alpha-sig.figma.com"]
    }
};

export default nextConfig;
