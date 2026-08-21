'use client'

const categories = [
  { title: 'Bajo Presión', big: true, items: ['Búsqueda ágil de soluciones', 'Toma de decisiones rápida', 'Calma y compostura', 'Cautela y prevención'] },
  { title: 'Software Producción', big: false, items: ['Premiere Pro (Avanzado)', 'After Effects (Avanzado)', 'DaVinci Resolve (Intermedio)'] },
  { title: 'Profesionales', big: false, items: ['Puntualidad extrema', 'Disponibilidad flexible', 'Actitud colaborativa', 'Compromiso con calidad'] },
  { title: 'Producción & IA', big: true, items: ['Gestión preproducción', 'Coordinación en rodaje', 'Generación de video con IA', 'Restauración & mejora'] },
]

export default function BentoSkills() {
  return (
    <div className="bento-grid">
      {categories.map((cat) => (
        <div key={cat.title} className={`bento-cell${cat.big ? ' bento-cell-wide' : ''}`}>
          <h3>{cat.title}</h3>
          <ul>
            {cat.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}
