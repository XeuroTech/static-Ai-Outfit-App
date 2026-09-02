import Link from 'next/link'
import { Mail } from 'lucide-react'

const CONTACT_EMAIL = 'support@outfit-planner.Xeurotech.com'

const LINK_GROUPS = [
  {
    title: 'Product',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Features', to: '/#features' },
      { label: 'Premium', to: '/premium' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-5">
          <div className="col-span-2 sm:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/assets/logo-mark.jpg" alt="AI Outfit Planner logo" className="h-9 w-9 rounded-xl object-cover shadow-glass" />
              <span className="font-display text-[17px] font-semibold tracking-tight text-ink">
                AI Outfit <span className="text-gradient">Planner</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Your closet, styled by AI. Generate outfits, plan ahead, and preview every look
              with Virtual Try-On. A product by XeuroTech.
            </p>
            <div className="mt-5 space-y-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4 flex-shrink-0" strokeWidth={1.75} />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wide text-muted-2">{group.title}</p>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) =>
                  link.to.startsWith('/#') ? (
                    <li key={link.label}>
                      <a href={link.to} className="text-sm text-muted transition-colors hover:text-ink">
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link href={link.to} className="text-sm text-muted transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-2">
            &copy; {new Date().getFullYear()} XeuroTech. AI Outfit Planner — all rights reserved.
          </p>
          <p className="text-xs text-muted-2">Available on iOS &amp; Android.</p>
        </div>
      </div>
    </footer>
  )
}
