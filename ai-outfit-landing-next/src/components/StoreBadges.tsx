import { SiApple, SiGoogleplay } from 'react-icons/si'

// Placeholder store links — swap these for the real App Store / Google Play
// listing URLs once AI Outfit Planner is actually published.
export const APP_STORE_URL = 'https://apps.apple.com/app/id0000000000'
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.xeurotech.aioutfitplanner'

export function AppStoreBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center justify-center gap-2.5 rounded-full bg-black px-6 py-3 text-white shadow-glass transition-transform hover:-translate-y-0.5 sm:w-auto ${className}`}
    >
      <SiApple className="h-6 w-6 flex-shrink-0" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium text-white/70">Download on the</span>
        <span className="block text-base font-semibold -mt-0.5">App Store</span>
      </span>
    </a>
  )
}

export function GooglePlayBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={GOOGLE_PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center justify-center gap-2.5 rounded-full bg-black px-6 py-3 text-white shadow-glass transition-transform hover:-translate-y-0.5 sm:w-auto ${className}`}
    >
      <SiGoogleplay className="h-5 w-5 flex-shrink-0" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium text-white/70">GET IT ON</span>
        <span className="block text-base font-semibold -mt-0.5">Google Play</span>
      </span>
    </a>
  )
}
