import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas para Terraza — Seguridad y Diseño en Terrazas | Santiago",
  description: "Rejas metálicas para terraza en Santiago. Fabricante directo. Rejas de seguridad y barandas decorativas para terrazas de casas y departamentos. A medida con instalación incluida.",
  keywords: [
    "rejas para terraza",
    "reja para terraza exterior",
    "reja metalica terraza santiago",
    "baranda terraza metalica",
    "reja seguridad terraza departamento",
    "reja para terraza precio chile",
    "fabricante rejas terraza santiago",
    "proteccion metalica terraza",
    "reja terraza primer piso",
    "reja decorativa terraza casa",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-para-terraza" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasParaTerrazaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rejas para Terraza</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Terrazas exteriores · Seguridad y diseño · Instalación en Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas para Terraza — Protección en Terrazas Exteriores</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Una terraza exterior necesita una reja que proteja sin encerrar — que combine
            seguridad con diseño y resista la intemperie. Fabricamos rejas para terrazas
            de casas, departamentos y estudios: barandas de seguridad, rejas anti-caída
            y cierres de terraza en acero con pintura electrostática al horno.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja para terraza. Uso: [BARANDA / CIERRE LATERAL / CIERRE COMPLETO]. Medidas: [LARGO x ALTO]. Tipo: [SIMPLE / DECORATIVO / FORJA]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar reja para terraza
          </a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones en terraza</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Baranda perimetral", d: "Cierre del borde de la terraza para seguridad anti-caída. Altura estándar 90–110 cm. Puede ser diseño tubular liso, decorativo o con elementos de forja." },
              { t: "Cierre lateral de terraza", d: "Reja en los laterales de la terraza para dar privacidad respecto al vecino o delimitar el espacio. Generalmente de mayor altura: 1,50–1,80 m." },
              { t: "Cierre de acceso a terraza", d: "Reja o puerta metálica en el acceso desde el exterior a la terraza de primer piso. Protección contra intrusión lateral — complementa la reja de ventana." },
              { t: "Estructura de pergolado o enrejado", d: "Reja horizontal o inclinada sobre la terraza para soporte de plantas trepadoras, sombra o visual. Estructura liviana en tubo o barra de acero." },
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
            { href: "/barandas-metalicas", label: "Barandas metálicas", desc: "Diseño de baranda para terraza" },
            { href: "/rejas-para-balcon", label: "Rejas para balcón", desc: "Protección en balcones de departamento" },
            { href: "/rejas-para-exteriores", label: "Rejas para exteriores", desc: "Acabados resistentes a la intemperie" },
            { href: "/rejas-decorativas", label: "Rejas decorativas", desc: "Diseños ornamentales para terraza" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja de terraza</h2>
          <p className="text-gray-400 text-sm mb-5">Medidas, tipo y uso. Fabricamos e instalamos el mismo día en Santiago.</p>
          <a href={wa("Hola, necesito reja para terraza. Largo: [LARGO] m. Alto: [ALTO] m. Tipo: [BARANDA / CIERRE LATERAL / CIERRE COMPLETO]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
