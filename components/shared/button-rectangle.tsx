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
      className="rounded-[18px] px-6 py-2 text-[17px] font-medium leading-normal text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px active:translate-y-0"
      style={{ backgroundColor: color, boxShadow: '0 5px 12px rgba(229, 57, 53, 0.16)' }}
    >
      {name}
    </button>
  )
}
