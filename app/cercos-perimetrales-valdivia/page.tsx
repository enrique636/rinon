import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Valdivia — Galvanizado para Zona Lluviosa",
  description: "Cercos perimetrales metálicos para Valdivia y la Región de Los Ríos. Fabricante en Santiago con despacho al sur. Rejas galvanizadas recomendadas para la zona más lluviosa de Chile.",
  keywords: [
    "cercos perimetrales valdivia",
    "cerco metalico valdivia",
    "reja perimetral valdivia",
    "cerco galvanizado valdivia",
    "fabricante cercos valdivia",
    "rejas metalicas valdivia",
    "cercos region los rios",
    "cerco metalico para lluvia",
    "reja galvanizada valdivia",
  ],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-valdivia" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesValdiviaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Valdivia</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho Región Los Ríos</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales para Valdivia y la Región de Los Ríos
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a Valdivia, La Unión, Panguipulli
            y toda la Región de Los Ríos. Para casas, parcelas, industria forestal y agrícola.
            En la zona más lluviosa de Chile, el acabado es determinante para la durabilidad.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-900">
            <strong className="block mb-1">Zona muy húmeda — recomendamos galvanizado</strong>
            <p className="text-xs text-blue-700 leading-relaxed">
              Valdivia registra más de 2.500 mm de lluvia anuales — una de las ciudades más lluviosas
              del mundo. La humedad constante oxida el acero sin protección en pocos años. Para
              cercos perimetrales en la Región de Los Ríos recomendamos galvanizado en caliente
              sobre pintura electrostática.
            </p>
          </div>

          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para Valdivia / Región Los Ríos. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / INDUSTRIA]. Ciudad: [CIUDAD].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos frecuentes en la Región de Los Ríos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cerco perimetral de casa", d: "Frontis y perímetro de casas urbanas en Valdivia, La Unión y Panguipulli. Reja galvanizada de 1,20 a 1,80 m." },
              { t: "Cerco de parcelas y fundos", d: "La región tiene actividad agrícola y ganadera. Cercos de malla con tubo galvanizado para delimitar predios rurales." },
              { t: "Industria forestal y maderera", d: "Empresas del sector forestal necesitan cierres perimetrales resistentes a la humedad permanente." },
              { t: "Infraestructura turística", d: "Cabañas, lodges y hospedajes en zonas lacustres (Panguipulli, Lago Ranco) necesitan cercos que no requieran mantenimiento constante." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades de la Región de Los Ríos con despacho</h2>
          <div className="flex flex-wrap gap-2">
            {["Valdivia","La Unión","Panguipulli","Lago Ranco","Los Lagos","Futrono","Máfil","Mariquina","Lanco","Río Bueno"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Mejor opción para zonas húmedas" },
            { href: "/cercos-perimetrales-puerto-montt", label: "Cercos Puerto Montt", desc: "También atendemos Los Lagos" },
            { href: "/cercos-perimetrales-temuco", label: "Cercos Temuco", desc: "La Araucanía" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para Valdivia</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura, uso y ciudad. Coordinamos el despacho a la región.</p>
          <a
            href={wa("Hola, necesito un cerco perimetral para Valdivia / Los Ríos. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / EMPRESA]. Ciudad: [CIUDAD].")}
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
