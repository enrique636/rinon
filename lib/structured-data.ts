import { SITE_CONFIG } from "./config";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.nombre,
    url: SITE_CONFIG.seo.baseUrl,
    logo: `${SITE_CONFIG.seo.baseUrl}/logo.png`,
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
    description:
      "Camarotes metálicos en Santiago de Chile. Camarote nido, camarote con escritorio, cama alta, camarote doble, triple y plaza y media. Pago contra entrega.",
    url: SITE_CONFIG.seo.baseUrl,
    telephone: SITE_CONFIG.telefono,
    priceRange: "$$",
    currenciesAccepted: "CLP",
    paymentAccepted: "Pago contra entrega",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -33.4489,
        longitude: -70.6693,
      },
      geoRadius: "50000",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.4489,
      longitude: -70.6693,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Camarotes Metálicos",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Camarote Nido" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Camarote con Escritorio" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cama Alta" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Camarote Doble" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Camarote Triple" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Camarote Plaza y Media" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "Camarote Titanic" } },
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.seo.baseUrl}/camarotes?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
