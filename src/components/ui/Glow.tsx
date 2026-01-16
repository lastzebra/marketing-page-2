import { ReactNode } from 'react'

interface GlowProps {
  children: ReactNode
  variant?: 'dark-green' | 'cyan' | 'teal' | 'amber'
  intensity?: 'soft' | 'medium' | 'strong'
  className?: string
}

export function Glow({ children, variant = 'dark-green', intensity = 'medium', className = '' }: GlowProps) {
  const shadows = {
    'dark-green': {
      soft: 'shadow-[0_0_20px_rgba(22,101,52,0.2)]',
      medium: 'shadow-glow-dark-green',
      strong: 'shadow-[0_0_48px_rgba(22,101,52,0.5)]',
    },
    cyan: {
      soft: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]',
      medium: 'shadow-[0_0_32px_rgba(34,211,238,0.35)]',
      strong: 'shadow-[0_0_48px_rgba(34,211,238,0.5)]',
    },
    teal: {
      soft: 'shadow-[0_0_20px_rgba(20,184,166,0.2)]',
      medium: 'shadow-glow-teal',
      strong: 'shadow-[0_0_48px_rgba(20,184,166,0.5)]',
    },
    amber: {
      soft: 'shadow-[0_0_20px_rgba(245,158,11,0.2)]',
      medium: 'shadow-[0_0_32px_rgba(245,158,11,0.35)]',
      strong: 'shadow-[0_0_48px_rgba(245,158,11,0.5)]',
    },
  }

  return (
    <div className={`${shadows[variant][intensity]} ${className}`}>
      {children}
    </div>
  )
}
