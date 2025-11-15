// Equivalent to Flutter's DS6Projects component

'use client'

import { useEffect, useState } from 'react'
import { ContainerCardType3 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function DS6Projects() {
  const [spacing, setSpacing] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    const updateLayout = () => {
      // Match Flutter's calculation exactly:
      // spacing = MediaQuery.of(context).size.width * 0.02 (full window width)
      // itemWidth = (constraints.maxWidth - spacing * 2) / 3
      // constraints.maxWidth = window width - 80px (40px padding each side)
      const windowWidth = window.innerWidth
      const sectionWidth = windowWidth - 80 // Account for 40px padding on each side
      const newSpacing = windowWidth * 0.02 // Use full window width for spacing
      // Ensure minimum 3 cards per row on desktop (min width 800px per Flutter)
      const minCardWidth = windowWidth >= 800 ? (sectionWidth - newSpacing * 2) / 3 : 0
      setSpacing(newSpacing)
      setItemWidth(minCardWidth)
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  return (
    <section
      id="projects"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.projectsTitle}
        description={DataValues.projectsDescription}
        isDesktop={true}
      />
      <div
        className="flex flex-wrap items-start justify-center"
        style={{ columnGap: `${spacing}px`, rowGap: '30px' }}
      >
        {itemWidth > 0 && (
          <>
            <div style={{ width: `${itemWidth}px` }}>
          <ContainerCardType3
            image="cardiac"
            title={DataValues.projectsOrg3Title}
            role={DataValues.projectsOrg3Role}
            years={DataValues.projectsOrg3Years}
            values={DataValues.projectsOrg3Values}
            message={DataValues.cardiacUrl}
            url={DataValues.cardiacUrl}
            isButtonEnabled={true}
            buttonText="View on GitHub >>"
          />
        </div>
        <div style={{ width: `${itemWidth}px` }}>
          <ContainerCardType3
            image="portfolio"
            title={DataValues.projectsOrg1Title}
            role={DataValues.projectsOrg1Role}
            years={DataValues.projectsOrg1Years}
            values={DataValues.projectsOrg1Values}
            message={DataValues.siteUrl}
            url={DataValues.siteUrl}
            isButtonEnabled={true}
          />
        </div>
        <div style={{ width: `${itemWidth}px` }}>
          <ContainerCardType3
            image="society"
            title={DataValues.projectsOrg2Title}
            role={DataValues.projectsOrg2Role}
            years={DataValues.projectsOrg2Years}
            values={DataValues.projectsOrg2Values}
            message={DataValues.societyUrl}
            url={DataValues.societyUrl}
            isButtonEnabled={true}
          />
        </div>
          </>
        )}
      </div>
      <div className="h-10" />
    </section>
  )
}

