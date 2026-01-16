import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface BaseButtonProps {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type ButtonProps = BaseButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children' | 'variant'> & {
  as?: 'button'
  href?: never
}

type LinkButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'href' | 'children' | 'variant'> & {
  as: 'link'
  href: string
}

type ButtonComponentProps = ButtonProps | LinkButtonProps

export function Button({ variant = 'primary', children, className = '', as, href, ...props }: ButtonComponentProps) {
  const baseStyles = 'px-8 py-3.5 rounded-md font-medium text-body transition-all duration-200'
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-grad-glow text-white hover:scale-[1.02] hover:shadow-glow-dark-green',
    secondary: 'border border-surface-1 text-text-1 hover:border-dark-green/50 hover:text-text-0 hover:bg-surface-1',
    ghost: 'text-text-1 hover:text-text-0',
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  if (as === 'link' && href) {
    if (href.startsWith('#')) {
      // Internal anchor link - use smooth scroll
      const anchorProps = props as Omit<LinkButtonProps, 'as' | 'href' | 'variant' | 'className' | 'children'>
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
          {...anchorProps}
        >
          {children}
        </a>
      )
    }
    if (href.startsWith('mailto:') || href.startsWith('http')) {
      // External link or mailto
      const anchorProps = props as Omit<LinkButtonProps, 'as' | 'href' | 'variant' | 'className' | 'children'>
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...anchorProps}
        >
          {children}
        </a>
      )
    }
    // Internal Next.js link
    const anchorProps = props as Omit<LinkButtonProps, 'as' | 'href' | 'variant' | 'className' | 'children'>
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as Omit<ButtonProps, 'as' | 'variant' | 'className' | 'children'>
  return (
    <button
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
