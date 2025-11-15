// Equivalent to Flutter's SeoTextPairs widget

interface TextPairsType1Props {
  title: string
  description: string
}

export function TextPairsType1({ title, description }: TextPairsType1Props) {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-lg font-medium text-foreground mb-2.5">{title}</h3>
      <div className="h-2.5" />
      <p className="text-sm font-normal text-label-large text-justify">
        {description}
      </p>
    </div>
  )
}

interface TextPairsType2Props {
  title: string
  value1: string
  value2: string
  isThreeLines?: boolean
}

export function TextPairsType2({
  title,
  value1,
  value2,
  isThreeLines = false,
}: TextPairsType2Props) {
  return (
    <div className="flex flex-col items-start">
      <h4 className="text-base font-normal text-foreground">{title}</h4>
      <p className="text-sm font-normal text-label-large text-justify">
        {value1}
      </p>
      {isThreeLines ? <div className="h-5" /> : null}
      <p className="text-sm font-normal text-label-large text-justify">
        {value2}
      </p>
    </div>
  )
}

interface TextPairsType3Props {
  title: string
  value1: string
  value2: string
}

export function TextPairsType3({
  title,
  value1,
  value2,
}: TextPairsType3Props) {
  return (
    <div className="flex flex-col items-start">
      <h4 className="text-base font-normal text-foreground">{title}</h4>
      <p className="text-sm font-normal text-label-large text-justify">
        {value1}
      </p>
      <div className="h-5" />
      <p className="text-sm font-normal text-label-large text-justify">
        {value2}
      </p>
    </div>
  )
}

