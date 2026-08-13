import { motion } from 'framer-motion'
import { Camera, Wand2, CalendarCheck2, MessageCircleHeart } from 'lucide-react'

const STEPS = [
  {
    icon: Camera,
    step: '01',
    title: 'Add your closet',
    desc: 'Photograph your tops, bottoms, shoes, and accessories with your camera or pick them from your gallery. Tag each by category and color in seconds.',
    chips: ['Camera or gallery upload', 'Category & color tags', 'Searchable digital wardrobe'],
    accent: 'violet',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'Get AI-picked outfits',
    desc: 'AI Outfit Planner matches colors, styles, live weather, and occasion to build a complete look from pieces you already own — with plain-language reasoning and alternatives if you want a different vibe.',
    chips: ['Weather-aware suggestions', 'Match score & reasoning', '3 alternative combinations'],
    accent: 'magenta',
  },
  {
    icon: MessageCircleHeart,
    step: '03',
    title: 'Ask the AI stylist',
    desc: "Not sure about an occasion? Chat with the built-in AI stylist — it already knows what's in your closet, so its suggestions are things you can actually wear.",
    chips: ['Occasion-based advice', 'Knows your wardrobe', 'Saved chat history'],
    accent: 'pink',
  },
  {
    icon: CalendarCheck2,
    step: '04',
    title: 'Plan, wear, track',
    desc: 'Schedule looks for upcoming events, get a reminder ahead of time, mark outfits as worn, and watch your wardrobe analytics fill in — most-worn pieces, wear trends, and items you keep skipping.',
    chips: ['Event planning & reminders', 'Wear history', 'Wardrobe analytics'],
    accent: 'mint',
  },
]

const ACCENTS = {
  violet: { text: 'text-violet', from: 'from-violet', overlay: 'from-violet/15', bgSoft: 'bg-violet/10', border: 'border-violet/25' },
  magenta: { text: 'text-magenta', from: 'from-magenta', overlay: 'from-magenta/15', bgSoft: 'bg-magenta/10', border: 'border-magenta/25' },
  pink: { text: 'text-pink', from: 'from-pink', overlay: 'from-pink/15', bgSoft: 'bg-pink/10', border: 'border-pink/25' },
  mint: { text: 'text-mint', from: 'from-mint', overlay: 'from-mint/15', bgSoft: 'bg-mint/10', border: 'border-mint/25' },
} as const

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-y border-border py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-violet">How it works</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From full closet to perfect outfit
          </h2>
          <p className="mt-4 text-muted">
            Four simple steps take you from an unsorted closet to a planned, tracked, AI-styled
            wardrobe.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* center connecting line (desktop only) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

          <div className="flex flex-col gap-16 lg:gap-20">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              const accent = ACCENTS[step.accent as keyof typeof ACCENTS]
              const flip = i % 2 === 1
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-16"
                >
                  {/* text side */}
                  <div className={`${flip ? 'lg:order-2 lg:text-left' : 'lg:order-1 lg:text-right'}`}>
                    <div className={`mb-3 flex items-center gap-3 ${flip ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <span className={`font-display text-sm font-bold ${accent.text}`}>STEP {step.step}</span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{step.desc}</p>
                    <div className={`mt-5 flex flex-wrap gap-2 ${flip ? 'lg:justify-start' : 'lg:justify-end'}`}>
                      {step.chips.map((chip) => (
                        <span
                          key={chip}
                          className={`rounded-full border ${accent.border} ${accent.bgSoft} px-3 py-1 text-[11px] font-medium text-ink-soft`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* visual side */}
                  <div className={`flex ${flip ? 'lg:order-1 lg:justify-start' : 'lg:order-2 lg:justify-end'}`}>
                    <div className="glass shadow-glass relative flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-[2rem] sm:h-48 sm:w-48">
                      <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${accent.overlay} to-transparent`} />
                      <Icon className={`h-14 w-14 ${accent.text} relative`} strokeWidth={1.25} />
                      <span
                        className={`absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${accent.from} to-bg text-xs font-extrabold text-white shadow-glass`}
                      >
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* center dot on the connecting line */}
                  <span
                    className={`absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${accent.from} to-bg shadow-glass lg:block`}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
