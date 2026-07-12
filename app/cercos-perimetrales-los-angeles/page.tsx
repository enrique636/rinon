import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Los Ángeles — Fabricante con Despacho al Biobío",
  description: "Cercos perimetrales metálicos para Los Ángeles y la Provincia de Biobío. Fabricante en Santiago con despacho. Rejas galvanizadas para el clima lluvioso de la Región del Biobío.",
  keywords: [
    "cercos perimetrales los angeles",
    "cerco metalico los angeles biobio",
    "reja perimetral los angeles",
    "rejas metalicas los angeles chile",
    "cerco para casa los angeles",
    "fabricante cercos los angeles biobio",
    "cerco galvanizado los angeles",
    "cerco perimetral provincia biobio",
    "portones los angeles biobio",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-los-angeles" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesLosAngelesPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican e instalan cercos perimetrales en Los Ángeles?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos los cercos en nuestro taller en Santiago y realizamos la instalación en Los Ángeles. Cotizamos el mismo día — solo necesitamos los metros lineales, la altura y el tipo de uso (casa, condominio o industria)." } },
          { "@type": "Question", name: "¿Cuánto cuesta el metro lineal de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "El precio varía según el tipo: malla eslabonada es la opción más económica, tubo estructural pintado al horno tiene un costo medio, y el cerco galvanizado es el de mayor durabilidad y costo. Cotiza por WhatsApp con los metros y altura para obtener un precio exacto." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Los Ángeles</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante en Santiago · Despacho Provincia del Biobío
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales para Los Ángeles y la Provincia del Biobío
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a Los Ángeles, Mulchén,
            Santa Bárbara, Nacimiento y toda la Provincia del Biobío. Zona de alta
            pluviosidad — galvanizado en caliente para cercos que duren sin mantenimiento.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-900">
            <strong className="block mb-1">Zona lluviosa — galvanizado recomendado</strong>
            <p className="text-xs text-blue-700 leading-relaxed">
              Los Ángeles recibe más de 1.100 mm de lluvia anual. La humedad constante
              deteriora el acero con pintura convencional. Para cercos en la Provincia del Biobío
              recomendamos galvanizado en caliente sobre cualquier otra opción de acabado.
            </p>
          </div>

          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para Los Ángeles / Biobío. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / EMPRESA]. Ciudad: [CIUDAD].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades de la Provincia del Biobío que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Los Ángeles","Mulchén","Nacimiento","Santa Bárbara","Quilaco",
              "Quilleco","San Rosendo","Antuco","Laja","Cabrero"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-concepcion", label: "Cercos Concepción", desc: "Capital regional del Biobío" },
            { href: "/cercos-perimetrales-chillan", label: "Cercos Chillán", desc: "Región del Ñuble" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El acabado correcto para el sur" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Cuándo usar cada uno" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para Los Ángeles</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros, altura y ciudad. Coordinamos el despacho a Los Ángeles y el Biobío.
          </p>
          <a
            href={wa("Hola, necesito un cerco perimetral galvanizado para Los Ángeles / Biobío. Metros: [METROS] ml. Altura: [ALTURA] m. Ciudad: [CIUDAD].")}
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
