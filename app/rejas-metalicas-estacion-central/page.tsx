import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Estación Central — Fabricante con Instalación",
  description: "Rejas metálicas en Estación Central. Fabricante directo con instalación. Reja de frontis, portón vehicular y cierre comercial para casas y negocios de la comuna. Cotiza hoy.",
  keywords: ["reja metalica estacion central", "rejas metalicas estacion central", "cerco estacion central", "portones estacion central", "reja para casa estacion central", "reja para negocio estacion central", "fabricante rejas estacion central"],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-estacion-central" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasEstacionCentralPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Estación Central</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Estación Central</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Estación Central</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en Estación Central — para casas, comercios y negocios. Frontis residencial, cierre de local comercial, portón vehicular y accesos peatonales.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Estación Central. Los metros son: [METROS] ml, [ALTURA] m. Uso: [CASA / NEGOCIO / ESTACIONAMIENTO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Estación Central que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Terminal de Buses","Alameda","Yungay","Las Rejas","San Rafael","Villa Francia","Santiago Centro Poniente","Buzeta","Cienfuegos","Balmaceda"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Residencial o comercial — soluciones distintas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis residencial", d: "Para las casas de Estación Central. Tubo cuadrado 1\", altura 1,20–1,80 m, con portón vehicular y puerta peatonal." },
              { t: "Cierre de local comercial", d: "Reja abatible o enrollable para el frontis de tiendas, talleres o negocios. Acceso controlado con candado o pasador." },
              { t: "Portón vehicular", d: "Para estacionamientos de casas o negocios. Batiente doble o corredizo según el ancho del vano y el espacio disponible." },
              { t: "Reja interior", d: "Separaciones interiores, boxes de almacenamiento o protección de áreas dentro de un local o taller." },
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
            { href: "/reja-metalica-santiago", label: "Todas las comunas RM", desc: "Mapa de comunas que cubrimos" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis y jardín residencial" },
            { href: "/portones-residenciales", label: "Portones para casas", desc: "Tipos y diseños disponibles" },
            { href: "/rejas-metalicas-nunoa", label: "Rejas Ñuñoa", desc: "También atendemos Ñuñoa" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Estación Central hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y tipo de uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja metálica en Estación Central. Medidas: [METROS] ml x [ALTURA] m. Tipo: [CASA / LOCAL / OTRO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
