# GUÍA DE TRABAJO CON FOTOGRAFÍAS

## Flujo de trabajo

1. Las fotos originales van en `/assets/fotos-recibidas/` (sin editar, nunca borrar los originales)
2. Las fotos seleccionadas y editadas van en `/public/images/productos/`
3. Las fotos de ambiente (editadas con IA) van en `/public/images/ambientes/`

---

## Criterios de selección de fotos

### ✅ Seleccionar si:
- El producto se ve completo (escritorio + cama en la misma foto)
- Buena iluminación natural o artificial pareja
- Ángulo que muestra la profundidad del escritorio
- Fondo neutro (blanco, gris, pared lisa)
- Se ven bien las medidas proporcionales
- Foto nítida, sin movimiento

### ❌ Descartar si:
- Foto borrosa o movida
- Fondo desordenado que distrae
- El producto está en una posición que lo hace ver más pequeño
- Foto repetida (conservar solo la mejor de cada ángulo)
- Mala iluminación (muy oscuro, muy brillante, sombras duras)

---

## Ángulos a cubrir por producto (mínimo 4 fotos por modelo)

1. **Vista general frente** — producto completo de frente, se ve todo
2. **Vista del escritorio** — plano medio mostrando la superficie de trabajo
3. **Vista lateral** — se aprecia la profundidad y las medidas
4. **Vista de detalle** — escalera, barandas, soldaduras, terminaciones

---

## Ambientes a generar por modelo (con IA)

Para cada producto principal generar imágenes editadas o generadas en estos contextos:

### 1. Dormitorio juvenil moderno
- Pared clara, alfombra, plantas
- Ropa de cama azul o gris
- Escritorio organizado con laptop y cuadernos

### 2. Dormitorio universitario
- Ambiente más bare-bones, funcional
- Libros apilados, laptop
- Iluminación de escritorio

### 3. Pieza pequeña
- Mostrar el espacio libre alrededor del camarote
- Énfasis en que la pieza no se ve abarrotada
- Medidas reales del cuarto (ej: 3m x 3m)

### 4. Departamento moderno
- Estética más fría/minimalista
- Paredes blancas, piso madera clara
- Accesorio decorativo mínimo

### 5. Setup gamer
- Iluminación LED de ambiente (azul/morado)
- Monitor en el escritorio
- Silla gamer frente al escritorio
- Cables ordenados

### 6. Home office
- Escritorio organizado como oficina (notebook, mouse, taza de café)
- Iluminación natural de ventana lateral
- Estante con libros

### 7. Dormitorio infantil moderno
- Ropa de cama colorida pero limpia
- Algún peluche o elemento infantil sutil
- Colores claros

---

## Instrucciones para edición con IA (Midjourney / Adobe Firefly / DALL-E)

### Prompt base para generar ambientes:
```
[nombre del ambiente], modern [estilo], metallic bunk bed with integrated desk, 
realistic product photo, interior design, Chilean home, 
natural light, clean and organized, high quality photography, 
realistic proportions, --ar 4:3
```

### IMPORTANTE — regla crítica:
> **NUNCA alterar las medidas o proporciones reales del producto.**
> Si la cama tiene 90 cm de ancho, debe verse así en todas las fotos.
> Las fotos de ambiente son para mejorar el contexto, no para cambiar el producto.

### Proceso recomendado:
1. Usar foto real del producto como imagen base (img2img)
2. Cambiar solo el fondo y el ambiente
3. Mantener el producto exactamente igual
4. Revisar siempre que las proporciones sean correctas antes de publicar

---

## Nombrado de archivos

### Productos:
`[slug-producto]-[numero-vista].jpg`
Ejemplo: `metalico-estandar-01.jpg`, `metalico-estandar-frente.jpg`

### Ambientes:
`[slug-producto]-[ambiente].jpg`
Ejemplo: `metalico-dormitorio-juvenil.jpg`, `premium-gamer.jpg`

### Originales recibidos (no tocar):
`ORIGINAL-[fecha]-[descripcion].jpg`
Ejemplo: `ORIGINAL-2024-camarote-metalico-fotos-fabrica.jpg`

---

## Tamaños de imagen optimizados para web

| Uso | Tamaño | Formato |
|---|---|---|
| Foto principal de producto | 1200 × 900 px | WebP |
| Galería de producto | 800 × 600 px | WebP |
| Miniatura en listado | 400 × 300 px | WebP |
| Hero banner | 1920 × 1080 px | WebP |
| Open Graph (redes sociales) | 1200 × 630 px | JPG |

### Exportar siempre en WebP para web — reduce 30-50% el peso sin perder calidad.

---

## Checklist antes de publicar una foto

- [ ] Producto se ve completo y reconocible
- [ ] Proporciones correctas (no distorsionadas)
- [ ] Fondo limpio y no distrae
- [ ] Nombre de archivo correcto
- [ ] Exportado en WebP
- [ ] Alt text preparado con keyword (ej: "camarote con escritorio metálico blanco")
- [ ] Peso menor a 200 KB

---

## Alt text para SEO (ejemplos)

- `camarote con escritorio metálico blanco en dormitorio juvenil`
- `cama alta con escritorio integrado, vista frontal`
- `camarote con escritorio a medida en pieza pequeña de departamento`
- `cama loft con escritorio para estudiante universitario`
- `camarote gamer con escritorio y espacio para monitor`
