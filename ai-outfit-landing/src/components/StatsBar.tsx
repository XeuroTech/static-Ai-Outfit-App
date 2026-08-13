const HIGHLIGHTS = [
  { value: '7', label: 'AI-powered tools in one app' },
  { value: 'Free', label: 'Core styling features, always' },
  { value: '100%', label: 'Outfits built from clothes you own' },
  { value: 'Private', label: 'Your closet stays tied to your account' },
]

// Duplicated once so the marquee loop (translateX -50%) is seamless.
const TRACK = [...HIGHLIGHTS, ...HIGHLIGHTS]

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-border py-9">
      <div className="marquee-track marquee-fade gap-14 sm:gap-20">
        {TRACK.map((item, i) => (
          <div key={`${item.label}-${i}`} className="flex flex-shrink-0 items-center gap-4">
            <p className="font-display text-3xl font-semibold text-gradient sm:text-4xl">{item.value}</p>
            <p className="max-w-[10rem] text-xs font-medium leading-snug text-muted sm:text-sm">{item.label}</p>
            <span className="ml-10 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-border sm:ml-16" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  )
}
