import type { Metadata, Viewport } from 'next'

// Fonts are bundled locally (via @fontsource) instead of loaded from Google's
// CDN at runtime, so the site's typography never depends on the visitor's
// network being able to reach fonts.googleapis.com / fonts.gstatic.com.
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'

import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aioutfitplanner.com'),
  title: 'AI Outfit Planner — Your Closet, Styled by AI',
  description:
    "AI Outfit Planner — your closet, styled by AI. Generate daily outfits, plan looks ahead, and see yourself in every fit with Virtual Try-On.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'AI Outfit Planner — Your Closet, Styled by AI',
    description:
      'Generate daily outfits from clothes you already own, chat with an AI stylist, plan looks ahead, and try them on virtually.',
    type: 'website',
    images: ['/assets/logo-mark.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen overflow-x-hidden bg-bg text-ink-soft">
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
