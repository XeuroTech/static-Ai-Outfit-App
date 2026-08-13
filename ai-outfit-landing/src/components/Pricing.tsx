import { motion } from 'framer-motion'
import { Check, Minus, Star } from 'lucide-react'

const COMPARISON = [
  { label: 'Unlimited digital closet items', free: true, premium: true },
  { label: 'Daily AI outfit generation from your closet', free: true, premium: true },
  { label: 'AI Stylist chat with history', free: true, premium: true },
  { label: 'Style Planner with reminders', free: true, premium: true },
  { label: 'Wardrobe analytics & wear tracking', free: true, premium: true },
  { label: 'Save your favorite looks', free: true, premium: true },
  { label: 'Unlimited Virtual Try-On generations', free: false, premium: true },
  { label: 'Advanced AI styling algorithms', free: false, premium: true },
  { label: 'High-resolution image outputs', free: false, premium: true },
  { label: 'Priority server processing', free: false, premium: true },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-violet">Pricing</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Start free. Upgrade when you want to see it.
          </h2>
          <p className="mt-4 text-muted">Every core styling tool is free. Premium unlocks Virtual Try-On.</p>
        </motion.div>

        <p className="mt-8 text-center text-xs font-medium text-muted-2 sm:hidden">Swipe sideways to compare →</p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass shadow-glass mt-16 overflow-hidden rounded-3xl"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* header row */}
              <div className="grid grid-cols-[1fr_140px_160px] items-end gap-4 border-b border-border px-6 pb-6 pt-8 sm:grid-cols-[1fr_160px_190px] sm:px-8">
                <div>
                  <p className="text-sm font-medium text-muted">Compare plans</p>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-2">Free</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-ink">$0</p>
                  <p className="text-[11px] text-muted">forever</p>
                </div>
                <div className="relative text-center">
                  <span className="absolute -top-8 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-gold-dark px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    <Star className="h-3 w-3" fill="currentColor" /> Best Value
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide text-gold-dark">Premium</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-ink">$39.99</p>
                  <p className="text-[11px] text-muted">/ year · or $4.99/mo</p>
                </div>
              </div>

              {/* feature rows */}
              <div className="divide-y divide-border">
                {COMPARISON.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_140px_160px] items-center gap-4 px-6 py-4 sm:grid-cols-[1fr_160px_190px] sm:px-8"
                  >
                    <p className="text-sm text-ink-soft">{row.label}</p>
                    <div className="flex justify-center">
                      {row.free ? (
                        <Check className="h-4 w-4 text-mint" strokeWidth={3} />
                      ) : (
                        <Minus className="h-4 w-4 text-muted-2" strokeWidth={2.5} />
                      )}
                    </div>
                    <div className="flex justify-center">
                      {row.premium ? (
                        <Check className="h-4 w-4 text-gold-dark" strokeWidth={3} />
                      ) : (
                        <Minus className="h-4 w-4 text-muted-2" strokeWidth={2.5} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="grid grid-cols-[1fr_140px_160px] gap-4 px-6 py-8 sm:grid-cols-[1fr_160px_190px] sm:px-8">
                <div />
                <a
                  href="/#cta"
                  className="glass flex items-center justify-center rounded-full px-2 py-3 text-center text-[11px] font-bold leading-tight text-ink shadow-glass transition-transform hover:-translate-y-0.5 sm:text-sm"
                >
                  Get Started Free
                </a>
                <a
                  href="/#cta"
                  className="glow-gold flex items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-dark px-2 py-3 text-center text-[11px] font-bold leading-tight text-white transition-transform hover:scale-[1.02] sm:text-sm"
                >
                  Get Premium
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted-2">
          Pricing shown is in USD, billed via Google Play. Recurring billing, cancel anytime.
        </p>
      </div>
    </section>
  )
}
