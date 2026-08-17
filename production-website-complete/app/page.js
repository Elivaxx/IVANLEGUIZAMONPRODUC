'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-charcoal text-cream/60 py-8 px-6 text-center border-t border-petrol/10">
        <p>© 2025 Iván Leguizamón. Producción Audiovisual Profesional.</p>
      </footer>
    </main>
  )
}
