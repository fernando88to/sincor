import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    redirects: async () => [
        {
            source: '/',
            destination: '/dashboard/default',
            permanent: false,
        },
    ],
};

export default nextConfig;
