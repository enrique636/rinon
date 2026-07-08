import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Vitacura — Fabricante con Instalación | Alto Oriente",
  description: "Rejas metálicas en Vitacura. Fabricante directo con instalación. Diseño moderno o clásico para casas del sector alto oriente de Santiago. Pintura electrostática y galvanizado.",
  keywords: [
    "reja metalica vitacura",
    "rejas metalicas vitacura",
    "reja para casa vitacura",
    "portones vitacura",
    "reja de acero vitacura",
    "cerco vitacura santiago",
    "fabricante rejas vitacura",
    "reja diseño vitacura",
    "rejas sector alto oriente",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-vitacura" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasVitacuraPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Vitacura</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Diseño a medida · Alto Oriente RM
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rejas Metálicas en Vitacura — Diseño y Calidad
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas en Vitacura y el sector alto oriente de
            Santiago. Diseño moderno con líneas limpias o clásico con elementos decorativos.
            A medida del frontis, con pintura electrostática al horno o galvanizado.
            Instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja metálica en Vitacura. Metros del frontis: [METROS] ml. Altura: [ALTURA] m. Estilo: [MODERNO / CLÁSICO / CON DISEÑO]. Con portón vehicular: [SÍ / NO].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Vitacura que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Vitacura","Av. Bicentenario","Lo Curro","Las Condes Alto","Av. Vitacura",
              "El Golf","Renaca del Cerro","Av. Costanera Norte","Parcela de Agrado Vitacura"].map((s) => (
              <span key={s} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Estilos más solicitados en Vitacura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Reja minimalista de tubo plano",
                d: "Perfiles planos y barrotes delgados — aspecto muy limpio y contemporáneo. Perfecta para casas de arquitectura moderna en Vitacura.",
              },
              {
                t: "Reja tubular alta con barrotes verticales",
                d: "Altura 1,80–2,00 m con barrotes verticales de tubo cuadrado 1/2\". Da privacidad sin perder visibilidad. Negro mate o antracita.",
              },
              {
                t: "Portón corredizo de diseño",
                d: "Para accesos con poco espacio de vereda. Se puede combinar con vidrio templado o madera en los paneles para un acabado arquitectónico.",
              },
              {
                t: "Reja con hierro forjado decorativo",
                d: "Para casas con arquitectura clásica o mediterránea. Estructura de tubo de acero con elementos de forja integrados — duradero y estético.",
              },
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
            { href: "/rejas-metalicas-las-condes", label: "Rejas Las Condes", desc: "Sector alto oriente vecino" },
            { href: "/rejas-metalicas-la-reina", label: "Rejas La Reina", desc: "Sector oriente RM" },
            { href: "/portones-corredizos", label: "Portones corredizos", desc: "Para accesos sin espacio de barrido" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "El acabado de nuestras rejas" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Vitacura hoy</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros del frontis, altura y estilo. Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito reja metálica en Vitacura. Metros: [METROS] ml. Altura: [ALTURA] m. Estilo: [MODERNO / CLÁSICO]. Con portón: [SÍ / NO].")}
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
