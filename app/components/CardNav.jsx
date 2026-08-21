'use client'

import { useState } from 'react'

const links = [
  { href: '#about', label: 'Sobre mí', desc: 'Perfil y habilidades' },
  { href: '#reel', label: 'Reel', desc: 'Muestra audiovisual' },
  { href: '#experiencias', label: 'Experiencias', desc: '9 proyectos documentados' },
  { href: '#contacto', label: 'Contacto', desc: 'Hablemos de tu proyecto' },
]

export default function CardNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Navegación principal" className={`card-nav${open ? ' card-nav-open' : ''}`}>
      <div className="card-nav-bar">
        <div className="logo">IVÁN LEGUIZAMÓN • PRODUCTOR</div>
        <button
          className="card-nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <div className="card-nav-panel">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="card-nav-item" onClick={() => setOpen(false)}>
              <span className="card-nav-item-label">{l.label}</span>
              <span className="card-nav-item-desc">{l.desc}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
