const withPWA = require("next-pwa")({
  dest: "public",
  disable:
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "preview" ||
    process.env.NODE_ENV === "production",
  // delete two lines above to enable PWA in production deployment
  // add your own icons to public/manifest.json
  // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
});

const config = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    CONTENTSTACK_API_KEY: process.env.CONTENTSTACK_API_KEY,
    CONTENTSTACK_DELIVERY_TOKEN: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    CONTENTSTACK_BRANCH: process.env.CONTENTSTACK_BRANCH || 'main',
    CONTENTSTACK_REGION: process.env.CONTENTSTACK_REGION || "us",
    CONTENTSTACK_ENVIRONMENT: process.env.CONTENTSTACK_ENVIRONMENT,
    CONTENTSTACK_MANAGEMENT_TOKEN: process.env.CONTENTSTACK_MANAGEMENT_TOKEN,
    CONTENTSTACK_API_HOST:
      process.env.CONTENTSTACK_API_HOST || 'api.contentstack.io',
    CONTENTSTACK_APP_HOST:
      process.env.CONTENTSTACK_APP_HOST || 'app.contentstack.com',
    CONTENTSTACK_LIVE_PREVIEW:
      process.env.CONTENTSTACK_LIVE_PREVIEW || 'true',
    CONTENTSTACK_LIVE_EDIT_TAGS:
      process.env.CONTENTSTACK_LIVE_EDIT_TAGS || 'false',
  },
};

/** @type {import('next').NextConfig} */
module.exports = process.env.NODE_ENV === 'development' ? config : withPWA({
  ...config,
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  eslint: {
    dirs: ["src"],
  },
});
