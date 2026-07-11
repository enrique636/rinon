import type { Metadata } from "next";
import Link from "next/link";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Militar Metálico Gris Chile | Institucional Reforzado — Despacho Nacional",
  description: "Camarote metálico gris reforzado para uso institucional. Para Ejército, Carabineros, Gendarmería, Armada, Fuerza Aérea, Bomberos y PDI. Fabricado en Chile.",
  keywords: [
    "camarote militar",
    "camarote militar chile",
    "camarote gris institucional",
    "camarote para cuartel",
    "camarote carabineros",
    "camarote ejercito chile",
    "camarote gendarmeria",
    "camarote armada chile",
    "camarote fuerza aerea",
    "camarote bomberos chile",
    "camarote metalico gris",
    "camarote institucional reforzado",
    "camarote para academia policial",
    "camarote fuerzas armadas chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-militar" },
};

const imgs = [
  { src: "/images/camarotes/camarote-militar-metalico-gris.jpg", alt: "Camarote Militar metálico gris — uso institucional" },
  { src: "/images/camarotes/camarote-militar-ejercito-de-chile.jpg", alt: "Camarote Militar Ejército de Chile — foto real" },
  { src: "/images/camarotes/camarote-carabineros-de-chile.jpg", alt: "Cama gris institucional Carabineros de Chile — foto real" },
];

const faqs = [
  {
    q: "¿Qué diferencia al Camarote Militar del estándar?",
    a: "El Camarote Militar tiene estructura de acero gris con tubo de mayor grosor y construcción más robusta. Está diseñado para soportar el uso intensivo en cuarteles e instalaciones institucionales.",
  },
  {
    q: "¿Lo compran instituciones del Estado?",
    a: "Sí. Es el modelo más utilizado por Carabineros, Gendarmería, Ejército, Armada, Fuerza Aérea, Bomberos y PDI. Trabajamos con contratistas y proveedores de instituciones del Estado.",
  },
  {
    q: "¿Hacen cotizaciones para licitaciones?",
    a: "Sí. Emitimos facturas y podemos participar como proveedores. Contáctanos por WhatsApp con los detalles del requerimiento.",
  },
  {
    q: "¿La escalera lateral viene incluida?",
    a: "El camarote incluye escalera soldada en el respaldo. La escalera lateral y la baranda de seguridad se venden por separado.",
  },
  {
    q: "¿Despachan a regiones?",
    a: "Sí, coordinamos despacho a todo Chile. El costo depende de la región de destino. Consúltanos por WhatsApp.",
  },
];

export default function CamaroteMilitarPage() {
  const waUrl = getProductWhatsAppUrl("Camarote Militar");

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote Militar", item: "https://rinon.cl/camarote-militar" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote Militar Metálico Gris",
          description: "Camarote metálico gris reforzado para uso institucional. Ejército, Carabineros, Gendarmería, Armada, Fuerza Aérea, Bomberos. Fabricado en Chile.",
          brand: { "@type": "Brand", name: "Rinon.cl" },
          material: "Acero",
          color: "Gris",
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
          <span className="text-gray-700 font-medium">Camarote Militar</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="grid grid-cols-2 gap-2">
            {imgs.slice(0, 4).map((img) => (
              <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div>
            <span className="inline-block bg-gray-700 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">Uso Institucional · Reforzado</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camarote Militar</h1>
            <p className="text-gray-500 font-medium mb-4">Estructura metálica gris reforzada para instituciones uniformadas</p>
            <p className="text-gray-600 leading-relaxed mb-6">
              El <strong>Camarote Militar</strong> es la versión reforzada de nuestro camarote metálico, fabricado en <strong>acero gris</strong> con tubo de mayor grosor. Diseñado para el uso intensivo en cuarteles, academias y recintos institucionales de Carabineros, Ejército, Gendarmería, Armada, Fuerza Aérea, Bomberos y PDI.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {[
                { label: "Color", value: "Gris metálico" },
                { label: "Estructura", value: "Acero reforzado" },
                { label: "Uso", value: "Institucional" },
                { label: "Despacho", value: "Todo Chile" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                  <p className="text-xs text-gray-400 font-medium">{item.label}</p>
                  <p className="text-gray-700 font-bold text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 mb-6 text-sm text-gray-700">
              Escalera soldada en respaldo incluida. Escalera lateral y baranda se venden por separado.
            </div>

            <div className="flex flex-col gap-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
                Cotizar por WhatsApp
              </a>
              <Link href="/cotizar" className="w-full text-center py-3.5 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-semibold rounded-full transition-colors">
                Solicitar cotización institucional
              </Link>
            </div>
          </div>
        </div>


        <div className="prose prose-gray max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué instituciones usan el Camarote Militar?</h2>
          <ul className="text-gray-600">
            <li><strong>Carabineros de Chile</strong> — cuarteles, comisarías y academias policiales</li>
            <li><strong>Ejército de Chile</strong> — regimientos y bases militares</li>
            <li><strong>Gendarmería de Chile</strong> — recintos penitenciarios y academias</li>
            <li><strong>Armada de Chile</strong> — bases navales y buques de la armada</li>
            <li><strong>Fuerza Aérea de Chile</strong> — bases y escuelas de aviación</li>
            <li><strong>Bomberos de Chile</strong> — cuarteles de guardia</li>
            <li><strong>PDI</strong> — residencias y academias de investigaciones</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900">Características técnicas</h2>
          <p className="text-gray-600 leading-relaxed">
            El camarote militar está fabricado en acero de mayor calibre que el estándar, pintado en gris metálico con tratamiento anticorrosivo. La estructura está diseñada para soportar peso adicional y uso intensivo durante años sin deterioro.
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 text-center text-white mb-12">
          <h2 className="text-xl font-bold mb-2">¿Necesitas camarotes para tu institución?</h2>
          <p className="text-gray-400 text-sm mb-5">Emitimos facturas y cotizamos por volumen para licitaciones.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full transition-colors">
            Cotizar Camarote Militar
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
              { href: "/cama-institucional-metalica", label: "Cama Institucional" },
              { href: "/camarote-faenero", label: "Camarote Faenero" },
              { href: "/camarotes-militares", label: "Camarotes Militares" },
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
