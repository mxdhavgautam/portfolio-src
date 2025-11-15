// Equivalent to Flutter's DS4Experience component

'use client'

import { useEffect, useState } from 'react'
import { ContainerCardType3 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function DS4Experience() {
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
      id="experience"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.experienceTitle}
        description={DataValues.experienceDescription}
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
                image="cr3ate"
                title={DataValues.experienceOrg3Title}
                role={DataValues.experienceOrg3Role}
                years={DataValues.experienceOrg3Years}
                values={DataValues.experienceOrg3Vales}
                message="Visit cr3ate.ai"
                url="https://cr3ate.ai"
                isButtonEnabled={true}
                buttonText="Check out CR3ATE.AI >>"
              />
            </div>
            <div style={{ width: `${itemWidth}px` }}>
              <ContainerCardType3
                image="hcl"
                title={DataValues.experienceOrg2Title}
                role={DataValues.experienceOrg2Role}
                years={DataValues.experienceOrg2Years}
                values={DataValues.experienceOrg2Vales}
                message="View my Internship Completion Certificate"
                url="https://drive.google.com/file/d/15zI4GRXVM-6J9CvhuwxzudmmU48hk69s/view?usp=sharing"
                isButtonEnabled={true}
              />
            </div>
            <div style={{ width: `${itemWidth}px` }}>
              <ContainerCardType3
                image="mod"
                title={DataValues.experienceOrg1Title}
                role={DataValues.experienceOrg1Role}
                years={DataValues.experienceOrg1Years}
                values={DataValues.experienceOrg1Vales}
                message="View my Internship Completion Certificate"
                url="https://drive.google.com/file/d/1koGRWt7gK_vAiK3fTFFl0i-HT11t6icd/view?usp=sharing"
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

