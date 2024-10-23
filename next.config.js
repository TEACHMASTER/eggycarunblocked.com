/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table", ],
  images: {
    domains: ['webglmath.github.io','example.com','github.com'],
  },
}

module.exports = nextTranslate(
  nextConfig
)