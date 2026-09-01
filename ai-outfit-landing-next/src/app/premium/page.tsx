'use client'

import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'
import TryOnSpotlight from '../../components/TryOnSpotlight'
import Pricing from '../../components/Pricing'

const CHIPS = [
  'Unlimited Virtual Try-On',
  'Advanced AI styling algorithms',
  'High-resolution image outputs',
  'Priority server processing',
]

const CHIP_TRACK = [...CHIPS, ...CHIPS]

export default function Premium() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-14 lg:pt-28">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gold/15 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark shadow-glass">
              <Crown className="h-3.5 w-3.5" strokeWidth={2} />
              AI Outfit Planner Premium
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              Everything free, plus the
              <br />
              full <span className="text-gradient-gold">AI experience.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              The core of AI Outfit Planner — your closet, AI outfit generation, the stylist chat,
              planner, and analytics — is free. Premium is an optional upgrade for people who want
              Virtual Try-On and a faster, more advanced AI pipeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* premium chip ticker */}
      <section className="relative overflow-hidden border-y border-border py-6">
        <div className="marquee-track marquee-fade gap-10 sm:gap-14">
          {CHIP_TRACK.map((chip, i) => (
            <div key={`${chip}-${i}`} className="flex flex-shrink-0 items-center gap-3">
              <Crown className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
              <p className="whitespace-nowrap text-sm font-medium text-ink-soft">{chip}</p>
              <span className="ml-7 h-1 w-1 flex-shrink-0 rounded-full bg-border sm:ml-11" aria-hidden />
            </div>
          ))}
        </div>
      </section>

      <TryOnSpotlight />
      <Pricing />

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-sm text-muted">
            Premium is billed and managed through Google Play Billing — no card details are ever
            stored by AI Outfit Planner itself. Full terms are available on our{' '}
            <a href="/terms" className="font-semibold text-ink underline decoration-violet/40 underline-offset-2 hover:text-violet">
              Terms of Service
            </a>{' '}
            page.
          </p>
        </div>
      </section>
    </>
  )
}
