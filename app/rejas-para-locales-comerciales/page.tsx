import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas para Locales Comerciales — Cierres de Seguridad para Negocios",
  description: "Rejas metálicas para locales comerciales en Chile. Fabricante directo. Rejas corredizas, enrollables y fijas para frentes de tienda, galerías y negocios. Instalación incluida.",
  keywords: [
    "rejas para locales comerciales",
    "reja local comercial santiago",
    "reja para negocio metalica",
    "cierre metalico local comercial",
    "reja corrediza local comercial",
    "reja enrollable local chile",
    "rejas para tiendas santiago",
    "reja de seguridad local comercial",
    "cierre frente de local comercial",
    "fabricante rejas locales comerciales chile",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-para-locales-comerciales" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasParaLocalesComercalesPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué tipo de reja se usa en locales comerciales?", acceptedAnswer: { "@type": "Answer", text: "Los locales comerciales usan principalmente tres tipos: reja corrediza (se desliza lateralmente), reja enrollable (sube y baja en espiral) y reja fija con cerrojo (no se mueve, se abre solo la puerta). La elección depende del ancho del local y del flujo diario de apertura/cierre." } },
              { "@type": "Question", name: "¿Cuánto cuesta una reja para local comercial?", acceptedAnswer: { "@type": "Answer", text: "El precio depende del ancho del vano, la altura y el tipo de cierre. Los vanos de 3–5 metros son los más comunes en locales de galería. Cotizamos con el ancho y la altura exactos por WhatsApp el mismo día." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Locales Comerciales</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Cierre de frente · Corrediza o enrollable · Instalación en Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas para Locales Comerciales — Cierres de Seguridad para Negocios</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">El cierre del frente de un local comercial es el primer nivel de seguridad del negocio. Fabricamos rejas corredizas, fijas y enrollables para tiendas, galerías, ferreterías, farmacias y cualquier local que necesite un cierre seguro al terminar la jornada.</p>
          <a href={wa("Hola, necesito cotizar reja para local comercial. Ancho del vano: [ANCHO] m. Altura: [ALTURA] m. Tipo de cierre: [CORREDIZA / ENROLLABLE / FIJA]. Tipo de local: [DATO]. Ubicación: [COMUNA / CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar reja para local</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de cierre para local comercial</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Cómo funciona</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reja corrediza", "Se desliza lateralmente sobre un riel. Requiere espacio lateral libre.", "Locales con vanos anchos y espacio lateral disponible"],
                  ["Reja enrollable", "Sube y se enrolla en un tambor en la parte superior. No necesita espacio lateral.", "Locales sin espacio lateral, galerías, kioscos"],
                  ["Reja fija con puerta", "La reja queda fija — solo se abre una puerta integrada. Cierre permanente.", "Frentes donde no se necesita apertura total diaria"],
                  ["Reja batiente de dos hojas", "Dos hojas que abren hacia adentro o afuera. Ancho total del vano.", "Locales medianos que necesitan apertura total ocasional"],
                ].map(([tipo, como, ideal]) => (
                  <tr key={tipo} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{tipo}</td>
                    <td className="p-3 text-gray-500">{como}</td>
                    <td className="p-3 text-gray-500">{ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-de-seguridad", label: "Rejas de seguridad", desc: "Factores de resistencia al forzado" },
            { href: "/rejas-para-puertas", label: "Rejas para puertas", desc: "Protección de acceso peatonal" },
            { href: "/cercos-para-estacionamientos", label: "Cercos para estacionamientos", desc: "Perímetro del patio o estacionamiento" },
            { href: "/instalacion-de-rejas", label: "Instalación de rejas", desc: "Cómo instalamos en local comercial" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza el cierre de tu local</h2>
          <p className="text-gray-400 text-sm mb-5">Ancho del vano, altura y tipo de cierre. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja para local comercial. Ancho: [ANCHO] m. Altura: [ALTURA] m. Tipo: [CORREDIZA / ENROLLABLE / FIJA]. Ubicación: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
