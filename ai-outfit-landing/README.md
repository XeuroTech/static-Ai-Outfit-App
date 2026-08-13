# AI Outfit Planner — Landing Page

Static marketing/landing site for the **AI Outfit Planner** mobile app, by **XeuroTech**. Built with React, Vite, TypeScript, Tailwind CSS v4, Framer Motion, and React Router.

This is a standalone static site — it does not touch or depend on the mobile app codebase. It deliberately uses the **same color palette as the real app** (near-black backgrounds with indigo/violet/purple/magenta/gold accents) so visitors recognize it as the same product, while using its own bespoke page layouts (bento-style feature grid, stat cards, step cards) rather than a generic template look.

The app has not launched yet, so the site is written for a **pre-launch** audience: no fake reviews or testimonials, no invented usage stats, App Store/Google Play links are placeholders, and the FAQ only covers questions people would ask before launch.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs a fully static site into `dist/` — every file in there can be uploaded as-is to any static host (Netlify, Vercel, GitHub Pages, S3, cPanel, etc.).

```bash
npm run preview
```

previews the production build locally.

## Routing note (important for hosting)

This site uses `react-router-dom`'s `BrowserRouter`, so routes like `/premium`, `/contact`, `/about`, `/privacy`, and `/terms` are real URL paths, not hash fragments — this was required so `Features` (a same-page anchor, `/#features`) and the other pages could coexist cleanly.

That means your static host must be configured to serve `index.html` for any unknown path (an "SPA fallback" / "rewrite" rule), otherwise a hard refresh or direct link to e.g. `/privacy` will 404. This repo already includes the config for the most common hosts:

- **Netlify** — `public/_redirects` (copied into `dist/` on build)
- **Vercel** — `vercel.json` at the project root
- **Apache (cPanel, shared hosting, etc.)** — `public/.htaccess` (copied into `dist/` on build)

**GitHub Pages caveat:** GitHub Pages does not support this kind of rewrite rule out of the box. If you deploy there, either add a `404.html` that redirects to `index.html` (a common GitHub Pages workaround), or switch `main.tsx` to `HashRouter` — note that a straight `HashRouter` switch would also require changing the `/#features` anchor link in `Navbar.tsx`/`Footer.tsx` since it currently relies on `BrowserRouter` treating `#features` as a same-page hash, not a route.

## Project structure

```
src/
  App.tsx                    # Route table (/, /premium, /contact, /about, /privacy, /terms)
  index.css                  # Tailwind import + theme tokens (exact app colors, fonts) + utility classes
  pages/
    Home.tsx                  # Hero, stats, features, how it works, FAQ, CTA
    Premium.tsx                # Premium highlights, Virtual Try-On spotlight, full pricing
    Contact.tsx                 # Email (mailto) + phone (tel) + link back to FAQ
    About.tsx                    # XeuroTech / product mission
    Privacy.tsx                   # Full privacy policy tailored to the real app's data practices
    Terms.tsx                      # Full terms of service
  components/
    Layout.tsx              # Navbar + page content + Footer + ScrollToTop, wraps every route
    ScrollToTop.tsx          # Resets scroll on route change; smooth-scrolls to a hash target
    Navbar.tsx               # Sticky header: Home, Features, Contact, Privacy, About + Premium + Get the App
    Footer.tsx                # Footer links, XeuroTech contact info, legal links
    Hero.tsx                    # Headline + CTA + app-mockup visual (subtle Premium mention only)
    StatsBar.tsx                 # Honest, non-numeric-claim capability strip
    Features.tsx                  # 6 feature cards; Virtual Try-On marked Premium, links to /premium
    HowItWorks.tsx                 # 4-step process with expanded detail per step
    TryOnSpotlight.tsx              # Virtual Try-On deep-dive (used on the Premium page)
    Pricing.tsx                      # Free vs Premium plans (used on the Premium page)
    FAQ.tsx                            # Pre-launch-only FAQ
    CTA.tsx                              # Final download call-to-action (store links are placeholders)
    LegalLayout.tsx                       # Shared header/section layout for Privacy & Terms
public/
  assets/                 # Brand images (logo mark, wardrobe photo, app icon) pulled from the app project
  favicon.png
  _redirects              # Netlify SPA fallback
  .htaccess               # Apache SPA fallback
vercel.json               # Vercel SPA fallback
```

## Theme — matches the real app

Colors are pulled directly from the AI Outfit Planner app's source (see `src/index.css`):

- Backgrounds: `#0F0F1A`, `#0B0B12`, surfaces `#1A1A2E` / `#161624`, borders `#2A2A40`
- Accents: indigo `#6366F1`, violet `#7C5CFC`, purple `#A855F7`, magenta `#EC4899`, pink `#F472B6`
- Premium accent: gold `#F59E0B` → `#B45309`
- Success/mint: `#34D399` / `#10B981`
- Text: `#FFFFFF` / `#EAEAFF` (headings), `#8E8E9F` / `#6B6B8D` (muted)

Fonts: **Space Grotesk** (display/headings) + **Manrope** (body), loaded from Google Fonts in `index.html`.

## Content that needs to be swapped before launch

- **Contact email/phone** — `hello@xeurotech.com` and `+1 (555) 010-9822` are placeholders used consistently across `Footer.tsx`, `Contact.tsx`, `Privacy.tsx`, and `Terms.tsx`. Replace all four.
- **App Store / Google Play links** — `CTA.tsx` has `href="#"` placeholders; add the real store URLs once the app is live.
- **Privacy Policy / Terms of Service** — written to accurately reflect the real app's data practices (camera/photo access, location, Firebase, Cloudinary, Google Gemini/OpenAI/Groq AI processing, Google Play Billing, on-device storage). Governing law in `Terms.tsx` §14 is set to Pakistan. Have both documents reviewed by a lawyer before public launch.
- **FAQ** (`FAQ.tsx`) — currently pre-launch-only questions; swap in post-launch/usage FAQs once the app ships.
