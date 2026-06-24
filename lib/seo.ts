import type { Metadata } from "next";
import { SITE_CONFIG } from "./config";

interface SeoPageData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export function buildMetadata(page: SeoPageData): Metadata {
  const url = page.canonical
    ? `${SITE_CONFIG.seo.baseUrl}${page.canonical}`
    : SITE_CONFIG.seo.baseUrl;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_CONFIG.nombre,
      locale: "es_CL",
      type: "website",
      images: page.ogImage ? [{ url: page.ogImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// ─── Metadata por página ───────────────────────────────────────────────────

export const seoPages = {
  home: buildMetadata({
    title: "Camarotes con Escritorio Chile | Metálicos, Premium y A Medida",
    description: "Camarotes con escritorio fabricados en Chile. Modelos metálicos, premium y a medida. Entrega en Santiago y regiones. Consulta gratis por WhatsApp ✓",
    keywords: [
      "camarote con escritorio",
      "camarotes con escritorio Chile",
      "cama alta con escritorio",
      "cama loft con escritorio",
      "camarote metálico con escritorio",
      "camarote con escritorio Santiago",
      "cama con escritorio abajo",
      "camarote estudiante",
      "camarote juvenil escritorio",
    ],
    canonical: "/",
  }),

  categoriaGeneral: buildMetadata({
    title: "Camarotes con Escritorio | Todos los Modelos | Precios y Cotización",
    description: "Todos nuestros modelos de camarotes con escritorio: metálicos estándar, premium y a medida. Solicita cotización gratis por WhatsApp.",
    keywords: [
      "camarotes con escritorio",
      "modelos camarotes escritorio",
      "camarote con escritorio precio",
      "camarote con escritorio cotización",
    ],
    canonical: "/camarotes-con-escritorio",
  }),

  metalico: buildMetadata({
    title: "Camarote con Escritorio Metálico | Resistente y Económico",
    description: "Camarote metálico con escritorio integrado. Fabricación chilena, estructura de acero resistente. Ideal para estudiantes y dormitorios juveniles. Consulta por WhatsApp.",
    keywords: [
      "camarote con escritorio metálico",
      "camarote metálico con escritorio",
      "camarote metálico estudiante",
      "camarote acero con escritorio",
      "camarote metálico juvenil",
    ],
    canonical: "/camarote-con-escritorio-metalico",
  }),

  camaAlta: buildMetadata({
    title: "Cama Alta con Escritorio | Cama Loft con Escritorio Abajo Chile",
    description: "Cama alta con escritorio integrado debajo. También llamada cama loft o cama elevada. Maximiza el espacio de tu pieza. Entrega en Santiago.",
    keywords: [
      "cama alta con escritorio",
      "cama loft con escritorio",
      "cama elevada con escritorio",
      "cama con escritorio abajo",
      "cama loft Chile",
      "cama alta universitaria",
    ],
    canonical: "/cama-alta-con-escritorio",
  }),

  camaAlta2Plazas: buildMetadata({
    title: "Cama Alta 2 Plazas con Escritorio | Cama Doble Elevada Chile",
    description: "Cama alta de 2 plazas con escritorio integrado. Mayor confort con cama matrimonial elevada y espacio de trabajo completo debajo.",
    keywords: [
      "cama alta 2 plazas con escritorio",
      "cama loft 2 plazas",
      "cama doble elevada con escritorio",
      "cama alta matrimonial escritorio",
    ],
    canonical: "/cama-alta-2-plazas-con-escritorio",
  }),

  aMedida: buildMetadata({
    title: "Camarote con Escritorio a Medida | Diseño Personalizado Santiago",
    description: "Fabricamos tu camarote con escritorio a las medidas exactas de tu espacio. Ideal para departamentos, espacios pequeños y proyectos especiales.",
    keywords: [
      "camarote con escritorio a medida",
      "camarote a medida Santiago",
      "camarote personalizado escritorio",
      "cama alta a medida Chile",
      "camarote medidas especiales",
    ],
    canonical: "/camarote-con-escritorio-a-medida",
  }),

  premium: buildMetadata({
    title: "Camarote con Escritorio Premium | Máxima Calidad y Diseño",
    description: "Camarote premium con escritorio amplio, cajón y estantes. Acabados superiores para dormitorios modernos, gamer y home office.",
    keywords: [
      "camarote con escritorio premium",
      "camarote premium escritorio",
      "camarote gamer con escritorio",
      "camarote home office",
      "camarote moderno escritorio",
    ],
    canonical: "/camarote-con-escritorio-premium",
  }),

  cotizar: buildMetadata({
    title: "Cotizar Camarote con Escritorio | Respuesta en 24 Horas",
    description: "Solicita tu cotización de camarote con escritorio. Respuesta en menos de 24 horas. También puedes escribirnos directamente por WhatsApp.",
    keywords: ["cotizar camarote escritorio", "precio camarote con escritorio"],
    canonical: "/cotizar",
  }),
} as const;
