'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-24 lg:pt-20 lg:pb-32">
      {/* Background aurora blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-40 right-[-10%] h-[380px] w-[380px] rounded-full bg-magenta/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-8%] h-[360px] w-[360px] rounded-full bg-mint/10 blur-[120px]" />

      {/* Centered headline block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto max-w-3xl px-6 text-center lg:px-10"
      >
        <div className="glass mx-auto mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet shadow-glass">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          AI-Powered Personal Styling
        </div>

        <h1 className="font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Your closet,
          <br />
          styled by <span className="text-gradient italic">AI.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Stop staring at a full closet with nothing to wear. AI Outfit Planner learns your
          wardrobe and builds a full outfit for today &mdash; then helps you plan ahead, chat
          through style questions, and preview the look before you commit.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cta"
            className="glow-violet inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet to-magenta px-7 py-3.5 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
          >
            Get the App — It&apos;s Free
          </a>
          <a
            href="#how-it-works"
            className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-ink-soft shadow-glass transition-colors hover:text-ink"
          >
            See how it works
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 text-sm text-muted-2">
          <span className="text-mint">●</span> Free to start
        </div>
      </motion.div>

      {/* Wide product preview panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="relative mx-auto mt-16 max-w-5xl px-4 lg:mt-20 lg:px-10"
      >
        <div className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-[460px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(124,92,252,0.4),rgba(236,72,153,0.15)_45%,transparent_75%)] blur-2xl" />

        <div className="glass-strong bg-grid noise-fade relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] sm:rounded-[2.25rem]">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-[11px] font-medium text-muted-2">AI Outfit Planner — Today&apos;s Outfit</span>
          </div>

          <div className="grid grid-cols-1 gap-6 p-5 sm:p-8 lg:grid-cols-5 lg:gap-8 lg:p-10">
            {/* left: closet grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-violet">AI Powered</p>
                  <p className="font-display text-xl font-semibold text-ink">Today&apos;s Outfit</p>
                </div>
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet to-magenta text-sm font-extrabold text-white shadow-[0_0_20px_rgba(124,92,252,0.45)]">
                  96%
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: 'TOP', color: 'from-indigo/25 to-indigo/5' },
                  { label: 'BOTTOM', color: 'from-violet/25 to-violet/5' },
                  { label: 'SHOES', color: 'from-mint/25 to-mint/5' },
                  { label: 'ACCESSORY', color: 'from-gold/25 to-gold/5' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`relative flex h-24 items-end rounded-xl border border-white/10 bg-gradient-to-br ${item.color} p-2.5 sm:h-28`}
                  >
                    <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-ink-soft/80">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-violet to-magenta py-3 text-sm font-bold text-white sm:w-auto sm:px-8">
                ✨ Regenerate Outfit
              </button>
            </div>

            {/* right: reasoning panel */}
            <div className="flex flex-col justify-center rounded-2xl border border-violet/20 bg-violet/10 p-5 lg:col-span-2">
              <p className="mb-2 text-xs font-bold text-ink">Why AI chose this outfit</p>
              <p className="text-[13px] leading-relaxed text-ink-soft/80">
                A balanced, breathable combo for warm weather &mdash; suited to a casual hangout
                with friends.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {['22°C · Sunny', 'Casual Hangout', 'Indigo + Cream'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-violet/25 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-ink-soft"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* floating badges */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass absolute -left-6 -top-6 z-10 hidden max-w-[168px] rounded-2xl px-4 py-3 shadow-glass sm:block lg:-left-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-wide text-mint">Weather Tip</p>
          <p className="text-xs font-medium text-ink">👕 T-shirt &amp; jeans — perfect!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="glass absolute -right-6 -bottom-6 z-10 hidden max-w-[168px] rounded-2xl px-4 py-3 shadow-glass sm:block lg:-right-10"
        >
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gold">Virtual Try-On</p>
          <p className="text-xs font-medium text-ink">Preview the fit, AI-styled ✨</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
