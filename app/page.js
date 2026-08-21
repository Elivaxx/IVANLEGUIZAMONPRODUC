'use client'

import { useEffect } from 'react'
import FilmGrain from './components/FilmGrain'
import FluidBackground from './components/FluidBackground'
import RevealText from './components/RevealText'
import DepthCarousel from './components/DepthCarousel'
import BentoSkills from './components/BentoSkills'
import CardNav from './components/CardNav'
import BubbleMenu from './components/BubbleMenu'

export default function Home() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, observerOptions)
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const experiences = [
    { id: 1, title: 'Graduación Planeta FP', description: 'Ciclo Superior de Producción Audiovisual y su Producción para TV y Eventos. Coordinación de equipo técnico, captura y edición de contenido audiovisual.', tag: 'Evento', folderName: 'graduacion-fp', imageCount: 5 },
    { id: 2, title: 'Concierto Gabriel Piattore', description: 'Director de Cámara en concierto musical en vivo. Dirección de ángulos de cámara, movimientos de realización y gestión técnica en rodaje.', tag: 'Música', folderName: 'concierto-gabriel-piattore', imageCount: 3 },
    { id: 3, title: 'Cortometraje "Ser un buen macarra"', description: 'Jefe de Producción en rodaje de ficción. Coordinación de equipos, gestión de localizaciones y seguimiento de producción en set.', tag: 'Ficción', folderName: 'cortometraje-ser-buen-macarra', imageCount: 4 },
    { id: 4, title: 'Fiesta WAV Azul', description: 'Producción audiovisual de espectáculo y marketing. Edición de contenido y promoción digital para amplificación en redes.', tag: 'Espectáculo', folderName: 'fiesta-wav-azul', imageCount: 3 },
    { id: 5, title: 'G&G - Producción Audiovisual', description: 'Jefe de Producción de contenido audiovisual para marketing. Gestión integral de producción y coordinación en eventos deportivos y entretenimiento.', tag: 'Ocio y Deporte', folderName: 'g-g-produccion-contenido', imageCount: 4 },
    { id: 6, title: 'Serie Movistar+ "Anatomía de un Instante"', description: 'Blocker en 5 rodajes a través de Pase Producciones. Bloqueo de localizaciones y coordinación integral en serie de ficción televisiva.', tag: 'Ficción', folderName: 'serie-movistar-anatomia-instante', imageCount: 4 },
    { id: 7, title: 'Programa Radiofónico "Radiografía"', description: 'Productor Audiovisual en proyecto radiofónico. Gestión técnica de producción, producción de contenido y coordinación de emisión.', tag: 'Radio', folderName: 'programa-radiofonica', imageCount: 3 },
    { id: 8, title: 'Atresmedia - Experiencia Corporativa', description: 'Coordinación de producción en visitas a instalaciones corporativas. Experiencia en entorno corporativo de medios y radiodifusión.', tag: 'Corporativo', folderName: 'atresmedia-radio', imageCount: 6 },
    { id: 9, title: 'FE 2025 - Ongravity', description: 'Jefe de Producción y Posproductor. Participación en captura, rodaje y postproducción de contenido audiovisual para Instagram (Duración: 2 semanas).', tag: 'Prácticas', folderName: 'fe-2025-ongravity', imageCount: 4 }
  ]

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --ivory: #F5F1EA;
          --blue: #3B82F6;
          --blue-soft: rgba(59, 130, 246, 0.16);
          --deep: #05070C;
          --navy: #0A1830;
          --gray: #9BA3AF;
        }
        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font-fraunces), Georgia, serif;
          color: var(--ivory);
          background: linear-gradient(160deg, var(--deep) 0%, var(--navy) 55%, #0d1526 100%);
          line-height: 1.6;
          overflow-x: hidden;
          min-height: 100vh;
        }
        .skills-label, .hero-subtitle { font-family: var(--font-space-mono), 'Courier New', monospace; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -20px, 0); }
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-reveal.visible { opacity: 1; transform: translateY(0); }

        /* Card Nav */
        .card-nav {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: min(560px, 90vw);
        }
        .card-nav-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(10, 24, 48, 0.75);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.25);
          padding: 0.8rem 1.5rem;
          border-radius: 24px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .logo {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--ivory);
          white-space: nowrap;
        }
        .card-nav-toggle {
          background: none;
          border: none;
          cursor: pointer;
          width: 32px;
          height: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
        }
        .card-nav-toggle span {
          display: block;
          height: 2px;
          background: var(--blue);
          border-radius: 2px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
        }
        .card-nav-open .card-nav-toggle span:first-child { transform: translateY(4px) rotate(45deg); }
        .card-nav-open .card-nav-toggle span:last-child { transform: translateY(-4px) rotate(-45deg); }
        .card-nav-panel {
          margin-top: 0.75rem;
          background: rgba(10, 24, 48, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.25);
          border-radius: 20px;
          padding: 0.75rem;
          display: grid;
          gap: 0.5rem;
          animation: fadeInUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }
        .card-nav-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          padding: 0.9rem 1.1rem;
          border-radius: 14px;
          text-decoration: none;
          color: var(--ivory);
          transition: background 0.3s ease;
        }
        .card-nav-item:hover { background: var(--blue-soft); }
        .card-nav-item-label { font-weight: 700; font-size: 1rem; }
        .card-nav-item-desc { font-size: 0.8rem; color: var(--gray); }

        /* Bubble menu (floating quick actions) */
        .bubble-menu {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }
        .bubble-menu-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          animation: fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) backwards;
        }
        .bubble-menu-item {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(10, 24, 48, 0.9);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1.1rem;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;
        }
        .bubble-menu-item:hover { transform: scale(1.1); background: var(--blue); }
        .bubble-menu-trigger {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--blue);
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bubble-menu-trigger:hover { transform: scale(1.08); }

        /* Hero */
        .hero {
          margin-top: 130px;
          padding: 6rem 2rem;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .hero-text h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 600;
          letter-spacing: -1px;
          color: var(--ivory);
        }
        .hero-subtitle {
          font-family: 'Space Mono', monospace;
          font-size: 0.95rem;
          color: var(--blue);
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .hero-text p {
          font-size: 1.05rem;
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.8;
          font-weight: 400;
        }
        .hero-image { animation: fadeIn 1s ease-out 0.2s backwards; }
        .hero-image img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: float 4s ease-in-out infinite;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .skills-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(59, 130, 246, 0.15);
        }
        .skills-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--blue);
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        /* Bento grid */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-top: 1.5rem;
        }
        .bento-cell {
          grid-column: span 3;
          padding: 1.75rem;
          background: rgba(59, 130, 246, 0.06);
          border: 1px solid rgba(59, 130, 246, 0.18);
          border-radius: 18px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s, box-shadow 0.4s;
          position: relative;
          overflow: hidden;
        }
        .bento-cell-wide { grid-column: span 3; }
        .bento-cell:hover {
          transform: translateY(-6px);
          background: rgba(59, 130, 246, 0.14);
          box-shadow: 0 20px 50px rgba(59, 130, 246, 0.15);
        }
        .bento-cell h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--blue);
          margin-bottom: 1rem;
          font-weight: 700;
        }
        .bento-cell ul { list-style: none; }
        .bento-cell li {
          font-size: 0.95rem;
          color: var(--ivory);
          line-height: 1.8;
          font-weight: 400;
          opacity: 0.9;
        }
        .bento-cell li::before { content: '— '; color: var(--blue); }
        @media (min-width: 640px) {
          .bento-cell { grid-column: span 1; }
          .bento-cell-wide { grid-column: span 2; }
        }

        /* Reel */
        .reel-section { padding: 6rem 2rem; position: relative; }
        .reel-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .reel-title { margin-bottom: 3rem; color: var(--ivory); font-weight: 600; letter-spacing: -1px; text-align: center; font-size: 2.8rem; }
        .reel-placeholder {
          width: 100%;
          height: 600px;
          background: linear-gradient(135deg, var(--navy) 0%, var(--deep) 100%);
          border: 1px solid rgba(59, 130, 246, 0.25);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ivory);
          font-size: 1.5rem;
          text-align: center;
          font-weight: 500;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        /* Experiences */
        .experiences { padding: 6rem 2rem; position: relative; }
        .container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .section-title { margin-bottom: 4rem; color: var(--ivory); font-weight: 600; letter-spacing: -1px; font-size: 2.8rem; }
        .experiences-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 3rem; }
        .experience-card {
          background: rgba(59, 130, 246, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.5s;
          border: 1px solid rgba(59, 130, 246, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .experience-card:hover {
          transform: translateY(-10px);
          background: rgba(59, 130, 246, 0.1);
          box-shadow: 0 30px 60px rgba(59, 130, 246, 0.15);
        }

        .depth-carousel {
          position: relative;
          width: 100%;
          height: 300px;
          background: var(--deep);
          border-radius: 20px 20px 0 0;
          overflow: hidden;
          perspective: 800px;
        }
        .depth-carousel-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s;
        }
        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(5, 7, 12, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--ivory);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;
          z-index: 10;
          font-weight: 700;
        }
        .carousel-nav-btn:hover { background: var(--blue); transform: translateY(-50%) scale(1.1); }
        .carousel-nav-btn.prev { left: 15px; }
        .carousel-nav-btn.next { right: 15px; }
        .carousel-counter {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(5, 7, 12, 0.8);
          color: var(--ivory);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          z-index: 10;
        }

        .experience-info { padding: 2.5rem; }
        .experience-info h3 { font-size: 1.3rem; margin-bottom: 0.8rem; color: var(--ivory); font-weight: 600; letter-spacing: -0.5px; }
        .experience-info p { font-size: 0.95rem; color: var(--gray); margin-bottom: 1.5rem; line-height: 1.6; font-weight: 400; }
        .experience-tag {
          display: inline-block;
          background: var(--blue-soft);
          color: var(--blue);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          border: 1px solid rgba(59, 130, 246, 0.25);
        }

        /* Contact */
        .contact { padding: 6rem 2rem; text-align: center; }
        .contact-content { max-width: 600px; margin: 0 auto; }
        .contact h2 { font-size: 2.5rem; margin-bottom: 2rem; font-weight: 600; letter-spacing: -1px; }
        .contact p { font-size: 1.1rem; margin-bottom: 3rem; color: var(--gray); line-height: 1.8; font-weight: 400; }
        .contact-buttons { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; margin-top: 1.5rem; }

        /* Specular buttons */
        .specular-btn {
          position: relative;
          display: inline-block;
          overflow: hidden;
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.5px;
          border-radius: 50px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .specular-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
          transform: skewX(-20deg);
          transition: left 0.7s ease;
        }
        .specular-btn:hover::after { left: 130%; }
        .specular-btn:hover { transform: translateY(-4px); }
        .contact-link.specular-btn {
          background: var(--blue);
          color: white;
          padding: 1.2rem 3rem;
          font-size: 1rem;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }
        .cv-link.specular-btn {
          background: rgba(59, 130, 246, 0.1);
          border: 2px solid var(--blue);
          color: var(--ivory);
          padding: 1rem 2.5rem;
          font-size: 0.95rem;
        }

        footer {
          background: var(--deep);
          color: var(--gray);
          text-align: center;
          padding: 3rem 2rem;
          font-size: 0.9rem;
          border-top: 1px solid rgba(59, 130, 246, 0.15);
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .card-nav-bar { padding: 0.6rem 1.2rem; }
          .logo { font-size: 0.75rem; }
          .hero-content { grid-template-columns: 1fr; gap: 2rem; margin-top: 2rem; }
          .hero-text h1 { font-size: 2.2rem; }
          .section-title { font-size: 1.8rem; margin-bottom: 2rem; }
          .experiences-grid { grid-template-columns: 1fr; }
          .depth-carousel { height: 220px; }
          .experience-info { padding: 1.5rem; }
          .contact h2 { font-size: 1.8rem; }
          .contact-buttons { flex-direction: column; gap: 1rem; }
          .contact-link, .cv-link { width: 100%; }
          .reel-title { font-size: 1.8rem; }
          .reel-placeholder { height: 300px; }
          .bubble-menu { bottom: 1.25rem; right: 1.25rem; }
        }
      `}</style>

      <FluidBackground />
      <FilmGrain />

      <header>
        <CardNav />
      </header>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <section className="hero" id="about">
          <div className="hero-content">
            <div className="hero-text scroll-reveal">
              <h1>Técnico en Producción Audiovisual</h1>
              <p className="hero-subtitle">Madrid, España</p>
              <p>Especializado en producción audiovisual y espectáculos con experiencia integral en rodajes de ficción, producciones televisivas y gestión de localizaciones. Egresado del Ciclo Superior de Producción Audiovisual y Espectáculos con expertise avanzado en preproducción, rodaje y postproducción.</p>

              <div className="skills-section">
                <p className="skills-label">Habilidades Personales</p>
                <BentoSkills />
              </div>
            </div>

            <div className="hero-image scroll-reveal">
              <img src="/profile-photo.jpg" alt="Iván Leguizamón" />
            </div>
          </div>
        </section>

        <section className="reel-section" id="reel">
          <div className="reel-container">
            <RevealText as="h2" className="reel-title" text="Mi Reel Audiovisual" />
            <div className="reel-placeholder">
              📹 Agrega aquí tu Vimeo/YouTube reel<br/>
              <span style={{fontSize: '0.9rem', marginTop: '1rem', opacity: 0.8}}>Cambiar URL: src=&quot;https://vimeo.com/TU_VIDEO_ID&quot;</span>
            </div>
          </div>
        </section>

        <section className="experiences" id="experiencias">
          <div className="container">
            <RevealText as="h2" className="section-title" text="Experiencias" />
            <div className="experiences-grid">
              {experiences.map((exp) => (
                <div key={exp.id} className="experience-card">
                  <DepthCarousel
                    images={Array.from({ length: exp.imageCount }, (_, i) => `/projects/${exp.folderName}/img-${i + 1}-opt.jpg`)}
                    alt={exp.title}
                  />
                  <div className="experience-info">
                    <h3>{exp.title}</h3>
                    <p>{exp.description}</p>
                    <span className="experience-tag">{exp.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-content scroll-reveal">
            <h2>Conectemos</h2>
            <p>¿Tienes un proyecto audiovisual en mente? Escríbeme para hablar sobre nuevas oportunidades de colaboración en producción, postproducción o espectáculos.</p>
            <div className="contact-buttons">
              <a href="mailto:elivaclips@gmail.com" className="contact-link specular-btn">ENVIAR EMAIL</a>
              <a href="/CV_Ivan_Leguizamon.pdf" download className="cv-link specular-btn">DESCARGAR CV</a>
            </div>
          </div>
        </section>
      </main>

      <BubbleMenu />

      <footer>
        <p>&copy; 2025 Iván Leguizamón. Técnico en Producción Audiovisual y Espectáculos. Madrid, España.</p>
      </footer>
    </>
  )
}
