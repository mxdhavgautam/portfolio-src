// Equivalent to Flutter's DS5Extracurriculars component

'use client'

import { useEffect, useState } from 'react'
import { ContainerCardType2, ContainerCardType3 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function DS5Extracurriculars() {
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
      id="extracurriculars"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.extracTitle}
        description={DataValues.extracDescription}
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
            image="voyage"
            title={DataValues.extracOrg5Title}
            role={DataValues.extracOrg5Role}
            years={DataValues.extracOrg5Years}
            values={DataValues.extracOrg5Vales}
            message=""
            url={DataValues.blankURL}
            isButtonEnabled={undefined}
          />
        </div>
        <div style={{ width: `${itemWidth}px` }}>
          <ContainerCardType3
            image="comsoc"
            title={DataValues.extracOrg4Title}
            role={DataValues.extracOrg4Role}
            years={DataValues.extracOrg4Years}
            values={DataValues.extracOrg4Vales}
            message=""
            url={DataValues.blankURL}
            isButtonEnabled={undefined}
          />
        </div>
        <div style={{ width: `${itemWidth}px` }}>
          <ContainerCardType3
            image="enactus"
            title={DataValues.extracOrg1Title}
            role={DataValues.extracOrg1Role}
            years={DataValues.extracOrg1Years}
            values={DataValues.extracOrg1Vales}
            message=""
            url={DataValues.blankURL}
            isButtonEnabled={undefined}
          />
        </div>
        <div style={{ width: `${itemWidth}px` }}>
          <ContainerCardType2
            image="ncs"
            title={DataValues.extracOrg2Title}
            buttonEnabled={false}
            values={[
              DataValues.extracOrg2Activity1Name,
              DataValues.extracOrg2Activity1Grade,
              DataValues.extracOrg2Activity1Year,
              DataValues.extracOrg2Activity2Name,
              DataValues.extracOrg2Activity2Grade,
              DataValues.extracOrg2Activity2Year,
              DataValues.extracOrg2Activity3Name,
              DataValues.extracOrg2Activity3Grade,
              DataValues.extracOrg2Activity3Year,
            ]}
            message={DataValues.blankURL}
            url={DataValues.blankURL}
          />
        </div>
        <div style={{ width: `${itemWidth}px` }}>
          <ContainerCardType2
            image="ncs"
            title={DataValues.extracOrg3Title}
            buttonEnabled={false}
            values={[
              DataValues.extracOrg2Activity4Name,
              DataValues.extracOrg2Activity4Grade,
              DataValues.extracOrg2Activity4Year,
              DataValues.extracOrg2Activity5Name,
              DataValues.extracOrg2Activity5Grade,
              DataValues.extracOrg2Activity5Year,
              DataValues.extracOrg2Activity6Name,
              DataValues.extracOrg2Activity6Grade,
              DataValues.extracOrg2Activity6Year,
            ]}
            message={DataValues.blankURL}
            url={DataValues.blankURL}
          />
        </div>
          </>
        )}
      </div>
      <div className="h-10" />
    </section>
  )
}

