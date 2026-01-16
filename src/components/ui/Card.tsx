import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover 
    ? 'transition-all duration-200 hover:border-gray-700 hover:bg-gray-900/70' 
    : ''
  
  return (
    <div className={`p-8 bg-gray-900/50 border border-gray-800 rounded-xl ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
