const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig

