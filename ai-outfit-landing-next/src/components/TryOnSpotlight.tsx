'use client'

import { motion } from 'framer-motion'
import { Check, ImageIcon, Sparkles, Gauge, Crown } from 'lucide-react'

const POINTS = [
  { icon: ImageIcon, label: 'Unlimited Virtual Try-On generations' },
  { icon: Sparkles, label: 'Advanced AI styling algorithms' },
  { icon: Check, label: 'High-resolution image outputs' },
  { icon: Gauge, label: 'Priority server processing' },
]

export default function TryOnSpotlight() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_65%_60%_at_50%_0%,rgba(245,158,11,0.3),transparent_72%)] blur-2xl" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="glass mx-auto mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark shadow-glass">
            <Crown className="h-3.5 w-3.5" strokeWidth={2} />
            Premium spotlight
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            See yourself in the outfit before you wear it.
          </h2>
          <p className="mt-5 text-muted">
            Virtual Try-On generates a realistic image of you wearing the exact outfit AI picked
            &mdash; so you never have to imagine how it looks. It&apos;s the difference between an
            outfit suggestion and an outfit preview.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass-strong bg-grid noise-fade relative mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] sm:rounded-[2.25rem]"
        >
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-[11px] font-medium text-muted-2">AI Outfit Planner — Virtual Try-On</span>
          </div>

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
            {/* image */}
            <div className="relative lg:col-span-3">
              <img
                src="/assets/hero-wardrobe.jpg"
                alt="A curated wardrobe rack representing an AI-styled outfit"
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-full"
              />
              <div className="glass absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glass">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-gold-dark text-base">
                  ✨
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-gold-dark">Generating</p>
                  <p className="text-xs font-medium text-ink">Your look, visualized</p>
                </div>
              </div>
            </div>

            {/* 2x2 points grid */}
            <div className="grid grid-cols-2 gap-px bg-white/5 lg:col-span-2">
              {POINTS.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.label} className="flex flex-col justify-center gap-2.5 bg-surface p-5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15">
                      <Icon className="h-4 w-4 text-gold-dark" strokeWidth={2} />
                    </span>
                    <p className="text-[13px] font-medium leading-snug text-ink-soft">{point.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
