// ─────────────────────────────────────────────────────────────────────────────
// ACTUALIZAR PRECIOS Y MEDIDAS CON DATOS REALES DEL FABRICANTE
// ─────────────────────────────────────────────────────────────────────────────

export type ProductId =
  | "titanic"
  | "1-5-plazas"
  | "cama-alta"
  | "doble"
  | "nido"
  | "triple"
  | "escritorio";

export interface AddOn {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number | null; // null = a consultar
  maxCantidad: number;
}

export interface Product {
  id: ProductId;
  slug: string;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  caracteristicas: string[];
  plazasArriba: string;   // "1 plaza" | "1.5 plazas" | "2 plazas" | "—"
  plazasAbajo: string;    // "1 plaza" | "1.5 plazas" | "2 plazas" | "cama nido"
  medidas: string;        // texto libre hasta tener medidas reales
  addOns: AddOn[];
  emoji: string;
  badge?: string;
  popular?: boolean;
  seoKeywords: string[];
}

// ─── Add-ons reutilizables ────────────────────────────────────────────────────

const parrillaEstandar: AddOn = {
  id: "parrilla",
  nombre: "Parrilla metálica adicional",
  descripcion: "Parrilla de apoyo para el colchón. Refuerza la base y mejora la ventilación.",
  precio: null, // ← ACTUALIZAR con precio real
  maxCantidad: 2,
};

const parrillaNido: AddOn = {
  id: "parrilla",
  nombre: "Parrilla metálica adicional",
  descripcion: "Parrilla de apoyo para el colchón. El camarote nido acepta hasta 3 parrillas extra.",
  precio: null,
  maxCantidad: 3,
};

const baranda: AddOn = {
  id: "baranda",
  nombre: "Baranda de seguridad adicional",
  descripcion: "Baranda lateral extra para mayor seguridad en la cama superior.",
  precio: null, // ← ACTUALIZAR con precio real
  maxCantidad: 2,
};

const cambioMedida: AddOn = {
  id: "medida",
  nombre: "Cambio de medida",
  descripcion: "Ajustamos las medidas del camarote a tu espacio. Hasta 3 cambios por pedido.",
  precio: 20000,
  maxCantidad: 3,
};

