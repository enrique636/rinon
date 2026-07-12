import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Quilicura — Industrial y Residencial | Rinon.cl",
  description: "Rejas metálicas en Quilicura. Fabricante directo con instalación. Cercos industriales para el Parque Industrial de Quilicura y rejas residenciales para todas las villas. Cotiza hoy.",
  keywords: ["reja metalica quilicura", "rejas metalicas quilicura", "cerco industrial quilicura", "reja tubular quilicura", "fabrica rejas quilicura", "portones quilicura", "cierre perimetral quilicura", "reja parque industrial quilicura"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-quilicura" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasQuilicuraPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan rejas metálicas en Quilicura?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos e instalamos rejas metálicas en Quilicura. Cotizamos el mismo día — necesitamos el ancho y alto del frente, más si incluye portón. Pintamos al horno para mayor durabilidad." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la instalación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación tarda entre 3 y 7 días hábiles según el volumen del pedido. La instalación se realiza en un día para la mayoría de los proyectos residenciales. Coordina la fecha al momento de confirmar el pedido." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Quilicura</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · Quilicura</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Quilicura — Industrial y Residencial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Quilicura concentra uno de los parques industriales más grandes de Santiago y una alta densidad residencial. Fabricamos rejas metálicas a medida para ambos sectores — industrial de alto calibre para empresas del parque, y residencial estándar para las villas de la comuna.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Quilicura. Las medidas son: [METROS] ml x [ALTURA] m. Uso: [RESIDENCIAL / INDUSTRIAL / BODEGA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar en Quilicura
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Industrial o residencial — opciones distintas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Rejas industriales Parque Quilicura", d: "Para empresas, bodegas y galpones del sector industrial. Tubo cuadrado 2\" a 3\", portones de acceso vehicular, mallas separadoras interiores." },
              { t: "Reja de frontis residencial", d: "Para las villas de Quilicura — Lo Boza, Villa Miraflores, Las Lilas y demás sectores residenciales. Tubo de 1\" a 1,5 m de alto." },
              { t: "Cerco perimetral industrial", d: "Cierre completo del perímetro de empresas del parque industrial. Reja alta con postes anclados y portones de acceso." },
              { t: "Portón vehicular", d: "Accesos para empresas con flujo de camiones. Corredizos para vanos amplios, batientes para accesos secundarios." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Quilicura que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Parque Industrial Quilicura","Lo Boza","Villa Las Lilas","Villa Miraflores","El Carmen","Las Rosas","San Martín","Enea","Pudahuel Norte","Las Rejas Sur"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierre-perimetral-industrial", label: "Cierre perimetral industrial", desc: "Guía para industrias" },
            { href: "/rejas-metalicas-pudahuel", label: "Rejas Pudahuel", desc: "También atendemos Pudahuel" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para empresas y bodegas" },
            { href: "/reja-metalica-santiago", label: "Rejas en toda la RM", desc: "Todas las comunas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Quilicura hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Industrial o residencial — metros, altura y sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja metálica en Quilicura. Medidas: [METROS] ml, [ALTURA] m. Sector: [PARQUE INDUSTRIAL / VILLA / OTRO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
