import './globals.css'

const siteUrl = 'https://ivanleguizamonproduc.vercel.app'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Iván Leguizamón · Técnico en Producción Audiovisual — Madrid',
  description: 'Técnico en Producción Audiovisual y Espectáculos en Madrid. Experiencia en rodajes de ficción, bloqueo de localizaciones y producción de contenido para TV, marca y eventos.',
  keywords: ['producción audiovisual', 'técnico de producción', 'blocker rodaje', 'Madrid', 'Premiere Pro', 'After Effects'],
  authors: [{ name: 'Iván Elías Leguizamón Romero' }],
  openGraph: {
    title: 'Iván Leguizamón · Técnico en Producción Audiovisual',
    description: 'Experiencia real en rodajes de ficción, bloqueo de localizaciones y producción de contenido audiovisual en Madrid.',
    url: siteUrl,
    siteName: 'Iván Leguizamón — Portfolio',
    locale: 'es_ES',
    type: 'profile',
    images: [{ url: '/profile-photo.jpg', width: 800, height: 800, alt: 'Iván Leguizamón' }],
  },
  twitter: {
    card: 'summary',
    title: 'Iván Leguizamón · Técnico en Producción Audiovisual',
    description: 'Experiencia real en rodajes de ficción, bloqueo de localizaciones y producción de contenido audiovisual en Madrid.',
    images: ['/profile-photo.jpg'],
  },
  robots: { index: true, follow: true },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Iván Elías Leguizamón Romero',
  jobTitle: 'Técnico en Producción Audiovisual y Espectáculos',
  url: siteUrl,
  image: `${siteUrl}/profile-photo.jpg`,
  email: 'mailto:elivaclips@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Planeta FP' },
    { '@type': 'EducationalOrganization', name: 'IPAC — Instituto de Comunicación, Arte y Ciencias' },
  ],
  knowsAbout: ['Producción Audiovisual', 'Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