// ─── Catálogo de productos ────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "titanic",
    slug: "camarote-titanic",
    nombre: "Camarote Titanic",
    subtitulo: "El más robusto — estructura reforzada",
    descripcion:
      "Nuestro camarote más resistente. Estructura de acero de mayor calibre, ideal para uso intensivo o cuando se necesita la máxima durabilidad.",
    caracteristicas: [
      "Estructura de acero de alto calibre",
      "Diseño robusto y estable",
      "Ideal para peso mayor al estándar",
      "Barandas de seguridad incluidas",
      "Escalera lateral con peldaños antideslizantes",
      "Sin necesidad de sommier adicional",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "1 plaza",
    medidas: "A confirmar con fabricante", // ← ACTUALIZAR
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "🔩",
    badge: "Más robusto",
    popular: true,
    seoKeywords: ["camarote titanic", "camarote titanic chile", "camarote robusto", "camarote metálico reforzado"],
  },

  {
    id: "1-5-plazas",
    slug: "camarote-1-5-plazas",
    nombre: "Camarote 1½ + 1 Plaza",
    subtitulo: "Más espacio arriba para mayor comodidad",
    descripcion:
      "Cama inferior de 1½ plazas (90 cm aprox.) y cama superior de 1 plaza. Más cómodo que el camarote estándar sin ocupar mucho más espacio.",
    caracteristicas: [
      "Cama inferior de 1½ plazas",
      "Cama superior de 1 plaza",
      "Mayor comodidad en la cama de abajo",
      "Ideal para adolescentes o adultos",
      "Barandas de seguridad incluidas",
      "Parrillas de madera incluidas",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "1½ plazas",
    medidas: "A confirmar con fabricante", // ← ACTUALIZAR
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "🛏️",
    seoKeywords: ["camarote 1.5 plazas", "camarote plaza y media", "camarote 1.5 con 1 plaza"],
  },

  {
    id: "cama-alta",
    slug: "cama-alta",
    nombre: "Cama Alta",
    subtitulo: "Una sola cama elevada — espacio libre abajo",
    descripcion:
      "Cama individual elevada que libera el espacio del piso para lo que necesites: escritorio, muebles, juguetes o simplemente más espacio.",
    caracteristicas: [
      "Una sola cama en la parte superior",
      "Espacio libre completo debajo",
      "Escalera lateral incluida",
      "Ideal para piezas pequeñas",
      "Perfecto para estudiantes",
      "Puedes agregar escritorio o muebles debajo",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "—",
    medidas: "A confirmar con fabricante", // ← ACTUALIZAR
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "🪜",
    badge: "Ahorra espacio",
    seoKeywords: ["cama alta", "cama alta chile", "cama alta 1 plaza", "cama alta metalica"],
  },

  {
    id: "doble",
    slug: "camarote-doble",
    nombre: "Camarote Doble",
    subtitulo: "2 plazas abajo — 1 plaza o 1½ arriba",
    descripcion:
      "Cama inferior de 2 plazas y cama superior de 1 plaza o 1½ plazas. El más cómodo para adultos que comparten pieza o para quien quiere una cama doble abajo.",
    caracteristicas: [
      "Cama inferior de 2 plazas",
      "Cama superior de 1 plaza o 1½ plazas (a elegir)",
      "Mayor confort en la cama de abajo",
      "Ideal para parejas con hijo o para adultos",
      "Estructura robusta de acero",
      "Barandas incluidas",
    ],
    plazasArriba: "1 plaza o 1½ plazas",
    plazasAbajo: "2 plazas",
    medidas: "A confirmar con fabricante", // ← ACTUALIZAR
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "👫",
    badge: "Más cómodo",
    seoKeywords: ["camarote doble", "camarote 2 plazas", "camarote cama doble abajo", "camarote matrimonial"],
  },

  {
    id: "nido",
    slug: "camarote-nido",
    nombre: "Camarote con Cama Nido",
    subtitulo: "3 camas en 1 — ideal para espacios reducidos",
    descripcion:
      "Camarote con cama nido deslizante en la base. Durante el día se guarda debajo; en la noche se saca y tienes 3 camas en el mismo espacio que ocuparía una sola.",
    caracteristicas: [
      "Cama nido deslizante en la parte baja",
      "3 camas en el espacio de 1",
      "Nido se guarda durante el día",
      "Ideal para niños o espacios pequeños",
      "Solución perfecta para visitas frecuentes",
      "Hasta 3 parrillas adicionales disponibles",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "1 plaza + nido deslizante",
    medidas: "A confirmar con fabricante", // ← ACTUALIZAR
    addOns: [parrillaNido, baranda, cambioMedida],
    emoji: "🪺",
    badge: "3 en 1",
    seoKeywords: ["camarote nido", "cama nido", "camarote con nido", "camarote 3 camas", "cama nido chile"],
  },

  {
    id: "triple",
    slug: "camarote-triple",
    nombre: "Camarote Triple",
    subtitulo: "3 niveles — para casas con varios hijos",
    descripcion:
      "Camarote de 3 niveles para cuando el espacio es mínimo pero las camas necesarias son máximas. Ideal para familias con 3 hijos o residencias.",
    caracteristicas: [
      "3 camas en 3 niveles",
      "Escalera lateral incluida",
      "Barandas en camas superiores",
      "Estructura reforzada para mayor peso",
      "Ideal para familias numerosas",
      "Diseño compacto vertical",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "1 plaza + 1 plaza (nivel medio)",
    medidas: "A confirmar con fabricante", // ← ACTUALIZAR
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "🏗️",
    badge: "3 niveles",
    seoKeywords: ["camarote triple", "camarote 3 pisos", "camarote tres camas", "litera triple chile"],
  },

  {
    id: "escritorio",
    slug: "camarote-con-escritorio",
    nombre: "Camarote con Escritorio",
    subtitulo: "Duerme arriba, estudia o trabaja abajo",
    descripcion:
      "Cama elevada con escritorio integrado debajo. El preferido de estudiantes, gamers y quienes trabajan desde casa en piezas pequeñas.",
    caracteristicas: [
      "Escritorio integrado bajo la cama",
      "Espacio para laptop, monitor y libros",
      "Escalera lateral incluida",
      "Ideal para estudiantes universitarios",
      "Perfecto para setup gamer o home office",
      "Maximiza el 100% del espacio vertical",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "Escritorio integrado",
    medidas: "A confirmar con fabricante", // ← ACTUALIZAR
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "📚",
    badge: "Estudiante / Gamer",
    popular: true,
    seoKeywords: [
      "camarote con escritorio",
      "cama alta con escritorio",
      "cama loft con escritorio",
      "camarote estudiante",
      "camarote gamer",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getPopularProducts(): Product[] {
  return products.filter((p) => p.popular);
}
