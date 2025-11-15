'use client'

// Mobile navigation drawer equivalent to Flutter's mobileNavBar

import { useState } from 'react'
import Image from 'next/image'
import { ButtonRectangle } from './button-rectangle'
import { ButtonTextLarge } from './button-text'
import { DataValues } from '@/data/data-values'

interface MobileNavDrawerProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  onNavigate,
}: MobileNavDrawerProps) {
  const handleResumeClick = () => {
    window.open(DataValues.resumeURL, '_blank', 'noopener,noreferrer')
    onClose()
  }

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white dark:bg-background-black z-50 overflow-y-auto px-5">
        <div className="pt-[60px] pb-5">
          {/* Mini Header - centered */}
          <div className="flex flex-col items-center mb-5">
            <Image
              src="/assets/images/logo.webp"
              alt="Madhav Gautam logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="h-2.5" />
            <p className="text-xl font-bold text-primary text-center">
              {DataValues.headerName}
            </p>
            <p className="text-sm font-normal text-grey-dark text-center">
              {DataValues.headerTitle}
            </p>
          </div>
          {/* Navigation buttons - centered */}
          <div className="flex flex-col items-center space-y-5">
            <div className="w-full flex justify-center">
              <ButtonRectangle
                name={DataValues.navBarResume}
                onPressed={handleResumeClick}
                color="#E53935"
                message="View my Resume"
              />
            </div>
            <div className="w-full flex justify-center">
              <ButtonTextLarge
                text={DataValues.navBarAboutMe}
                onPressed={() => handleNavClick('about')}
                message={`Go to ${DataValues.navBarAboutMe} section`}
              />
            </div>
            <div className="w-full flex justify-center">
              <ButtonTextLarge
                text={DataValues.navBarEducation}
                onPressed={() => handleNavClick('education')}
                message={`Go to ${DataValues.navBarEducation} section`}
              />
            </div>
            <div className="w-full flex justify-center">
              <ButtonTextLarge
                text={DataValues.navBarExperience}
                onPressed={() => handleNavClick('experience')}
                message={`Go to ${DataValues.navBarExperience} section`}
              />
            </div>
            <div className="w-full flex justify-center">
              <ButtonTextLarge
                text={DataValues.navBarTechNotes}
                onPressed={() => handleNavClick('projects')}
                message={`Go to ${DataValues.navBarTechNotes} section`}
              />
            </div>
            <div className="w-full flex justify-center">
              <ButtonTextLarge
                text={DataValues.navBarVolunteering}
                onPressed={() => handleNavClick('extracurriculars')}
                message={`Go to ${DataValues.navBarVolunteering} section`}
              />
            </div>
            <div className="w-full flex justify-center">
              <ButtonRectangle
                name={DataValues.navBarContactMe}
                onPressed={() => handleNavClick('contact')}
                color="#E53935"
                message={`Go to ${DataValues.navBarContactMe} section`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

