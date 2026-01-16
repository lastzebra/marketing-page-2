'use client'

import { useRef, useEffect, useState } from 'react'

interface DemoVideoProps {
  src: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  className?: string
}

export function DemoVideo({
  src,
  autoplay = false,
  loop = true,
  muted = true,
  playsInline = true,
  className = '',
}: DemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Handle autoplay based on reduced motion
    if (videoRef.current && autoplay && !mediaQuery.matches) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, show play button
        setIsPlaying(false)
      })
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [autoplay])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const shouldShowPlayButton = prefersReducedMotion || !autoplay || !isPlaying

  return (
    <div className={`relative w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload="metadata"
        className="w-full h-full object-contain rounded-xl"
        aria-label="Demo video showing music discovery, DJ set building, and track generation"
      />
      {shouldShowPlayButton && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors rounded-xl group"
          aria-label="Play demo video"
        >
          <div className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <svg
              className="w-8 h-8 text-gray-900 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}
