import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Arica y Parinacota — Fabricante con Despacho",
  description: "Cercos perimetrales metálicos para Arica y la Región de Arica y Parinacota. Fabricante en Santiago con despacho al extremo norte. Rejas galvanizadas para ambiente salino costero.",
  keywords: [
    "cercos perimetrales arica",
    "cerco metalico arica",
    "rejas metalicas arica",
    "reja perimetral arica",
    "cerco galvanizado arica",
    "fabricante cercos arica",
    "cercos region arica parinacota",
    "cerco para casa arica",
    "reja metalica arica chile",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-arica" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesAricaPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Arica y Parinacota?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Arica y Parinacota. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Arica</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho Extremo Norte</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales para Arica y la Región XV
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a Arica, Putre y toda la Región
            de Arica y Parinacota. Ciudad costera con ambiente salino — el galvanizado es la
            elección correcta para estructuras de larga duración.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-900">
            <strong className="block mb-1">Ambiente salino costero — galvanizado obligatorio</strong>
            <p className="text-xs text-amber-800 leading-relaxed">
              Arica está en el litoral del extremo norte. El salitre marino destruye el acero con
              pintura convencional en muy poco tiempo. Para cercos que duren años en Arica,
              el galvanizado en caliente no es una opción — es la única recomendación que hacemos.
            </p>
          </div>

          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para Arica. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA]. Sector: [SECTOR, ARICA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos frecuentes en Arica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cerco perimetral residencial", d: "Para casas de Arica — reja galvanizada de 1,20 a 1,80 m. Resiste el ambiente marino sin mantenimiento por muchos años." },
              { t: "Industria y logística", d: "Arica es zona franca y tiene actividad logística significativa. Cierres para bodegas y empresas del sector industrial." },
              { t: "Colegios y recintos educativos", d: "Rejas perimetrales para establecimientos educativos de la ciudad." },
              { t: "Propiedades en la precordillera", d: "Putre y sectores altiplánicos con condiciones extremas — temperatura, viento y radiación UV. El galvanizado también es lo correcto aquí." },
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
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Imprescindibles en zonas costeras" },
            { href: "/cercos-perimetrales-iquique", label: "Cercos Iquique", desc: "También cubrimos la I Región" },
            { href: "/cercos-perimetrales-antofagasta", label: "Cercos Antofagasta", desc: "Norte minero" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Guía para elegir correctamente" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para Arica</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y sector. Coordinamos el despacho al extremo norte.</p>
          <a
            href={wa("Hola, necesito un cerco perimetral para Arica. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA]. Sector: [SECTOR, ARICA].")}
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
