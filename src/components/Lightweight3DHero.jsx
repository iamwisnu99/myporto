import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Lightweight3DHero({ className = '' }) {
  const canvasRef = useRef(null)
  const { theme } = useTheme()
  const themeRef = useRef(theme)

  useEffect(() => {
    themeRef.current = theme
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let isVisible = true

    // Point cloud settings
    const POINT_COUNT = 70
    const RADIUS = 220
    const FOCAL_LENGTH = 380

    // Generate 3D points on spherical shell
    const points = []
    for (let i = 0; i < POINT_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / POINT_COUNT)
      const theta = Math.sqrt(POINT_COUNT * Math.PI) * phi
      points.push({
        x: RADIUS * Math.cos(theta) * Math.sin(phi),
        y: RADIUS * Math.sin(theta) * Math.sin(phi),
        z: RADIUS * Math.cos(phi),
        size: Math.random() * 1.6 + 1.2,
      })
    }

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }

    window.addEventListener('resize', handleResize)

    // Mouse movement
    let targetRotX = 0
    let targetRotY = 0
    let curRotX = 0
    let curRotY = 0

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
      targetRotY = nx * 0.45
      targetRotX = -ny * 0.35
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Observe visibility to pause offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    observer.observe(canvas)

    let baseAngleY = 0

    const render = () => {
      animationFrameId = requestAnimationFrame(render)
      if (!isVisible) return

      ctx.clearRect(0, 0, width, height)

      // Smooth mouse damping
      curRotX += (targetRotX - curRotX) * 0.04
      curRotY += (targetRotY - curRotY) * 0.04

      baseAngleY += 0.003
      const totalRotY = baseAngleY + curRotY
      const totalRotX = curRotX

      const cosY = Math.cos(totalRotY)
      const sinY = Math.sin(totalRotY)
      const cosX = Math.cos(totalRotX)
      const sinX = Math.sin(totalRotX)

      const isDark = themeRef.current === 'dark'
      const centerX = width * 0.65 // positioned elegantly towards the right side of the hero
      const centerY = height * 0.48

      // Project 3D points
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.z * cosY + p.x * sinY

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX
        const z2 = z1 * cosX + p.y * sinX

        // 3D perspective scale
        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + z2)
        const projX = centerX + x1 * scale
        const projY = centerY + y2 * scale
        const alpha = Math.max(0.1, Math.min(1, (z2 + RADIUS) / (2 * RADIUS)))

        return { projX, projY, scale, alpha, size: p.size, z: z2 }
      })

      // Sort by depth (painter's algorithm)
      projected.sort((a, b) => a.z - b.z)

      // Draw connecting lines between close points
      const maxDist = 75
      ctx.lineWidth = 0.8
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].projX - projected[j].projX
          const dy = projected[i].projY - projected[j].projY
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * Math.min(projected[i].alpha, projected[j].alpha) * (isDark ? 0.28 : 0.16)
            ctx.strokeStyle = isDark
              ? `rgba(96, 165, 250, ${lineAlpha})`
              : `rgba(2, 40, 109, ${lineAlpha})`
            ctx.beginPath()
            ctx.moveTo(projected[i].projX, projected[i].projY)
            ctx.lineTo(projected[j].projX, projected[j].projY)
            ctx.stroke()
          }
        }
      }

      // Draw points
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i]
        const pointAlpha = p.alpha * (isDark ? 0.75 : 0.45)
        const radius = Math.max(1, p.size * p.scale)

        ctx.fillStyle = isDark
          ? `rgba(147, 197, 253, ${pointAlpha})`
          : `rgba(2, 40, 109, ${pointAlpha})`

        ctx.beginPath()
        ctx.arc(p.projX, p.projY, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
    />
  )
}
