import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Lo Prado y Cerro Navia — Fabricante con Instalación",
  description: "Rejas metálicas en Lo Prado y Cerro Navia. Fabricante directo con instalación incluida. Frontis residencial, portón vehicular y puerta peatonal para toda la zona poniente de Santiago.",
  keywords: [
    "reja metalica lo prado",
    "rejas metalicas lo prado",
    "reja metalica cerro navia",
    "rejas cerro navia",
    "cerco lo prado santiago",
    "portones lo prado",
    "reja para casa lo prado",
    "reja para casa cerro navia",
    "fabricante rejas zona poniente",
  ],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-lo-prado" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasLoPradoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Lo Prado / Cerro Navia</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Instalación incluida · Zona Poniente RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Lo Prado y Cerro Navia</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en Lo Prado, Cerro Navia y la zona poniente de
            Santiago. Frontis de casa, portón vehicular y puerta peatonal — a medida, con pintura
            electrostática al horno, instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Lo Prado / Cerro Navia. Metros: [METROS] ml. Altura: [ALTURA] m. Con portón vehicular: [SÍ / NO]. Sector: [VILLA / CALLE].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Lo Prado y Cerro Navia que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Lo Prado","Cerro Navia","Pudahuel Sur","Villa Los Aromos","Villa Cordillera","Lo Amor","Juan Antonio Ríos","Maule","Cerrillo Portales","Yungay Poniente"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que incluye un frontis completo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja perimetral", d: "Los metros lineales frente a la calle. Tubo cuadrado de 1\", barrotes verticales, acabado negro electrostático." },
              { t: "Portón vehicular", d: "Para el acceso del auto. Batiente doble o corredizo según el espacio disponible frente a la casa." },
              { t: "Puerta peatonal", d: "Acceso de personas independiente. Con cerradura y mariposa — mismo diseño que la reja." },
              { t: "Pintura al horno", d: "Electrostática al horno, color negro mate o negro brillante. Sin tiempos de secado — dura años." },
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
            { href: "/rejas-metalicas-pudahuel", label: "Rejas Pudahuel", desc: "Zona poniente vecina" },
            { href: "/rejas-metalicas-maipu", label: "Rejas Maipú", desc: "También atendemos Maipú" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Guía completa del frontis" },
            { href: "/reja-metalica-santiago", label: "Todas las comunas RM", desc: "Mapa de cobertura" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Lo Prado o Cerro Navia</h2>
          <p className="text-gray-400 text-sm mb-5">Metros del frontis, altura y sector. Respondemos el mismo día.</p>
          <a
            href={wa("Hola, necesito reja metálica en Lo Prado / Cerro Navia. Metros: [METROS] ml. Altura: [ALTURA] m. Sector: [VILLA / CALLE].")}
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
