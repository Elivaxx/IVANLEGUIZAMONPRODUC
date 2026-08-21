# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos Comunes

```bash
# Desarrollo local
npm run dev          # Inicia servidor en http://localhost:3000 (con hot reload)

# Build y producción
npm run build        # Genera build optimizado para Vercel
npm start            # Sirve la versión producción localmente (post-build)

# Linting
npm run lint         # Ejecuta ESLint en el proyecto
```

## Arquitectura General

**Stack**: Next.js 16 (App Router) + React 19 + Tailwind CSS + Framer Motion + Supabase

### Estructura de Directorios

```
app/
  ├── page.js              # Página principal (monolítica, ~700 líneas)
  ├── layout.js            # Wrapper raíz con metadatos
  ├── globals.css          # Estilos globales (mínimos)
  └── components/          # Componentes reutilizables
      ├── Navbar.jsx       # Navegación
      ├── Hero.jsx         # Sección hero con Framer Motion
      ├── Projects.jsx     # Galería de proyectos
      ├── Services.jsx     # Servicios ofrecidos
      └── Contact.jsx      # Formulario con Supabase

public/                     # Assets estáticos
  ├── images/
  └── projects/            # Carpetas por proyecto (máx 6 imgs cada una)

tailwind.config.js          # Configuración con paleta custom
postcss.config.js           # Procesador CSS (requerido por Tailwind)
vercel.json                 # Configuración deployment Vercel
.env.local (git-ignored)    # Variables: NEXT_PUBLIC_SUPABASE_URL/ANON_KEY
```

### Patrón de la Página Principal (page.js)

La página principal es **monolítica y client-heavy**:

1. **CSS inline en `<style>` tags**: Contiene animaciones keyframe (@keyframes fadeInUp, float, etc) y estilos principales. Esto es deliberado para evitar complejidad de build con CSS modules.

2. **Carruseles vanilla JS**: Los carruseles de proyectos usan vanilla JavaScript (DOM manipulation), no librerías. Los handlers están en `window.carouselNext()` y `window.carouselPrev()`. El estado se almacena en `carouselState` objeto.

3. **Intersection Observer API**: Para animaciones scroll-reveal. Se inicializa en `useEffect` con clase `.scroll-reveal` en elementos.

4. **Estructura de datos**: El array `experiences` dentro del componente define los 9 proyectos. Agregar un proyecto requiere:
   - Crear carpeta en `public/projects/proyecto-nombre/` con imágenes optimizadas
   - Agregar entrada en array `experiences` con id, title, description, tag, folderName, imageCount
   - Las imágenes deben seguir patrón: `img-1-opt.jpg`, `img-2-opt.jpg`, etc.

### Paleta de Colores (Tailwind + CSS Variables)

Definida en dos lugares (mantener sincronizados):
- **Tailwind**: `tailwind.config.js` (colores custom)
- **CSS Variables**: `page.js` (--cream, --petrol, --charcoal, --gray, --light-gray)

Paleta:
- Cream: #F5F1E8 (fondo)
- Petrol: #1a4d5c (acentos/botones)
- Charcoal: #1a1a1a (texto principal)
- Forest: #1b3a2e (acentos secundarios)
- Burgundy: #6b2c3c (énfasis)

### Dependencias Clave

| Librería | Rol |
|----------|-----|
| `framer-motion` | Animaciones en componentes (Hero, Services, Contact) |
| `tailwindcss` | Utility-first CSS (layout, responsive) |
| `@supabase/supabase-js` | Backend para formulario de contacto |
| `next-themes` | Dark mode (instalada pero no activada actualmente) |
| `clsx` | Utilidad para classNames condicionales |
| `postcss` | Procesador CSS (dependencia de Tailwind) |

### Integración Supabase

Usado en `Contact.jsx` para capturar mensajes. Requiere:
- `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` en `.env.local`
- Tabla `contacts` en Supabase con RLS habilitado
- Edge function para enviar emails (opcional, configurar manualmente)

