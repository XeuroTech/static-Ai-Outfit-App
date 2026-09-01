import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache'

// This site has no ISR / on-demand revalidation — every route is prerendered
// at build time. The static-assets cache reads those prerendered files
// straight out of the Worker's static assets, so no R2 bucket or KV
// namespace has to be provisioned before `npm run deploy` works.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
})
