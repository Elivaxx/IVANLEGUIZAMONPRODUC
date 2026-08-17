'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Aquí irá la integración de Supabase
      // Por ahora simulamos el envío
      console.log('Form submitted:', formData)

      // Simular envío de email
      setTimeout(() => {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        setLoading(false)
        setTimeout(() => setSuccess(false), 3000)
      }, 1000)
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  return (
    <section ref={ref} id="contacto" className="py-20 bg-gradient-to-b from-charcoal to-charcoal/95 text-cream px-6 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-petrol/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-burgundy/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            ¿Listo para tu próximo
            <motion.span
              animate={{ color: ['#1a4d5c', '#EAE3D3', '#1a4d5c'] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="block text-petrol"
            >
              proyecto?
            </motion.span>
          </h2>
          <p className="text-cream/70 text-lg">
            Contacta conmigo para hablar sobre tus necesidades audiovisuales
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-br from-petrol/10 to-burgundy/10 border border-petrol/30 rounded-xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-charcoal/50 border border-petrol/30 rounded-lg text-cream placeholder-cream/40 focus:border-petrol focus:outline-none transition-all hover:border-petrol/50"
                placeholder="Tu nombre"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-charcoal/50 border border-petrol/30 rounded-lg text-cream placeholder-cream/40 focus:border-petrol focus:outline-none transition-all hover:border-petrol/50"
                placeholder="tu@email.com"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-charcoal/50 border border-petrol/30 rounded-lg text-cream placeholder-cream/40 focus:border-petrol focus:outline-none transition-all hover:border-petrol/50 resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(26, 77, 92, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading || success}
            className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-petrol to-petrol-light text-cream font-semibold rounded-lg hover:from-petrol-light hover:to-petrol transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enviando...' : success ? '✓ Enviado' : 'Enviar Mensaje'}
          </motion.button>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center text-cream/80"
            >
              ¡Gracias! Me pondré en contacto pronto.
            </motion.div>
          )}
        </motion.form>

        {/* Contact alternatives */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <a href="mailto:elivaclips@gmail.com" className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
            📧 elivaclips@gmail.com
          </a>
          <a href="https://wa.me" className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors">
            💬 WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
