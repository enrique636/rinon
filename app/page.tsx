import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { blogPosts } from "@/lib/blog";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-14 md:py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Entregamos hoy en Santiago — Pago contra entrega
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Camarotes metálicos de calidad
            <br />
            <span className="text-green-600">fabricados en Chile</span>
          </h1>

          <p className="text-lg text-gray-500 mb-4 max-w-xl mx-auto">
            Titanic, nido, triple, con escritorio y más.
            Todos los modelos con opción de parrillas, barandas y medidas a pedido.
          </p>

          <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-gray-600">Camarotes metálicos en Santiago</strong> con entrega e instalación incluida.
            Pago contra entrega: pagas cuando el camarote llega a tu casa, ya instalado y funcionando.
            Despachamos a toda la Región Metropolitana.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <WhatsAppButton size="lg">Consultar por WhatsApp</WhatsAppButton>
            <Link
              href="/camarotes"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-full border-2 border-gray-200 text-gray-700 hover:border-gray-400 transition-all"
            >
              Ver todos los modelos
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Barra de confianza ───────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-500 font-medium">
          <span className="flex items-center gap-1.5">✓ Pago contra entrega</span>
          <span className="flex items-center gap-1.5">✓ Despacho {formatPrice(SITE_CONFIG.despacho.precio)}</span>
          <span className="flex items-center gap-1.5">✓ Santiago: pago contra entrega</span>
          <span className="flex items-center gap-1.5">✓ Empresas: despacho nacional</span>
          <span className="flex items-center gap-1.5">✓ Medidas a pedido</span>
          <span className="flex items-center gap-1.5">✓ Fabricante directo</span>
        </div>
      </section>

      {/* ─── Catálogo de productos ────────────────────────────────────────── */}
      <section className="py-16 px-4" id="productos">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Nuestros Camarotes</h2>
            <p className="text-gray-500">Todos los modelos disponibles para entrega en Santiago</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Extras disponibles ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Agrega extras a tu camarote</h2>
            <p className="text-gray-500 text-sm">Personaliza tu pedido al momento de consultar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ExtraCard
              icon="🪵"
              titulo="Parrilla metálica"
              descripcion="Hasta 2 parrillas adicionales por camarote (3 en el modelo nido). Refuerzan la base y mejoran la ventilación del colchón."
              precio="A consultar"
            />
            <ExtraCard
              icon="🛡️"
              titulo="Baranda de seguridad"
              descripcion="Hasta 2 barandas adicionales para mayor seguridad en la cama superior. Ideal para niños pequeños."
              precio="A consultar"
            />
            <ExtraCard
              icon="📐"
              titulo="Cambio de medida"
              descripcion="Ajustamos las medidas a tu espacio. Hasta 3 cambios por pedido."
              precio={`${formatPrice(SITE_CONFIG.cambioMedida.precio)} c/u`}
            />
          </div>
        </div>
      </section>

      {/* ─── Info de despacho ─────────────────────────────────────────────── */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Despacho e instalación en Santiago
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                  <span><strong>Pago contra entrega</strong> — pagas cuando recibes el camarote en tu casa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                  <span><strong>Costo de despacho: {formatPrice(SITE_CONFIG.despacho.precio)}</strong> en Santiago y alrededores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                  <span>Entrega estimada en <strong>{SITE_CONFIG.despacho.dias}</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                  <span>Coordinamos día y hora contigo por WhatsApp</span>
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppButton message="Hola, quiero saber el precio de un camarote y coordinar el despacho.">
                  Consultar y coordinar despacho
                </WhatsAppButton>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <p className="text-white font-bold text-base mb-2">🏭 ¿Eres empresa, constructora o minera?</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Somos fabricantes. Despachamos a todo Chile para campamentos mineros,
                faenas, constructoras, forestales y agrícolas.
              </p>
              <Link href="/empresas" className="inline-flex items-center gap-1 text-sm text-green-400 font-semibold hover:underline">
                Ver cotización para empresas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Últimos artículos del blog ──────────────────────────────────── */}
      <section className="bg-white py-14 px-4 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Guías y artículos</h2>
            <Link href="/blog" className="text-sm text-green-600 font-medium hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts.slice(-4).reverse().map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <span className="inline-block text-xs font-medium text-green-700 bg-green-50 border border-green-100 rounded-full px-2.5 py-0.5 mb-3">
                  {post.categoria}
                </span>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-green-700 transition-colors">
                  {post.titulo}
                </h3>
                <p className="text-xs text-gray-400">{post.tiempoLectura} de lectura</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA final ────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">¿Cuál camarote necesitas?</h2>
          <p className="text-gray-500 mb-7">
            Escríbenos y te cotizamos en minutos. Pago cuando te llega.
          </p>
          <WhatsAppButton size="lg" className="mx-auto">Escribir por WhatsApp</WhatsAppButton>
        </div>
      </section>

      {/* ─── Schema LocalBusiness ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Camarotes Chile",
            description: SITE_CONFIG.descripcion,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Santiago",
              addressRegion: "Región Metropolitana",
              addressCountry: "CL",
            },
            areaServed: "Santiago, Región Metropolitana",
            paymentAccepted: "Pago contra entrega",
          }),
        }}
      />
    </>
  );
}

// ─── Componentes locales ──────────────────────────────────────────────────────

import type { Product } from "@/lib/products";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-300 transition-all duration-200 flex flex-col">
      {/* Imagen */}
      <div className="bg-gray-50 aspect-[4/3] flex flex-col items-center justify-center gap-2 relative border-b border-gray-100">
        <span className="text-4xl">{product.emoji}</span>
        <span className="text-xs text-gray-400">Foto próximamente</span>
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold bg-gray-900 text-white">
            {product.badge}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-lg mb-1">{product.nombre}</h3>
        <p className="text-green-600 text-xs font-medium mb-2">{product.subtitulo}</p>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{product.descripcion}</p>

        {/* Plazas */}
        <div className="flex gap-3 mb-4 text-xs">
          {product.plazasAbajo !== "—" && (
            <span className="bg-gray-100 text-gray-600 rounded-lg px-2.5 py-1">
              Abajo: {product.plazasAbajo}
            </span>
          )}
          <span className="bg-gray-100 text-gray-600 rounded-lg px-2.5 py-1">
            Arriba: {product.plazasArriba}
          </span>
        </div>

        {/* Extras disponibles */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.addOns.map((addon) => (
            <span key={addon.id} className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded px-1.5 py-0.5">
              + {addon.nombre.split(" ")[0]} {addon.nombre.split(" ")[1]}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2">
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
    </div>
  );
}

function ExtraCard({
  icon,
  titulo,
  descripcion,
  precio,
}: {
  icon: string;
  titulo: string;
  descripcion: string;
  precio: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <p className="text-3xl mb-3">{icon}</p>
      <h3 className="font-bold text-gray-900 mb-1.5">{titulo}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">{descripcion}</p>
      <p className="text-green-600 font-semibold text-sm">{precio}</p>
    </div>
  );
}

const faqs = [
  {
    q: "¿Cómo funciona el pago contra entrega?",
    a: "Pagas en efectivo o transferencia cuando el camarote llega a tu casa, ya instalado. No tienes que adelantar nada.",
  },
  {
    q: "¿Cuánto cuesta el despacho?",
    a: `El despacho tiene un costo fijo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. Incluye entrega e instalación básica.`,
  },
  {
    q: "¿En cuánto tiempo llega el camarote?",
    a: `En ${SITE_CONFIG.despacho.dias} desde que confirmas el pedido. Te avisamos por WhatsApp con la fecha exacta.`,
  },
  {
    q: "¿Puedo pedir un camarote con medidas diferentes?",
    a: `Sí. Puedes pedir hasta 3 cambios de medida por pedido. Cada cambio tiene un costo de ${formatPrice(SITE_CONFIG.cambioMedida.precio)}.`,
  },
  {
    q: "¿Qué son las parrillas metálicas?",
    a: "Son la base de madera o metal que sostiene el colchón. Se pueden agregar parrillas adicionales según el modelo (hasta 2 en la mayoría, hasta 3 en el camarote nido).",
  },
  {
    q: "¿Despachan a regiones?",
    a: "Por ahora solo en Santiago y alrededores. Escríbenos por WhatsApp si estás en otra región y lo evaluamos.",
  },
];
