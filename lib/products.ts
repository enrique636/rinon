// ─────────────────────────────────────────────────────────────────────────────
// ACTUALIZAR PRECIOS Y MEDIDAS CON DATOS REALES DEL FABRICANTE
// ─────────────────────────────────────────────────────────────────────────────

export type ProductId =
  | "titanic"
  | "1-5-plazas"
  | "cama-alta"
  | "doble"
  | "doble-abajo-simple-arriba"
  | "nido"
  | "triple"
  | "escritorio"
  | "escritorio-economico"
  | "escritorio-full"
  | "desmontable"
  | "cama-dos-plazas-cajon";

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
  imgSrc?: string;
  imgAlt?: string;
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
    imgSrc: "/images/camarotes/camarote-metalico-negro-fondo-blanco.jpg",
    imgAlt: "Camarote Titanic metálico reforzado negro",
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
    imgSrc: "/images/camarotes/camarote-petalo-dormitorio-moderno.jpg",
    imgAlt: "Camarote plaza y media en dormitorio moderno",
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
    imgSrc: "/images/camarotes/camarote-escritorio-full-nordico.jpg",
    imgAlt: "Cama alta metálica con espacio libre abajo",
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
    imgSrc: "/images/camarotes/camarote-metalico-hogar-moderno.jpg",
    imgAlt: "Camarote doble 2 plazas abajo en hogar moderno",
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
    imgSrc: "/images/camarotes/camarote-petalo-nido-estructura-completa.jpg",
    imgAlt: "Camarote nido metálico con cama deslizante — 3 camas",
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
    imgSrc: "/images/camarotes/camarote-triple-litera-negro.jpg",
    imgAlt: "Camarote triple metálico negro 3 pisos",
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
    medidas: "A confirmar con fabricante",
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "📚",
    imgSrc: "/images/camarotes/camarote-escritorio-full-negro.jpg",
    imgAlt: "Camarote con escritorio negro — cama arriba escritorio abajo",
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

  {
    id: "escritorio-economico",
    slug: "camarote-con-escritorio-economico",
    nombre: "Camarote con Escritorio Económico",
    subtitulo: "La opción más accesible — cama arriba, escritorio abajo",
    descripcion:
      "Camarote con escritorio en su versión más económica. Misma estructura de acero fabricada en nuestro taller, diseño simplificado sin accesorios adicionales. Ideal para quienes necesitan la funcionalidad sin el precio del modelo premium.",
    caracteristicas: [
      "Estructura de acero fabricada en Chile",
      "Escritorio funcional integrado bajo la cama",
      "Diseño limpio y sin accesorios innecesarios",
      "Escalera lateral incluida",
      "Sin estantes adicionales — solo lo esencial",
      "Personalizable con accesorios opcionales",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "Escritorio integrado",
    medidas: "A confirmar con fabricante",
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "💰",
    imgSrc: "/images/camarotes/camarote-escritorio-economico-negro.jpg",
    imgAlt: "Camarote con escritorio económico negro",
    badge: "Más económico",
    seoKeywords: [
      "camarote con escritorio economico",
      "cama alta con escritorio barato",
      "camarote escritorio precio",
      "camarote con escritorio chile economico",
      "cama loft economica chile",
    ],
  },

  {
    id: "escritorio-full",
    slug: "camarote-con-escritorio-full",
    nombre: "Camarote con Escritorio Full",
    subtitulo: "Escritorio amplio, estantes integrados y máximo espacio de trabajo",
    descripcion:
      "La versión completa del camarote con escritorio. Escritorio de mayor profundidad, estantes integrados para libros y monitor, baranda reforzada y acabados premium. Para quienes el espacio de trabajo bajo la cama es tan importante como la cama misma.",
    caracteristicas: [
      "Escritorio de mayor profundidad que el modelo estándar",
      "Estantes integrados para libros, monitor y accesorios",
      "Baranda de seguridad reforzada",
      "Escalera con peldaños más anchos",
      "Espacio optimizado para home office o setup gamer",
      "Acabado con pintura electrostática premium",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "Escritorio full + estantes",
    medidas: "A confirmar con fabricante",
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "⭐",
    imgSrc: "/images/camarotes/camarote-escritorio-full-home-office.jpg",
    imgAlt: "Camarote con escritorio full premium con estantes",
    badge: "Premium",
    popular: true,
    seoKeywords: [
      "camarote con escritorio full",
      "camarote con escritorio premium",
      "cama alta con escritorio grande",
      "camarote escritorio con estantes",
      "cama loft escritorio completo",
    ],
  },

  {
    id: "doble-abajo-simple-arriba",
    slug: "camarote-dos-plazas-abajo",
    nombre: "Camarote 2 Plazas Abajo + 1 Arriba",
    subtitulo: "Cama doble abajo, cama individual arriba",
    descripcion:
      "Camarote con cama de 2 plazas en el nivel inferior y cama de 1 plaza en el superior. Ideal para familias donde uno de los hijos necesita más espacio, o para parejas que comparten pieza con un hijo.",
    caracteristicas: [
      "Cama de 2 plazas en el nivel inferior",
      "Cama de 1 plaza en el nivel superior",
      "Estructura de acero reforzada para mayor carga",
      "Escalera lateral con peldaños seguros",
      "Barandas de seguridad en cama superior",
      "Solución completa para 3 personas en poco espacio",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "2 plazas",
    medidas: "A confirmar con fabricante",
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "🛏️",
    imgSrc: "/images/camarotes/camarote-escritorio-2-plazas-estructura.jpg",
    imgAlt: "Camarote 2 plazas abajo 1 plaza arriba estructura",
    badge: "3 personas",
    seoKeywords: [
      "camarote dos plazas abajo",
      "camarote cama doble abajo individual arriba",
      "camarote 2 plazas y 1 plaza",
      "camarote matrimonial arriba",
      "litera doble simple",
    ],
  },

  {
    id: "desmontable",
    slug: "camarote-desmontable",
    nombre: "Camarote Desmontable",
    subtitulo: "Se arma y desarma sin herramienta — ideal para mudanzas o espacios temporales",
    descripcion:
      "Camarote metálico diseñado para armarse y desarmarse fácilmente. Sin soldar, sin herramienta especializada. Perfecto para arrendatarios, residencias universitarias o cualquier situación donde el camarote se mueve.",
    caracteristicas: [
      "Se arma y desarma sin herramienta especial",
      "Piezas identificadas para montaje intuitivo",
      "Ideal para mudanzas y cambios frecuentes",
      "Estructura de acero — no pierde rigidez al desarmarse",
      "Barandas de seguridad incluidas",
      "Escalera lateral desmontable incluida",
    ],
    plazasArriba: "1 plaza",
    plazasAbajo: "1 plaza",
    medidas: "A confirmar con fabricante",
    addOns: [parrillaEstandar, baranda, cambioMedida],
    emoji: "🔧",
    imgSrc: "/images/camarotes/camarote-desmontable-negro-fondo-blanco.jpg",
    imgAlt: "Camarote desmontable metálico negro — se arma y desarma",
    badge: "Fácil montaje",
    seoKeywords: [
      "camarote desmontable",
      "camarote metalico desmontable",
      "camarote que se arma y desarma",
      "litera desmontable chile",
      "camarote para arrendar desmontable",
    ],
  },

  {
    id: "cama-dos-plazas-cajon",
    slug: "cama-dos-plazas-con-cajon",
    nombre: "Cama de 2 Plazas con Cajón",
    subtitulo: "Cama doble con cajón de almacenamiento integrado bajo el colchón",
    descripcion:
      "Cama de 2 plazas con cajón deslizante incorporado en la base. Aprovecha el espacio muerto bajo la cama para guardar ropa de cama, frazadas, maletas o lo que necesites. Fabricada en acero en nuestro taller.",
    caracteristicas: [
      "Cama de 2 plazas con base elevada",
      "Cajón deslizante de gran capacidad",
      "Ideal para guardar ropa de cama, frazadas y maletas",
      "Estructura de acero fabricada en Chile",
      "Pintura electrostática incluida",
      "Sin sommier adicional necesario",
    ],
    plazasArriba: "—",
    plazasAbajo: "2 plazas",
    medidas: "A confirmar con fabricante",
    addOns: [parrillaEstandar, cambioMedida],
    emoji: "📦",
    imgSrc: "/images/camarotes/camarote-metalico-dormitorio-compartido.jpg",
    imgAlt: "Cama de 2 plazas con cajón de almacenamiento metálica",
    badge: "Con almacenamiento",
    seoKeywords: [
      "cama dos plazas con cajon",
      "cama doble con cajon",
      "cama 2 plazas con almacenamiento",
      "cama con cajon metalica chile",
      "cama con cajones bajo colchon",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getPopularProducts(): Product[] {
  return products.filter((p) => p.popular);
}
