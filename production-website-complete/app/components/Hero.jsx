'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-cream-dark to-cream pt-20"
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(26, 77, 92, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(26, 77, 92, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(26, 77, 92, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-8xl font-bold text-charcoal mb-6 leading-tight tracking-tight"
          >
            Produce
            <motion.span
              className="block text-petrol"
              animate={{ color: ['#1a4d5c', '#6b2c3c', '#1b3a2e', '#1a4d5c'] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              Impacto
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-charcoal/70 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Dirección de producción audiovisual, gestión de equipos creativos y contenido que convierte visiones en realidades de pantalla.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(26, 77, 92, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-petrol text-cream rounded-lg font-semibold text-lg hover:bg-petrol-light transition-all"
            >
              Hablemos
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#1a4d5c' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-petrol text-petrol rounded-lg font-semibold text-lg hover:bg-petrol/5 transition-all"
            >
              Ver Proyectos
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-petrol rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-petrol rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
