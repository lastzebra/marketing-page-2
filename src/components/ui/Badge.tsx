import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'dark-green' | 'cyan' | 'teal' | 'amber'
  className?: string
}

export function Badge({ children, variant = 'dark-green', className = '' }: BadgeProps) {
  const variants: Record<string, string> = {
    'dark-green': 'bg-dark-green/10 text-dark-green border-dark-green/20',
    'cyan': 'bg-cyan/10 text-cyan border-cyan/20',
    'teal': 'bg-teal/10 text-teal border-teal/20',
    'amber': 'bg-amber/10 text-amber border-amber/20',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-small font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
