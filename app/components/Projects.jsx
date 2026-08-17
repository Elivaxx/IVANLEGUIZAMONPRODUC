'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  { title: 'Graduación FP', role: 'Producción Audiovisual', year: '2024' },
  { title: 'Concierto Gabriel Piattore', role: 'Director de Cámara', year: '2024' },
  { title: 'Cortometraje "Ser un Buen Macarra"', role: 'Jefe de Producción', year: '2024' },
  { title: 'Fiesta WAV Azul', role: 'Producción Audiovisual', year: '2024' },
  { title: 'G&G - Gestión de Contenido', role: 'Productor & Editor', year: '2024' },
  { title: 'Serie Movistar', role: 'Producción', year: '2024' },
  { title: 'Programa Radiofónico', role: 'Productor', year: '2024' },
  { title: 'Visita Atresmedia Radio', role: 'Coordinación Audiovisual', year: '2024' },
  { title: 'FE 2025', role: 'Producción', year: '2025' },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} id="proyectos" className="py-20 bg-cream px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-4 leading-tight">
            Proyectos <motion.span
              animate={{ color: ['#1a4d5c', '#6b2c3c', '#1b3a2e', '#1a4d5c'] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              Destacados
            </motion.span>
          </h2>
          <p className="text-charcoal/70 text-lg">
            Experiencia en televisión abierta, streaming y producción de contenido original
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(26, 77, 92, 0.2)',
              }}
              className="group p-8 rounded-lg bg-white border-2 border-cream-dark hover:border-petrol transition-all cursor-pointer overflow-hidden relative"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-petrol/5 to-burgundy/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <div className="text-sm font-medium text-petrol/70 mb-2">{project.year}</div>
                <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-petrol transition-colors">
                  {project.title}
                </h3>
                <p className="text-charcoal/60 font-medium">{project.role}</p>

                <motion.div
                  className="h-1 bg-gradient-to-r from-petrol to-burgundy mt-4 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-petrol/10 to-transparent"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
