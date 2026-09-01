import type { ReactNode } from 'react'

// Full-screen "phone mock-ups" of the real AI Outfit Planner app screens —
// built from the actual React Native source (real colors, real copy, real
// layout per screen). Not literal photographic screenshots: those aren't
// possible to capture safely here (the real screens only render after a
// live sign-in to the app's production Firebase project, with a populated
// closet — we have neither, and creating a throwaway account in the user's
// live user database isn't appropriate). These are code-accurate
// recreations, presented inside a real phone frame so they read like the
// app running on a device.

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/19.5] w-full max-w-[280px]">
      <div className="absolute inset-0 rounded-[2.75rem] bg-gradient-to-b from-[#33333f] to-[#0c0c10] p-[9px] shadow-[0_40px_90px_-25px_rgba(0,0,0,0.75)]">
        <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-black">
          <div className="absolute left-1/2 top-2 z-20 h-[16px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
          <div className="relative z-10 flex items-center justify-between px-6 pb-1 pt-2.5 text-[10px] font-semibold text-white">
            <span>9:41</span>
            <div className="flex items-center gap-1 text-[9px]">
              <span>▂▄▆</span>
              <span>▪</span>
            </div>
          </div>
          <div className="relative h-[calc(100%-26px)] w-full overflow-hidden">{children}</div>
          <div className="absolute bottom-1.5 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/70" />
        </div>
      </div>
    </div>
  )
}

// 1. AI Outfit Generator — real: OutfitGeneratorScreen.tsx
export function GeneratorScreen() {
  return (
    <div className="flex h-full flex-col" style={{ background: 'linear-gradient(180deg, #000000 0%, #1c0338 55%, #000000 100%)' }}>
      <div className="flex items-center justify-between px-4 pt-1.5">
        <span className="text-[12px] font-bold text-white">Outfit Generator</span>
        <span className="text-[11px] text-white/40">⟲</span>
      </div>
      <div className="mx-4 mt-2.5 flex rounded-full bg-white/5 p-0.5">
        <span className="flex-1 rounded-full bg-white/10 py-1.5 text-center text-[9px] font-semibold text-[#D8B4FE]">My Closet</span>
        <span className="flex-1 rounded-full py-1.5 text-center text-[9px] font-semibold text-white/30">Virtual Try-On</span>
      </div>
      <div className="mx-4 mt-2.5 flex-1 rounded-2xl border border-[#8B5CF6]/25 bg-[#12081f] p-2.5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[7px] font-bold text-white/60">Work · 22°C</span>
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-[8px] font-bold text-white"
            style={{ background: 'linear-gradient(135deg,#A855F7,#701A75)' }}
          >
            85%
          </span>
        </div>
        <div className="mt-2.5 grid h-[76px] grid-cols-3 grid-rows-2 gap-1.5">
          <div
            className="col-span-1 row-span-2 flex items-center justify-center rounded-lg"
            style={{ background: 'rgba(124,92,252,0.28)' }}
          >
            <span className="text-lg">👕</span>
          </div>
          <div className="flex items-center justify-center rounded-lg" style={{ background: 'rgba(78,205,196,0.26)' }}>
            <span className="text-[13px]">👖</span>
          </div>
          <div className="flex items-center justify-center rounded-lg" style={{ background: 'rgba(244,162,97,0.26)' }}>
            <span className="text-[13px]">👟</span>
          </div>
          <div className="flex items-center justify-center rounded-lg" style={{ background: 'rgba(245,158,11,0.22)' }}>
            <span className="text-[13px]">🧥</span>
          </div>
          <div className="flex items-center justify-center rounded-lg" style={{ background: 'rgba(236,72,153,0.22)' }}>
            <span className="text-[13px]">🧢</span>
          </div>
        </div>
        <p className="mt-2.5 text-[7px] font-semibold uppercase tracking-wide text-[#C084FC]">Why AI chose this outfit</p>
        <p className="mt-1 text-[8px] leading-snug text-[#E9D5FF]/75">
          Breathable fabrics and colors that match your undertone for today&apos;s weather.
        </p>
      </div>
      <p className="mx-4 mt-2.5 text-[7px] font-semibold uppercase tracking-wide text-white/35">More styling alternatives</p>
      <div className="mx-4 mb-2 mt-1.5 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-white/5 bg-white/5 p-1">
            <div className="h-6 rounded bg-white/10" />
            <p className="mt-1 text-[6px] text-white/45">{78 - i * 2}%</p>
          </div>
        ))}
      </div>
      <button
        className="mx-4 mb-3 rounded-xl py-2 text-[9px] font-bold text-white"
        style={{ background: 'linear-gradient(90deg,#A855F7,#EC4899)' }}
      >
        Regenerate Outfit
      </button>
    </div>
  )
}

