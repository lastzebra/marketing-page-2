import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 bg-black ${className}`}>
      {children}
    </section>
  )
}
