// Equivalent to Flutter's MS5Extracurriculars component

import { ContainerCardType2, ContainerCardType3 } from '../shared/container-card'
import { FrameTitle } from '../shared/frame-title'
import { DataValues } from '@/data/data-values'

export function MS5Extracurriculars() {
  return (
    <section
      id="extracurriculars"
      className="bg-surface p-[40px] flex flex-col items-start"
    >
      <FrameTitle
        title={DataValues.extracTitle}
        description={DataValues.extracDescription}
        isDesktop={false}
      />
      <div className="h-[30px]" />
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
      <div className="h-5" />
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
      <div className="h-5" />
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
      <div className="h-5" />
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
      <div className="h-5" />
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
    </section>
  )
}

