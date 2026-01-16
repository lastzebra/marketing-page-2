import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  className?: string
}

interface ButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  as?: 'button'
  href?: never
}

interface LinkButtonProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href'> {
  as: 'link'
  href: string
}

type ButtonComponentProps = ButtonProps | LinkButtonProps

export function Button({ variant = 'primary', children, className = '', as, href, ...props }: ButtonComponentProps) {
  const baseStyles = 'px-8 py-3.5 rounded-md font-medium text-body transition-all duration-200'
  
  const variants: Record<string, string> = {
    primary: 'bg-grad-glow text-white hover:scale-[1.02] hover:shadow-glow-dark-green',
    secondary: 'border border-surface-1 text-text-1 hover:border-dark-green/50 hover:text-text-0 hover:bg-surface-1',
    ghost: 'text-text-1 hover:text-text-0',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (as === 'link' && href) {
    if (href.startsWith('#')) {
      // Internal anchor link - use smooth scroll
      return (
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault()
            const element = document.querySelector(href)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }
    if (href.startsWith('mailto:') || href.startsWith('http')) {
      // External link or mailto
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }
    // Internal Next.js link
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
