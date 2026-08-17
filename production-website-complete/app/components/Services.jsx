'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'Dirección de Producción',
    description: 'Gestión integral de proyectos audiovisuales con control de presupuesto y timeline',
    icon: '🎬',
  },
  {
    title: 'Edición y Postproducción',
    description: 'Color grading, motion graphics y entrega en múltiples formatos profesionales',
    icon: '✂️',
  },
  {
    title: 'Gestión de Contenido',
    description: 'Producción y optimización de contenido para redes sociales y plataformas digitales',
    icon: '📱',
  },
  {
    title: 'Coordinación Creativa',
    description: 'Liderazgo de equipos multidisciplinarios: directores, camarógrafos, editores',
    icon: '👥',
  },
  {
    title: 'Producción Audiovisual',
    description: 'Conceptualización y ejecución de proyectos para marketing y comunicación',
    icon: '📹',
  },
  {
    title: 'Asesoramiento',
    description: 'Consultoría en estrategia audiovisual y optimización de procesos',
    icon: '💡',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} id="servicios" className="py-20 bg-charcoal text-cream px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Servicios <motion.span
              animate={{ color: ['#1a4d5c', '#6b2c3c', '#1a4d5c'] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-petrol"
            >
              Integrales
            </motion.span>
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Soluciones audiovisuales completas para todos tus proyectos
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(107, 44, 60, 0.2)',
              }}
              className="p-8 rounded-xl bg-gradient-to-br from-petrol/10 to-burgundy/5 border border-petrol/20 cursor-pointer hover:border-burgundy/50 transition-all group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-cream group-hover:text-burgundy transition-colors">
                {service.title}
              </h3>
              <p className="text-cream/70 leading-relaxed">{service.description}</p>

              <motion.div
                className="h-1 bg-gradient-to-r from-petrol to-burgundy mt-4 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
