import type { Metadata } from "next";
import Link from "next/link";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Faenero Chile | Para Campamentos y Faenas Mineras — Entrega Nacional",
  description: "Camarote metálico negro para faenas, campamentos mineros, forestales y de construcción. Con parrillas metálicas integradas para almacenamiento de equipos. Fabricado en Chile.",
  keywords: [
    "camarote faenero",
    "camarote para faena",
    "camarote campamento minero",
    "camarote para campamento",
    "camarote minero chile",
    "camarote faena metalico",
    "camarote para construccion",
    "camarote campamento forestal",
    "camarote con parrillas metalicas",
    "camarote para trabajadores chile",
    "camarote faenero precio",
    "camarote industrial metalico",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-faenero" },
};

const imgs = [
  { src: "/images/camarotes/camarote-faenero-metalico-negro.jpg", alt: "Camarote Faenero metálico negro fondo blanco" },
  { src: "/images/camarotes/camarote-faenero-campamento-minero.jpg", alt: "Camarote Faenero en campamento minero" },
  { src: "/images/camarotes/camarote-faenero-campamento-construccion.jpg", alt: "Camarote Faenero campamento de construcción" },
  { src: "/images/camarotes/camarote-faenero-cuartel-carabineros.jpg", alt: "Camarote Faenero en cuartel institucional" },
  { src: "/images/camarotes/camarote-faenero-campamento-forestal.jpg", alt: "Camarote Faenero campamento forestal" },
  { src: "/images/camarotes/camarote-faenero-offshore-industrial.jpg", alt: "Camarote Faenero offshore industrial" },
  { src: "/images/camarotes/camarote-faenero-turno-noche-mineria.jpg", alt: "Camarote Faenero turno de noche minería" },
  { src: "/images/camarotes/camarote-faenero-campamento-premium.jpg", alt: "Camarote Faenero campamento premium corporativo" },
];

const faqs = [
  {
    q: "¿Qué diferencia al Camarote Faenero del estándar?",
    a: "El Camarote Faenero incluye parrillas metálicas integradas en la estructura — rejillas/estantes de metal soldados que sirven para guardar casco, ropa de trabajo, botas y equipos de faena. Es más funcional para uso en campamentos.",
  },
  {
    q: "¿Se puede usar en faenas mineras?",
    a: "Sí, es el modelo más popular para campamentos mineros, de construcción, forestales y cualquier faena que requiera camas resistentes con almacenamiento integrado.",
  },
  {
    q: "¿Hacen pedidos por cantidad para empresas?",
    a: "Sí. Trabajamos con empresas, campamentos y contratistas. Contáctanos por WhatsApp para cotizar por volumen.",
  },
  {
    q: "¿La escalera lateral viene incluida?",
    a: "El camarote incluye escalera soldada en el respaldo. La escalera lateral y la baranda de seguridad se venden por separado.",
  },
  {
    q: "¿Hacen despacho a regiones?",
    a: "Sí, coordinamos despacho a todo Chile. El costo depende de la región de destino. Consúltanos por WhatsApp.",
  },
];

export default function CamaroteFaeneroPage() {
  const waUrl = getProductWhatsAppUrl("Camarote Faenero");

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote Faenero", item: "https://rinon.cl/camarote-faenero" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote Faenero Metálico",
          description: "Camarote metálico para faenas y campamentos con parrillas metálicas integradas. Fabricado en Chile.",
          brand: { "@type": "Brand", name: "Rinon.cl" },
          material: "Acero",
          color: "Negro",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "CLP",
            seller: { "@type": "Organization", name: "Rinon.cl" },
            areaServed: "Chile",
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
          <span className="text-gray-700 font-medium">Camarote Faenero</span>
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
            <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold rounded-full px-3 py-1 mb-3">Campamentos · Faenas · Minería</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camarote Faenero</h1>
            <p className="text-gray-500 font-medium mb-4">Con parrillas metálicas para campamentos y faenas</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              El <strong>Camarote Faenero</strong> es el camarote estándar con parrillas metálicas integradas en la estructura. Diseñado para campamentos mineros, forestales, de construcción y cualquier faena que requiera almacenamiento de equipos de trabajo junto a la cama.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                { label: "Estructura", value: "Acero negro" },
                { label: "Parrillas", value: "Incluidas" },
                { label: "Uso", value: "Campamentos" },
                { label: "Despacho", value: "Todo Chile" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5">
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                  <p className="text-gray-700 font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 text-sm text-orange-800">
              Escalera soldada en respaldo incluida. Escalera lateral y baranda se venden por separado.
            </div>

            <div className="flex flex-col gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
                Cotizar por WhatsApp
              </a>
              <Link href="/cotizar" className="w-full text-center py-3.5 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-semibold rounded-full transition-colors">
                Solicitar cotización empresas
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
          <h2 className="text-2xl font-bold text-gray-900">¿Para qué sirve el Camarote Faenero?</h2>
          <p className="text-gray-600 leading-relaxed">
            El <strong>camarote faenero</strong> fue diseñado para el uso intensivo en campamentos de trabajo. Las parrillas metálicas integradas permiten que cada trabajador tenga su espacio de almacenamiento junto a la cama: casco, botas, chaleco reflectante y ropa de trabajo.
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Sectores que lo usan</h2>
          <ul className="text-gray-600">
            <li><strong>Minería:</strong> campamentos de faena en norte y sur de Chile</li>
            <li><strong>Construcción:</strong> dormitorios de obra para cuadrillas</li>
            <li><strong>Forestal:</strong> campamentos en zonas de tala y reforestación</li>
            <li><strong>Salmonicultura:</strong> barcazas y plantas de procesamiento</li>
            <li><strong>Instituciones:</strong> Carabineros, Gendarmería, Bomberos, Ejército</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">Pedidos por volumen</h2>
          <p className="text-gray-600 leading-relaxed">
            Trabajamos con empresas, contratistas y campamentos que necesitan desde 10 hasta cientos de unidades. Tenemos precios especiales por volumen y coordinamos despacho a cualquier región de Chile.
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 md:p-8 text-center mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">¿Necesitas camarotes para tu faena o campamento?</h2>
          <p className="text-gray-600 text-sm mb-5">Cotizamos por volumen y coordinamos despacho a regiones.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
            Cotizar Camarote Faenero
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
              { href: "/camarote-militar", label: "Camarote Militar" },
              { href: "/cama-institucional-metalica", label: "Cama Institucional" },
              { href: "/camarotes-mineria", label: "Camarotes Minería" },
              { href: "/camarotes-al-por-mayor", label: "Por Mayor" },
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
