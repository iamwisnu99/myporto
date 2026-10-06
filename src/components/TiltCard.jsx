import { useState, useRef, useCallback } from 'react'

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  scale = 1.02,
}) {
  const cardRef = useRef(null)
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  })
  const [glareStyle, setGlareStyle] = useState({
    opacity: 0,
    transform: 'translate(-50%, -50%)',
  })

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt

      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: 'transform 0.1s ease-out',
      })

      if (glare) {
        setGlareStyle({
          opacity: 0.25,
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s ease',
        })
      }
    },
    [maxTilt, scale, glare]
  )

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    })
    if (glare) {
      setGlareStyle({
        opacity: 0,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.4s ease',
      })
    }
  }, [glare])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative will-change-transform ${className}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}

      {glare && (
        <div
          className="pointer-events-none absolute w-56 h-56 rounded-full blur-2xl z-30"
          style={{
            ...glareStyle,
            background:
              'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 80%)',
          }}
        />
      )}
    </div>
  )
}
