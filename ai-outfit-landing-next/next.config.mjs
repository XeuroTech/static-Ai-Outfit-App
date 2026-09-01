/** @type {import('next').NextConfig} */
const nextConfig = {
  // OpenNext's Cloudflare bundler reads the build from `.next/standalone`,
  // so a standalone build output is required for `npm run build` to produce
  // a working Worker.
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig

// Lets `next dev` pick up Cloudflare bindings (env vars, KV, R2, etc.) so
// local development matches the Workers runtime used by `npm run preview`
// and `npm run deploy`.
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
