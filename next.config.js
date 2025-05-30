/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.theconversation.com',
      'source.unsplash.com',
      'platform.theverge.com',
      'techcrunch.com',
      'cdn.vox-cdn.com',
      'media.wired.com',
      'venturebeat.com',
      'zdnet.com',
      'forbes.com',
      'reuters.com',
      'bloomberg.com',
      'cnet.com',
      'engadget.com',
      'arstechnica.com',
      'thenextweb.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Disable TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 