export const SITE_CONFIG = {
  nombre: "Camarotes Chile",
  tagline: "Camarotes metálicos de calidad — Entrega en Santiago",
  descripcion:
    "Camarotes metálicos fabricados en Chile. Titanic, nido, triple, con escritorio y más. Pago contra entrega solo en Santiago y alrededores.",

  whatsapp: {
    numero: "56975893742",
    mensaje: "Hola, me interesa un camarote. ¿Pueden darme información y cotización?",
  },

  telefono: "+56 9 7589 3742",
  email: "ventas@dumar.cl",

  despacho: {
    precio: 20000,
    zona: "Santiago y alrededores",
    dias: "5 a 10 días hábiles",
  },

  cambioMedida: {
    precio: 20000,
    max: 3,
  },

  pago: "Pago contra entrega",

  seo: {
    baseUrl: "https://rinon.cl", // ← ACTUALIZAR con dominio real
  },
} as const;

export function getWhatsAppUrl(mensaje?: string): string {
  const msg = encodeURIComponent(mensaje ?? SITE_CONFIG.whatsapp.mensaje);
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

export function getProductWhatsAppUrl(nombreProducto: string): string {
  const msg = `Hola, me interesa el *${nombreProducto}*. ¿Pueden darme información y precio?`;
  return getWhatsAppUrl(msg);
}

export function formatPrice(precio: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(precio);
}
