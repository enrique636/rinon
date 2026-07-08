import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica San Bernardo — Fabricante con Instalación | Buenos Pal Catre",
  description: "Rejas metálicas a medida en San Bernardo. Fabricante directo con instalación. Reja tubular residencial, industrial y cierres comerciales. Cotiza hoy por WhatsApp.",
  keywords: ["reja metalica san bernardo", "rejas metalicas san bernardo", "reja de fierro san bernardo", "reja tubular san bernardo", "rejas metalicas buin", "fabrica rejas san bernardo", "cerco metalico san bernardo", "portones san bernardo", "rejas metalicas paine"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-san-bernardo" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasSanBernardoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Bernardo</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · San Bernardo</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en San Bernardo — Fabricante Directo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            San Bernardo combina una alta densidad residencial con industria consolidada. Fabricamos e instalamos rejas tubulares para frontis de casas, cierres industriales y portones vehiculares en toda la comuna — incluyendo Buin, Paine y el sector sur de la RM.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en San Bernardo. Las medidas son: [METROS] ml x [ALTURA] m.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar en San Bernardo
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de San Bernardo y alrededores</h2>
          <div className="flex flex-wrap gap-2">
            {["San Bernardo Centro","Villa Presidente Frei","Parque Industrial El Castillo","Lo Herrera","Nos","Buin","Paine","Chada","El Peral","Villa Presidente Ibáñez","Las Rosas"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones más frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis residencial", d: "Alta demanda en villas y poblaciones de San Bernardo. Tubo cuadrado de 1\" a 1,5 m de alto. Pintura negra o gris." },
              { t: "Cerco industrial", d: "Para el Parque Industrial El Castillo y empresas de la zona sur. Tubo de mayor calibre, portón de acceso incluido." },
              { t: "Cierre de sitio rural", d: "San Bernardo tiene sectores semirrurales en la periferia. Cercos perimetrales para terrenos y parcelas de agrado cercanas." },
              { t: "Portón vehicular", d: "Para casas con espacio de estacionamiento. Batiente simple o doble. Precio incluido en cotización del frontis." },
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
            { href: "/reja-metalica-santiago", label: "Rejas en toda la RM", desc: "Todas las comunas" },
            { href: "/rejas-metalicas-puente-alto", label: "Rejas Puente Alto", desc: "Zona sur RM" },
            { href: "/cercos-para-parcelas", label: "Cercos para parcelas", desc: "Guía para predios rurales" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para empresas y galpones" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en San Bernardo hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura, tipo de uso y sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja metálica en San Bernardo. Medidas: [METROS] ml, [ALTURA] m. Sector: [SECTOR]. Uso: [RESIDENCIAL/INDUSTRIAL].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
