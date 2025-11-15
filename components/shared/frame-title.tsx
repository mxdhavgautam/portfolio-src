// Equivalent to Flutter's FrameTitle widget

interface FrameTitleProps {
  title: string
  description: string
  isDesktop?: boolean
}

export function FrameTitle({
  title,
  description,
  isDesktop = false,
}: FrameTitleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-[42px] font-bold text-foreground mb-2.5">{title}</h2>
      <p
        className={`text-base font-normal text-foreground/70 text-justify ${
          isDesktop ? 'px-[160px] pt-2.5 pb-10' : ''
        }`}
      >
        {description}
      </p>
    </div>
  )
}

