import { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";

const BASE_URL = "https://dumar.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((p) => ({
    url: `${BASE_URL}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogUrls = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.fecha),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/camarotes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/camarote-con-escritorio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/camarote-nido`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/camarote-triple`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarote-doble`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cama-alta`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarote-titanic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarote-1-5-plazas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/cotizar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/preguntas-frecuentes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarotes-providencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-las-condes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-maipu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-nunoa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-la-florida`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-pudahuel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-santiago-centro`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-penalolen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-quilicura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-puente-alto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-san-bernardo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-estacion-central`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-baratos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarotes-renca`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-metalicos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/calculadora`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/literas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // B2B / Industrial
    { url: `${BASE_URL}/empresas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/camarotes-mineria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/camarotes-faenas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/camarotes-agricolas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarotes-forestales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarotes-construccion`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // Fabricante y mayorista
    { url: `${BASE_URL}/fabricante-camarotes-chile`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/camarotes-al-por-mayor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/camarotes-hostal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // Geo minería
    { url: `${BASE_URL}/camarotes-antofagasta`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarotes-calama`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarotes-copiapo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarotes-rancagua`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarotes-la-serena`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarotes-vallenar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarotes-tocopilla`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-diego-de-almagro`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-chanaral`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-sierra-gorda`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarotes-machali`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Geo forestal
    { url: `${BASE_URL}/camarotes-temuco`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarotes-los-angeles`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarotes-puerto-montt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarotes-valdivia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarotes-osorno`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-angol`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Geo agrícola
    { url: `${BASE_URL}/camarotes-curico`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarotes-talca`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarotes-san-felipe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-melipilla`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-buin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Comunas Santiago nuevas
    { url: `${BASE_URL}/camarotes-vitacura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-huechuraba`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-colina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-lo-barnechea`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-la-reina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-macul`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-lampa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // Camarote con escritorio — variantes demográficas
    { url: `${BASE_URL}/camarote-con-escritorio-universitario`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/camarote-con-escritorio-adolescente`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/camarote-con-escritorio-nino`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarote-con-escritorio-departamento`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/camarote-con-escritorio-habitacion-pequena`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // Camarote con escritorio — geo Santiago
    { url: `${BASE_URL}/camarote-con-escritorio-santiago`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/camarote-con-escritorio-las-condes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarote-con-escritorio-providencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarote-con-escritorio-nunoa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/camarote-con-escritorio-maipu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE_URL}/camarote-con-escritorio-la-florida`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE_URL}/camarote-con-escritorio-puente-alto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.78 },
    // Camarote con escritorio — geo comunas adicionales
    { url: `${BASE_URL}/camarote-con-escritorio-penalolen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarote-con-escritorio-san-bernardo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarote-con-escritorio-quilicura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarote-con-escritorio-pudahuel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/camarote-con-escritorio-estacion-central`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    // Camarote con escritorio — por uso específico
    { url: `${BASE_URL}/camarote-con-escritorio-gamer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarote-con-escritorio-home-office`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/camarote-con-escritorio-pieza-arrendada`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarote-con-escritorio-dos-hermanos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.82 },
    // Nuevos servicios del taller
    { url: `${BASE_URL}/pintura-electrostatica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/estructuras-metalicas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...productUrls,
    ...blogUrls,
  ];
}
