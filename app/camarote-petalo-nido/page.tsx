import type { Metadata } from "next";
import Link from "next/link";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Pétalo Nido | 3 Camas + Detalles de Madera — Entrega Santiago",
  description: "Camarote metálico negro con detalles de madera pétalo y cama nido deslizante. 3 camas en 1 estructura decorativa. Fabricado en Chile. Pago contra entrega Santiago.",
  keywords: [
    "camarote petalo nido",
    "camarote petalo con nido",
    "camarote con nido y madera",
    "camarote 3 camas petalo",
    "cama nido petalo metalica",
    "camarote decorado con nido",
    "camarote petalo nido santiago",
    "camarote nido metalico decorado",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-petalo-nido" },
};

const imgs = [
  { src: "/images/camarotes/camarote-petalo-nido-estructura-completa.jpg", alt: "Camarote Pétalo Nido estructura completa fondo blanco" },
  { src: "/images/camarotes/camarote-petalo-nido-habitacion-nina.jpg", alt: "Camarote Pétalo Nido en habitación de niña rosada" },
  { src: "/images/camarotes/camarote-nido-pieza-compartida-hermanas.jpg", alt: "Camarote Pétalo Nido pieza compartida hermanas" },
  { src: "/images/camarotes/camarote-nido-infantil-celeste.jpg", alt: "Camarote Pétalo Nido habitación infantil celeste" },
  { src: "/images/camarotes/camarote-petalo-nido-dormitorio-moderno.jpg", alt: "Camarote Pétalo Nido dormitorio moderno" },
  { src: "/images/camarotes/camarote-metalico-nido-estilo-nordico.jpg", alt: "Camarote Pétalo Nido estilo nórdico" },
  { src: "/images/camarotes/camarote-petalo-nido-juvenil-led.jpg", alt: "Camarote Pétalo Nido juvenil con LED" },
  { src: "/images/camarotes/camarote-petalo-nido-blanco-premium.jpg", alt: "Camarote Pétalo Nido premium blanco" },
];

const faqs = [
  {
    q: "¿Qué combina el Camarote Pétalo Nido?",
    a: "Combina dos características: los detalles decorativos de madera en forma de pétalo (integrados en la estructura metálica negra) y una cama nido deslizante que se guarda bajo la cama inferior. El resultado son 3 camas con diseño decorativo.",
  },
  {
    q: "¿Cuándo se muestra la cama nido?",
    a: "La cama nido tiene ruedas y se desliza hacia afuera en segundos. Durante el día queda guardada bajo la cama inferior. Por la noche se saca y queda al nivel del piso.",
  },
  {
    q: "¿Los detalles de madera se mantienen con el tiempo?",
    a: "Sí. La madera está tratada para uso en interiores y está anclada a la estructura metálica de forma permanente.",
  },
  {
    q: "¿La escalera lateral viene incluida?",
    a: "El camarote incluye escalera soldada en el respaldo. La escalera lateral y la baranda de seguridad se venden por separado como accesorios opcionales.",
  },
  {
    q: "¿Cuánto cuesta el despacho?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. Pago contra entrega.`,
  },
];

export default function CamarotePetaloNidoPage() {
  const waUrl = getProductWhatsAppUrl("Camarote Pétalo Nido");

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote Pétalo Nido", item: "https://rinon.cl/camarote-petalo-nido" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote Pétalo Nido Metálico",
          description: "Camarote metálico negro con detalles de madera pétalo y cama nido deslizante. 3 camas en 1 estructura.",
          brand: { "@type": "Brand", name: "Rinon.cl" },
          material: "Acero y madera",
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
          <span className="text-gray-700 font-medium">Camarote Pétalo Nido</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="grid grid-cols-2 gap-2">
            {imgs.slice(0, 4).map((img) => (
              <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div>
            <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold rounded-full px-3 py-1 mb-3">3 en 1 + Madera</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camarote Pétalo Nido</h1>
            <p className="text-gray-500 font-medium mb-4">Detalles de madera + cama nido deslizante — 3 camas en 1</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              El <strong>Camarote Pétalo Nido</strong> combina lo mejor de dos modelos: los detalles decorativos de madera del Pétalo y la cama nido deslizante que añade una tercera cama al espacio. Perfecto para dormitorios que necesitan capacidad y estilo.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-gray-400 font-medium">Superior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-gray-400 font-medium">Inferior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-green-500 font-medium">Nido</p>
                <p className="text-green-700 font-bold text-sm">1 plaza extra</p>
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          {imgs.slice(4).map((img) => (
            <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="prose prose-gray max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué hace único al Camarote Pétalo Nido?</h2>
          <p className="text-gray-600 leading-relaxed">
            Es el único camarote que combina diseño decorativo de madera con la funcionalidad de la cama nido. Mientras que el <strong>camarote nido</strong> estándar prioriza la capacidad, el <strong>camarote pétalo nido</strong> añade los detalles de madera que lo convierten en una pieza que destaca estéticamente.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">¿Para quién es ideal?</h2>
          <ul className="text-gray-600">
            <li><strong>Familias con 3 hijos</strong> que quieren capacidad sin sacrificar el diseño del dormitorio</li>
            <li><strong>Dormitorios de niñas</strong> que buscan algo diferente al camarote estándar</li>
            <li><strong>Piezas de visita</strong> con capacidad flexible y buen diseño</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 text-center mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Te interesa el Camarote Pétalo Nido?</h2>
          <p className="text-gray-600 text-sm mb-5">Escríbenos y te cotizamos de inmediato. Pago contra entrega en Santiago.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
            Cotizar Pétalo Nido
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
              { href: "/camarote-petalo", label: "Camarote Pétalo" },
              { href: "/camarote-nido", label: "Camarote Nido" },
              { href: "/camarote-triple", label: "Camarote Triple" },
              { href: "/camarote-una-plaza", label: "Camarote 1 Plaza" },
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
