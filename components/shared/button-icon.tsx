'use client'

// Equivalent to Flutter's ButtonIcon widget

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ButtonIconProps {
  name: string
  url: string
  height?: number
  width?: number
}

export function ButtonIcon({
  name,
  url,
  height = 30,
  width = 30,
}: ButtonIconProps) {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsLight(!isDark)
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  const assetName = isLight ? `${name}-light` : name

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={url}
      className="hover:opacity-80 transition-opacity cursor-pointer"
    >
      <Image
        src={`/assets/icons/${assetName}.png`}
        alt={name}
        width={width}
        height={height}
        onError={(e) => {
          // Fallback to non-light version if light version doesn't exist
          const target = e.target as HTMLImageElement
          if (assetName.includes('-light')) {
            target.src = `/assets/icons/${name}.png`
          }
        }}
      />
    </a>
  )
}

