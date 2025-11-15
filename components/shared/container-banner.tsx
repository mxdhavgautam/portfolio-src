'use client'

// Equivalent to Flutter's ContainerBanner widget

import { ButtonRectangle } from './button-rectangle'
import { useEffect, useState } from 'react'

interface ContainerBannerType1Props {
  isDesktop: boolean
  title1: string
  title2: string
  description: string
  image: string
  message: string
  url: string
}

export function ContainerBannerType1({
  isDesktop,
  title1,
  title2,
  description,
  message,
  url,
}: ContainerBannerType1Props) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  const buttonColor = isDark ? 'rgba(50, 50, 50, 1)' : '#E0E0E0'

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="bg-surface flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        {isDesktop ? (
          <div className="flex items-center justify-center">
            <p className="text-xl font-medium text-foreground">{title1}</p>
            <span className="w-1" />
            <p className="text-xl font-medium text-primary">{title2}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-xl font-medium text-foreground">{title1}</p>
            <span className="w-1" />
            <p className="text-xl font-medium text-primary">{title2}</p>
          </div>
        )}
        <div className="h-1.25" />
        <p className="text-sm font-normal text-foreground/70 text-justify">
          {description}
        </p>
      </div>
      <div className="h-5" />
      <ButtonRectangle
        name={message}
        color={buttonColor}
        message={url}
        onPressed={handleClick}
      />
    </div>
  )
}

interface ContainerBannerType2Props {
  message: string
  url: string
}

export function ContainerBannerType2({ message, url }: ContainerBannerType2Props) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <a
      onClick={handleClick}
      className="cursor-pointer hover:opacity-80 transition-opacity"
      title={url}
    >
      <p className="text-sm font-normal text-foreground/70 text-center">
        {message}
      </p>
    </a>
  )
}

