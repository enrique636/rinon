import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Huechuraba — Industrial y Residencial | Fabricante",
  description: "Rejas metálicas en Huechuraba. Fabricante directo con instalación. Cercos para el Parque de Negocios Huechuraba, empresas del sector y uso residencial. Cotiza hoy.",
  keywords: [
    "reja metalica huechuraba",
    "rejas metalicas huechuraba",
    "cerco huechuraba",
    "cierre perimetral huechuraba",
    "reja parque de negocios huechuraba",
    "portones huechuraba",
    "fabricante rejas huechuraba",
    "reja industrial huechuraba",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-huechuraba" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasHuechubaraPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Huechuraba</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Huechuraba</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Huechuraba — Industrial y Residencial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en Huechuraba para empresas del Parque de
            Negocios, bodegas industriales y uso residencial. Cierre perimetral, portones de acceso
            y rejas de frontis a medida.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Huechuraba. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [EMPRESA / BODEGA / RESIDENCIAL]. Sector: [PARQUE NEGOCIOS / VILLA / OTRO].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Huechuraba que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Parque de Negocios Huechuraba","Av. El Salto","Av. Américo Vespucio Norte","Jorge Alessandri","Lo Cruzat","Jardín Las Mercedes","Los Almendros"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de proyecto en Huechuraba</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Empresas del Parque de Negocios", d: "Oficinas y centros empresariales que necesitan control de acceso vehicular, portones automáticos y cierre del perímetro." },
              { t: "Bodegas y distribuidoras", d: "Cierre perimetral de alto calibre para bodegas logísticas. Portones corredizos para flujo de camiones." },
              { t: "Reja residencial", d: "Para casas y condominios de la zona residencial de Huechuraba — frontis, portón vehicular y acceso peatonal." },
              { t: "Colegios y centros de salud", d: "Recintos educativos y de salud del sector norte que necesitan cerco perimetral y control de acceso." },
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
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Para empresas y bodegas" },
            { href: "/portones-automaticos", label: "Portones automáticos", desc: "Control de acceso vehicular" },
            { href: "/rejas-metalicas-quilicura", label: "Rejas Quilicura", desc: "Zona industrial norte cercana" },
            { href: "/reja-metalica-santiago", label: "Todas las comunas RM", desc: "Cobertura completa" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Huechuraba</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y tipo de uso. Respondemos el mismo día.</p>
          <a
            href={wa("Hola, necesito reja metálica en Huechuraba. Metros: [METROS] ml. Altura: [ALTURA] m. Sector: [PARQUE NEGOCIOS / RESIDENCIAL / OTRO].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
