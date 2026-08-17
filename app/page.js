export default function Home() {
  return (
    <html>
      <head>
        <title>Iván Leguizamón - Producción Audiovisual</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; color: #1a1a1a; background: #fff; }
          nav { position: sticky; top: 0; background: rgba(255,255,255,0.98); border-bottom: 1px solid #e5e5e5; padding: 1rem 0; }
          .nav-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; justify-content: space-between; align-items: center; }
          .logo { font-size: 1.5rem; font-weight: 700; }
          .nav-links { display: flex; gap: 2rem; list-style: none; }
          .nav-links a { text-decoration: none; color: #1a1a1a; }
          .hero { min-height: 100vh; display: flex; align-items: center; padding: 2rem; background: linear-gradient(135deg, #f5f5f5 0%, #fff 100%); }
          .hero-content { max-width: 1200px; margin: 0 auto; width: 100%; }
          .hero-text h1 { font-size: 3.5rem; margin-bottom: 1.5rem; }
          .hero-text p { font-size: 1.1rem; color: #555; margin-bottom: 2rem; }
          .cta-button { display: inline-block; background: #1a1a1a; color: #fff; padding: 1rem 2.5rem; text-decoration: none; font-weight: 600; border-radius: 4px; margin-right: 1rem; }
          .cta-button:hover { background: #333; }
          .services { padding: 5rem 2rem; background: #fff; }
          .container { max-width: 1200px; margin: 0 auto; }
          .section-title { font-size: 2.5rem; margin-bottom: 3rem; text-align: center; }
          .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
          .service-card { padding: 2rem; background: #f9f9f9; border-radius: 8px; border-left: 3px solid #1a1a1a; }
          .contact { padding: 5rem 2rem; background: #1a1a1a; color: #fff; text-align: center; }
          .contact-content { max-width: 800px; margin: 0 auto; }
          .contact h2 { font-size: 2.5rem; margin-bottom: 1.5rem; }
          .contact-links { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem; }
          .contact-link { background: rgba(255,255,255,0.1); color: #fff; padding: 0.8rem 1.5rem; text-decoration: none; border-radius: 4px; }
          footer { background: #000; color: #999; text-align: center; padding: 2rem; }
        `}</style>
      </head>
      <body>
        <nav>
          <div className="nav-container">
            <div className="logo">IVÁN LEGUIZAMÓN</div>
            <ul className="nav-links">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </nav>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Producción de TV que genera impacto</h1>
              <p>Dirección de producción, coordinación de equipos creativos y gestión audiovisual integral.</p>
              <a href="#contacto" className="cta-button">Hablar conmigo</a>
            </div>
          </div>
        </section>
        <section className="services" id="servicios">
          <div className="container">
            <h2 className="section-title">Servicios</h2>
            <div className="services-grid">
              <div className="service-card"><h3>Dirección de Producción</h3><p>Gestión integral de proyectos audiovisuales.</p></div>
              <div className="service-card"><h3>Edición y Postproducción</h3><p>Edición profesional, color grading y motion graphics.</p></div>
              <div className="service-card"><h3>Gestión de Contenido</h3><p>Producción para redes sociales y plataformas digitales.</p></div>
            </div>
          </div>
        </section>
        <section className="contact" id="contacto">
          <div className="contact-content">
            <h2>¿Listo para tu próximo proyecto?</h2>
            <p>Contactame para hablar sobre tus necesidades audiovisuales.</p>
            <div className="contact-links">
              <a href="https://wa.me/34123456789" className="contact-link">WhatsApp</a>
              <a href="mailto:elivaclips@gmail.com" className="contact-link">Email</a>
            </div>
          </div>
        </section>
        <footer>
          <p>&copy; 2025 Iván Leguizamón.</p>
        </footer>
      </body>
    </html>
  )
}
