/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      // Friendly admin URLs
      { source: "/admin", destination: "/login" },
      { source: "/admin/login", destination: "/login" },
      { source: "/admin/inventory", destination: "/inventory" },
      { source: "/admin/sales", destination: "/sales" },
    ];
  },
};

export default nextConfig;
