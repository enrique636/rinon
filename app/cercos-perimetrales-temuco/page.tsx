import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Temuco y La Araucanía — Fabricante Chile",
  description: "Cercos perimetrales metálicos para Temuco, Osorno, Valdivia y La Araucanía. Fabricante en Santiago, despacho a todo el sur de Chile. Reja tubular y portones a medida.",
  keywords: ["cercos perimetrales temuco", "reja metalica temuco", "cerco perimetral araucania", "rejas metalicas osorno", "cerco perimetral valdivia", "fabrica cercos sur chile", "rejas metalicas temuco", "cerco metalico temuco", "portones metalicos temuco"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-temuco" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosTemucoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Temuco</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho sur de Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Temuco y La Araucanía</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas tubulares, mallas separadoras y portones metálicos en Santiago y despachamos a Temuco, Angol, Villarrica, Osorno, Valdivia y todo el sur de Chile. Para zonas con alta humedad recomendamos tratamiento anticorrosivo reforzado o galvanizado.
          </p>
          <a href={wa("Hola, necesito cercos perimetrales para Temuco / La Araucanía. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <h3 className="font-bold text-blue-900 mb-2 text-sm">Sur de Chile — alta humedad</h3>
            <p className="text-blue-700 text-xs leading-relaxed">En el sur de Chile la lluvia y la humedad constante aceleran la corrosión. Para cercos en zonas como Temuco, Valdivia y Osorno recomendamos pintura antioxidante de alta durabilidad o galvanizado en caliente para proyectos expuestos al clima permanentemente.</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades que atendemos en el sur</h2>
          <div className="flex flex-wrap gap-2">
            {["Temuco","Villarrica","Angol","Nueva Imperial","Lautaro","Victoria","Traiguén","Osorno","Valdivia","La Unión","Río Bueno","Puerto Montt","Castro","Ancud"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Ver todos los cercos", desc: "Catálogo completo" },
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Todos los tipos" },
            { href: "/cercos-perimetrales-concepcion", label: "Cercos Concepción", desc: "También atendemos Biobío" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para empresas y bodegas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Proyecto en Temuco o el sur de Chile</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el tipo de cerco, la ciudad y los metros. Cotizamos con flete incluido.</p>
          <a href={wa("Hola, necesito cercos perimetrales para [CIUDAD SUR DE CHILE]. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
