'use client'

import { useEffect, FC } from 'react'

interface CarouselState {
  [key: number]: {
    current: number
    images: string[]
  }
}

interface ExperienceData {
  id: number
  title: string
  description: string
  tag: string
  folderName: string
  imageCount: number
}

const Home: FC = () => {
  useEffect(() => {
    // Initialize carousel state
    const carouselState: CarouselState = {
      1: { current: 0, images: ['/projects/graduacion-fp/img-1-opt.jpg', '/projects/graduacion-fp/img-2-opt.jpg', '/projects/graduacion-fp/img-3-opt.jpg', '/projects/graduacion-fp/img-4-opt.jpg', '/projects/graduacion-fp/img-5-opt.jpg'] },
      2: { current: 0, images: ['/projects/concierto-gabriel-piattore/img-1-opt.jpg', '/projects/concierto-gabriel-piattore/img-2-opt.jpg', '/projects/concierto-gabriel-piattore/img-3-opt.jpg'] },
      3: { current: 0, images: ['/projects/cortometraje-ser-buen-macarra/img-1-opt.jpg', '/projects/cortometraje-ser-buen-macarra/img-2-opt.jpg', '/projects/cortometraje-ser-buen-macarra/img-3-opt.jpg', '/projects/cortometraje-ser-buen-macarra/img-4-opt.jpg'] },
      4: { current: 0, images: ['/projects/fiesta-wav-azul/img-1-opt.jpg', '/projects/fiesta-wav-azul/img-2-opt.jpg', '/projects/fiesta-wav-azul/img-3-opt.jpg'] },
      5: { current: 0, images: ['/projects/g-g-produccion-contenido/img-1-opt.jpg', '/projects/g-g-produccion-contenido/img-2-opt.jpg', '/projects/g-g-produccion-contenido/img-3-opt.jpg', '/projects/g-g-produccion-contenido/img-4-opt.jpg'] },
      6: { current: 0, images: ['/projects/serie-movistar-anatomia-instante/img-1-opt.jpg', '/projects/serie-movistar-anatomia-instante/img-2-opt.jpg', '/projects/serie-movistar-anatomia-instante/img-3-opt.jpg', '/projects/serie-movistar-anatomia-instante/img-4-opt.jpg'] },
      7: { current: 0, images: ['/projects/programa-radiofonica/img-1-opt.jpg', '/projects/programa-radiofonica/img-2-opt.jpg', '/projects/programa-radiofonica/img-3-opt.jpg'] },
      8: { current: 0, images: ['/projects/atresmedia-radio/img-1-opt.jpg', '/projects/atresmedia-radio/img-2-opt.jpg', '/projects/atresmedia-radio/img-3-opt.jpg', '/projects/atresmedia-radio/img-4-opt.jpg', '/projects/atresmedia-radio/img-5-opt.jpg', '/projects/atresmedia-radio/img-6-opt.jpg'] },
      9: { current: 0, images: ['/projects/fe-2025-ongravity/img-1-opt.jpg', '/projects/fe-2025-ongravity/img-2-opt.jpg', '/projects/fe-2025-ongravity/img-3-opt.jpg', '/projects/fe-2025-ongravity/img-4-opt.jpg'] }
    }

    // Carousel functions
    const carouselNext = (projectId: number): void => {
      const state = carouselState[projectId]
      if (!state) return
      state.current = (state.current + 1) % state.images.length
      updateCarousel(projectId)
    }

    const carouselPrev = (projectId: number): void => {
      const state = carouselState[projectId]
      if (!state) return
      state.current = (state.current - 1 + state.images.length) % state.images.length
      updateCarousel(projectId)
    }

    const updateCarousel = (projectId: number): void => {
      const state = carouselState[projectId]
      const img = document.getElementById(`carousel-img-${projectId}`)
      const counter = document.getElementById(`counter-${projectId}`)
      if (img && counter) {
        img.src = state.images[state.current]
        counter.textContent = (state.current + 1).toString()
      }
    }

    // Attach to window
    (window as any).carouselNext = carouselNext
    (window as any).carouselPrev = carouselPrev

    // Scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const experiences: ExperienceData[] = [
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
          --cream: #F5F1E8;
          --petrol: #1a4d5c;
          --charcoal: #1a1a1a;
          --gray: #8a8a8a;
          --light-gray: #f0f0f0;
        }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          color: var(--charcoal);
          background: linear-gradient(180deg, #faf8f4 0%, #f6f4f0 20%, #f2f0ec 40%, #efeced 60%, #ebead7 80%, #e8e6e2 100%);
          line-height: 1.6;
          overflow-x: hidden;
          min-height: 100vh;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -20px, 0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(26, 77, 92, 0.3), inset 0 0 20px rgba(26, 77, 92, 0.1); }
          50% { box-shadow: 0 0 50px rgba(26, 77, 92, 0.5), inset 0 0 30px rgba(26, 77, 92, 0.15); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        nav {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          background: rgba(245, 241, 232, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(26, 77, 92, 0.2);
          padding: 0.8rem 2.5rem;
          border-radius: 50px;
          animation: fadeIn 0.6s ease-out;
          box-shadow: 0 8px 32px rgba(26, 77, 92, 0.1);
        }
        .nav-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 3rem;
        }
        .logo {
          font-size: 1rem;
          font-weight: 800;
          letter-spacing: 1px;
          background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--charcoal);
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }
        .nav-links a:hover {
          color: var(--petrol);
          transform: translateY(-2px);
        }

        .hero {
          margin-top: 120px;
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--cream) 0%, rgba(26, 77, 92, 0.04) 100%);
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(26, 77, 92, 0.05) 0%, transparent 70%);
          animation: float 6s ease-in-out infinite;
        }
        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          animation: fadeInUp 0.8s ease-out;
          position: relative;
          z-index: 1;
        }
        .hero-text h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--petrol);
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
        }
        .hero-text p {
          font-size: 1.05rem;
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.8;
          font-weight: 400;
        }
        .hero-image {
          animation: slideInLeft 0.8s ease-out 0.2s backwards;
        }
        .hero-image img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(26, 77, 92, 0.2);
          animation: float 3s ease-in-out infinite;
          will-change: transform;
        }

        .skills-section {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(26, 77, 92, 0.1);
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }
        .skill-category {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(26, 77, 92, 0.12);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .skill-category:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 20px 40px rgba(26, 77, 92, 0.1);
        }
        .skill-category h3 {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--petrol);
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .skill-category ul {
          list-style: none;
        }
        .skill-category li {
          font-size: 0.95rem;
          color: var(--charcoal);
          line-height: 1.8;
          font-weight: 500;
        }

        .reel-section {
          padding: 6rem 2rem;
          background: linear-gradient(180deg, #e8e6e2 0%, #f2f0ec 100%);
          position: relative;
        }
        .reel-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .reel-title {
          font-size: 2.8rem;
          margin-bottom: 3rem;
          color: var(--charcoal);
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
          font-weight: 800;
          letter-spacing: -1px;
          text-align: center;
        }
        .vimeo-player {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(26, 77, 92, 0.15);
          animation: fadeInUp 0.8s ease-out 0.3s backwards;
        }
        .vimeo-player iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          border: none;
        }
        .reel-placeholder {
          width: 100%;
          height: 600px;
          background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cream);
          font-size: 1.5rem;
          text-align: center;
          font-weight: 600;
          animation: fadeInUp 0.8s ease-out 0.3s backwards;
          box-shadow: 0 20px 60px rgba(26, 77, 92, 0.15);
        }

        .experiences {
          padding: 6rem 2rem;
          background: linear-gradient(180deg, #f2f0ec 0%, #efeced 100%);
          position: relative;
        }
        .experiences::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, rgba(26, 77, 92, 0.02) 0%, transparent 100%);
          pointer-events: none;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .section-title {
          font-size: 2.8rem;
          margin-bottom: 4rem;
          color: var(--charcoal);
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .experiences-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3rem;
        }
        .experience-card {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(25px);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(26, 77, 92, 0.12);
          animation: fadeInUp 0.6s ease-out backwards;
          box-shadow: 0 10px 30px rgba(26, 77, 92, 0.08), inset 0 1px 0 rgba(255,255,255,0.3);
          position: relative;
          overflow: visible;
          will-change: transform;
        }
        .experience-card::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: radial-gradient(circle at 30% 30%, rgba(26, 77, 92, 0.2) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(26, 77, 92, 0.1) 0%, transparent 50%);
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.4s ease-out;
          pointer-events: none;
          z-index: -1;
        }
        .experience-card:nth-child(1) { animation-delay: 0.1s; }
        .experience-card:nth-child(2) { animation-delay: 0.15s; }
        .experience-card:nth-child(3) { animation-delay: 0.2s; }
        .experience-card:nth-child(4) { animation-delay: 0.25s; }
        .experience-card:nth-child(5) { animation-delay: 0.3s; }
        .experience-card:nth-child(6) { animation-delay: 0.35s; }
        .experience-card:nth-child(7) { animation-delay: 0.4s; }
        .experience-card:nth-child(8) { animation-delay: 0.45s; }
        .experience-card:nth-child(9) { animation-delay: 0.5s; }
        .experience-card:hover {
          transform: translateY(-12px);
          background: rgba(255, 255, 255, 0.8);
          border-color: rgba(26, 77, 92, 0.2);
          box-shadow: 0 30px 60px rgba(26, 77, 92, 0.15),
                      0 0 40px rgba(26, 77, 92, 0.15),
                      inset 0 1px 0 rgba(255,255,255,0.5);
        }
        .experience-card:hover::before {
          opacity: 1;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
          border-radius: 20px 20px 0 0;
          overflow: hidden;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: slideInLeft 0.5s ease-out;
        }

        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(245, 241, 232, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(26, 77, 92, 0.2);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: var(--petrol);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 10;
          font-weight: 800;
        }

        .carousel-nav-btn:hover {
          background: white;
          transform: translateY(-50%) scale(1.15);
          box-shadow: 0 10px 25px rgba(26, 77, 92, 0.2);
        }

        .carousel-nav-btn.prev {
          left: 15px;
        }

        .carousel-nav-btn.next {
          right: 15px;
        }

        .carousel-counter {
          position: absolute;
          bottom: 15px;
          right: 15px;
          background: rgba(26, 77, 92, 0.9);
          backdrop-filter: blur(10px);
          color: var(--cream);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .experience-info {
          padding: 2.5rem;
        }
        .experience-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: var(--charcoal);
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .experience-info p {
          font-size: 0.95rem;
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-weight: 500;
        }
        .experience-tag {
          display: inline-block;
          background: linear-gradient(135deg, rgba(26, 77, 92, 0.1) 0%, rgba(26, 77, 92, 0.05) 100%);
          color: var(--petrol);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          border: 1px solid rgba(26, 77, 92, 0.15);
        }

        .contact {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
          color: var(--cream);
          text-align: center;
        }
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out 0.3s backwards;
        }
        .contact h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .contact p {
          font-size: 1.1rem;
          margin-bottom: 3rem;
          opacity: 0.95;
          line-height: 1.8;
          font-weight: 500;
        }
        .contact-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }
        .contact-link {
          display: inline-block;
          background: var(--cream);
          color: var(--petrol);
          padding: 1.2rem 3rem;
          text-decoration: none;
          font-weight: 800;
          border-radius: 50px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.5px;
          font-size: 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .contact-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
        }
        .cv-link {
          display: inline-block;
          background: rgba(245, 241, 232, 0.15);
          border: 2px solid var(--cream);
          color: var(--cream);
          padding: 1rem 2.5rem;
          text-decoration: none;
          font-weight: 800;
          border-radius: 50px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.5px;
          font-size: 0.95rem;
          backdrop-filter: blur(10px);
        }
        .cv-link:hover {
          background: rgba(245, 241, 232, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
        }

        footer {
          background: var(--charcoal);
          color: var(--light-gray);
          text-align: center;
          padding: 3rem 2rem;
          font-size: 0.9rem;
          border-top: 1px solid rgba(26, 77, 92, 0.2);
          font-weight: 500;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          nav {
            top: 1rem;
            padding: 0.6rem 1.5rem;
          }
          .logo {
            font-size: 0.9rem;
          }
          .nav-links {
            display: none;
          }
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-top: 2rem;
          }
          .hero-text h1 { font-size: 2.2rem; }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .section-title { font-size: 1.8rem; margin-bottom: 2rem; }
          .experiences-grid { grid-template-columns: 1fr; }
          .carousel-container { height: 200px; }
          .experience-info { padding: 1.5rem; }
          .contact h2 { font-size: 1.8rem; }
          .contact-buttons {
            flex-direction: column;
            gap: 1rem;
          }
          .contact-link, .cv-link {
            width: 100%;
          }
          .reel-title { font-size: 1.8rem; }
          .reel-placeholder { height: 300px; }
        }
      `}</style>

      <nav>
        <div className="nav-container">
          <div className="logo">IVÁN LEGUIZAMÓN • PRODUCTOR</div>
          <ul className="nav-links">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#reel">Reel</a></li>
            <li><a href="#experiencias">Experiencias</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="about">
        <div className="hero-content">
          <div className="hero-text scroll-reveal">
            <h1>Técnico en Producción Audiovisual</h1>
            <p className="hero-subtitle">Madrid, España</p>
            <p>Especializado en producción audiovisual y espectáculos con experiencia integral en rodajes de ficción, producciones televisivas y gestión de localizaciones. Egresado del Ciclo Superior de Producción Audiovisual y Espectáculos con expertise avanzado en preproducción, rodaje y postproducción.</p>

            <div className="skills-section">
              <h3 style={{fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--petrol)', marginBottom: '1.5rem', fontWeight: '800'}}>Habilidades Personales</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Bajo Presión</h3>
                  <ul>
                    <li>• Búsqueda ágil de soluciones</li>
                    <li>• Toma de decisiones rápida</li>
                    <li>• Calma y compostura</li>
                    <li>• Cautela y prevención</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Profesionales</h3>
                  <ul>
                    <li>• Puntualidad extrema</li>
                    <li>• Disponibilidad flexible</li>
                    <li>• Actitud colaborativa</li>
                    <li>• Compromiso con calidad</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Software Producción</h3>
                  <ul>
                    <li>• Adobe Premiere (Avanzado)</li>
                    <li>• After Effects (Avanzado)</li>
                    <li>• Adobe Audition (Avanzado)</li>
                    <li>• Photoshop (Intermedio)</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Producción & IA</h3>
                  <ul>
                    <li>• Gestión preproducción</li>
                    <li>• Coordinación en rodaje</li>
                    <li>• Generación video con IA</li>
                    <li>• Restauración & Mejora</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-image scroll-reveal">
            <img src="/profile-photo.jpg" alt="Iván Leguizamón" />
          </div>
        </div>
      </section>

      <section className="reel-section" id="reel">
        <div className="reel-container">
          <h2 className="reel-title scroll-reveal">Mi Reel Audiovisual</h2>
          <div className="reel-placeholder">
            📹 Agrega aquí tu Vimeo/YouTube reel<br/>
            <span style={{fontSize: '0.9rem', marginTop: '1rem', opacity: 0.8}}>Cambiar URL: src=&quot;https://vimeo.com/TU_VIDEO_ID&quot;</span>
          </div>
        </div>
      </section>

      <section className="experiences" id="experiencias">
        <div className="container">
          <h2 className="section-title scroll-reveal">Experiencias</h2>
          <div className="experiences-grid">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-card">
                <div className="carousel-container">
                  <img id={`carousel-img-${exp.id}`} className="carousel-image" src={`/projects/${exp.folderName}/img-1-opt.jpg`} alt={exp.title} />
                  <button className="carousel-nav-btn prev" onClick={() => (window as any).carouselPrev(exp.id)}>‹</button>
                  <button className="carousel-nav-btn next" onClick={() => (window as any).carouselNext(exp.id)}>›</button>
                  <div className="carousel-counter"><span id={`counter-${exp.id}`}>1</span>/{exp.imageCount}</div>
                </div>
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
            <a href="mailto:elivaclips@gmail.com" className="contact-link">ENVIAR EMAIL</a>
            <a href="/CV_Ivan_Leguizamon.pdf" download className="cv-link">DESCARGAR CV</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Iván Leguizamón. Técnico en Producción Audiovisual y Espectáculos. Madrid, España.</p>
      </footer>
    </>
  )
}

export default Home
