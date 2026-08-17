# Producción Audiovisual - Sitio Web

Web profesional con animaciones full movie trailer elegante, desarrollada con Next.js, Framer Motion y Supabase.

## 🚀 Características

✅ **Animaciones Movie Trailer**: Parallax, scroll animations, transiciones suaves, morphing, gradientes animados
✅ **Paleta de Colores Premium**: Blanco cremita, azul petróleo, negro, acentos granate/verde bosque
✅ **Formulario de Contacto**: Integrado con Supabase para capturar leads
✅ **Email Automático**: Notificaciones a elivaclips@gmail.com
✅ **Responsive**: Funciona en móvil, tablet y desktop
✅ **SEO Ready**: Meta tags optimizados

## 📦 Tech Stack

- **Next.js 16**: React framework moderno
- **Framer Motion**: Animaciones profesionales
- **Tailwind CSS**: Estilos rápidos y responsivos
- **Supabase**: Backend y base de datos
- **Vercel**: Hosting y deployment

## 🛠️ Instalación Local

```bash
# Clonar o descargar el proyecto
cd production-web

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

## ⚙️ Configuración

### 1. Variables de Entorno (.env.local)

Crea un archivo `.env.local` en la raíz del proyecto:

```
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

### 2. Supabase Setup

1. Ve a [supabase.com](https://supabase.com)
2. Crea un proyecto nuevo
3. En SQL Editor, ejecuta:

```sql
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Configurar políticas de acceso
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow inserts" ON contacts
  FOR INSERT WITH CHECK (true);
```

4. Copia tu `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Configurar Emails

Para recibir notificaciones automáticas en elivaclips@gmail.com:

**Opción A: Usar Resend (Recomendado)**
1. Ve a [resend.com](https://resend.com)
2. Crea cuenta y obtén API key
3. En Supabase, crea una función edge que envíe emails

**Opción B: Gmail + SMTP**
1. Habilita "Aplicaciones menos seguras" en tu cuenta Gmail
2. Configura en Supabase el servicio de email

## 📤 Publicar en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Seguir las instrucciones (conectar repositorio, etc)
```

O directamente en [vercel.com](https://vercel.com):
1. Conecta tu repo de GitHub
2. Agrega variables de entorno
3. Deploy automático

## 📝 Personalización

### Cambiar datos de contacto
Edita `app/components/Contact.jsx` línea ~160 para agregar números de WhatsApp, teléfono, etc.

### Agregar tus imágenes
- Crea carpeta `public/images/`
- Agrega tus fotos
- Importa en componentes

### Modificar textos
Todos los textos están en los componentes JSX. Busca y reemplaza fácilmente.

### Cambiar colores
Los colores están en `tailwind.config.js`. Actualiza los valores HEX en la sección `colors`.

## 🎨 Paleta de Colores

- **Cream**: #F5F1E8 (blanco cremita)
- **Petrol**: #1a4d5c (azul petróleo)
- **Charcoal**: #1a1a1a (negro)
- **Burgundy**: #6b2c3c (granate)
- **Forest**: #1b3a2e (verde bosque)

## 📱 Responsividad

La web está completamente optimizada para:
- Móvil (320px+)
- Tablet (768px+)
- Desktop (1200px+)

## 🔒 Seguridad

- Variables de entorno protegidas
- Row Level Security en Supabase
- No se exponen datos sensibles

## 📞 Soporte

Para soporte sobre Vercel, Supabase o Next.js:
- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

---

**Hecha con ❤️ para producción audiovisual profesional**
