'use client'

import { useEffect } from 'react'

function applySystemTheme(matchesDark: boolean) {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(matchesDark ? 'dark' : 'light')
  root.style.colorScheme = matchesDark ? 'dark' : 'light'
}

export function ThemeSync() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const syncTheme = () => {
      applySystemTheme(mediaQuery.matches)
    }

    const handleChange = (event: MediaQueryListEvent) => {
      applySystemTheme(event.matches)
    }

    syncTheme()
    mediaQuery.addEventListener('change', handleChange)
    window.addEventListener('pageshow', syncTheme)
    window.addEventListener('focus', syncTheme)
    document.addEventListener('visibilitychange', syncTheme)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
      window.removeEventListener('pageshow', syncTheme)
      window.removeEventListener('focus', syncTheme)
      document.removeEventListener('visibilitychange', syncTheme)
    }
  }, [])

  return null
}
