// Equivalent to Flutter's ButtonText widgets

interface ButtonTextLargeProps {
  text: string
  onPressed: () => void
  message: string
  outlineTone?: 'neutral' | 'primary'
}

export function ButtonTextLarge({
  text,
  onPressed,
  message,
  outlineTone = 'neutral',
}: ButtonTextLargeProps) {
  const outlineClassName =
    outlineTone === 'primary'
      ? 'nav-outline-primary'
      : 'nav-outline-neutral'

  return (
    <button
      onClick={onPressed}
      title={message}
      className={`nav-outline-button rounded-[18px] px-6 py-2 text-[17px] font-medium text-foreground transition-all duration-200 hover:bg-surface-variant hover:text-primary hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] active:scale-[0.98] dark:hover:bg-background-grey ${outlineClassName}`}
    >
      {text}
    </button>
  )
}

interface ButtonTextSmallProps {
  text: string
  message: string
  url: string
}

export function ButtonTextSmall({
  text,
  message,
  url,
}: ButtonTextSmallProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={message}
      className="text-xs font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
    >
      {text}
    </a>
  )
}
