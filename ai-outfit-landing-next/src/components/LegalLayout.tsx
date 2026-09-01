'use client'

import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function LegalLayout({
  eyebrow,
  title,
  intro,
  lastUpdated,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  lastUpdated: string
  children: ReactNode
}) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-violet/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet shadow-glass">
            <FileText className="h-3.5 w-3.5" strokeWidth={2} />
            {eyebrow}
          </div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted">{intro}</p>
          <p className="mt-3 text-xs font-medium text-muted-2">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass shadow-glass mt-12 space-y-10 rounded-3xl p-8 sm:p-10"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  )
}
