import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Salmoneras — Literas para Centros de Cultivo Acuícola | Chile",
  description: "Camarotes metálicos para salmoneras, plantas de proceso y centros de cultivo. Estructura resistente a humedad y ambiente marino. Fabricante. Precio por volumen.",
  keywords: ["camarotes salmoneras","literas salmoneras chile","camarotes centros cultivo salmon","camarotes plantas proceso acuicola","literas metalicas salmoneras","camarotes salmon los lagos","camarotes aysen salmon","camarotes trabajadores salmonera","fabricante camarotes salmoneras"],
  alternates: { canonical: "https://rinon.cl/camarotes-salmoneras" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesSalmonerasPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Salmoneras</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Resistente a humedad · Los Lagos / Aysén / Magallanes</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Salmoneras y Acuicultura</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Las salmoneras operan en ambientes de alta humedad y temperatura variable. Fabricamos camarotes metálicos con recubrimientos específicos para resistir la corrosión acelerada del ambiente marino y los sistemas de calefacción de los campamentos en los Lagos, Aysén y Magallanes.</p>
          <a href={wa("Hola, necesito cotizar camarotes para salmonera/acuicultura. Empresa: [NOMBRE]. Cantidad: [UNIDADES]. Ubicación del campamento: [CIUDAD/REGIÓN]. Configuración: [2 / 3 NIVELES].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para salmonera</a>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 text-sm text-amber-800">
          <strong>Ambiente marino y húmedo:</strong> Para campamentos en zonas de alta precipitación (Los Lagos, Aysén) recomendamos pintura electrostática con imprimante anticorrosivo base epoxi + capa de terminación al horno. Esta combinación duplica la vida útil frente al ambiente salino respecto a pintura convencional.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { titulo: "Campamentos en tierra", desc: "Camarotes 2 y 3 niveles para alojamientos de trabajadores en plantas de proceso y centros de engorda en tierra." },
            { titulo: "Barcazas y pontones", desc: "Estructuras más livianas y con sistema de fijación al piso para instalaciones en embarcaciones. Consultar especificaciones." },
            { titulo: "Plantas de proceso", desc: "Camarotes para vestuarios y salas de descanso dentro de plantas. Requieren acabado fácil de limpiar con agua a presión." },
            { titulo: "Centros de servicio", desc: "Equipamiento completo para campamentos de mantenimiento y buceo en centros de cultivo en mar." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-mineria", label: "Camarotes para Minería", desc: "Faenas y campamentos norte" },
            { href: "/camarotes-forestales", label: "Camarotes para Forestales", desc: "Campamentos sur de Chile" },
            { href: "/camarotes-militares", label: "Camarotes Institucionales", desc: "Alta resistencia uso intensivo" },
            { href: "/camarotes-al-por-mayor", label: "Precio por Volumen", desc: "Descuento por cantidad" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para tu salmonera</h2>
          <p className="text-gray-400 text-sm mb-5">Empresa, cantidad y ubicación del campamento. Respondemos con precio y plazo el mismo día.</p>
          <a href={wa("Hola, necesito camarotes para salmonera. Empresa: [NOMBRE]. Cantidad: [UNIDADES]. Región: [LOS LAGOS / AYSÉN / MAGALLANES].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
