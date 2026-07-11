import { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog";

const BASE_URL = "https://rinon.cl";

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
    // Servicios del taller
    { url: `${BASE_URL}/pintura-electrostatica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/estructuras-metalicas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // Cierres perimetrales — pilar + subpáginas
    { url: `${BASE_URL}/cierres-perimetrales`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/cierres-para-constructoras`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/cierres-para-obras`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cierres-para-bodegas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // Mallas separadoras — pilar + subpáginas
    { url: `${BASE_URL}/mallas-separadoras`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.92 },
    { url: `${BASE_URL}/mallas-separadoras-bodegas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/mallas-separadoras-industriales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/barreras-peatonales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // Cierres — más subpáginas sectoriales
    { url: `${BASE_URL}/cierres-para-industrias`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cierres-para-condominios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/cierre-de-terrenos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    // Portones
    { url: `${BASE_URL}/portones-metalicos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // Nuevos productos camarotes
    { url: `${BASE_URL}/camarote-con-escritorio-economico`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/camarote-con-escritorio-full`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/camarote-dos-plazas-abajo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarote-desmontable`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/cama-dos-plazas-con-cajon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    // Geo B2B nuevas ciudades
    { url: `${BASE_URL}/camarotes-maria-elena`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-paine`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-los-andes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-talagante`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/camarotes-mulchen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    // === REJAS METÁLICAS — BATCH 1 ===
    { url: `${BASE_URL}/rejas-metalicas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/rejas-metalicas-precio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/reja-metalica-santiago`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // === PORTONES INDUSTRIALES ===
    { url: `${BASE_URL}/portones-industriales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // === CERCOS PERIMETRALES — GEO ===
    { url: `${BASE_URL}/cercos-perimetrales-santiago`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/cercos-perimetrales-antofagasta`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-valparaiso`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-concepcion`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-temuco`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === CAMAROTES — COMERCIALES ===
    { url: `${BASE_URL}/instalacion-camarotes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/camarotes-oferta`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/venta-camarotes-santiago`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // === REJAS — COMUNAS RM ===
    { url: `${BASE_URL}/rejas-metalicas-maipu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-la-florida`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-pudahuel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === FABRICANTE + MAYORISTA ===
    { url: `${BASE_URL}/fabricante-cercos-metalicos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/rejas-metalicas-por-mayor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // === CERCOS GEO — VI REGIÓN ===
    { url: `${BASE_URL}/cercos-perimetrales-rancagua`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === BATCH 4 ===
    { url: `${BASE_URL}/estructuras-metalicas-a-pedido`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/cercos-para-parcelas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/rejas-metalicas-nunoa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-las-condes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-iquique`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-talca`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === BATCH 5 ===
    { url: `${BASE_URL}/rejas-metalicas-puente-alto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-san-bernardo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-galvanizadas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/portones-residenciales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/cercos-perimetrales-puerto-montt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === BATCH 6 ===
    { url: `${BASE_URL}/rejas-metalicas-quilicura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cierre-perimetral-industrial`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/camarotes-concepcion`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-para-casas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 7 ===
    { url: `${BASE_URL}/rejas-metalicas-estacion-central`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/portones-automaticos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/cercos-para-condominios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    { url: `${BASE_URL}/camarotes-valparaiso`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === BATCH 8 — pintura electrostática RM ===
    { url: `${BASE_URL}/pintura-electrostatica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${BASE_URL}/pintura-electrostatica-san-bernardo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/pintura-electrostatica-maipu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE_URL}/pintura-electrostatica-pudahuel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE_URL}/pintura-electrostatica-quilicura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE_URL}/pintura-electrostatica-cerrillos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    // === BATCH 9 ===
    { url: `${BASE_URL}/pintura-electrostatica-la-florida`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/pintura-electrostatica-san-joaquin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/pintura-electrostatica-lo-espejo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/rejas-para-ventanas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/rejas-metalicas-cerrillos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === BATCH 10 ===
    { url: `${BASE_URL}/pintura-electrostatica-macul`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/pintura-electrostatica-el-bosque`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/reja-tubular`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.94 },
    // === BATCH 11 ===
    { url: `${BASE_URL}/pintura-electrostatica-las-condes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/pintura-electrostatica-nunoa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/cercos-perimetrales-valdivia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-arica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === BATCH 12 ===
    { url: `${BASE_URL}/cercos-perimetrales-punta-arenas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/rejas-metalicas-huechuraba`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/pintura-electrostatica-santiago-centro`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    // === BATCH 13 ===
    { url: `${BASE_URL}/rejas-metalicas-lo-prado`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-recoleta`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-osorno`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/barandas-metalicas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 14 ===
    { url: `${BASE_URL}/rejas-para-puertas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/escaleras-metalicas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/cercos-perimetrales-chillan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-renca`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-la-reina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 15 ===
    { url: `${BASE_URL}/rejas-metalicas-san-ramon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-colina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/portones-corredizos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/rejas-metalicas-san-miguel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-curico`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 16 ===
    { url: `${BASE_URL}/cercos-perimetrales-la-serena`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-copiapo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/portones-batientes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/rejas-metalicas-vitacura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-penalolen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 17 ===
    { url: `${BASE_URL}/rejas-de-fierro`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.94 },
    { url: `${BASE_URL}/cercos-perimetrales-calama`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-providencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-macul`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 18 ===
    { url: `${BASE_URL}/portones-electricos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/cercos-perimetrales-los-angeles`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/rejas-metalicas-independencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-penalolen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/rejas-decorativas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 19 ===
    { url: `${BASE_URL}/rejas-para-exteriores`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/instalacion-de-rejas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    { url: `${BASE_URL}/rejas-metalicas-conchali`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-metalicos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 20 ===
    { url: `${BASE_URL}/reja-para-jardin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    { url: `${BASE_URL}/rejas-metalicas-el-bosque`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-talcahuano`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-la-cisterna`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 21 — CERCOS COMPLETO ===
    // Geo ciudades
    { url: `${BASE_URL}/cercos-perimetrales-san-antonio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-ovalle`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-linares`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-castro`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-coyhaique`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-villarrica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-angol`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // RM comunas cercos
    { url: `${BASE_URL}/cercos-perimetrales-puente-alto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE_URL}/cercos-perimetrales-maipu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE_URL}/cercos-perimetrales-pudahuel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/cercos-perimetrales-quilicura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    // Verticales
    { url: `${BASE_URL}/cercos-para-colegios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    { url: `${BASE_URL}/cercos-para-canchas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    { url: `${BASE_URL}/cercos-para-estacionamientos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    { url: `${BASE_URL}/cercos-anti-trepa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    // Keywords comerciales
    { url: `${BASE_URL}/cercos-perimetrales-precio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/cercos-perimetrales-galvanizados`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/presupuesto-cerco-perimetral`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 22 ===
    { url: `${BASE_URL}/rejas-metalicas-renca`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/rejas-metalicas-la-cisterna`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/portones-para-casas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/rejas-de-seguridad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.93 },
    { url: `${BASE_URL}/rejas-tubulares`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 23 ===
    { url: `${BASE_URL}/puertas-peatonales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/portones-vehiculares`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/rejas-para-balcon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    { url: `${BASE_URL}/rejas-metalicas-lo-barnechea`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-la-granja`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 24 ===
    { url: `${BASE_URL}/rejas-para-terraza`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    { url: `${BASE_URL}/rejas-metalicas-pedro-aguirre-cerda`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/portones-de-acero`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${BASE_URL}/rejas-para-locales-comerciales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 25 ===
    { url: `${BASE_URL}/rejas-metalicas-santiago`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.96 },
    { url: `${BASE_URL}/rejas-metalicas-providencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/rejas-metalicas-recoleta`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/rejas-para-galpones`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    { url: `${BASE_URL}/pintura-electrostatica-san-miguel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-la-reina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 26 ===
    { url: `${BASE_URL}/rejas-metalicas-la-pintana`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/rejas-metalicas-lo-espejo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/rejas-metalicas-san-joaquin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-vitacura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/pintura-electrostatica-lo-barnechea`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-san-miguel`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === BATCH 27 ===
    { url: `${BASE_URL}/cercos-perimetrales-cerrillos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-la-florida`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/rejas-metalicas-colina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-puente-alto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/pintura-electrostatica-conchali`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/pintura-electrostatica-estacion-central`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    // === BATCH 28 ===
    { url: `${BASE_URL}/pintura-electrostatica-san-ramon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/pintura-electrostatica-la-pintana`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/pintura-electrostatica-lo-prado`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/pintura-electrostatica-huechuraba`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/rejas-metalicas-lampa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/rejas-metalicas-buin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    // === BATCH 29 ===
    { url: `${BASE_URL}/pintura-electrostatica-independencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/pintura-electrostatica-la-granja`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/pintura-electrostatica-pedro-aguirre-cerda`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/rejas-metalicas-talagante`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/rejas-metalicas-padre-hurtado`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    // === BATCH 30 ===
    { url: `${BASE_URL}/cercos-perimetrales-penalolen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rejas-metalicas-el-monte`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE_URL}/rejas-metalicas-penaflor`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE_URL}/cercos-para-empresas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 31 ===
    { url: `${BASE_URL}/cercos-perimetrales-san-bernardo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE_URL}/cercos-perimetrales-nunoa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/cercos-perimetrales-las-condes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/cercos-perimetrales-macul`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-renca`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-la-reina`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    // === BATCH 32 ===
    { url: `${BASE_URL}/cercos-perimetrales-santiago-centro`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/cercos-perimetrales-conchali`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-huechuraba`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-independencia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-lo-prado`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/cercos-perimetrales-estacion-central`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 33 ===
    { url: `${BASE_URL}/cercos-perimetrales-la-pintana`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/cercos-perimetrales-lo-espejo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/cercos-perimetrales-san-ramon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/cercos-perimetrales-san-joaquin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/cercos-perimetrales-pedro-aguirre-cerda`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/cercos-perimetrales-la-granja`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    // === BATCH 34 ===
    { url: `${BASE_URL}/cercos-perimetrales-el-bosque`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/cercos-perimetrales-la-cisterna`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/cercos-perimetrales-vitacura`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/cercos-perimetrales-lo-barnechea`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    // === BATCH 35 — Institucional B2B + producto loft + malla 3D ===
    { url: `${BASE_URL}/camarotes-militares`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    { url: `${BASE_URL}/camarotes-para-universidades`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/camarotes-para-internados`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE_URL}/cama-loft-metalica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.89 },
    { url: `${BASE_URL}/camarotes-salmoneras`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/mallas-3d`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.87 },
    { url: `${BASE_URL}/camarotes-para-hospitales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${BASE_URL}/cercos-para-mineria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.89 },
    { url: `${BASE_URL}/litera-metalica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.90 },
    // === BATCH 37 — Hub institucional + obras + geo norte + adultos ===
    { url: `${BASE_URL}/mobiliario-institucional`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.91 },
    { url: `${BASE_URL}/camarotes-para-obras`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.86 },
    { url: `${BASE_URL}/camarotes-iquique`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/camarotes-arica`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/camarotes-adultos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // === BATCH 38 — Viña del Mar + camping + keyword alias ===
    { url: `${BASE_URL}/camarotes-vina-del-mar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/camarotes-para-camping`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.84 },
    { url: `${BASE_URL}/camarotes-talcahuano`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.82 },
    // === BATCH 40 — Niños + keyword aliases ===
    { url: `${BASE_URL}/camarotes-ninos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    // === BATCH 41 — Precio camarotes + schema homepage ===
    { url: `${BASE_URL}/camarotes-precio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    // === BATCH 42 — ciudades faltantes importantes ===
    { url: `${BASE_URL}/camarotes-chillan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/camarotes-coquimbo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.83 },
    { url: `${BASE_URL}/camarotes-quilpue`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.82 },
    ...productUrls,
    ...blogUrls,
  ];
}
