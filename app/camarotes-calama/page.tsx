import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Calama — Minería Chuquicamata | Camarotes Chile",
  description:
    "Camarotes metálicos con despacho a Calama. Para campamentos mineros de Chuquicamata, Codelco y contratistas de la zona. Fabricante directo en Chile. Cotización empresarial.",
  keywords: [
    "camarotes Calama",
    "camarotes minería Calama",
    "camas campamento Chuquicamata",
    "camarotes Codelco Calama",
    "literas Calama",
    "equipamiento alojamiento Calama",
    "camarotes faenas Calama",
    "camarotes para contratistas Calama",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-calama" },
  openGraph: {
    title: "Camarotes con Despacho a Calama — Chuquicamata y Zona Minera",
    description: "Fabricante de camarotes metálicos con despacho a Calama para minería y campamentos.",
    type: "website",
    locale: "es_CL",
  },
};

function getCalamaWAUrl(): string {
  const msg = encodeURIComponent("Hola, necesito cotizar camarotes metálicos con despacho a Calama. ¿Pueden ayudarme con información y precios?");
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

export default function CamarotesCalamaPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", name: "Camarotes Chile",
        areaServed: [{ "@type": "City", name: "Calama" }],
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Despachan camarotes a Calama?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a Calama para campamentos mineros, faenas de contratistas y uso residencial. El flete se coordina en camión de carga y se incluye en la cotización." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">Calama</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">
            ⛏️ Chuquicamata · Calama · Norte de Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Camarotes Metálicos en Calama — Campamentos y Faenas
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Fabricamos y despachamos camarotes metálicos a Calama. Principal centro de
            abastecimiento de Chuquicamata y las operaciones de Codelco en la zona.
            Precio de fábrica, sin intermediarios.
          </p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-turno-noche-mineria.jpg" alt="Camarote metálico turno noche minería Calama — despacho zona norte" className="w-full object-cover" loading="lazy" />
          </div>
<a href={getCalamaWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar despacho a Calama
          </a>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Calama: puerta de entrada a Chuquicamata</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Calama es la ciudad base para la operación de Chuquicamata, la mayor mina de
            cobre a cielo abierto del mundo, y el principal nodo logístico de Codelco Norte.
            La ciudad alberga a decenas de empresas contratistas que requieren equipar
            permanentemente campamentos para sus cuadrillas.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Despachamos regularmente a Calama con empresas de transporte terrestre
            especializadas en el corredor Santiago–Antofagasta. El flete se cotiza según
            volumen y se incluye en la propuesta comercial.
          </p>
        </div>
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { titulo: "Para campamentos mineros", items: ["Chuquicamata (Codelco Norte)", "Radomiro Tomic", "Contratistas EPCM", "Empresas de servicios mineros"] },
              { titulo: "Características para faena", items: ["Acero de alto calibre", "Armado en 20-30 min por unidad", "Desmontable y portable", "Resistente a clima árido"] },
            ].map(box => (
              <div key={box.titulo} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">{box.titulo}</h3>
                <ul className="space-y-1">
                  {box.items.map(item => (
                    <li key={item} className="flex gap-2 text-sm text-gray-600"><span className="text-amber-600">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preguntas sobre Calama</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuánto demora el despacho a Calama?", a: "El tiempo de tránsito en camión de carga desde Santiago a Calama es de aproximadamente 3-4 días hábiles. Se suma el tiempo de fabricación, que varía según el volumen del pedido." },
              { q: "¿Pueden llegar directamente a los campamentos de Chuquicamata?", a: "Para campamentos con acceso restringido, necesitamos que la empresa o el administrador coordine el ingreso del camión. Podemos ayudar con la documentación necesaria." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en Calama?</h2>
          <p className="text-amber-200 text-sm mb-5">Para empresa, campamento o residencial. Cotización sin compromiso.</p>
          <a href={getCalamaWAUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
