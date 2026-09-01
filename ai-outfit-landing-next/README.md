# AI Outfit Planner — Landing Site

The marketing/landing site for AI Outfit Planner, built with Next.js (App Router) and Tailwind CSS.

## Deployment

This site deploys to **Cloudflare Workers** via [OpenNext](https://opennext.js.org/cloudflare). It no longer exports a static `out/` folder — `next build` produces a normal Next.js server build, and OpenNext converts that build into a Cloudflare Worker (bundled into `.open-next/`). The Worker serves every page, and `wrangler.jsonc` points Cloudflare at that bundle.

Because every page on this site is prerendered at build time (there's no ISR or per-request data fetching), the Worker's built-in static assets are used as the incremental cache (see `open-next.config.ts`) — no R2 bucket or KV namespace needs to be created before deploying.

## Local commands

```bash
npm install       # install dependencies
npm run dev       # start the Next.js dev server (http://localhost:3000)
npm run build     # next build, then bundle it into a Cloudflare Worker (.open-next/)
npm run preview   # build, then run the Worker locally in the Workers runtime (via Wrangler)
npm run deploy    # build, then deploy the Worker to Cloudflare
```

`npm run dev` is the fastest loop for day-to-day UI work. Before deploying, run `npm run preview` at least once to sanity-check the site in the actual Workers runtime rather than the Next.js dev server.

### First-time Cloudflare setup

`npm run deploy` uses [Wrangler](https://developers.cloudflare.com/workers/wrangler/), which needs a Cloudflare login the first time:

```bash
npx wrangler login
```

`wrangler.jsonc` sets the Worker name (`ai-outfit-landing`) and enables the `nodejs_compat` compatibility flag that Next.js needs on Workers.
