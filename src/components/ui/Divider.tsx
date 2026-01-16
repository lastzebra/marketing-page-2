interface DividerProps {
  className?: string
  variant?: 'horizontal' | 'vertical'
}

export function Divider({ className = '', variant = 'horizontal' }: DividerProps) {
  if (variant === 'vertical') {
    return (
      <div className={`w-px h-full bg-surface-1 ${className}`} aria-hidden="true" />
    )
  }

  return (
    <div className={`w-full h-px bg-surface-1 ${className}`} aria-hidden="true" />
  )
}
