import type { ReactNode, CSSProperties } from 'react'

// Stylized recreations of the REAL app's screens, built from the actual
// AI Outfit Planner (React Native / Expo) source code — real screen titles,
// real copy strings, and the real hex colors used in each screen's
// StyleSheet. These aren't literal photographic screenshots (the app has no
// exported screenshot images), but every color and every word below is
// taken directly from the app's own source, not invented.
//
// Sources:
//   OutfitGeneratorScreen.tsx  -> AI Outfit Generator
//   ClosetScreen.tsx           -> My Closet
//   StylistScreen.tsx          -> AI Stylist Chat
//   CalendarScreen.tsx         -> Style Planner
//   AnalyticsScreen.tsx        -> Wardrobe Analytics
//   PremiumSubscriptionScreen.tsx + OutfitGeneratorScreen.tsx (Try-On toggle) -> Virtual Try-On

function PreviewFrame({ label, background, children }: { label: string; background: string; children: ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 shadow-glass" style={{ background }}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        <span className="ml-1.5 truncate text-[9px] font-medium text-white/40">{label}</span>
      </div>
      <div className="flex flex-1 flex-col p-3">{children}</div>
    </div>
  )
}

// 1. AI Outfit Generator — real screen: OutfitGeneratorScreen.tsx
// bg gradient ['#000000', '#1c0338', '#000000']; match badge gradient purple;
// tabs "My Closet" / "Virtual Try-On"; "Why AI chose this outfit"; "Regenerate Outfit"
export function GeneratorPreview() {
  const bg: CSSProperties['background'] = 'linear-gradient(180deg, #000000 0%, #1c0338 55%, #000000 100%)'
  return (
    <PreviewFrame label="AI Outfit Generator" background={bg}>
      <div className="flex items-center gap-1.5">
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-wide text-[#D8B4FE]">My Closet</span>
        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[7px] font-semibold uppercase tracking-wide text-white/30">Virtual Try-On</span>
      </div>
      <div className="relative mt-3 flex-1 rounded-xl border border-[#8B5CF6]/25 bg-[#12081f] p-3">
        <span
          className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full text-[8px] font-bold text-white"
          style={{ background: 'linear-gradient(135deg,#A855F7,#701A75)' }}
        >
          85%
        </span>
        <p className="text-[8px] font-semibold uppercase tracking-wide text-[#C084FC]">Why AI chose this outfit</p>
        <p className="mt-1.5 text-[9px] leading-snug text-[#E9D5FF]/80">
          Breathable fabrics and colors that match your undertone for today&apos;s weather.
        </p>
        <p className="mt-2.5 text-[7px] font-bold uppercase tracking-wide text-[#8B5CF6]">Styling tips</p>
      </div>
      <button
        className="mt-2.5 w-full rounded-lg py-1.5 text-[9px] font-bold text-white"
        style={{ background: 'linear-gradient(90deg,#A855F7,#EC4899)' }}
      >
        Regenerate Outfit
      </button>
    </PreviewFrame>
  )
}

// 2. My Closet — real screen: ClosetScreen.tsx
// bg #0F0F1A; card #1A1A2E; border #2A2A40; accent #7C5CFC
// categories: All / Shirt / Pants / Shoes / Accessories; search "Search items..."
export function ClosetPreview() {
  const items = [
    { label: 'SHIRT', emoji: '👕', tint: 'rgba(124,92,252,0.18)' },
    { label: 'PANTS', emoji: '👖', tint: 'rgba(78,205,196,0.18)' },
    { label: 'SHOES', emoji: '👟', tint: 'rgba(244,162,97,0.18)' },
  ]
  return (
    <PreviewFrame label="My Closet" background="#0F0F1A">
      <div className="flex items-center gap-1.5 rounded-full border border-[#2A2A40] bg-[#1A1A2E] px-2.5 py-1">
        <span className="text-[9px]">🔍</span>
        <span className="text-[8px] text-[#6B6B8D]">Search items...</span>
      </div>
      <div className="mt-2 flex gap-1">
        {['All', 'Shirt', 'Pants', 'Shoes'].map((c, i) => (
          <span
            key={c}
            className="rounded-full px-2 py-0.5 text-[7px] font-semibold"
            style={i === 0 ? { background: '#7C5CFC', color: '#fff' } : { background: '#1A1A2E', color: '#6B6B8D' }}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5">
        {items.map((it) => (
          <div key={it.label} className="relative flex items-center justify-center rounded-lg" style={{ background: it.tint }}>
            <span className="text-base">{it.emoji}</span>
            <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1 text-[6px] font-bold text-white/80">{it.label}</span>
          </div>
        ))}
      </div>
    </PreviewFrame>
  )
}

// 3. AI Stylist Chat — real screen: StylistScreen.tsx
// bg #07070c; user bubble #7C5CFC; welcome "Hello! 👋 I'm your AI Stylist."
// suggested prompts: "Formal meeting" / "Party tonight" etc.
export function ChatPreview() {
  return (
    <PreviewFrame label="AI Stylist" background="#07070c">
      <div className="flex items-center gap-1.5">
        <span className="text-[10px]">✨</span>
        <span className="text-[8px] font-semibold text-[#EAEAFF]">Hello! I&apos;m your AI Stylist.</span>
      </div>
      <div className="mt-2.5 flex flex-col gap-1.5">
        {[
          { title: 'Formal meeting', sub: 'Perfect professional looks' },
          { title: 'Party tonight', sub: 'Stand out & shine' },
        ].map((p) => (
          <div key={p.title} className="flex items-center justify-between rounded-lg border border-[#18182d] bg-[#10101d] px-2 py-1.5">
            <div>
              <p className="text-[8px] font-semibold text-[#EAEAFF]">{p.title}</p>
              <p className="text-[7px] text-[#6B6B8D]">{p.sub}</p>
            </div>
            <span className="text-[9px] text-[#7C5CFC]">›</span>
          </div>
        ))}
      </div>
      <div className="mt-auto self-end rounded-2xl rounded-tr-sm px-2.5 py-1.5 text-[8px] leading-snug text-white" style={{ background: '#7C5CFC', maxWidth: '82%' }}>
        Give me outfit ideas for a party tonight
      </div>
    </PreviewFrame>
  )
}

// 4. Style Planner — real screen: CalendarScreen.tsx (UI title "Style Planner")
// bg #0B0B12; date strip #161624 / selected #6366F1; timeline event cards
export function PlannerPreview() {
  const days = [
    { d: 'Sun', n: 12 },
    { d: 'Mon', n: 13 },
    { d: 'Tue', n: 14, active: true },
    { d: 'Wed', n: 15 },
  ]
  return (
    <PreviewFrame label="Style Planner" background="#0B0B12">
      <div className="grid grid-cols-4 gap-1">
        {days.map((day) => (
          <div
            key={day.d}
            className="flex flex-col items-center gap-0.5 rounded-lg py-1.5"
            style={{ background: day.active ? '#6366F1' : '#161624' }}
          >
            <span className="text-[7px]" style={{ color: day.active ? '#fff' : '#A0A0B5' }}>
              {day.d}
            </span>
            <span className="text-[9px] font-bold" style={{ color: day.active ? '#fff' : '#EAEAFF' }}>
              {day.n}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex flex-1 items-center gap-2 rounded-lg p-2" style={{ background: '#1A1525' }}>
        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px]" style={{ background: 'rgba(244,114,182,0.15)' }}>
          🍷
        </span>
        <div>
          <p className="text-[8px] font-semibold text-[#EAEAFF]">Dinner with friends</p>
          <p className="text-[7px] text-[#8E8E9F]">Evening Wear</p>
        </div>
      </div>
    </PreviewFrame>
  )
}

// 5. Wardrobe Analytics — real screen: AnalyticsScreen.tsx
// bg #050508; card #0D0D14; border #151522; "Total Items", "Wear Trend"
export function AnalyticsPreview() {
  const bars = [32, 62, 48, 90, 54, 22]
  return (
    <PreviewFrame label="Wardrobe Analytics" background="#050508">
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-[#151522] p-1.5" style={{ background: '#0D0D14' }}>
          <p className="text-[10px] font-bold text-white">128</p>
          <p className="text-[6px] text-[#6B6B7F]">Total Items</p>
        </div>
        <div className="rounded-lg border border-[#151522] p-1.5" style={{ background: '#0D0D14' }}>
          <p className="text-[10px] font-bold text-white">3.4</p>
          <p className="text-[6px] text-[#6B6B7F]">Avg Wears / Item</p>
        </div>
      </div>
      <div className="mt-2 flex flex-1 items-end gap-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i % 2 === 0 ? '#34D399' : '#4B4B5E' }} />
        ))}
      </div>
      <p className="mt-1.5 text-[7px] font-semibold uppercase tracking-wide text-[#6B6B7F]">Wear Trend</p>
    </PreviewFrame>
  )
}

// 6. Virtual Try-On — real: Premium mode toggle in OutfitGeneratorScreen.tsx
// (tabs turn gold/amber in Virtual Try-On mode) + PremiumSubscriptionScreen.tsx
// feature copy: "Unlimited Virtual Try-On Generations"
export function TryOnPreview() {
  const bg: CSSProperties['background'] = 'linear-gradient(180deg, #000000 0%, #1c0338 60%, #000000 100%)'
  return (
    <PreviewFrame label="Virtual Try-On" background={bg}>
      <div className="flex items-center gap-1.5">
        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[7px] font-semibold text-white/30">My Closet</span>
        <span
          className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[7px] font-bold text-black"
          style={{ background: 'linear-gradient(90deg,#FBBF24,#F59E0B)' }}
        >
          ⭐ Virtual Try-On
        </span>
      </div>
      <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-1.5 rounded-xl border p-2 text-center" style={{ borderColor: 'rgba(245,158,11,0.25)', background: 'rgba(0,0,0,0.3)' }}>
        <span className="flex h-8 w-8 items-center justify-center rounded-full text-sm" style={{ background: 'linear-gradient(135deg,#F59E0B,#B45309)' }}>
          💎
        </span>
        <p className="text-[7px] font-semibold uppercase tracking-wide text-[#FBBF24]">Unlimited Virtual Try-On Generations</p>
      </div>
      <button className="mt-2.5 w-full rounded-lg py-1.5 text-[9px] font-bold text-black" style={{ background: 'linear-gradient(90deg,#F59E0B,#D97706)' }}>
        Generate Outfit
      </button>
    </PreviewFrame>
  )
}

export const FEATURE_PREVIEWS = {
  generator: GeneratorPreview,
  closet: ClosetPreview,
  chat: ChatPreview,
  planner: PlannerPreview,
  analytics: AnalyticsPreview,
  tryon: TryOnPreview,
} as const

export type FeaturePreviewVariant = keyof typeof FEATURE_PREVIEWS
