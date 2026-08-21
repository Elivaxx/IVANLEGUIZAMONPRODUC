'use client'

import { useEffect, useRef } from 'react'

export default function FilmGrain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const grainSize = 220
    canvas.width = grainSize
    canvas.height = grainSize

    let frame = 0
    let raf

    const draw = () => {
      frame++
      if (frame % 2 === 0) {
        const imageData = ctx.createImageData(grainSize, grainSize)
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4) {
          const v = Math.random() * 255
          data[i] = v
          data[i + 1] = v
          data[i + 2] = v
          data[i + 3] = 18
        }
        ctx.putImageData(imageData, 0, 0)
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => cancelAnimationFrame(raf)
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
        zIndex: 1,
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
        opacity: 0.5,
      }}
    />
  )
}
