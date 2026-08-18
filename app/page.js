'use client'

export default function Home() {
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
          background: var(--cream);
          line-height: 1.6;
          overflow-x: hidden;
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(26, 77, 92, 0.3); }
          50% { box-shadow: 0 0 40px rgba(26, 77, 92, 0.5); }
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(245, 241, 232, 0.7);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(26, 77, 92, 0.1);
          padding: 1rem 0;
          animation: fadeIn 0.6s ease-out;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -1px;
          background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--charcoal);
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }
        .nav-links a:hover {
          color: var(--petrol);
          transform: translateY(-2px);
        }

        .hero {
          margin-top: 80px;
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--cream) 0%, rgba(26, 77, 92, 0.08) 100%);
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          animation: fadeInUp 0.8s ease-out;
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
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(26, 77, 92, 0.1);
        }
        .about-card {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(26, 77, 92, 0.1);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .about-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.7);
          box-shadow: 0 20px 40px rgba(26, 77, 92, 0.1);
          border-color: rgba(26, 77, 92, 0.2);
        }
        .about-card h3 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--petrol);
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .about-card p {
          font-size: 0.95rem;
          color: var(--charcoal);
          line-height: 1.7;
          font-weight: 500;
        }

        .projects {
          padding: 6rem 2rem;
          background: white;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.8rem;
          margin-bottom: 4rem;
          color: var(--charcoal);
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
          font-weight: 800;
          letter-spacing: -1px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 3rem;
        }
        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(26, 77, 92, 0.08);
          animation: fadeInUp 0.6s ease-out backwards;
          box-shadow: 0 10px 30px rgba(26, 77, 92, 0.08);
        }
        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.15s; }
        .project-card:nth-child(3) { animation-delay: 0.2s; }
        .project-card:nth-child(4) { animation-delay: 0.25s; }
        .project-card:nth-child(5) { animation-delay: 0.3s; }
        .project-card:nth-child(6) { animation-delay: 0.35s; }
        .project-card:nth-child(7) { animation-delay: 0.4s; }
        .project-card:nth-child(8) { animation-delay: 0.45s; }
        .project-card:nth-child(9) { animation-delay: 0.5s; }
        .project-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 60px rgba(26, 77, 92, 0.15);
          border-color: rgba(26, 77, 92, 0.2);
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

        .project-info {
          padding: 2.5rem;
        }
        .project-info h3 {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: var(--charcoal);
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .project-info p {
          font-size: 0.95rem;
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-weight: 500;
        }
        .project-tag {
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
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-text h1 { font-size: 2.2rem; }
          .section-title { font-size: 1.8rem; margin-bottom: 2rem; }
          .nav-links { display: none; }
          .projects-grid { grid-template-columns: 1fr; }
          .carousel-container { height: 200px; }
          .nav-links { gap: 1.5rem; font-size: 0.85rem; }
          .about-card { padding: 1.5rem; }
          .project-info { padding: 1.5rem; }
          .contact h2 { font-size: 1.8rem; }
        }
      `}</style>

      <nav>
        <div className="nav-container">
          <div className="logo">IVÁN</div>
          <ul className="nav-links">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="about">
        <div className="hero-content">
          <div className="hero-text scroll-reveal">
            <h1>Técnico en Producción Audiovisual</h1>
            <p className="hero-subtitle">Madrid, España</p>
            <p>Especializado en producción audiovisual y espectáculos con experiencia en rodajes de ficción, producciones televisivas y gestión de localizaciones. Egresado del Ciclo Superior de Producción Audiovisual y Espectáculos con expertise en preproducción, rodaje y postproducción.</p>

            <div className="about-grid">
              <div className="about-card scroll-reveal">
                <h3>Experiencia</h3>
                <p>Bloquer y Apoyo de Producción en <strong>Anatomía de un Instante</strong> (Movistar+). Jefe de Producción en cortometrajes. Director de Cámara/Realizador.</p>
              </div>
              <div className="about-card scroll-reveal">
                <h3>Habilidades</h3>
                <p><strong>Adobe Premiere</strong> (Avanzado), <strong>After Effects</strong> (Avanzado), <strong>DaVinci Resolve</strong> (Intermedio). Producción, Postproducción, Espectáculos.</p>
              </div>
              <div className="about-card scroll-reveal">
                <h3>Idiomas</h3>
                <p><strong>Español</strong> (Nativo), <strong>Guaraní</strong> (Nativo), <strong>Inglés</strong> (B1). Comunicación multicultural.</p>
              </div>
            </div>
          </div>

          <div className="hero-image scroll-reveal">
            <img src="/profile-photo.jpg" alt="Iván Leguizamón" />
          </div>
        </div>
      </section>

      <section className="projects" id="proyectos">
        <div className="container">
          <h2 className="section-title scroll-reveal">Proyectos</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-1" className="carousel-image" src="/projects/graduacion-fp/img-1-opt.jpg" alt="Graduación Planeta FP" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(1)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(1)}>›</button>
                <div className="carousel-counter"><span id="counter-1">1</span>/5</div>
              </div>
              <div className="project-info">
                <h3>Graduación Planeta FP</h3>
                <p>Producción audiovisual completa del evento de fin de ciclo. Coordinación de equipos técnicos, captura y edición de contenido.</p>
                <span className="project-tag">Evento</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-2" className="carousel-image" src="/projects/concierto-gabriel-piattore/img-1-opt.jpg" alt="Concierto Gabriel Piattore" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(2)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(2)}>›</button>
                <div className="carousel-counter"><span id="counter-2">1</span>/3</div>
              </div>
              <div className="project-info">
                <h3>Concierto Gabriel Piattore</h3>
                <p>Director de Cámara/Realizador en rodaje de concierto musical en vivo. Dirección de ángulos y movimientos de cámara.</p>
                <span className="project-tag">Música</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-3" className="carousel-image" src="/projects/cortometraje-ser-buen-macarra/img-1-opt.jpg" alt="Cortometraje Ser un buen macarra" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(3)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(3)}>›</button>
                <div className="carousel-counter"><span id="counter-3">1</span>/4</div>
              </div>
              <div className="project-info">
                <h3>Cortometraje "Ser un buen macarra"</h3>
                <p>Jefe de Producción en rodaje de ficción. Coordinación de equipos, gestión de localizaciones y seguimiento.</p>
                <span className="project-tag">Ficción</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-4" className="carousel-image" src="/projects/fiesta-wav-azul/img-1-opt.jpg" alt="Fiesta WAV Azul" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(4)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(4)}>›</button>
                <div className="carousel-counter"><span id="counter-4">1</span>/3</div>
              </div>
              <div className="project-info">
                <h3>Fiesta WAV Azul</h3>
                <p>Producción audiovisual de espectáculo y marketing. Captura de evento, edición y promoción digital.</p>
                <span className="project-tag">Espectáculo</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-5" className="carousel-image" src="/projects/g-g-produccion-contenido/img-1-opt.jpg" alt="G&G Producción Audiovisual" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(5)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(5)}>›</button>
                <div className="carousel-counter"><span id="counter-5">1</span>/4</div>
              </div>
              <div className="project-info">
                <h3>G&G - Producción Audiovisual</h3>
                <p>Jefe de Producción en organización de eventos. Producción y gestión de contenido audiovisual para redes.</p>
                <span className="project-tag">Espectáculo</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-6" className="carousel-image" src="/projects/serie-movistar-anatomia-instante/img-1-opt.jpg" alt="Serie Movistar Anatomía de un Instante" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(6)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(6)}>›</button>
                <div className="carousel-counter"><span id="counter-6">1</span>/4</div>
              </div>
              <div className="project-info">
                <h3>Serie Movistar+ "Anatomía de un Instante"</h3>
                <p>Bloquer y Apoyo de Producción. Participación en todas las fases de producción: preproducción, rodaje y coordinación.</p>
                <span className="project-tag">Ficción</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-7" className="carousel-image" src="/projects/programa-radiofonica/img-1-opt.jpg" alt="Programa Radiofónico Radiografía" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(7)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(7)}>›</button>
                <div className="carousel-counter"><span id="counter-7">1</span>/3</div>
              </div>
              <div className="project-info">
                <h3>Programa Radiofónico "Radiografía"</h3>
                <p>Productor Audiovisual en proyecto radiofónico. Gestión técnica, producción de contenido y coordinación.</p>
                <span className="project-tag">Radio</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-8" className="carousel-image" src="/projects/atresmedia-radio/img-1-opt.jpg" alt="Atresmedia Radio" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(8)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(8)}>›</button>
                <div className="carousel-counter"><span id="counter-8">1</span>/6</div>
              </div>
              <div className="project-info">
                <h3>Atresmedia Radio - Experiencia Corporativa</h3>
                <p>Coordinación de producción en visitas a instalaciones. Experiencia en entorno corporativo de medios.</p>
                <span className="project-tag">Corporativo</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <img id="carousel-img-9" className="carousel-image" src="/projects/fe-2025-ongravity/img-1-opt.jpg" alt="FE 2025 Ongravity" />
                <button className="carousel-nav-btn prev" onClick={() => window.carouselPrev(9)}>‹</button>
                <button className="carousel-nav-btn next" onClick={() => window.carouselNext(9)}>›</button>
                <div className="carousel-counter"><span id="counter-9">1</span>/4</div>
              </div>
              <div className="project-info">
                <h3>FE 2025 - Ongravity</h3>
                <p>Ayudante de Producción y Cámara en proyecto audiovisual web. Participación en captura, rodaje y postproducción.</p>
                <span className="project-tag">Web</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-content scroll-reveal">
          <h2>Conectemos</h2>
          <p>¿Tienes un proyecto audiovisual en mente? Escríbeme para hablar sobre nuevas oportunidades de colaboración.</p>
          <a href="mailto:elivaclips@gmail.com" className="contact-link">ENVIAR EMAIL</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Iván Leguizamón. Técnico en Producción Audiovisual y Espectáculos.</p>
      </footer>

      <script dangerouslySetInnerHTML={{__html: `
        const carouselState = {
          1: {
            current: 0,
            images: [
              '/projects/graduacion-fp/img-1-opt.jpg',
              '/projects/graduacion-fp/img-2-opt.jpg',
              '/projects/graduacion-fp/img-3-opt.jpg',
              '/projects/graduacion-fp/img-4-opt.jpg',
              '/projects/graduacion-fp/img-5-opt.jpg'
            ]
          },
          2: {
            current: 0,
            images: [
              '/projects/concierto-gabriel-piattore/img-1-opt.jpg',
              '/projects/concierto-gabriel-piattore/img-2-opt.jpg',
              '/projects/concierto-gabriel-piattore/img-3-opt.jpg'
            ]
          },
          3: {
            current: 0,
            images: [
              '/projects/cortometraje-ser-buen-macarra/img-1-opt.jpg',
              '/projects/cortometraje-ser-buen-macarra/img-2-opt.jpg',
              '/projects/cortometraje-ser-buen-macarra/img-3-opt.jpg',
              '/projects/cortometraje-ser-buen-macarra/img-4-opt.jpg'
            ]
          },
          4: {
            current: 0,
            images: [
              '/projects/fiesta-wav-azul/img-1-opt.jpg',
              '/projects/fiesta-wav-azul/img-2-opt.jpg',
              '/projects/fiesta-wav-azul/img-3-opt.jpg'
            ]
          },
          5: {
            current: 0,
            images: [
              '/projects/g-g-produccion-contenido/img-1-opt.jpg',
              '/projects/g-g-produccion-contenido/img-2-opt.jpg',
              '/projects/g-g-produccion-contenido/img-3-opt.jpg',
              '/projects/g-g-produccion-contenido/img-4-opt.jpg'
            ]
          },
          6: {
            current: 0,
            images: [
              '/projects/serie-movistar-anatomia-instante/img-1-opt.jpg',
              '/projects/serie-movistar-anatomia-instante/img-2-opt.jpg',
              '/projects/serie-movistar-anatomia-instante/img-3-opt.jpg',
              '/projects/serie-movistar-anatomia-instante/img-4-opt.jpg'
            ]
          },
          7: {
            current: 0,
            images: [
              '/projects/programa-radiofonica/img-1-opt.jpg',
              '/projects/programa-radiofonica/img-2-opt.jpg',
              '/projects/programa-radiofonica/img-3-opt.jpg'
            ]
          },
          8: {
            current: 0,
            images: [
              '/projects/atresmedia-radio/img-1-opt.jpg',
              '/projects/atresmedia-radio/img-2-opt.jpg',
              '/projects/atresmedia-radio/img-3-opt.jpg',
              '/projects/atresmedia-radio/img-4-opt.jpg',
              '/projects/atresmedia-radio/img-5-opt.jpg',
              '/projects/atresmedia-radio/img-6-opt.jpg'
            ]
          },
          9: {
            current: 0,
            images: [
              '/projects/fe-2025-ongravity/img-1-opt.jpg',
              '/projects/fe-2025-ongravity/img-2-opt.jpg',
              '/projects/fe-2025-ongravity/img-3-opt.jpg',
              '/projects/fe-2025-ongravity/img-4-opt.jpg'
            ]
          }
        };

        window.carouselNext = function(projectId) {
          const state = carouselState[projectId];
          if (!state) return;
          state.current = (state.current + 1) % state.images.length;
          window.updateCarousel(projectId);
        }

        window.carouselPrev = function(projectId) {
          const state = carouselState[projectId];
          if (!state) return;
          state.current = (state.current - 1 + state.images.length) % state.images.length;
          window.updateCarousel(projectId);
        }

        window.updateCarousel = function(projectId) {
          const state = carouselState[projectId];
          const img = document.getElementById('carousel-img-' + projectId);
          const counter = document.getElementById('counter-' + projectId);
          if (img && counter) {
            img.src = state.images[state.current];
            counter.textContent = state.current + 1;
          }
        }

        // Scroll reveal animations
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
          observer.observe(el);
        });
      `}} />
    </>
  )
}
