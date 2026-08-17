'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-petrol/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-petrol tracking-tight"
        >
          IVÁN
        </motion.div>

        <div className="hidden md:flex gap-8">
          {['Servicios', 'Proyectos', 'Contacto'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ color: '#6b2c3c', x: 5 }}
              className="text-sm font-medium text-charcoal hover:text-burgundy transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 bg-petrol text-cream rounded-lg font-medium hover:bg-petrol-light transition-colors"
        >
          Contactar
        </motion.button>
      </div>
    </motion.nav>
  )
}
