import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Cerrillos — Industrial y Residencial | Fabricante",
  description: "Rejas metálicas en Cerrillos. Fabricante directo con instalación. Cercos industriales para el parque industrial y rejas residenciales. Portones vehiculares y accesos. Cotiza hoy.",
  keywords: [
    "reja metalica cerrillos",
    "rejas metalicas cerrillos",
    "cerco industrial cerrillos",
    "reja parque industrial cerrillos",
    "portones cerrillos",
    "cierre perimetral cerrillos",
    "fabricante rejas cerrillos",
    "reja para bodega cerrillos",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-cerrillos" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasCerrillosPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cerrillos</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Cerrillos</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Cerrillos — Industrial y Residencial</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en Cerrillos — para empresas del parque
            industrial, bodegas y uso residencial. Cierres perimetrales, portones de acceso y
            rejas de frontis a medida.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Cerrillos. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [INDUSTRIAL / RESIDENCIAL / BODEGA]. Sector: [PARQUE INDUSTRIAL / VILLA / OTRO].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Cerrillos que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Parque Industrial Cerrillos","Ciudad Empresarial","Cerrillos Industrial","Lo Valledor","Portales","El Mariscal","Las Rosas","Av. Pedro Aguirre Cerda"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Industrial o residencial — opciones distintas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cerco industrial Cerrillos", d: "Para empresas, bodegas y galpones del parque industrial. Tubo cuadrado 2\"–3\", postes hormigonados, portones corredizos." },
              { t: "Reja residencial Cerrillos", d: "Para las villas y casas de la zona residencial. Tubo de 1\"–1,5\", diseño de frontis, portón vehicular y puerta peatonal." },
              { t: "Portón industrial", d: "Accesos para flujo de camiones y maquinaria. Corredizos de 4 a 6 m de ancho, estructura reforzada." },
              { t: "Mallas separadoras interiores", d: "Para dividir zonas dentro de bodegas o galpones del parque industrial." },
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
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Guía para industrias" },
            { href: "/pintura-electrostatica-cerrillos", label: "Pintura electrostática Cerrillos", desc: "Servicio de pintura al horno" },
            { href: "/rejas-metalicas-maipu", label: "Rejas Maipú", desc: "Zona poniente cercana" },
            { href: "/reja-metalica-santiago", label: "Todas las comunas RM", desc: "Mapa completo de cobertura" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Cerrillos hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura, tipo de uso y sector. Respondemos el mismo día.</p>
          <a
            href={wa("Hola, necesito reja metálica en Cerrillos. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [INDUSTRIAL / RESIDENCIAL]. Sector: [PARQUE / VILLA / OTRO].")}
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
