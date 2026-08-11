import { SITE_CONFIG } from "./config";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.nombre,
    url: SITE_CONFIG.seo.baseUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.telefono,
      contactType: "sales",
      areaServed: "CL",
      availableLanguage: "Spanish",
    },
    sameAs: [
      `https://wa.me/${SITE_CONFIG.whatsapp.numero}`,
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.nombre,
    description: SITE_CONFIG.descripcion,
    url: SITE_CONFIG.seo.baseUrl,
    telephone: SITE_CONFIG.telefono,
    areaServed: "Chile",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Productos y servicios de fabricación metálica",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricación de Camarote Nido" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricación de Camarote con Escritorio" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricación de Cama Alta" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricación de Camarote Doble" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricación de Camarote Triple" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricación de Camarote Plaza y Media" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fabricación de Camarote Titanic" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cierres perimetrales" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rejas y portones metálicos" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pintura electrostática" } },
      ],
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.nombre,
    url: SITE_CONFIG.seo.baseUrl,
  };
}
