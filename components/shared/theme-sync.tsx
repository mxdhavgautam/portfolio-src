'use client'

import { useEffect } from 'react'

function applySystemTheme(matchesDark: boolean) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(matchesDark ? 'dark' : 'light')
}

export function ThemeSync() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    applySystemTheme(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      applySystemTheme(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return null
}
