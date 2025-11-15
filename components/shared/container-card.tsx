// Equivalent to Flutter's ContainerCard widget

import Image from 'next/image'
import { ButtonTextSmall } from './button-text'
import { TextPairsType2 } from './text-pairs'

interface ContainerCardType1Props {
  title: string
  description: string
  image: string
  message: string
  url: string
}

export function ContainerCardType1({
  title,
  description,
  image,
  message,
  url,
}: ContainerCardType1Props) {
  return (
    <div className="bg-card dark:bg-card-grey rounded-[10px] p-[30px] flex flex-col justify-between min-h-full shadow-[0_3px_6px_rgba(0,0,0,0.13)] dark:shadow-[0_3px_3px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col">
        <Image
          src={`/assets/icons/${image.includes('/') ? image.split('/').pop()?.replace('.png', '') : image.replace('.png', '')}.png`}
          alt={title}
          width={70}
          height={70}
          className="mb-5"
        />
        <h3 className="text-lg font-medium text-foreground mb-2.5">
          {title}
        </h3>
        <div className="h-2.5" />
        <p className="text-sm font-normal text-label-large text-justify">
          {description}
        </p>
      </div>
    </div>
  )
}

interface ContainerCardType2Props {
  image: string
  title: string
  values: string[]
  message: string
  url: string
  buttonEnabled: boolean
}

export function ContainerCardType2({
  image,
  title,
  values,
  message,
  url,
  buttonEnabled,
}: ContainerCardType2Props) {
  return (
    <div className="bg-card dark:bg-card-grey rounded-[10px] p-[30px] flex flex-col justify-between min-h-full shadow-[0_3px_6px_rgba(0,0,0,0.13)] dark:shadow-[0_3px_3px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col">
        <div className="mb-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/images/${image}.webp`}
            alt={title}
            className="h-[70px] w-auto"
            style={{ height: '70px', width: 'auto' }}
          />
        </div>
        <h3 className="text-lg font-medium text-primary mb-2.5">{title}</h3>
        <div className="h-2.5" />
        <div className="space-y-2.5">
          {values.length >= 3 && values[0] && (
            <TextPairsType2
              title={values[0]}
              value1={values[1]}
              value2={values[2]}
              isThreeLines={false}
            />
          )}
          {values.length >= 6 && values[3] && (
            <TextPairsType2
              title={values[3]}
              value1={values[4]}
              value2={values[5]}
              isThreeLines={false}
            />
          )}
          {values.length >= 9 && values[6] && (
            <TextPairsType2
              title={values[6]}
              value1={values[7]}
              value2={values[8]}
              isThreeLines={false}
            />
          )}
        </div>
      </div>
      {buttonEnabled && (
        <div className="mt-5">
          <ButtonTextSmall text="View More >>" message={message} url={url} />
        </div>
      )}
    </div>
  )
}

interface ContainerCardType3Props {
  image: string
  title: string
  role: string
  years?: string
  values: string
  message: string
  url: string
  isButtonEnabled?: boolean
  buttonText?: string
}

export function ContainerCardType3({
  image,
  title,
  role,
  years,
  values,
  message,
  url,
  isButtonEnabled,
  buttonText = 'Dive in >>',
}: ContainerCardType3Props) {
  return (
    <div className="bg-card dark:bg-card-grey rounded-[10px] p-[30px] flex flex-col justify-between min-h-full shadow-[0_3px_6px_rgba(0,0,0,0.13)] dark:shadow-[0_3px_3px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col">
        <div className="mb-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/assets/images/${image}.webp`}
            alt={title}
            className="h-[70px] w-auto"
            style={{ height: '70px', width: 'auto' }}
          />
        </div>
        <h3 className="text-lg font-medium text-primary mb-2.5">{title}</h3>
        <div className="h-2.5" />
        <TextPairsType2
          title={role}
          value1={years || ''}
          value2={values}
          isThreeLines={true}
        />
      </div>
      {isButtonEnabled && (
        <div className="mt-5">
          <ButtonTextSmall text={buttonText} message={message} url={url} />
        </div>
      )}
      {isButtonEnabled === false && (
        <p className="text-xs font-medium text-foreground mt-5">
          Stay tuned :)
        </p>
      )}
    </div>
  )
}

