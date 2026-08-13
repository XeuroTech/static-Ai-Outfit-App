import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Where can I download AI Outfit Planner?',
    a: "Right on this site — tap Download on the App Store or Get it on Google Play in the section below (or up in the navigation bar) and you're set.",
  },
  {
    q: 'Which platforms does it support?',
    a: "AI Outfit Planner is built for both iOS and Android, so you can install it on whichever device you use.",
  },
  {
    q: 'Will it be free to use?',
    a: 'Yes. The core experience — your digital closet, AI outfit generation, the stylist chat, planner, analytics, and saving your favorite looks — is free. Premium is optional and unlocks Virtual Try-On and a few advanced capabilities.',
  },
  {
    q: 'What data will the app need access to?',
    a: "Camera or photo library access to add clothing photos, and location access if you want weather-aware outfit tips. Both are optional and only requested when you use the related feature — see our Privacy Policy for the full breakdown.",
  },
  {
    q: 'How will my closet photos and data be handled?',
    a: "Your wardrobe photos and account data are stored securely and used to power your own recommendations. Some AI processing happens through trusted third-party providers — see our Privacy Policy for the full breakdown.",
  },
  {
    q: 'What if I run into an issue or have a question?',
    a: "Reach out on the Contact page any time — we read every message and will get back to you.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="border-y border-border py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-violet">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-muted">Common questions people ask about AI Outfit Planner.</p>
        </motion.div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="glass shadow-glass overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] font-semibold text-ink">{item.q}</span>
                  <ChevronDown
                    className={`h-4.5 w-4.5 flex-shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-violet' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
