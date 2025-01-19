/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "styled-components.com",
      "avatars.githubusercontent.com",
      "cdn.dribbble.com"
    ]
  },
  distDir: 'build',
  output: 'export'
}

module.exports = nextConfig
