'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Resets scroll position on route change, or smooth-scrolls to the element
 * matching the URL hash (e.g. navigating to /#features from another page).
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        // Wait a tick for the page content to mount before scrolling.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
