import { ReactNode } from 'react'

interface GlowProps {
  children: ReactNode
  variant?: 'accent-purple' | 'accent-blue' | 'cyan' | 'teal' | 'amber'
  intensity?: 'soft' | 'medium' | 'strong'
  className?: string
}

export function Glow({ children, variant = 'accent-purple', intensity = 'medium', className = '' }: GlowProps) {
  const shadows: Record<string, Record<string, string>> = {
    'accent-purple': {
      soft: 'shadow-[0_0_20px_rgba(124,58,237,0.2)]',
      medium: 'shadow-glow-accent',
      strong: 'shadow-[0_0_48px_rgba(124,58,237,0.5)]',
    },
    'accent-blue': {
      soft: 'shadow-[0_0_20px_rgba(56,189,248,0.2)]',
      medium: 'shadow-[0_0_32px_rgba(56,189,248,0.35)]',
      strong: 'shadow-[0_0_48px_rgba(56,189,248,0.5)]',
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