// 2. My Closet — real: ClosetScreen.tsx
export function ClosetScreen() {
  const items = [
    { label: 'SHIRT', emoji: '👕', tint: 'rgba(124,92,252,0.18)' },
    { label: 'PANTS', emoji: '👖', tint: 'rgba(78,205,196,0.18)' },
    { label: 'SHOES', emoji: '👟', tint: 'rgba(244,162,97,0.18)' },
    { label: 'SHIRT', emoji: '👔', tint: 'rgba(124,92,252,0.18)' },
    { label: 'PANTS', emoji: '🩳', tint: 'rgba(78,205,196,0.18)' },
    { label: 'ACC.', emoji: '🧢', tint: 'rgba(236,72,153,0.18)' },
  ]
  return (
    <div className="flex h-full flex-col" style={{ background: '#0F0F1A' }}>
      <div className="px-4 pt-1.5">
        <span className="text-[12px] font-bold text-white">My Closet</span>
      </div>
      <div className="mx-4 mt-2.5 flex items-center gap-1.5 rounded-full border border-[#2A2A40] bg-[#1A1A2E] px-3 py-1.5">
        <span className="text-[9px]">🔍</span>
        <span className="text-[8px] text-[#6B6B8D]">Search items...</span>
      </div>
      <div className="mx-4 mt-2 flex gap-1">
        {['All', 'Shirt', 'Pants', 'Shoes'].map((c, i) => (
          <span
            key={c}
            className="rounded-full px-2 py-0.5 text-[6px] font-semibold"
            style={i === 0 ? { background: '#7C5CFC', color: '#fff' } : { background: '#1A1A2E', color: '#6B6B8D' }}
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mx-4 mb-2 mt-2 grid flex-1 grid-cols-3 gap-1.5">
        {items.map((it, i) => (
          <div key={i} className="relative flex aspect-square items-center justify-center rounded-lg" style={{ background: it.tint }}>
            <span className="text-base">{it.emoji}</span>
            <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1 text-[5px] font-bold text-white/80">{it.label}</span>
          </div>
        ))}
      </div>
      <button className="mx-4 mb-3 rounded-xl py-2 text-[9px] font-bold text-white" style={{ background: '#7C5CFC' }}>
        + Add Item
      </button>
    </div>
  )
}

// 3. AI Stylist Chat — real: StylistScreen.tsx
export function ChatScreen() {
  const prompts = [
    { title: 'Formal meeting', sub: 'Perfect professional looks' },
    { title: 'Casual hangout', sub: 'Smart casual ideas' },
    { title: 'Party tonight', sub: 'Stand out & shine' },
  ]
  return (
    <div className="flex h-full flex-col" style={{ background: '#07070c' }}>
      <div className="flex items-center gap-1.5 px-4 pt-1.5">
        <span className="text-[10px]">✨</span>
        <span className="text-[12px] font-bold text-white">AI Stylist</span>
      </div>
      <div className="flex-1 overflow-hidden px-4 pt-2">
        <p className="text-[8px] font-semibold text-[#EAEAFF]">Hello! I&apos;m your AI Stylist.</p>
        <div className="mt-2 flex flex-col gap-1.5">
          {prompts.map((p) => (
            <div key={p.title} className="flex items-center justify-between rounded-lg border border-[#18182d] bg-[#10101d] px-2 py-1.5">
              <div>
                <p className="text-[7.5px] font-semibold text-[#EAEAFF]">{p.title}</p>
                <p className="text-[6.5px] text-[#6B6B8D]">{p.sub}</p>
              </div>
              <span className="text-[8px] text-[#7C5CFC]">›</span>
            </div>
          ))}
        </div>
        <div className="ml-auto mt-2.5 max-w-[80%] rounded-2xl rounded-tr-sm px-2.5 py-1.5 text-[7.5px] leading-snug text-white" style={{ background: '#7C5CFC' }}>
          Give me outfit ideas for a party tonight
        </div>
        <div className="mt-1.5 max-w-[85%] rounded-2xl rounded-tl-sm border border-[#18182d] bg-[#10101d] px-2.5 py-1.5 text-[7.5px] leading-snug text-[#EAEAFF]">
          Try your navy blazer with a white tee and clean sneakers — sharp but relaxed 🎉
        </div>
      </div>
      <div className="mx-4 mb-3 mt-2 flex items-center rounded-full border border-[#18182d] bg-[#10101d] px-3 py-2">
        <span className="text-[7.5px] text-[#6B6B8D]">Message AI Stylist...</span>
      </div>
    </div>
  )
}

// 4. Style Planner — real: CalendarScreen.tsx
export function PlannerScreen() {
  const days = [
    { d: 'Sun', n: 12 },
    { d: 'Mon', n: 13 },
    { d: 'Tue', n: 14, active: true },
    { d: 'Wed', n: 15 },
    { d: 'Thu', n: 16 },
    { d: 'Fri', n: 17 },
    { d: 'Sat', n: 18 },
  ]
  return (
    <div className="flex h-full flex-col" style={{ background: '#0B0B12' }}>
      <div className="flex items-center justify-between px-4 pt-1.5">
        <span className="text-[12px] font-bold text-white">Style Planner</span>
        <span className="text-[11px] text-white/40">+</span>
      </div>
      <div className="mx-4 mt-2.5 grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div
            key={day.d}
            className="flex flex-col items-center gap-0.5 rounded-lg py-1.5"
            style={{ background: day.active ? '#6366F1' : '#161624' }}
          >
            <span className="text-[5.5px]" style={{ color: day.active ? '#fff' : '#A0A0B5' }}>
              {day.d}
            </span>
            <span className="text-[7.5px] font-bold" style={{ color: day.active ? '#fff' : '#EAEAFF' }}>
              {day.n}
            </span>
          </div>
        ))}
      </div>
      <div className="mx-4 mt-2.5 flex-1 space-y-1.5">
        <div className="flex items-center gap-2 rounded-lg p-1.5" style={{ background: '#1A1525' }}>
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px]" style={{ background: 'rgba(244,114,182,0.15)' }}>
            🍷
          </span>
          <div>
            <p className="text-[8px] font-semibold text-[#EAEAFF]">Dinner with friends</p>
            <p className="text-[6.5px] text-[#8E8E9F]">7:30 PM · Evening Wear</p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg p-1.5" style={{ background: '#161624' }}>
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[10px]" style={{ background: 'rgba(99,102,241,0.15)' }}>
            💼
          </span>
          <div>
            <p className="text-[8px] font-semibold text-[#EAEAFF]">Client presentation</p>
            <p className="text-[6.5px] text-[#8E8E9F]">9:00 AM · Work</p>
          </div>
        </div>
      </div>
      <button className="mx-4 mb-3 rounded-xl py-2 text-[9px] font-bold text-white" style={{ background: '#6366F1' }}>
        + Add Plan
      </button>
    </div>
  )
}

