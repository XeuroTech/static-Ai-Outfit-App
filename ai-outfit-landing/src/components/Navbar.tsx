import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/#features' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/contact' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-4 z-50 px-4 sm:top-5 sm:px-6"
    >
      <div className="glass shadow-glass mx-auto flex max-w-5xl items-center justify-between rounded-full py-2.5 pl-4 pr-2.5 sm:pl-5 sm:pr-3">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/assets/logo-mark.jpg" alt="AI Outfit Planner logo" className="h-8 w-8 rounded-lg object-cover" />
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            AI Outfit <span className="text-gradient">Planner</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-black/20 p-1 md:flex">
          {LINKS.map((link) =>
            link.to.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.to}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors hover:text-ink ${
                    isActive ? 'bg-white/10 text-ink' : 'text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/premium"
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold text-gold transition-colors hover:text-ink"
          >
            <Crown className="h-3.5 w-3.5" strokeWidth={2} />
            Premium
          </Link>
          <a
            href="#cta"
            className="rounded-full bg-gradient-to-r from-violet to-magenta px-4 py-2 text-[13px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(124,92,252,0.55)] transition-transform hover:scale-[1.03]"
          >
            Get the App
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/premium"
            aria-label="Premium"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-gold transition-colors hover:text-ink"
          >
            <Crown className="h-4 w-4" strokeWidth={2} />
          </Link>
          <button
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-4">
              <span className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass shadow-glass mx-auto mt-2 max-w-5xl rounded-3xl px-6 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) =>
              link.to.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </NavLink>
              ),
            )}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-violet to-magenta px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Get the App
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
