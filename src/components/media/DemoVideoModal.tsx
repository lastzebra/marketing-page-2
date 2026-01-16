'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { DemoVideo } from './DemoVideo'

interface DemoVideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title?: string
  description?: string
}

export function DemoVideoModal({
  isOpen,
  onClose,
  videoSrc,
  title = 'Demo',
  description = '5-second demo showing music discovery, DJ set building, and track generation.',
}: DemoVideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  // Handle focus management and body scroll lock
  useEffect(() => {
    if (isOpen) {
      // Focus close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 100)

      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="presentation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle at center, rgba(34,211,238,0.15) 0%, rgba(124,58,237,0.10) 50%, transparent 70%)',
        }}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        aria-describedby="demo-modal-description"
        className="relative z-10 w-full max-w-4xl bg-surface-0 border border-surface-1 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-surface-1">
          <div>
            <h2 id="demo-modal-title" className="font-display text-h3 font-semibold text-text-0">
              {title}
            </h2>
            <p
              id="demo-modal-description"
              className="sr-only"
            >
              {description}
            </p>
            <p className="text-small text-text-2 mt-1 hidden sm:block">
              {description}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-md text-text-2 hover:text-text-0 hover:bg-surface-1 transition-colors focus:outline-none focus:ring-2 focus:ring-violet/50"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-black">
          <DemoVideo
            src={videoSrc}
            autoplay={true}
            loop={true}
            muted={true}
            playsInline={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )

  // Portal to document.body
  if (typeof window !== 'undefined') {
    return createPortal(modalContent, document.body)
  }

  return null
}
