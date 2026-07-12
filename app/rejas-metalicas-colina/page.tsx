import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Colina — Fabricante con Instalación | Norte RM",
  description: "Rejas metálicas en Colina. Fabricante directo con instalación incluida. Frontis de casa, portón vehicular y cercos perimetrales para el sector norte de la Región Metropolitana.",
  keywords: [
    "reja metalica colina",
    "rejas metalicas colina santiago",
    "reja para casa colina norte rm",
    "fabricante rejas colina",
    "cerco perimetral colina santiago",
    "porton metalico colina",
    "rejas de fierro colina rm",
    "instalacion rejas colina santiago",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-colina" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasColinaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en Colina?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en Colina. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Colina</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Norte RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Colina — Norte de la Región Metropolitana</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Colina tiene una mezcla de casas urbanas, parcelas de agrado y condominios cerrados
            — cada uno con necesidades de cerramiento distintas. Fabricamos rejas de frontis
            para casas urbanas, cercos perimetrales para parcelas y portones de acceso para
            condominios. Todo en tubo de acero estructural con pintura electrostática al horno.
          </p>
          <a href={wa("Hola, necesito cotizar reja o cerco en Colina. Tipo: [REJA DE FRONTIS / CERCO PERIMETRAL / PORTÓN]. Metros: [METROS] ml. Altura: [ALTURA] m. Sector de Colina: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi reja</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Colina que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Colina Centro","Chicureo","Los Trapenses","Piedra Roja","Valle Grande Colina",
              "Las Canteras","El Ingenio Colina","Camino Los Andes","Lonquén Norte",
              "Linderos Norte","Lampa Colina"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Servicios más solicitados en Colina</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cerco perimetral de parcela", d: "Para parcelas de agrado y terrenos rurales — malla de acero tensada con postes en hormigón. Galvanizado disponible para zonas con riego o mayor humedad." },
              { t: "Reja de frontis urbano", d: "Para casas en sectores urbanos de Colina y Chicureo — diseño tubular con portón vehicular y puerta peatonal." },
              { t: "Portón de acceso a condominio", d: "Portones corredizos eléctricos o manuales para el acceso principal de condominios y cierros privados." },
              { t: "Cerco mixto para chacra", d: "Cierre de chacras y propiedades rurales — malla perimetral alta con acceso vehicular en portón doble hoja." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-huechuraba", label: "Rejas Huechuraba", desc: "Norte RM vecino" },
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Guía completa de parcelas de agrado" },
            { href: "/pintura-electrostatica-colina", label: "Pintura electrostática", desc: "Acabado al horno en Colina" },
            { href: "/portones-para-casas", label: "Portones para casas", desc: "Corredizo vs batiente" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza en Colina</h2>
          <p className="text-gray-400 text-sm mb-5">Tipo, metros y sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar en Colina. Tipo: [REJA / CERCO / PORTÓN]. Metros: [METROS]. Sector: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
