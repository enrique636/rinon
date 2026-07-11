import type { Metadata } from "next";
import Link from "next/link";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Full 2 Plazas | Cama Matrimonial + Escritorio — Único en Chile",
  description: "El único camarote en Chile con cama matrimonial (2 plazas) abajo + cama simple arriba + escritorio full integrado. Para parejas, estudiantes y home office. Santiago.",
  keywords: [
    "camarote escritorio 2 plazas",
    "camarote matrimonial con escritorio",
    "camarote cama doble con escritorio",
    "camarote 2 plazas abajo escritorio",
    "cama matrimonial camarote escritorio",
    "camarote con escritorio full 2 plazas",
    "camarote para pareja con escritorio",
    "camarote home office 2 plazas",
    "camarote unico chile escritorio",
    "camarote dos plazas escritorio metalico",
    "la estrellita camarote escritorio",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-full-2-plazas" },
  openGraph: {
    title: "Camarote Escritorio Full 2 Plazas | Único en Chile — Rinon.cl",
    description: "Cama matrimonial abajo + cama simple arriba + escritorio full. El camarote que nadie más fabrica en Chile.",
    type: "website",
    locale: "es_CL",
  },
};

const imgs = [
  { src: "/images/camarotes/camarote-escritorio-2-plazas-estructura.jpg", alt: "Camarote escritorio full 2 plazas estructura completa" },
  { src: "/images/camarotes/camarote-escritorio-2-plazas-gamer.jpg", alt: "Camarote escritorio 2 plazas setup gamer RGB" },
  { src: "/images/camarotes/camarote-escritorio-2-plazas-home-office.jpg", alt: "Camarote escritorio 2 plazas home office" },
  { src: "/images/camarotes/camarote-escritorio-2-plazas-universitario.jpg", alt: "Camarote escritorio 2 plazas universitario" },
  { src: "/images/camarotes/camarote-escritorio-2-plazas-juvenil.jpg", alt: "Camarote escritorio 2 plazas habitación juvenil" },
  { src: "/images/camarotes/camarote-escritorio-2-plazas-productividad.jpg", alt: "Camarote escritorio 2 plazas productividad" },
  { src: "/images/camarotes/camarote-escritorio-2-plazas-nordico.jpg", alt: "Camarote escritorio 2 plazas estilo nórdico" },
  { src: "/images/camarotes/camarote-escritorio-2-plazas-dormitorio-completo.jpg", alt: "Camarote escritorio 2 plazas dormitorio oficina completo" },
];

const faqs = [
  {
    q: "¿En qué se diferencia del Escritorio Full estándar?",
    a: "La diferencia principal es la cama inferior: el Escritorio Full estándar tiene 1 plaza abajo, mientras que este modelo tiene 2 plazas (cama matrimonial) abajo. La cama superior es de 1 plaza en ambos. El escritorio full es idéntico.",
  },
  {
    q: "¿Es realmente el único en Chile?",
    a: "Hasta donde sabemos, sí. Es un modelo que desarrollamos exclusivamente — no se encuentra en tiendas de retail ni en otros fabricantes. Si lo ves en algún lugar, probablemente viene de nosotros.",
  },
  {
    q: "¿Para quién es ideal?",
    a: "Para parejas jóvenes que necesitan cama matrimonial + escritorio en un espacio pequeño, para adolescentes mayores que quieren cama 2 plazas + área de trabajo, o para quien quiere maximizar un dormitorio-oficina.",
  },
  {
    q: "¿La escalera lateral viene incluida?",
    a: "El camarote incluye escalera soldada en el respaldo. La escalera lateral y la baranda de seguridad se venden por separado.",
  },
  {
    q: "¿Cuánto cuesta el despacho?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. Pago contra entrega.`,
  },
];

export default function CamaroteEscritorioFull2PlazasPage() {
  const waUrl = getProductWhatsAppUrl("Camarote con Escritorio Full 2 Plazas");

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote con Escritorio", item: "https://rinon.cl/camarote-con-escritorio" },
            { "@type": "ListItem", position: 4, name: "Full 2 Plazas", item: "https://rinon.cl/camarote-con-escritorio-full-2-plazas" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote con Escritorio Full 2 Plazas",
          description: "El único camarote en Chile con cama matrimonial (2 plazas) abajo + cama simple arriba + escritorio full integrado. Fabricado exclusivamente por Rinon.cl.",
          brand: { "@type": "Brand", name: "Rinon.cl" },
          material: "Acero",
          color: "Negro",
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
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Full 2 Plazas</span>
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
            <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold rounded-full px-3 py-1 mb-3">Exclusivo — Único en Chile</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camarote con Escritorio Full 2 Plazas</h1>
            <p className="text-gray-500 font-medium mb-4">Cama matrimonial + cama simple + escritorio full en una sola estructura</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              El modelo más exclusivo del catálogo — y probablemente de todo Chile. Combina una <strong>cama de 2 plazas</strong> (matrimonial) abajo, una cama de 1 plaza arriba, y un <strong>escritorio full</strong> con estantes integrado en la misma estructura. Tres funciones en el espacio de una.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <div className="bg-purple-50 border border-purple-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-purple-500 font-medium">Cama inferior</p>
                <p className="text-purple-800 font-bold text-sm">2 plazas (matrimonial)</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-gray-400 font-medium">Cama superior</p>
                <p className="text-gray-700 font-bold text-sm">1 plaza</p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-center">
                <p className="text-xs text-blue-500 font-medium">Escritorio</p>
                <p className="text-blue-800 font-bold text-sm">Full con estantes</p>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6 text-sm text-purple-800">
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
          <h2 className="text-2xl font-bold text-gray-900">El camarote que nadie más fabrica</h2>
          <p className="text-gray-600 leading-relaxed">
            El <strong>Camarote con Escritorio Full 2 Plazas</strong> nació de una necesidad real: familias jóvenes que necesitan cama matrimonial, cama extra para visitas o hijos, y escritorio de trabajo, todo en una habitación pequeña. La solución habitual es comprar tres muebles distintos que no combinan y no aprovechan el espacio vertical. Este camarote lo resuelve en una sola estructura.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">¿Para quién es?</h2>
          <ul className="text-gray-600">
            <li><strong>Parejas jóvenes</strong> que viven en departamento pequeño y necesitan cama matrimonial + escritorio home office</li>
            <li><strong>Adolescentes mayores</strong> que quieren cama de 2 plazas, cama para amigos que se quedan, y escritorio gaming o estudio</li>
            <li><strong>Estudiantes universitarios</strong> que comparten pieza y quieren maximizar el espacio</li>
            <li><strong>Dormitorio-oficina</strong> completo en un solo mueble</li>
          </ul>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 md:p-8 text-center mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">El único de su tipo en Chile</h2>
          <p className="text-gray-600 text-sm mb-5">Consúltanos precio y disponibilidad por WhatsApp.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
            Consultar disponibilidad
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
              { href: "/camarote-con-escritorio-full", label: "Escritorio Full" },
              { href: "/camarote-con-escritorio-economico", label: "Escritorio Eco" },
              { href: "/camarote-2-plazas", label: "Camarote 2 Plazas" },
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
