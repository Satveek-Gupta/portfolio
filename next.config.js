/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Satveek-Gupta',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/GuptaSatveek',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/satveek-gupta',
        permanent: true,
      },
      
    ]
  },
}
