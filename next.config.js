/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: 'blog_projecct/',

}

module.exports = {
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
  },
}
