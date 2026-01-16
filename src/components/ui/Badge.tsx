import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'violet' | 'cyan' | 'teal' | 'amber'
  className?: string
}

export function Badge({ children, variant = 'violet', className = '' }: BadgeProps) {
  const variants = {
    violet: 'bg-violet/10 text-violet border-violet/20',
    cyan: 'bg-cyan/10 text-cyan border-cyan/20',
    teal: 'bg-teal/10 text-teal border-teal/20',
    amber: 'bg-amber/10 text-amber border-amber/20',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-small font-medium border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