// 5. Wardrobe Analytics — real: AnalyticsScreen.tsx
export function AnalyticsScreen() {
  const bars = [32, 62, 48, 90, 54, 22, 40]
  return (
    <div className="flex h-full flex-col" style={{ background: '#050508' }}>
      <div className="px-4 pt-1.5">
        <span className="text-[12px] font-bold text-white">Wardrobe Analytics</span>
      </div>
      <div className="mx-4 mt-2 flex gap-1">
        {['Weekly', 'Monthly', 'Yearly'].map((r, i) => (
          <span
            key={r}
            className="rounded-full px-2 py-0.5 text-[6px] font-semibold"
            style={i === 0 ? { background: '#34D399', color: '#000' } : { background: '#0D0D14', color: '#6B6B7F' }}
          >
            {r}
          </span>
        ))}
      </div>
      <div className="mx-4 mt-2.5 grid grid-cols-2 gap-1.5">
        <div className="rounded-lg border border-[#151522] p-1.5" style={{ background: '#0D0D14' }}>
          <p className="text-[10px] font-bold text-white">128</p>
          <p className="text-[5.5px] text-[#6B6B7F]">Total Items</p>
        </div>
        <div className="rounded-lg border border-[#151522] p-1.5" style={{ background: '#0D0D14' }}>
          <p className="text-[10px] font-bold text-white">3.4</p>
          <p className="text-[5.5px] text-[#6B6B7F]">Avg Wears/Item</p>
        </div>
      </div>
      <div className="mx-4 mt-2.5 flex h-14 items-end gap-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i % 2 === 0 ? '#34D399' : '#4B4B5E' }} />
        ))}
      </div>
      <p className="mx-4 mt-1 text-[6px] font-semibold uppercase tracking-wide text-[#6B6B7F]">Wear Trend</p>
      <div className="mx-4 mb-3 mt-2 flex-1 rounded-lg border border-[#151522] p-2" style={{ background: '#0D0D14' }}>
        <p className="text-[6px] font-semibold uppercase tracking-wide text-[#6B6B7F]">Most Worn</p>
        <div className="mt-1.5 space-y-1">
          {['Blue Denim Jacket', 'White Sneakers'].map((n, i) => (
            <div key={n} className="flex items-center justify-between">
              <span className="text-[7.5px] text-[#EAEAFF]">{n}</span>
              <span className="text-[6.5px] text-[#6B6B7F]">{12 - i * 3}×</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// 6. Saved Looks — real: SavedOutfitsScreen.tsx
export function SavedLooksScreen() {
  const looks = [
    {
      date: 'Tue, Aug 12',
      items: 'Navy Blazer, White Tee, Chelsea Boots',
      tags: ['Shirt', 'Pants', 'Shoes'],
      tints: ['rgba(124,92,252,0.22)', 'rgba(78,205,196,0.22)', 'rgba(244,162,97,0.22)', 'rgba(236,72,153,0.14)'],
    },
    {
      date: 'Sat, Aug 9',
      items: 'Denim Jacket, Black Jeans, White Sneakers, Cap',
      tags: ['Shirt', 'Pants', 'Shoes', 'Accessories'],
      tints: ['rgba(99,102,241,0.22)', 'rgba(52,211,153,0.18)', 'rgba(236,72,153,0.18)', 'rgba(245,158,11,0.2)'],
    },
  ]
  return (
    <div className="flex h-full flex-col" style={{ background: 'linear-gradient(180deg, #000000 0%, #1c0338 45%, #000000 90%)' }}>
      <div className="flex items-center justify-between px-4 pt-1.5">
        <span className="text-[12px] font-bold text-white">Saved Looks</span>
        <span className="text-[9px]">♡</span>
      </div>
      <div className="mx-4 mb-3 mt-2.5 flex-1 space-y-2">
        {looks.map((look) => (
          <div
            key={look.date}
            className="overflow-hidden rounded-xl border"
            style={{ borderColor: 'rgba(192,132,252,0.25)', background: 'rgba(15,8,30,0.7)' }}
          >
            <div className="flex items-center justify-between px-2 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span
                className="rounded-full px-1.5 py-0.5 text-[6px] font-bold"
                style={{ background: 'rgba(192,132,252,0.15)', color: '#E9D5FF' }}
              >
                {look.date}
              </span>
              <span className="text-[8px]" style={{ color: '#EF4444' }}>
                ✕
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1 p-2">
              {look.tints.map((tint, i) => (
                <div key={i} className="aspect-square rounded" style={{ background: tint }} />
              ))}
            </div>
            <div className="px-2 pb-2">
              <p className="truncate text-[6.5px] text-[#E9D5FF]/90">{look.items}</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {look.tags.map((t) => (
                  <span key={t} className="rounded bg-white/[0.08] px-1 py-[1px] text-[5.5px] font-bold text-[#C0C0D8]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 7. Virtual Try-On — shown mid-use: real toggle (OutfitGeneratorScreen.tsx) +
// a completed result, matching how OutfitPreview.tsx renders mode="premium"
// once outfit.imageUrl is ready (full-bleed generated image, not the paywall).
export function TryOnScreen() {
  return (
    <div className="flex h-full flex-col" style={{ background: 'linear-gradient(180deg, #000000 0%, #1c0338 55%, #000000 100%)' }}>
      <div className="flex items-center justify-between px-4 pt-1.5">
        <span className="text-[12px] font-bold text-white">Virtual Try-On</span>
        <span className="text-[11px] text-white/40">⟲</span>
      </div>
      <div className="mx-4 mt-2.5 flex rounded-full bg-white/5 p-0.5">
        <span className="flex-1 rounded-full py-1.5 text-center text-[9px] font-semibold text-white/30">My Closet</span>
        <span
          className="flex-1 rounded-full py-1.5 text-center text-[9px] font-bold text-black"
          style={{ background: 'linear-gradient(90deg,#FBBF24,#F59E0B)' }}
        >
          ⭐ Virtual Try-On
        </span>
      </div>
      <div
        className="relative mx-4 mb-2 mt-2.5 flex-1 overflow-hidden rounded-2xl border"
        style={{ borderColor: 'rgba(245,158,11,0.3)', background: 'radial-gradient(ellipse 80% 65% at 50% 28%, rgba(245,158,11,0.16), transparent 70%), linear-gradient(180deg,#1c0338 0%,#0a0113 100%)' }}
      >
        {/* AI-generated figure wearing the outfit — a stylized silhouette, not a
            real photo (no photo of an actual person exists for this preview) */}
        <div className="flex h-full flex-col items-center justify-end pb-3">
          <div className="h-6 w-6 rounded-full" style={{ background: 'rgba(255,255,255,0.22)' }} />
          <div
            className="mt-0.5 h-[30%] w-[46%] rounded-t-[40%] rounded-b-md"
            style={{ background: 'linear-gradient(180deg,#d7dbe6,#a6adc2)' }}
          />
          <div className="h-[26%] w-[38%] rounded-b-sm" style={{ background: 'linear-gradient(180deg,#2b3a7a,#1a2452)' }} />
          <div className="mt-0.5 flex gap-1.5">
            <span className="h-1.5 w-5 rounded-full bg-white/85" />
            <span className="h-1.5 w-5 rounded-full bg-white/85" />
          </div>
        </div>
        {['15%,22%', '78%,15%', '65%,55%', '20%,60%'].map((pos, i) => {
          const [l, t] = pos.split(',')
          return (
            <span key={i} className="absolute text-[8px]" style={{ left: l, top: t, color: '#FBBF24', opacity: 0.8 }}>
              ✦
            </span>
          )
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span
          className="absolute right-2 top-2 flex items-center gap-1 rounded-full px-2 py-0.5 text-[7px] font-bold text-black"
          style={{ background: 'linear-gradient(90deg,#FBBF24,#F59E0B)' }}
        >
          ✨ 94% match
        </span>
        <div className="absolute bottom-2 left-2 right-2">
          <p className="text-[8px] font-bold uppercase tracking-wide text-[#FBBF24]">Look generated</p>
          <p className="text-[7px] text-white/70">Business Casual · Indigo + Cream</p>
        </div>
      </div>
      <div className="mx-4 mb-3 flex items-center gap-1.5">
        <button
          className="flex flex-1 items-center justify-center gap-1 rounded-xl py-2 text-[9px] font-bold text-black"
          style={{ background: 'linear-gradient(90deg,#F59E0B,#D97706)' }}
        >
          ⬇ Save Look
        </button>
        <span
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border text-[10px] text-[#FBBF24]"
          style={{ borderColor: 'rgba(245,158,11,0.3)' }}
        >
          ⤴
        </span>
      </div>
    </div>
  )
}
