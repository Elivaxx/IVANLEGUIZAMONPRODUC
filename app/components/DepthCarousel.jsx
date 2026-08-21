'use client'

import { useState } from 'react'

export default function DepthCarousel({ images, alt }) {
  const [index, setIndex] = useState(0)
  const count = images.length

  const go = (dir) => setIndex((i) => (i + dir + count) % count)

  return (
    <div className="depth-carousel">
      {images.map((src, i) => {
        const offset = i - index
        const wrapped = offset > count / 2 ? offset - count : offset < -count / 2 ? offset + count : offset
        const isActive = wrapped === 0
        const abs = Math.abs(wrapped)
        if (abs > 1) return null

        return (
          <img
            key={src}
            src={src}
            alt={alt}
            className="depth-carousel-img"
            style={{
              transform: `translateX(${wrapped * 55}%) translateZ(${isActive ? 0 : -120}px) scale(${isActive ? 1 : 0.82})`,
              opacity: isActive ? 1 : 0.35,
              zIndex: isActive ? 2 : 1,
              filter: isActive ? 'none' : 'blur(1px)',
            }}
          />
        )
      })}
      <button className="carousel-nav-btn prev" onClick={() => go(-1)} aria-label="Imagen anterior">‹</button>
      <button className="carousel-nav-btn next" onClick={() => go(1)} aria-label="Imagen siguiente">›</button>
      <div className="carousel-counter">{index + 1}/{count}</div>
    </div>
  )
}
