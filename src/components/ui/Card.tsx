import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover 
    ? 'transition-all duration-200 hover:border-dark-green/30 hover:bg-surface-0' 
    : ''
  
  return (
    <div className={`p-8 bg-surface-0 border border-surface-1 rounded-xl ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
