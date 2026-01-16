import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-3.5 rounded-lg font-medium text-base transition-all duration-200'
  
  const variants = {
    primary: 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25',
    secondary: 'border border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white hover:bg-gray-900/50',
    ghost: 'text-gray-300 hover:text-white',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
