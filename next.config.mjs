/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the App Router directory to src/app to ensure src/app/page.tsx is recognized
  appDir: 'src/app',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
