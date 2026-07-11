import type { Metadata } from "next";
import Link from "next/link";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Pétalo Metálico Chile | Con Detalles de Madera — Entrega Santiago",
  description: "Camarote metálico negro con detalles decorativos de madera en forma de pétalo. Elegante, resistente y fabricado en Chile. Pago contra entrega en Santiago.",
  keywords: [
    "camarote petalo",
    "camarote con madera",
    "camarote decorado madera",
    "camarote petalo metalico",
    "camarote negro con madera",
    "camarote con detalles de madera",
    "camarote petalo santiago",
    "camarote elegante metalico chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-petalo" },
  openGraph: {
    title: "Camarote Pétalo | Metálico con Detalles de Madera — Rinon.cl",
    description: "Camarote metálico negro con detalles decorativos de madera en forma de pétalo. Fabricado en Chile.",
    type: "website",
    locale: "es_CL",
  },
};

const imgs = [
  { src: "/images/camarotes/camarote-petalo-fondo-blanco.jpg", alt: "Camarote Pétalo metálico negro con detalles de madera" },
];

const faqs = [
  {
    q: "¿Qué son los detalles de pétalo?",
    a: "Son piezas de madera natural en forma de pétalo integradas en la estructura metálica negra, ubicadas en la cabecera y piecera. Dan un toque decorativo cálido sin perder la resistencia del metal.",
  },
  {
    q: "¿La madera es resistente?",
    a: "Sí. Usamos madera tratada que complementa la estructura de acero. Los detalles de madera están diseñados para uso en interiores.",
  },
  {
    q: "¿Se puede pedir en 1 plaza y 1,5 plazas?",
    a: "Sí. El Camarote Pétalo está disponible en 1 plaza y en 1,5 plazas. La diferencia de precio por el cambio de medida es de $15.000 CLP.",
  },
  {
    q: "¿La escalera lateral viene incluida?",
    a: "El camarote incluye escalera soldada en el respaldo. La escalera lateral y la baranda de seguridad se venden por separado como accesorios opcionales.",
  },
  {
    q: "¿Cuánto cuesta el despacho?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. El pago es contra entrega.`,
  },
];

export default function CamaroteMetaloPage() {
  const waUrl = getProductWhatsAppUrl("Camarote Pétalo");

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote Pétalo", item: "https://rinon.cl/camarote-petalo" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote Pétalo Metálico",
          description: "Camarote metálico negro con detalles decorativos de madera en forma de pétalo. Fabricación chilena.",
          brand: { "@type": "Brand", name: "Rinon.cl" },
          material: "Acero y madera",
          color: "Negro con madera natural",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "CLP",
            seller: { "@type": "Organization", name: "Rinon.cl" },
            areaServed: "Santiago, Chile",
          },
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}} />

        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Camarote Pétalo</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
            <img src={imgs[0].src} alt={imgs[0].alt} className="w-full h-full object-cover" />
          </div>

          <div>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold rounded-full px-3 py-1 mb-3">Madera + Metal</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camarote Pétalo</h1>
            <p className="text-gray-500 font-medium mb-4">Estructura metálica negra con detalles decorativos de madera</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              El <strong>Camarote Pétalo</strong> combina la resistencia del acero negro con detalles de madera natural en forma de pétalo integrados en la cabecera y piecera. Ideal para dormitorios que buscan un equilibrio entre lo industrial y lo cálido.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-gray-400 font-medium">Nivel inferior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-gray-400 font-medium">Nivel superior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-amber-600 font-medium">Detalle</p>
                <p className="text-amber-800 font-bold text-sm">Madera pétalo</p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
              Escalera soldada en respaldo incluida. Escalera lateral y baranda se venden por separado.
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-green-800 font-bold">Pago contra entrega</p>
              <p className="text-green-600 text-sm">Despacho {formatPrice(SITE_CONFIG.despacho.precio)} · Solo Santiago</p>
            </div>

            <div className="flex flex-col gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
                Consultar precio por WhatsApp
              </a>
              <Link href="/cotizar" className="w-full text-center py-3.5 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-semibold rounded-full transition-colors">
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>


        <div className="prose prose-gray max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué es el Camarote Pétalo?</h2>
          <p className="text-gray-600 leading-relaxed">
            El <strong>camarote pétalo</strong> es una variante del camarote metálico estándar que incorpora detalles decorativos de madera natural en forma de pétalo en la cabecera y piecera de la estructura. El resultado es una combinación que rompe la frialdad del metal con la calidez de la madera.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">¿Para quién es ideal?</h2>
          <ul className="text-gray-600">
            <li><strong>Dormitorios de niñas y adolescentes</strong> que buscan un camarote con personalidad y detalle decorativo</li>
            <li><strong>Piezas que quieren combinar industrial con cálido</strong> — negro + madera es una combinación muy popular en decoración actual</li>
            <li><strong>Familias que no quieren un camarote "genérico"</strong> y buscan algo diferenciado sin pagar precios premium</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">Medidas disponibles</h2>
          <p className="text-gray-600 leading-relaxed">
            El Camarote Pétalo está disponible en <strong>1 plaza</strong> (90 cm de ancho) y <strong>1,5 plazas</strong> (105 cm). El costo adicional por la versión de 1,5 plazas es de $15.000 CLP.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Te interesa el Camarote Pétalo?</h2>
          <p className="text-gray-600 text-sm mb-5">Escríbenos por WhatsApp y te cotizamos de inmediato.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
            Cotizar Camarote Pétalo
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/camarote-petalo-nido", label: "Pétalo Nido" },
              { href: "/camarote-nido", label: "Camarote Nido" },
              { href: "/camarote-una-plaza", label: "Camarote 1 Plaza" },
              { href: "/camarote-con-escritorio", label: "Con Escritorio" },
            ].map((p) => (
              <Link key={p.href} href={p.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all text-center">
                <p className="text-sm font-medium text-gray-700">{p.label}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
