import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Punta Arenas — Galvanizado para el Extremo Sur",
  description: "Cercos perimetrales metálicos para Punta Arenas y la Región de Magallanes. Fabricante en Santiago con despacho al extremo sur. Galvanizado en caliente para el clima más exigente de Chile.",
  keywords: [
    "cercos perimetrales punta arenas",
    "cerco metalico punta arenas",
    "reja perimetral punta arenas",
    "cerco galvanizado punta arenas",
    "rejas metalicas punta arenas",
    "fabricante cercos punta arenas",
    "cercos region magallanes",
    "cerco para casa punta arenas",
    "reja galvanizada magallanes",
  ],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-punta-arenas" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesPuntaArenasPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Punta Arenas</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho Región Magallanes</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales para Punta Arenas y Magallanes
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a Punta Arenas, Puerto Natales,
            Porvenir y toda la Región de Magallanes. El clima más exigente de Chile requiere el
            acabado más resistente — galvanizado en caliente, sin excepción.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-900">
            <strong className="block mb-1">Clima extremo — solo galvanizado en caliente</strong>
            <p className="text-xs text-blue-700 leading-relaxed">
              Punta Arenas tiene viento constante, lluvias, nieve ocasional y humedad alta durante
              todo el año. Un cerco pintado con pintura convencional se deteriora rápidamente en
              estas condiciones. Solo recomendamos galvanizado en caliente para la Región de
              Magallanes — es la única solución que justifica el costo del despacho.
            </p>
          </div>

          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para Punta Arenas / Magallanes. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / PARCELA / EMPRESA]. Ciudad: [PUNTA ARENAS / PUERTO NATALES / OTRO].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos frecuentes en Magallanes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cerco perimetral de casa", d: "Frontis y perímetro de viviendas en Punta Arenas. El viento patagónico exige postes bien anclados y estructura sólida." },
              { t: "Estancias y predios ganaderos", d: "La Región de Magallanes tiene la ganadería ovina más importante de Chile. Cercos para delimitación de predios en la pampa patagónica." },
              { t: "Infraestructura industrial y portuaria", d: "Punta Arenas tiene actividad portuaria, petrolera y logística. Cierres perimetrales para instalaciones industriales." },
              { t: "Infraestructura turística", d: "Torres del Paine, Puerto Natales y la zona austral tienen lodges y hoteles que necesitan cercos que soporten el clima extremo." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades de Magallanes con despacho</h2>
          <div className="flex flex-wrap gap-2">
            {["Punta Arenas","Puerto Natales","Porvenir","Puerto Williams","Cerro Sombrero","Río Verde","Laguna Blanca"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El único acabado correcto para el sur" },
            { href: "/cercos-perimetrales-puerto-montt", label: "Cercos Puerto Montt", desc: "También cubrimos Los Lagos" },
            { href: "/cercos-perimetrales-valdivia", label: "Cercos Valdivia", desc: "Zona húmeda sur" },
            { href: "/blog/galvanizado-vs-pintado-cuando-elegir", label: "Galvanizado vs pintado", desc: "Por qué el galvanizado en el sur" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para Punta Arenas</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura y ciudad. Coordinamos el despacho a Magallanes.</p>
          <a
            href={wa("Hola, necesito un cerco perimetral galvanizado para Punta Arenas / Magallanes. Metros: [METROS] ml. Altura: [ALTURA] m. Ciudad: [CIUDAD].")}
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
