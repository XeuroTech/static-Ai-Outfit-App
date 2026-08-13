import { motion } from 'framer-motion'
import { AppStoreBadge, GooglePlayBadge } from './StoreBadges'

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet/25 via-purple/20 to-mint/15 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/logo-mark.jpg"
            alt="AI Outfit Planner logo"
            className="mx-auto mb-8 h-16 w-16 rounded-2xl object-cover shadow-[0_10px_40px_-8px_rgba(124,92,252,0.5)]"
          />
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Never stare at a full closet
            <br /> with nothing to wear again.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted">
            Download AI Outfit Planner free on the App Store or Google Play and let AI take over
            your closet today.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
