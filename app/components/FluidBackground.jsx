'use client'

import { useEffect, useRef } from 'react'

// Lightweight metaball simulation (canvas 2D, no WebGL) — a "ferrofluid" feel
// without the perf/bundle cost of a real fluid sim library.
export default function FluidBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, raf
    let mouseX = 0.5
    let mouseY = 0.3

    const blobs = Array.from({ length: 5 }, (_, i) => ({
      baseX: 0.15 + (i % 3) * 0.35,
      baseY: 0.2 + Math.floor(i / 3) * 0.5,
      r: 0.14 + Math.random() * 0.08,
      speed: 0.15 + Math.random() * 0.15,
      phase: Math.random() * Math.PI * 2,
    }))

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handlePointerMove = (e) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }
    window.addEventListener('pointermove', handlePointerMove)

    let t = 0
    const draw = () => {
      t += reduceMotion ? 0 : 0.004
      ctx.clearRect(0, 0, width, height)
      ctx.filter = 'blur(60px)'

      blobs.forEach((b, i) => {
        const pull = i === 0 ? 0.06 : 0.02
        const x = (b.baseX + Math.sin(t * b.speed + b.phase) * 0.06 + (mouseX - 0.5) * pull) * width
        const y = (b.baseY + Math.cos(t * b.speed * 0.8 + b.phase) * 0.06 + (mouseY - 0.5) * pull) * height
        const r = b.r * Math.min(width, height)

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r)
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.35)')
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
