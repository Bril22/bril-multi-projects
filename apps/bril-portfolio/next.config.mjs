/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      turbo: {
        useSwcCss: true,
        resolveExtensions: [
          ".mdx",
          ".tsx",
          ".ts",
          ".jsx",
          ".js",
          ".mjs",
          ".json",
        ],
      },
    },
  };
  export default nextConfig;
  