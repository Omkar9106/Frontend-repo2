import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    // Use production backend URL if env var is not set
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://phillsafe-backend.onrender.com';
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
      {
        source: '/test',
        destination: `${backendUrl}/test`,
      },
    ];
  },
};

// Enable HTTPS in development for camera access
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

export default nextConfig;
