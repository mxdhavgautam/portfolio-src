// Equivalent to Flutter's DS6Projects component

import { ContainerCardType3 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function DS6Projects() {
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
        style={{ columnGap: '2vw', rowGap: '30px' }}
      >
        <div style={{ width: 'calc((96vw - 80px) / 3)' }}>
          <ContainerCardType3
            image="friday-for-codex-card.webp"
            title={DataValues.projectsOrg5Title}
            role={DataValues.projectsOrg5Role}
            years={DataValues.projectsOrg5Years}
            values={DataValues.projectsOrg5Values}
            message={DataValues.fridayForCodexUrl}
            url={DataValues.fridayForCodexUrl}
            isButtonEnabled={true}
            buttonText="View on GitHub >>"
          />
        </div>
        <div style={{ width: 'calc((96vw - 80px) / 3)' }}>
          <ContainerCardType3
            image="nandinizaura-card.webp"
            title={DataValues.projectsOrg2Title}
            role={DataValues.projectsOrg2Role}
            years={DataValues.projectsOrg2Years}
            values={DataValues.projectsOrg2Values}
            message={DataValues.nandinizauraUrl}
            url={DataValues.nandinizauraUrl}
            isButtonEnabled={true}
            buttonText="Visit Website >>"
          />
        </div>
        <div style={{ width: 'calc((96vw - 80px) / 3)' }}>
          <ContainerCardType3
            image="video-grabber-card.webp"
            title={DataValues.projectsOrg4Title}
            role={DataValues.projectsOrg4Role}
            years={DataValues.projectsOrg4Years}
            values={DataValues.projectsOrg4Values}
            message={DataValues.videoGrabberUrl}
            url={DataValues.videoGrabberUrl}
            isButtonEnabled={true}
            buttonText="View on GitHub >>"
          />
        </div>
        <div style={{ width: 'calc((96vw - 80px) / 3)' }}>
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
        <div style={{ width: 'calc((96vw - 80px) / 3)' }}>
          <ContainerCardType3
            image="portfolio"
            title={DataValues.projectsOrg1Title}
            role={DataValues.projectsOrg1Role}
            years={DataValues.projectsOrg1Years}
            values={DataValues.projectsOrg1Values}
            message={DataValues.siteUrl}
            url={DataValues.siteUrl}
            isButtonEnabled={true}
            buttonText="View on GitHub >>"
          />
        </div>
      </div>
      <div className="h-10" />
    </section>
  )
}
