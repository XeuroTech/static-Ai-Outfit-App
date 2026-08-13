import { motion } from 'framer-motion'
import { Target, Heart, Sparkles, Building2, Quote } from 'lucide-react'

const VALUES = [
  {
    icon: Sparkles,
    title: 'AI that works with what you own',
    desc: "We're not building a shopping app. AI Outfit Planner is built around the wardrobe you already have — the goal is to help you get more out of your existing closet, not sell you more clothes.",
    span: 'sm:col-span-2 lg:col-span-2',
    big: true,
  },
  {
    icon: Heart,
    title: 'Practical, not gimmicky',
    desc: 'Every feature — outfit generation, the stylist chat, planning, analytics, Virtual Try-On — is built to solve a real "what do I wear" moment, not just to show off AI.',
    span: '',
  },
  {
    icon: Target,
    title: 'Respect for your data',
    desc: "Your closet is personal. We're deliberate about what the app accesses, why, and how it's used — details are always in our Privacy Policy, not buried in fine print.",
    span: '',
  },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-indigo/15 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-indigo shadow-glass">
              <Building2 className="h-3.5 w-3.5" strokeWidth={2} />
              About XeuroTech
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              We're building your closet's <span className="text-gradient">AI stylist.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              AI Outfit Planner is a product by XeuroTech, built for the everyday moment of
              standing in front of a full closet with nothing to wear. It's available now on the
              App Store and Google Play.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass shadow-glass grid grid-cols-1 overflow-hidden rounded-[1.75rem] sm:grid-cols-[220px_1fr] sm:rounded-[2.25rem]"
          >
            <div className="relative flex items-center justify-center bg-gradient-to-br from-indigo/20 to-violet/5 p-10 sm:p-0">
              <Quote className="h-16 w-16 text-indigo/60" strokeWidth={1.25} />
            </div>
            <div className="p-8 sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-ink">Why we're building this</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Most people already own enough clothes to put together a great outfit — the hard
                part is remembering what's in the closet, matching pieces well, and doing it fast
                on a busy morning. AI Outfit Planner turns your camera roll of clothing photos
                into a digital wardrobe, then uses AI to do the matching for you: it considers
                color, style, the weather, and the occasion, and explains why it picked what it
                picked. A built-in AI stylist chat, a planner for upcoming events, wardrobe
                analytics, and a place to save your favorite looks round out the experience, with
                an optional Virtual Try-On feature for people who want to see the outfit on
                themselves before committing to it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-indigo">What we care about</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              The principles behind the product
            </h2>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`glass shadow-glass rounded-3xl p-7 ${item.span}`}
                >
                  <div className={`mb-5 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo/25 to-indigo/5 ${item.big ? 'h-14 w-14' : 'h-12 w-12'}`}>
                    <Icon className={`${item.big ? 'h-7 w-7' : 'h-6 w-6'} text-indigo`} strokeWidth={1.75} />
                  </div>
                  <h3 className={`font-display font-semibold text-ink ${item.big ? 'text-xl' : 'text-lg'}`}>{item.title}</h3>
                  <p className={`mt-2.5 leading-relaxed text-muted ${item.big ? 'max-w-lg text-[15px]' : 'text-sm'}`}>{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Want to reach us?</h2>
          <p className="mt-4 text-muted">
            Head over to the{' '}
            <a href="/contact" className="font-semibold text-ink underline decoration-violet/40 underline-offset-2 hover:text-violet">
              Contact page
            </a>{' '}
            for our email and phone number.
          </p>
        </div>
      </section>
    </>
  )
}
