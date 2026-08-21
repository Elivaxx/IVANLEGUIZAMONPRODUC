'use client'

import { useEffect, useRef, useState } from 'react'

// Splits text into lines that blur/slide in only while the element is on
// screen, and reset when it scrolls out — so it replays every time.
export default function RevealText({ text, as: Tag = 'h2', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const words = text.split(' ')

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className} style={{ overflow: 'hidden' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            filter: visible ? 'blur(0px)' : 'blur(8px)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(0.4em)',
            transition: `filter 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s, opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s`,
            marginRight: '0.28em',
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  )
}
