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
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue';
          color: var(--charcoal);
          background: var(--cream);
          line-height: 1.6;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(245, 241, 232, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(26, 77, 92, 0.1);
          padding: 1.5rem 0;
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
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: var(--petrol);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--charcoal);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        .nav-links a:hover {
          color: var(--petrol);
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--petrol);
          transition: width 0.3s;
        }
        .nav-links a:hover::after {
          width: 100%;
        }

        .hero {
          margin-top: 60px;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, var(--cream) 0%, rgba(26, 77, 92, 0.05) 100%);
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--petrol);
          font-weight: 600;
          margin-bottom: 2rem;
        }
        .hero-content p {
          font-size: 1.05rem;
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(26, 77, 92, 0.1);
        }
        .about-item h3 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--petrol);
          margin-bottom: 0.8rem;
        }
        .about-item p {
          font-size: 0.95rem;
          color: var(--charcoal);
          line-height: 1.7;
        }

        .projects {
          padding: 5rem 2rem;
          background: white;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          font-size: 2.2rem;
          margin-bottom: 3rem;
          color: var(--charcoal);
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .project-card {
          background: linear-gradient(135deg, var(--cream) 0%, rgba(26, 77, 92, 0.08) 100%);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          border: 1px solid rgba(26, 77, 92, 0.1);
          animation: fadeInUp 0.6s ease-out backwards;
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
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(26, 77, 92, 0.15);
          border-color: rgba(26, 77, 92, 0.3);
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 280px;
          background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
          border-radius: 12px 12px 0 0;
          overflow: hidden;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: slideLeft 0.5s ease-out;
        }

        .carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(245, 241, 232, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: var(--petrol);
          transition: all 0.3s;
          z-index: 10;
        }

        .carousel-nav-btn:hover {
          background: var(--cream);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-nav-btn.prev {
          left: 12px;
        }

        .carousel-nav-btn.next {
          right: 12px;
        }

        .carousel-counter {
          position: absolute;
          bottom: 10px;
          right: 15px;
          background: rgba(26, 77, 92, 0.8);
          color: var(--cream);
          padding: 4px 10px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .project-info {
          padding: 2rem;
        }
        .project-info h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--charcoal);
        }
        .project-info p {
          font-size: 0.9rem;
          color: var(--gray);
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .project-tag {
          display: inline-block;
          background: rgba(26, 77, 92, 0.1);
          color: var(--petrol);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .contact {
          padding: 5rem 2rem;
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
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
        }
        .contact p {
          font-size: 1rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }
        .contact-link {
          display: inline-block;
          background: var(--cream);
          color: var(--petrol);
          padding: 1rem 2.5rem;
          text-decoration: none;
          font-weight: 700;
          border-radius: 50px;
          transition: all 0.3s;
          letter-spacing: 0.5px;
        }
        .contact-link:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        footer {
          background: var(--charcoal);
          color: var(--gray);
          text-align: center;
          padding: 2rem;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2.2rem; }
          .section-title { font-size: 1.8rem; }
          .nav-links { display: none; }
          .projects-grid { grid-template-columns: 1fr; }
          .carousel-container { height: 200px; }
        }
      `}</style>

      <nav>
        <div className="nav-container">
          <div className="logo">IVÁN LEGUIZAMÓN</div>
          <ul className="nav-links">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero" id="about">
        <div className="hero-content">
          <h1>Técnico en Producción Audiovisual</h1>
          <p className="hero-subtitle">Madrid, España • elivaclips@gmail.com</p>
          <p>Técnico especializado en Producción Audiovisual y Espectáculos con experiencia real en rodajes de ficción, producciones de Cablevisión, bloqueo de localizaciones y apoyo en producciones de televisión. Egresado del Ciclo Superior de Producción Audiovisual y Espectáculos (Planeta FP) con formación integral en preproducción, rodaje y postproducción audiovisual.</p>

          <div className="about-grid">
            <div className="about-item">
              <h3>Experiencia Principal</h3>
              <p><strong>Bloquer y Apoyo de Producción</strong> en la serie <strong>Anatomía de un Instante</strong> (Movistar+, DLO Producciones). <strong>Jefe de Producción</strong> en cortometraje de ficción. Director de Cámara/Realizador. Experiencia en producciones de <strong>Cablevisión</strong>. Gestión de rodajes, coordinación de equipos y bloqueo de localizaciones.</p>
            </div>
            <div className="about-item">
              <h3>Habilidades Técnicas</h3>
              <p><strong>Software:</strong> Adobe Premiere Pro (Avanzado), After Effects (Avanzado), DaVinci Resolve (Intermedio), Microsoft Office. <strong>Áreas:</strong> Producción, Postproducción, Espectáculos, Marketing Audiovisual.</p>
            </div>
            <div className="about-item">
              <h3>Idiomas</h3>
              <p><strong>Español</strong> (Nativo), <strong>Guaraní</strong> (Nativo), <strong>Inglés</strong> (B1). Capacidad de comunicación en equipos multiculturales y coordinación internacional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="proyectos">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
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
                <p>Director de Cámara/Realizador en rodaje de concierto musical en vivo. Dirección de ángulos, movimientos de cámara y gestión técnica.</p>
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
                <p>Jefe de Producción en rodaje de ficción. Coordinación de equipos, gestión de localizaciones y seguimiento de producción.</p>
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
                <p>Producción audiovisual de espectáculo y marketing. Captura de evento, edición de contenido para redes y promoción digital.</p>
                <span className="project-tag">Espectáculo</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',fontSize:'60px'}}>📱</span>
              </div>
              <div className="project-info">
                <h3>G&G - Producción Audiovisual</h3>
                <p>Jefe de Producción en organización de eventos deportivos y entretenimiento. Producción y gestión de contenido audiovisual para redes y marketing.</p>
                <span className="project-tag">Espectáculo</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',fontSize:'60px'}}>📺</span>
              </div>
              <div className="project-info">
                <h3>Serie Movistar+ "Anatomía de un Instante"</h3>
                <p>Bloquer y Apoyo de Producción en serie de ficción para televisión. Participación en todas las fases de producción: preproducción, rodaje y coordinación.</p>
                <span className="project-tag">Ficción</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',fontSize:'60px'}}>🎙️</span>
              </div>
              <div className="project-info">
                <h3>Programa Radiofónico "Radiografía"</h3>
                <p>Productor Audiovisual en proyecto radiofónico. Gestión técnica, producción de contenido y coordinación de emisión.</p>
                <span className="project-tag">Radio</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',fontSize:'60px'}}>🏢</span>
              </div>
              <div className="project-info">
                <h3>Atresmedia Radio - Experiencia Corporativa</h3>
                <p>Coordinación de producción en visitas a instalaciones de Atresmedia Radio. Experiencia en entorno corporativo de medios y radio.</p>
                <span className="project-tag">Corporativo</span>
              </div>
            </div>

            <div className="project-card">
              <div className="carousel-container">
                <span style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',fontSize:'60px'}}>🚀</span>
              </div>
              <div className="project-info">
                <h3>FE 2025 - Ungravity</h3>
                <p>Ayudante de Producción y Cámara en proyecto audiovisual web. Participación en captura, rodaje y postproducción de contenido digital.</p>
                <span className="project-tag">Web</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-content">
          <h2>Conectemos</h2>
          <p>¿Tienes un proyecto audiovisual en mente? Escríbeme para hablar sobre nuevas oportunidades de colaboración en producción, postproducción o espectáculos.</p>
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
      `}} />
    </>
  )
}
