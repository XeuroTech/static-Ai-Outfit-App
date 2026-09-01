'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircleQuestion } from 'lucide-react'

const CONTACT_EMAIL = 'hello@xeurotech.com'
const CONTACT_PHONE_DISPLAY = '+92 303 8143000'
const CONTACT_PHONE_TEL = '+923038143000'

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet/15 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-violet">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Questions about AI Outfit Planner, Premium, or anything else? Reach the XeuroTech
            team directly — we read every message.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-strong shadow-glass mt-14 overflow-hidden rounded-[1.75rem] border border-white/10 sm:rounded-[2.25rem]"
        >
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="ml-3 text-[11px] font-medium text-muted-2">Contact XeuroTech</span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <a href={`mailto:${CONTACT_EMAIL}`} className="group flex flex-col items-start p-8 transition-colors hover:bg-white/[0.03]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet/25 to-violet/5">
                <Mail className="h-6 w-6 text-violet" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">Email us</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Best for detailed questions, feedback, or press inquiries.
              </p>
              <span className="mt-4 text-sm font-semibold text-violet group-hover:text-ink">
                {CONTACT_EMAIL}
              </span>
            </a>

            <a href={`tel:${CONTACT_PHONE_TEL}`} className="group flex flex-col items-start p-8 transition-colors hover:bg-white/[0.03]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-mint/25 to-mint/5">
                <Phone className="h-6 w-6 text-mint" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink">Call us</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                For anything time-sensitive during business hours.
              </p>
              <span className="mt-4 text-sm font-semibold text-mint group-hover:text-ink">
                {CONTACT_PHONE_DISPLAY}
              </span>
            </a>
          </div>

          <div className="flex flex-col items-start gap-4 border-t border-white/5 p-8 sm:flex-row sm:items-center">
            <div className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-magenta/25 to-magenta/5">
              <MessageCircleQuestion className="h-6 w-6 text-magenta" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-ink">Have a general question first?</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Check the{' '}
                <a href="/#faq" className="font-semibold text-ink underline decoration-magenta/40 underline-offset-2 hover:text-magenta">
                  FAQ on the home page
                </a>{' '}
                — it covers the most common questions.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted-2">
          We aim to respond within 1–2 business days.
        </p>
      </div>
    </section>
  )
}
