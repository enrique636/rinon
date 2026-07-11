import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Nido en Chile | 3 Camas en 1 — Pago Contra Entrega Santiago",
  description:
    "Camarote nido metálico con cama deslizante. 3 camas en el espacio de 1. Ideal para niños y piezas pequeñas. Pago contra entrega en Santiago. Consulta por WhatsApp.",
  keywords: [
    "camarote nido",
    "cama nido",
    "camarote con nido",
    "camarote 3 camas",
    "cama nido Chile",
    "camarote nido Santiago",
    "camarote nido metálico",
    "litera con nido Chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-nido" },
  openGraph: {
    title: "Camarote Nido | 3 Camas en el Espacio de 1 — Santiago Chile",
    description:
      "Camarote nido metálico: cama superior, cama inferior y cama nido deslizante. Pago contra entrega en Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

const imgs = [
  { src: "/images/camarotes/camarote-petalo-nido-estructura-completa.jpg", alt: "Camarote nido estructura completa con cama deslizante" },
  { src: "/images/camarotes/camarote-petalo-nido-habitacion-nina.jpg", alt: "Camarote nido en habitación infantil" },
  { src: "/images/camarotes/camarote-nido-pieza-compartida-hermanas.jpg", alt: "Camarote nido para tres niñas en pieza compartida" },
  { src: "/images/camarotes/camarote-nido-infantil-celeste.jpg", alt: "Camarote nido infantil celeste" },
  { src: "/images/camarotes/camarote-petalo-nido-dormitorio-moderno.jpg", alt: "Camarote nido dormitorio moderno" },
  { src: "/images/camarotes/camarote-metalico-nido-estilo-nordico.jpg", alt: "Camarote nido estilo nórdico" },
  { src: "/images/camarotes/camarote-petalo-nido-juvenil-led.jpg", alt: "Camarote nido juvenil con LED" },
  { src: "/images/camarotes/camarote-petalo-nido-blanco-premium.jpg", alt: "Camarote nido premium blanco" },
];

const faqs = [
  {
    q: "¿Qué es exactamente la cama nido?",
    a: "La cama nido es una tercera cama que se guarda deslizándose debajo de la cama inferior del camarote. Durante el día está oculta y no ocupa espacio. Por la noche se saca y queda al nivel del piso, lista para usar.",
  },
  {
    q: "¿Qué grosor de colchón necesita la cama nido?",
    a: "La cama nido requiere un colchón delgado, de no más de 15-18 cm de grosor, para que pueda deslizarse correctamente bajo la cama inferior.",
  },
  {
    q: "¿Cuántas parrillas adicionales acepta el camarote nido?",
    a: "El camarote nido acepta hasta 3 parrillas metálicas adicionales, una por cada nivel de cama. Consúltanos el precio al momento de cotizar.",
  },
  {
    q: "¿La cama nido tiene barandas?",
    a: "La cama nido está al nivel del piso, por lo que no requiere baranda. Las camas superiores incluyen barandas de seguridad. Se pueden agregar hasta 2 barandas adicionales.",
  },
  {
    q: "¿Se puede pedir el camarote nido en medidas especiales?",
    a: `Sí. Aceptamos hasta 3 cambios de medida por pedido. Cada cambio tiene un costo de ${formatPrice(SITE_CONFIG.cambioMedida.precio)}.`,
  },
  {
    q: "¿Cuánto cuesta el despacho del camarote nido en Santiago?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. El pago es contra entrega.`,
  },
];

export default function CamaroteNidoPage() {
  const waUrl = getProductWhatsAppUrl("Camarote Nido");

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* BreadcrumbList schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
                { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
                { "@type": "ListItem", position: 3, name: "Camarote Nido", item: "https://rinon.cl/camarote-nido" },
              ],
            }),
          }}
        />

        {/* Product schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Camarote Nido Metálico",
              description: "Camarote metálico con cama nido deslizante. 3 camas en el espacio de 1. Fabricación chilena.",
              brand: { "@type": "Brand", name: "Camarotes Chile" },
              material: "Acero",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "CLP",
                seller: { "@type": "Organization", name: "Camarotes Chile" },
                areaServed: "Santiago, Chile",
              },
            }),
          }}
        />

        {/* FAQPage schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        {/* Breadcrumb visual */}
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Camarote Nido</span>
        </nav>

        {/* Hero del producto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div className="grid grid-cols-2 gap-2">
            {imgs.slice(0, 4).map((img) => (
              <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <div>
            <span className="inline-block bg-gray-900 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">
              3 en 1
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Camarote Nido
            </h1>
            <p className="text-green-600 font-medium mb-4">
              3 camas en el espacio de 1 — la solución para piezas pequeñas
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              El <strong>camarote nido</strong> es la solución más inteligente cuando necesitas tres camas
              pero el espacio es limitado. Tiene cama superior, cama inferior, y una tercera cama
              deslizante (<strong>cama nido</strong>) que se guarda debajo durante el día y se saca por la noche en segundos.
            </p>

            {/* Configuración */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-blue-500 font-medium">Nivel inferior</p>
                <p className="text-blue-800 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-gray-400 font-medium">Nivel superior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-green-500 font-medium">Nido deslizante</p>
                <p className="text-green-700 font-bold text-sm">1 plaza extra</p>
              </div>
            </div>

            {/* Despacho */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-800 font-bold">Pago contra entrega</p>
                  <p className="text-green-600 text-sm">
                    Despacho {formatPrice(SITE_CONFIG.despacho.precio)} · Solo Santiago
                  </p>
                </div>
                <span className="text-2xl">🚚</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <WhatsAppButton
                size="lg"
                message="Hola, me interesa el Camarote Nido. ¿Cuál es el precio y tienen disponibilidad?"
                className="w-full justify-center"
              >
                Consultar precio por WhatsApp
              </WhatsAppButton>
              <Link
                href="/cotizar"
                className="w-full text-center py-3.5 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-semibold rounded-full transition-colors"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>

        {/* Contenido SEO: qué es */}
        <div className="prose prose-gray max-w-none mb-14">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué es un camarote nido y cómo funciona?</h2>
          <p className="text-gray-600 leading-relaxed">
            El <strong>camarote nido</strong> —también llamado <strong>cama nido</strong> o <strong>camarote con nido</strong>— es
            un camarote de dos pisos tradicional que incorpora una innovación clave: una tercera cama deslizante integrada
            en la parte inferior de la estructura, que se guarda debajo de la cama de abajo cuando no se usa.
          </p>
          <p className="text-gray-600 leading-relaxed">
            La mecánica es simple. La cama nido tiene ruedas o deslizadores que permiten sacarla y meterla sin esfuerzo.
            En cuestión de segundos tienes una tercera cama completamente disponible al nivel del suelo.
            Durante el día, todo está guardado y la pieza se ve como un camarote normal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">¿Para quién es ideal el camarote nido?</h2>
          <p className="text-gray-600 leading-relaxed">
            El <strong>camarote nido en Chile</strong> es especialmente popular entre familias con tres hijos
            que comparten habitación, pero también tiene otros usos muy frecuentes:
          </p>
          <ul className="text-gray-600">
            <li><strong>Familias con 3 hijos</strong> que comparten pieza y no tienen espacio para 3 camas separadas</li>
            <li><strong>Piezas de visita</strong> que necesitan capacidad flexible: normalmente 2 camas, ocasionalmente 3</li>
            <li><strong>Residencias y pensiones</strong> donde maximizar la capacidad de cada pieza es esencial</li>
            <li><strong>Piezas pequeñas</strong> donde literalmente no caben 3 camas tradicionales</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Ventajas del camarote nido metálico</h2>
          <p className="text-gray-600 leading-relaxed">
            Los camarotes nido metálicos como los que fabricamos en Chile tienen ventajas claras frente a los de madera o a comprar tres camas separadas:
          </p>
          <ul className="text-gray-600">
            <li><strong>Ahorro de espacio:</strong> 3 camas en la huella de 1, imposible de superar</li>
            <li><strong>Durabilidad:</strong> el acero no se astilla, no se rompe ni necesita mantenimiento especial</li>
            <li><strong>Flexibilidad:</strong> usas las 3 camas solo cuando las necesitas, sin ocupar espacio en otro momento</li>
            <li><strong>Fabricación chilena:</strong> mejor relación calidad-precio que importados</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Accesorios disponibles para el camarote nido</h2>
          <p className="text-gray-600 leading-relaxed">
            El camarote nido admite los siguientes accesorios opcionales:
          </p>
          <ul className="text-gray-600">
            <li><strong>Parrillas metálicas adicionales:</strong> hasta 3 parrillas (una por cada nivel de cama). Precio a consultar.</li>
            <li><strong>Barandas adicionales:</strong> hasta 2 barandas extra para mayor seguridad. Precio a consultar.</li>
            <li><strong>Cambios de medida:</strong> hasta 3 modificaciones de medida por pedido, a {formatPrice(SITE_CONFIG.cambioMedida.precio)} cada una.</li>
          </ul>
        </div>

        {/* CTA intermedio */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Te interesa el camarote nido?</h2>
          <p className="text-gray-600 text-sm mb-5">
            Escríbenos por WhatsApp y te cotizamos de inmediato. Pago contra entrega en Santiago.
          </p>
          <WhatsAppButton message="Hola, me interesa el camarote nido con entrega en Santiago. ¿Me pueden cotizar?">
            Cotizar camarote nido
          </WhatsAppButton>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes sobre el camarote nido</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          {imgs.slice(4).map((img) => (
            <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Otros modelos */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/camarote-triple", emoji: "🏗️", nombre: "Camarote Triple" },
              { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Con Escritorio" },
              { href: "/cama-alta", emoji: "🪜", nombre: "Cama Alta" },
              { href: "/camarote-doble", emoji: "👫", nombre: "Camarote Doble" },
            ].map((p) => (
              <Link key={p.href} href={p.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all text-center">
                <span className="text-2xl block mb-1">{p.emoji}</span>
                <p className="text-sm font-medium text-gray-700">{p.nombre}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
