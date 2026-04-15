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
    <div className="w-full flex flex-col items-center text-center">
      <h2 className="w-full text-[42px] font-bold text-foreground mb-2.5 text-center">
        {title}
      </h2>
      <p
        className={`w-full text-base font-normal text-foreground/70 text-justify ${
          isDesktop
            ? 'max-w-[1040px] px-[160px] pt-2.5 pb-10'
            : 'max-w-[640px] px-1 pt-2.5'
        }`}
      >
        {description}
      </p>
    </div>
  )
}
