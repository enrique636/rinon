import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes Metálicos en Santiago | Todos los Modelos",
  description:
    "Catálogo completo de camarotes metálicos en Santiago: Titanic, nido, triple, con escritorio, doble y más. Pago contra entrega. Despacho $20.000 con instalación incluida.",
  keywords: [
    "camarotes Chile",
    "camarotes metálicos Santiago",
    "comprar camarote Santiago",
    "camarote precio Chile",
    "camarotes pago contra entrega",
    "literas metálicas Chile",
    "camarote titanic",
    "camarote nido",
    "camarote triple",
    "camarote con escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes" },
  openGraph: {
    title: "Camarotes Metálicos en Santiago — Pago Contra Entrega | Camarotes Chile",
    description: "7 modelos de camarotes metálicos para todas las necesidades. Pago cuando llega. Despacho con instalación incluida en Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

export default function CamarotesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Camarotes metálicos disponibles en Santiago",
    description: "Catálogo completo de camarotes metálicos con despacho en Santiago, Chile",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.nombre,
      description: p.descripcion,
      url: `https://rinon.cl/${p.slug}`,
    })),
  };

  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">Todos los camarotes</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Todos los Camarotes</h1>
          <p className="text-gray-500">
            {products.length} modelos disponibles · Pago contra entrega · Despacho {formatPrice(SITE_CONFIG.despacho.precio)} en Santiago
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col"
            >
              {/* Imagen */}
              <div className="bg-gray-50 aspect-[4/3] relative border-b border-gray-100 overflow-hidden">
                {product.imgSrc ? (
                  <img
                    src={product.imgSrc}
                    alt={product.imgAlt ?? product.nombre}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <span className="text-4xl">{product.emoji}</span>
                    <span className="text-xs text-gray-400">Foto próximamente</span>
                  </div>
                )}
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-bold text-gray-900 text-lg mb-1">{product.nombre}</h2>
                <p className="text-green-600 text-xs font-medium mb-2">{product.subtitulo}</p>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{product.descripcion}</p>

                {/* Plazas */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs">
                  {product.plazasAbajo !== "—" && (
                    <span className="bg-blue-50 text-blue-700 rounded-lg px-2.5 py-1 font-medium">
                      Abajo: {product.plazasAbajo}
                    </span>
                  )}
                  <span className="bg-gray-100 text-gray-600 rounded-lg px-2.5 py-1">
                    Arriba: {product.plazasArriba}
                  </span>
                </div>

                {/* Características (primeras 3) */}
                <ul className="space-y-1 mb-4">
                  {product.caracteristicas.slice(0, 3).map((c) => (
                    <li key={c} className="flex items-start gap-1.5 text-xs text-gray-400">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col gap-2 mt-auto">
                  <a
                    href={getProductWhatsAppUrl(product.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl text-sm transition-colors"
                  >
                    Consultar por WhatsApp
                  </a>
                  <Link
                    href={`/${product.slug}`}
                    className="w-full text-center py-2.5 border border-gray-200 hover:bg-gray-50 text-gray-600 font-medium rounded-xl text-sm transition-colors"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Info despacho */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-14">
          <div>
            <h2 className="font-bold text-gray-900 text-lg mb-1">Pago contra entrega en Santiago</h2>
            <p className="text-gray-600 text-sm">
              Pagas cuando te llega el camarote. Despacho {formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores.
            </p>
          </div>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con entrega en Santiago.">
            Cotizar ahora
          </WhatsAppButton>
        </div>

        {/* Comunas donde despachamos */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Comunas con despacho confirmado</h2>
          <p className="text-gray-500 text-sm mb-6">
            Entregamos e instalamos en toda la Región Metropolitana. Aquí algunas comunas con páginas de información específica:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: "/camarotes-providencia", nombre: "Providencia" },
              { href: "/camarotes-las-condes", nombre: "Las Condes" },
              { href: "/camarotes-maipu", nombre: "Maipú" },
              { href: "/camarotes-nunoa", nombre: "Ñuñoa" },
              { href: "/camarotes-la-florida", nombre: "La Florida" },
              { href: "/camarotes-pudahuel", nombre: "Pudahuel" },
              { href: "/camarotes-santiago-centro", nombre: "Santiago Centro" },
              { href: "/camarotes-penalolen", nombre: "Peñalolén" },
              { href: "/camarotes-quilicura", nombre: "Quilicura" },
              { href: "/camarotes-puente-alto", nombre: "Puente Alto" },
              { href: "/camarotes-san-bernardo", nombre: "San Bernardo" },
              { href: "/camarotes-renca", nombre: "Renca" },
              { href: "/camarotes-estacion-central", nombre: "Estación Central" },
              { href: "/camarotes-lo-barnechea", nombre: "Lo Barnechea" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center hover:border-green-300 hover:bg-green-50 transition-all"
              >
                <p className="text-xs font-medium text-gray-700">{c.nombre}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            ¿Tu comuna no aparece?{" "}
            <a href="https://wa.me/56975893742?text=Hola,%20quiero%20saber%20si%20despachan%20a%20mi%20comuna." target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
              Consúltanos por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
