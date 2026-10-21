import { Fraunces, Space_Mono } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono', display: 'swap' })

const siteUrl = 'https://ivanleguizamonproduc.vercel.app'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Iván Leguizamón · Auxiliar de producción y eventos — Madrid',
  description: 'Técnico Superior en Producción Audiovisual y Espectáculos en Madrid. Experiencia en bloqueo de localizaciones, rodaje de ficción y producción de eventos deportivos. Carnet B.',
  keywords: ['auxiliar de producción', 'runner', 'producción audiovisual', 'blocker rodaje', 'producción de eventos', 'Madrid'],
  authors: [{ name: 'Iván Elías Leguizamón Romero' }],
  openGraph: {
    title: 'Iván Leguizamón · Auxiliar de producción y eventos',
    description: 'Bloqueo de localizaciones, rodaje de ficción y producción de eventos deportivos en Madrid.',
    url: siteUrl,
    siteName: 'Iván Leguizamón — Portfolio',
    locale: 'es_ES',
    type: 'profile',
    images: [{ url: '/profile-photo.jpg', width: 800, height: 800, alt: 'Iván Leguizamón' }],
  },
  twitter: {
    card: 'summary',
    title: 'Iván Leguizamón · Auxiliar de producción y eventos',
    description: 'Bloqueo de localizaciones, rodaje de ficción y producción de eventos deportivos en Madrid.',
    images: ['/profile-photo.jpg'],
  },
  robots: { index: true, follow: true },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Iván Elías Leguizamón Romero',
  jobTitle: 'Auxiliar de producción audiovisual y eventos',
  url: siteUrl,
  image: `${siteUrl}/profile-photo.jpg`,
  email: 'mailto:elivaclips@gmail.com',
  address: { '@type': 'PostalAddress', addressLocality: 'Madrid', addressCountry: 'ES' },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Planeta FP' },
    { '@type': 'EducationalOrganization', name: 'IPAC — Instituto de Comunicación, Arte y Ciencias' },
  ],
  knowsAbout: ['Producción audiovisual', 'Bloqueo de localizaciones', 'Producción de eventos', 'Rodaje de ficción'],
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
      <body className={`${fraunces.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
