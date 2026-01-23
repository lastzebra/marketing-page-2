import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover 
    ? 'transition-all duration-200 hover:border-violet/30 hover:bg-surface-0 focus-within:border-violet/30 focus-within:ring-2 focus-within:ring-violet/20' 
    : ''
  
  return (
    <div className={`p-6 sm:p-8 bg-surface-0 border border-surface-1 rounded-xl ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
