@AGENTS.md

# INSTRUCCIONES MAESTRAS — Camarotes con Escritorio Chile

## Proyecto
Sitio web especializado en camarotes con escritorio y camas altas con escritorio para el mercado chileno.

## Objetivo único
Posicionarse #1 en Google Chile para "camarote con escritorio" y generar consultas por WhatsApp.

## Stack
- Next.js App Router + TypeScript strict
- Tailwind CSS
- Sin backend por ahora — datos en `/lib/products.ts`

## Principios de diseño
- Simple, rápido, visual — mobile-first
- WhatsApp es el CTA principal — SIEMPRE visible
- Sin contenido corporativo, sin precios (el cliente pide cotización)
- Cada página = una intención de búsqueda específica

## Estructura
- `app/` — páginas (App Router)
- `components/layout/` — Header, Footer, WhatsApp flotante
- `components/sections/` — Hero, ProductGrid, Features, FAQ
- `components/ui/` — botones, cards, badges
- `lib/config.ts` — WhatsApp, teléfono, nombre empresa
- `lib/products.ts` — datos de productos con medidas reales
- `lib/seo.ts` — metadata SEO por página
- `public/images/productos/` — fotos del producto
- `public/images/ambientes/` — fotos de ambientes
- `assets/fotos-recibidas/` — fotos originales sin editar (del Drive)
- `_planning/` — documentos de planificación (NO se publican)

## URLs del sitio
- `/` — Home
- `/camarotes-con-escritorio/` — Categoría principal
- `/camarote-con-escritorio-metalico/` — Metálico estándar
- `/cama-alta-con-escritorio/` — Cama alta
- `/cama-alta-2-plazas-con-escritorio/` — 2 plazas
- `/camarote-con-escritorio-a-medida/` — A medida
- `/camarote-con-escritorio-premium/` — Premium
- `/blog/` — Blog SEO
- `/cotizar/` — Cotización
- `/contacto/` — Contacto

## Lo que Claude NUNCA debe hacer
- Crear diseños corporativos fríos
- Agregar formularios con más de 4 campos
- Poner precios (el cliente pide cotización siempre)
- Alterar medidas reales de los productos
- Crear páginas lentas con animaciones pesadas
- Inventar medidas — solo usar las de `/lib/products.ts`
