'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Sparkles, Shirt, MessageCircleHeart, CalendarClock, BarChart3, Heart, ScanFace, Crown, ChevronRight } from 'lucide-react'
import { PhoneFrame, GeneratorScreen, ClosetScreen, ChatScreen, PlannerScreen, AnalyticsScreen, SavedLooksScreen, TryOnScreen } from './PhoneMockups'

const FEATURES = [
  {
    icon: Sparkles,
    title: 'AI Outfit Generator',
    desc: 'Generates a complete outfit from your own closet with a match score, styling reasoning, and three alternatives — no guesswork.',
    iconColor: 'text-violet',
    iconBg: 'from-violet/25 to-violet/5',
    Screen: GeneratorScreen,
  },
  {
    icon: Shirt,
    title: 'My Closet',
    desc: 'Snap a photo of every piece you own and build a searchable digital wardrobe, tagged by category and color.',
    iconColor: 'text-indigo',
    iconBg: 'from-indigo/25 to-indigo/5',
    Screen: ClosetScreen,
  },
  {
    icon: MessageCircleHeart,
    title: 'AI Stylist Chat',
    desc: 'Ask for outfit ideas by occasion — "formal meeting", "party tonight" — and get advice that knows what\'s in your closet.',
    iconColor: 'text-pink',
    iconBg: 'from-pink/25 to-pink/5',
    Screen: ChatScreen,
  },
  {
    icon: CalendarClock,
    title: 'Style Planner',
    desc: "Plan outfits for upcoming events, attach the pieces you'll wear, and get a reminder before you need to be ready.",
    iconColor: 'text-mint',
    iconBg: 'from-mint/25 to-mint/5',
    Screen: PlannerScreen,
  },
  {
    icon: BarChart3,
    title: 'Wardrobe Analytics',
    desc: 'See your most and least worn pieces, wear trends over time, and which items are quietly gathering dust.',
    iconColor: 'text-magenta',
    iconBg: 'from-magenta/25 to-magenta/5',
    Screen: AnalyticsScreen,
  },
  {
    icon: Heart,
    title: 'Saved Looks',
    desc: 'Loved a look? Save it and come back anytime — with the exact pieces you used, ready to wear again.',
    iconColor: 'text-purple',
    iconBg: 'from-purple/25 to-purple/5',
    Screen: SavedLooksScreen,
  },
  {
    icon: ScanFace,
    title: 'Virtual Try-On',
    desc: 'Generate a realistic AI image of yourself wearing the full outfit before you ever put it on.',
    iconColor: 'text-gold-dark',
    iconBg: 'from-gold/30 to-gold/5',
    premium: true,
    Screen: TryOnScreen,
  },
]

function PremiumLink() {
  return (
    <Link
      href="/premium"
      className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-gold-dark px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-[1.03]"
    >
      <Crown className="h-3 w-3" strokeWidth={2.5} />
      See Premium plans
    </Link>
  )
}

export default function Features() {
  const [active, setActive] = useState(0)
  const feature = FEATURES[active]

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-violet">Everything you need</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            One app. Every part of getting dressed.
          </h2>
          <p className="mt-4 text-muted">
            From cataloguing your closet to seeing yourself in the final look — AI Outfit Planner
            handles the whole styling loop. Tap a feature to see it in action.
          </p>
        </motion.div>

        {/* Desktop / tablet-landscape: list on the left, sticky phone preview on the right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 hidden lg:grid lg:grid-cols-[1fr_320px] lg:items-start lg:gap-12"
        >
          <div className="flex flex-col gap-2.5">
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              const isActive = i === active
              return (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`glass shadow-glass group flex w-full items-start gap-4 rounded-2xl p-5 text-left transition-all ${
                    isActive ? 'ring-1 ring-violet/40' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${f.iconBg}`}>
                    <Icon className={`h-5 w-5 ${f.iconColor}`} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-[15px] font-semibold text-ink">{f.title}</h3>
                      {f.premium && (
                        <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-gold-dark px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                          <Crown className="h-2.5 w-2.5" strokeWidth={2.5} />
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <PhoneFrame>
                  <feature.Screen />
                </PhoneFrame>
                {feature.premium && <PremiumLink />}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile / tablet-portrait: accordion — preview expands directly under the tapped row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 flex flex-col gap-2.5 lg:hidden"
        >
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            const isActive = i === active
            return (
              <div key={f.title} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setActive(isActive ? active : i)}
                  className={`glass shadow-glass group flex w-full items-start gap-4 rounded-2xl p-5 text-left transition-all ${
                    isActive ? 'rounded-b-none ring-1 ring-violet/40' : 'opacity-70 active:opacity-100'
                  }`}
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${f.iconBg}`}>
                    <Icon className={`h-5 w-5 ${f.iconColor}`} strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-[15px] font-semibold text-ink">{f.title}</h3>
                      {f.premium && (
                        <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-gold-dark px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                          <Crown className="h-2.5 w-2.5" strokeWidth={2.5} />
                          Premium
                        </span>
                      )}
                    </div>
                    <p className={`mt-1 text-[13px] leading-relaxed text-muted ${isActive ? 'block' : 'hidden sm:block'}`}>{f.desc}</p>
                  </div>
                  <ChevronRight className={`mt-1 h-4 w-4 flex-shrink-0 text-muted-2 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="preview"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="glass shadow-glass overflow-hidden rounded-b-2xl border-t border-white/5 ring-1 ring-violet/40"
                    >
                      <div className="flex flex-col items-center px-5 py-6">
                        <PhoneFrame>
                          <f.Screen />
                        </PhoneFrame>
                        {f.premium && <PremiumLink />}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
