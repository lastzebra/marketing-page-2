import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-3.5 rounded-md font-medium text-body transition-all duration-200'
  
  const variants = {
    primary: 'bg-grad-glow text-white hover:scale-[1.02] hover:shadow-glow-violet',
    secondary: 'border border-surface-1 text-text-1 hover:border-violet/50 hover:text-text-0 hover:bg-surface-1',
    ghost: 'text-text-1 hover:text-text-0',
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
