// Equivalent to Flutter's MS6Projects component

import { ContainerCardType3 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function MS6Projects() {
  return (
    <section
      id="projects"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.projectsTitle}
        description={DataValues.projectsDescription}
        isDesktop={false}
      />
      <div className="h-[30px]" />
      <ContainerCardType3
        image="nandinizaura-card.png"
        title={DataValues.projectsOrg2Title}
        role={DataValues.projectsOrg2Role}
        years={DataValues.projectsOrg2Years}
        values={DataValues.projectsOrg2Values}
        message={DataValues.nandinizauraUrl}
        url={DataValues.nandinizauraUrl}
        isButtonEnabled={true}
        buttonText="Visit Website >>"
      />
      <div className="h-[30px]" />
      <ContainerCardType3
        image="video-grabber-card.jpeg"
        title={DataValues.projectsOrg4Title}
        role={DataValues.projectsOrg4Role}
        years={DataValues.projectsOrg4Years}
        values={DataValues.projectsOrg4Values}
        message={DataValues.videoGrabberUrl}
        url={DataValues.videoGrabberUrl}
        isButtonEnabled={true}
        buttonText="View on GitHub >>"
      />
      <div className="h-[30px]" />
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
      <div className="h-[30px]" />
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
    </section>
  )
}
