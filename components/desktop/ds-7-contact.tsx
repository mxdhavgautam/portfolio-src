// Equivalent to Flutter's DS7Contact component

'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { FrameTitle } from '../shared/frame-title'
import { SocialProfiles } from '../shared/social-profiles'
import { DataValues } from '@/data/data-values'

export function DS7Contact() {
  const [showToast, setShowToast] = useState(false)
  const toastRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DataValues.contactEmail)
      setShowToast(true)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  useLayoutEffect(() => {
    if (showToast && toastRef.current && buttonRef.current) {
      // Force layout calculation synchronously before paint to ensure correct positioning
      const buttonRect = buttonRef.current.getBoundingClientRect()
      toastRef.current.style.left = `${buttonRect.width / 2}px`
      toastRef.current.style.transform = `translateX(-50%)`
    }
  }, [showToast])

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showToast])

  return (
    <section
      id="contact"
      className="bg-surface p-[40px] flex flex-col items-center"
    >
      <FrameTitle
        title={DataValues.contactTitle}
        description={DataValues.contactDescription}
        isDesktop={true}
      />
      <div className="flex items-center justify-center gap-[5px]">
        <p className="text-lg font-medium text-foreground">
          {DataValues.contactBanner}
        </p>
        <div className="relative inline-block">
          <button
            ref={buttonRef}
            onClick={handleCopyEmail}
            title="Click to copy email to clipboard"
            className="text-lg font-medium text-primary hover:opacity-80 transition-opacity cursor-pointer"
          >
            {DataValues.contactEmail}
          </button>
          {/* Toast tooltip that auto-dismisses */}
          {showToast && (
            <div 
              ref={toastRef}
              className="absolute top-full mt-2 px-4 py-2 bg-gray-600 dark:bg-gray-500 text-white text-sm rounded shadow-lg z-50 whitespace-nowrap animate-fade-in"
              style={{ 
                willChange: 'opacity'
              }}
            >
              Email successfully copied to clipboard
            </div>
          )}
        </div>
      </div>
      <div className="h-10" />
      <SocialProfiles />
    </section>
  )
}

