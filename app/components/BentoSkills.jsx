'use client'

const categories = [
  { title: 'Producción', big: true, items: ['Bloqueo de localizaciones', 'Control de accesos en rodaje', 'Carga y descarga de equipo', 'Apoyo en oficina de producción', 'Gestión de permisos', 'Coordinación de equipos'] },
  { title: 'Disponibilidad', big: false, items: ['Carnet B en vigor (manual y automático)', 'Tardes, fines de semana y por proyectos', 'Jornadas largas e irregulares'] },
  { title: 'Idiomas y herramientas', big: false, items: ['Español (nativo)', 'Guaraní (nativo)', 'Inglés (B1)', 'Microsoft Office (básico)'] },
  { title: 'Cualidades', big: true, items: ['Puntualidad', 'Trabajo en equipo', 'Calma bajo presión', 'Compromiso con el resultado'] },
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