**Nota**: El formulario es público (no requiere autenticación) pero inserta en tabla con POLICY INSERT abierta.

## Decisiones Técnicas

### Por qué CSS inline en page.js (no CSS Modules)
- Animaciones complejas requieren muchas keyframes que cambian raramente
- Evita fragmentación de archivos para una página monolítica
- Post-próximamente: migrar a componentes separados si crecen secciones

### Por qué carruseles vanilla JS (no librería)
- Reducir bundle size
- Lógica simple: ciclar array de imágenes
- Si crecen en complejidad (gestos, autoplay), migrar a library (Swiper, etc)

### Por qué Framer Motion en componentes pero vanilla en page.js
- Framer Motion overkill para carruseles simples
- La home (`page.js`) es la página de mayor peso; optimizar ahí da más retorno

### Por qué Tailwind pero también CSS personalizado
- Tailwind útil para layout y responsive rápido
- Animaciones custom (parallax, gradientes) requieren CSS puro
- Coexistencia es normal en proyectos Next.js maduros

## Flujos de Trabajo Comunes

### Agregar un nuevo proyecto a la galería
1. Crear carpeta en `public/projects/proyecto-slug/`
2. Optimizar imágenes (JPEG, ~150-300KB cada una)
3. Renombrar a patrón: `img-1-opt.jpg`, `img-2-opt.jpg`, ...
4. Abrir `app/page.js`, ubicar array `experiences`
5. Agregar objeto: `{ id: X, title: '...', description: '...', tag: '...', folderName: 'proyecto-slug', imageCount: N }`
6. Verificar en `http://localhost:3000` (dev server)
7. Deploy: `git push` → Vercel auto-deploya

### Cambiar texto/colores
- Textos: En componentes JSX (búsqueda y reemplazo)
- Colores: Actualizar simultaneamente:
  - `tailwind.config.js` (seción `colors`)
  - `page.js` CSS variables (`:root { --cream: ... }`)

### Editar formulario de contacto
- Archivo: `app/components/Contact.jsx`
- Campos: Modificar lógica en `handleSubmit()`
- Validación: Agregar checks antes de `supabase.from('contacts').insert()`
- Email: Configurar edge function en dashboard Supabase (fuera del repo)

## Performance

- **Imágenes**: Usar `next/image` en componentes (no en `page.js` por ahora, cambio futuro)
- **Scroll animations**: Intersection Observer es performant (no usa scroll listeners)
- **Bundle**: Verificar con `npm run build` → revisar `.next/static` en consola

## Deployment

Automático en Vercel cuando haces push a `main`:
1. Vercel detecta cambios
2. Ejecuta `npm run build`
3. Sirve desde edge network en ~30-60s
4. URL: https://ivanleguizamonproduc.vercel.app

**Variables de entorno en Vercel** (Settings > Environment Variables):
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Próximas Optimizaciones (Sin Hacer Aún)

- Migrar imágenes a `next/image` para lazy loading automático
- Separar `page.js` en componentes (Hero, Projects, Reel, Contact) para modularidad
- Activar dark mode con `next-themes`
- Agregar `@vercel/analytics` para tracking
- Implementar blog o case studies (CMS integrado)

## Debugging Tips

- **Carrusel no responde**: Verificar IDs en HTML (`carousel-img-{id}`, `counter-{id}`) y estado en `carouselState`
- **Estilos no aplican**: Verificar Tailwind cache → ejecutar `rm -rf .next && npm run build`
- **Supabase error**: Verificar `.env.local` y permisos RLS en tabla `contacts`
- **Build falla**: Verificar que no haya imports de TypeScript de tipos (proyecto es pure JS)

---

**Stack**: Next.js 16 | React 19 | Framer Motion | Tailwind CSS | Supabase  
**Maintainer**: Ivan Leguizamón (elivaclips@gmail.com)
