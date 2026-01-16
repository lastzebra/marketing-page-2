'use client'

import { useEffect, useRef } from 'react'

interface CursorGlowProps {
  children: React.ReactNode
  className?: string
}

export function CursorGlow({ children, className = '' }: CursorGlowProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      element.style.setProperty('--mouse-x', `${x}px`)
      element.style.setProperty('--mouse-y', `${y}px`)
    }

    const handleMouseEnter = () => {
      element.classList.add('cursor-glow-active')
    }

    const handleMouseLeave = () => {
      element.classList.remove('cursor-glow-active')
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={`relative cursor-glow ${className}`}
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
      } as React.CSSProperties}
    >
      {children}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 cursor-glow-active:opacity-100"
        style={{
          background: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(22,101,52,0.15), transparent 40%)',
        }}
      />
    </div>
  )
}
