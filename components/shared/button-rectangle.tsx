// Equivalent to Flutter's ButtonRectangle widget

interface ButtonRectangleProps {
  name: string
  onPressed: () => void
  color: string
  message: string
}

export function ButtonRectangle({
  name,
  onPressed,
  color,
  message,
}: ButtonRectangleProps) {
  return (
    <button
      onClick={onPressed}
      title={message}
      className="min-w-[170px] h-[50px] px-6 rounded-[30px] text-white font-medium text-lg transition-opacity hover:opacity-90"
      style={{ backgroundColor: color, boxShadow: 'none' }}
    >
      {name}
    </button>
  )
}

