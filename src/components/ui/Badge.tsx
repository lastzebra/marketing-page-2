import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'accent-purple' | 'accent-blue' | 'cyan' | 'teal' | 'amber'
  className?: string
}

export function Badge({ children, variant = 'accent-purple', className = '' }: BadgeProps) {
  const variants: Record<string, string> = {
    'accent-purple': 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
    'accent-blue': 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
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
