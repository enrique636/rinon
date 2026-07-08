import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Pudahuel — Fabricante con Instalación | Buenos Pal Catre",
  description: "Rejas metálicas a medida en Pudahuel y Las Barrancas. Fabricante directo con instalación incluida. Reja tubular, cierres industriales y portones. Cotiza hoy.",
  keywords: ["reja metalica pudahuel", "rejas metalicas pudahuel", "reja de fierro pudahuel", "reja frontis pudahuel", "fabrica rejas pudahuel", "cerco metalico pudahuel", "portones pudahuel", "reja industrial pudahuel", "cierre perimetral pudahuel"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-pudahuel" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasPudahuelPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Pudahuel</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · Pudahuel</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Pudahuel — Fabricante Directo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Pudahuel concentra algunos de los parques industriales más grandes de Santiago. Fabricamos e instalamos rejas metálicas industriales y residenciales en toda la comuna — desde las villas de Las Barrancas hasta el sector aeropuerto.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Pudahuel. Las medidas son: [METROS] ml x [ALTURA] m. Uso: [FRONTIS/GALPÓN/BODEGAS].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar en Pudahuel
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Pudahuel que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Las Barrancas","Pudahuel Centro","El Montijo","El Noviciado","Los Libertadores","Villa El Abrazo","Sector Aeropuerto","Parque Industrial El Noviciado","Parque Industrial Valle Grande","Lo Boza"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones más frecuentes en Pudahuel</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Rejas para parques industriales", d: "Cercos perimetrales de empresas en los parques industriales del sector aeropuerto y El Noviciado. Tubo estructural de alto calibre." },
              { t: "Reja de frontis residencial", d: "Para villas de Las Barrancas y sectores residenciales de Pudahuel poniente. Reja tubular de 1\" a 1,8 m de alto." },
              { t: "Mallas para bodegas logísticas", d: "Pudahuel concentra logística y distribución. Mallas separadoras para organizar el interior de las bodegas." },
              { t: "Portones vehiculares industriales", d: "Accesos corredizos para galpones y plantas de distribución cercanas al aeropuerto." },
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
            { href: "/reja-metalica-santiago", label: "Rejas en toda la RM", desc: "Otras comunas de Santiago" },
            { href: "/rejas-metalicas-maipu", label: "Rejas en Maipú", desc: "También atendemos Maipú" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para galpones y bodegas" },
            { href: "/cercos-perimetrales-santiago", label: "Cercos perimetrales", desc: "Cierre completo del predio" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Pudahuel hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Dinos los metros, la altura, el tipo de uso y el sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito una reja metálica en Pudahuel. Medidas: [METROS] ml, [ALTURA] m. Sector: [LAS BARRANCAS / AEROPUERTO / INDUSTRIAL]. Uso: [RESIDENCIAL/INDUSTRIAL].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
