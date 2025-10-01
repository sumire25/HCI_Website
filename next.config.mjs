/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  basePath: '/HCI_Website',
  assetPrefix: '/HCI_Website',
  trailingSlash: true,
}

export default nextConfig
