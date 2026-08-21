'use client'

import { useState } from 'react'

const actions = [
  { href: 'mailto:elivaclips@gmail.com', label: '✉', title: 'Email' },
  { href: '/CV_Ivan_Leguizamon.pdf', label: '⬇', title: 'Descargar CV', download: true },
  { href: '#contacto', label: '↑', title: 'Ir a contacto' },
]

export default function BubbleMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bubble-menu" aria-hidden={false}>
      {open && (
        <div className="bubble-menu-items">
          {actions.map((a) => (
            <a
              key={a.title}
              href={a.href}
              title={a.title}
              download={a.download || undefined}
              className="bubble-menu-item"
              onClick={() => setOpen(false)}
            >
              {a.label}
            </a>
          ))}
        </div>
      )}
      <button
        className="bubble-menu-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Acciones rápidas"
      >
        {open ? '×' : '+'}
      </button>
    </div>
  )
}
