// Equivalent to Flutter's ButtonText widgets

interface ButtonTextLargeProps {
  text: string
  onPressed: () => void
  message: string
}

export function ButtonTextLarge({
  text,
  onPressed,
  message,
}: ButtonTextLargeProps) {
  return (
    <button
      onClick={onPressed}
      title={message}
      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
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

