import './globals.css'

export const metadata = {
  title: 'Iván Leguizamón - Producción Audiovisual',
  description: 'Dirección de producción, edición y gestión de contenido audiovisual profesional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
