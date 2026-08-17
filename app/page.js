'use client'

export default function Home() {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Iván Leguizamón - Producción Audiovisual</title>
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

          /* Animations */
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }

          /* Navigation */
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

          /* Hero / About */
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
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

          /* Projects Section */
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
            cursor: pointer;
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
          .project-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, var(--petrol) 0%, var(--charcoal) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--cream);
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
            padding: 1rem;
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

          /* Contact Section */
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

          /* Footer */
          footer {
            background: var(--charcoal);
            color: var(--gray);
            text-align: center;
            padding: 2rem;
            font-size: 0.9rem;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .hero-content h1 { font-size: 2.2rem; }
            .section-title { font-size: 1.8rem; }
            .nav-links { display: none; }
            .projects-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </head>
      <body>
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
            <p>Técnico especializado en Producción Audiovisual con experiencia real en rodajes de ficción, bloqueo de localizaciones y apoyo de producción en series de televisión. Egresado del Ciclo Superior de Producción Audiovisual y Espectáculos (Planeta FP) con formación en todas las áreas del proceso audiovisual: preproducción, rodaje y postproducción.</p>

            <div className="about-grid">
              <div className="about-item">
                <h3>Experiencia</h3>
                <p>Blocker y apoyo de producción en la serie <strong>Anatomía de un Instante</strong> (DLO Producciones). Experiencia en ficción, gestión de rodajes y coordinación de equipos.</p>
              </div>
              <div className="about-item">
                <h3>Habilidades Técnicas</h3>
                <p><strong>Software:</strong> Adobe Premiere Pro (Avanzado), After Effects (Avanzado), DaVinci Resolve, Microsoft Office</p>
              </div>
              <div className="about-item">
                <h3>Idiomas</h3>
                <p><strong>Español</strong> (Nativo), <strong>Guaraní</strong> (Nativo), <strong>Inglés</strong> (B1)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="proyectos">
          <div className="container">
            <h2 className="section-title">Proyectos</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">📽️</div>
                <div className="project-info">
                  <h3>Graduación FP</h3>
                  <p>Producción audiovisual del evento de fin de ciclo</p>
                  <span className="project-tag">Evento</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">🎬</div>
                <div className="project-info">
                  <h3>Concierto Gabriel Piattore</h3>
                  <p>Director de cámara en rodaje de concierto musical</p>
                  <span className="project-tag">Música</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">🎥</div>
                <div className="project-info">
                  <h3>Cortometraje "Ser un buen macarra"</h3>
                  <p>Jefe de producción en rodaje de ficción</p>
                  <span className="project-tag">Ficción</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">🎉</div>
                <div className="project-info">
                  <h3>Fiesta WAV Azul</h3>
                  <p>Producción audiovisual para marketing y eventos</p>
                  <span className="project-tag">Marketing</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">📱</div>
                <div className="project-info">
                  <h3>G&G - Gestión de Contenido</h3>
                  <p>Producción y gestión de contenido audiovisual para redes</p>
                  <span className="project-tag">Redes</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">📺</div>
                <div className="project-info">
                  <h3>Serie Movistar - "Anatomía de un Instante"</h3>
                  <p>Bloquer y apoyo de producción en serie de ficción</p>
                  <span className="project-tag">Ficción</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">🎙️</div>
                <div className="project-info">
                  <h3>Programa Radiofónico</h3>
                  <p>Productor audiovisual en proyecto radiofónico</p>
                  <span className="project-tag">Radio</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">🏢</div>
                <div className="project-info">
                  <h3>Visita Atresmedia Radio</h3>
                  <p>Coordinación de producción en visita corporativa</p>
                  <span className="project-tag">Corporativo</span>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">🚀</div>
                <div className="project-info">
                  <h3>FE 2025 - Ungravity</h3>
                  <p>Ayudante de producción y cámara en proyecto web</p>
                  <span className="project-tag">Web</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-content">
            <h2>Conectemos</h2>
            <p>¿Tienes un proyecto en mente? Contactame para hablar sobre oportunidades de colaboración.</p>
            <a href="mailto:elivaclips@gmail.com" className="contact-link">ENVIAR EMAIL</a>
          </div>
        </section>

        <footer>
          <p>&copy; 2025 Iván Leguizamón. Técnico en Producción Audiovisual.</p>
        </footer>
      </body>
    </html>
  )
}
