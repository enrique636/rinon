import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Precio de Camarotes Metálicos en Chile 2026 — Rangos y Factores",
  description: "¿Cuánto cuesta un camarote metálico en Chile? Rangos de precio según tamaño, espesor y acabado. Con y sin despacho. Fabricante directo sin intermediario.",
  keywords: ["precio camarotes metalicos chile","cuanto cuesta camarote metalico","precio litera metalica chile","camarote metalico precio 2026","precio camarote 1 plaza chile","precio camarote 2 plazas","camarote metalico cuanto vale","precio literas acero santiago","camarote metalico barato chile"],
  alternates: { canonical: "https://rinon.cl/camarotes-precio" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesPrecioPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Precio</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Precios actualizados · Fabricante directo · Sin intermediario</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Cuánto Cuesta un Camarote Metálico en Chile?</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Los precios varían según el tamaño, el espesor del tubo y el tipo de acabado. Esta guía explica los rangos reales de 2026 y qué factores afectan el precio final. Como fabricante directo, ofrecemos el precio sin márgenes de distribuidor.</p>
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm"><img src="/images/camarotes/camarote-metalico-negro-fondo-blanco.jpg" alt="Camarote metálico precio Chile — fabricante directo sin intermediario" className="w-full object-cover" loading="lazy" /></div>
          <a href={wa("Hola, necesito cotizar camarote metálico. Tamaño: [1 PLAZA / 1,5 PLAZAS / 2 PLAZAS]. Color: [DATO]. Cantidad: [UNIDADES]. ¿Cuál es el precio?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Pedir precio exacto</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Rangos de precio por tamaño</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Modelo</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Medida</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Rango precio (sin despacho)</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Notas</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ["Camarote 1 plaza", "90 × 190 cm", "$150.000 – $220.000", "El más solicitado. Estándar residencial."],
                  ["Camarote 1,5 plazas", "120 × 190 cm", "$180.000 – $260.000", "Ideal para adolescentes y adultos jóvenes."],
                  ["Camarote 2 plazas", "140 × 190 cm", "$210.000 – $300.000", "Máximo confort por nivel."],
                  ["Camarote triple (3 niveles)", "90 × 190 cm", "$250.000 – $350.000", "Para máxima capacidad."],
                  ["Cama loft (1 nivel + espacio abajo)", "90 × 190 cm", "$170.000 – $240.000", "Sin cama inferior, espacio libre abajo."],
                  ["Camarote con escritorio", "90 × 190 cm", "$200.000 – $290.000", "Escritorio integrado bajo la cama inferior."],
                ].map(([modelo, medida, precio, nota]) => (
                  <tr key={modelo} className="even:bg-gray-50">
                    <td className="p-3 border border-gray-100 font-medium text-gray-900">{modelo}</td>
                    <td className="p-3 border border-gray-100">{medida}</td>
                    <td className="p-3 border border-gray-100 text-gray-900 font-medium">{precio}</td>
                    <td className="p-3 border border-gray-100 text-gray-400 text-xs">{nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-3">* Precios de referencia sin despacho, en pesos chilenos. El precio exacto depende del acabado, el color y la cantidad. Pide cotización para precio actualizado.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué factores afectan el precio?</h2>
          <div className="space-y-3">
            {[
              { t: "Espesor del tubo", d: "El tubo de 1,5 mm cuesta más que el de 1,2 mm pero dura significativamente más. Para uso intensivo o institucional, siempre vale la diferencia." },
              { t: "Tamaño (ancho)", d: "A mayor ancho de la cama, más material y más costo. La diferencia entre 1 plaza y 2 plazas puede ser un 30–40%." },
              { t: "Color", d: "Los colores estándar (negro, blanco, gris) no tienen sobreprecio. Los colores especiales o personalizados del catálogo RAL pueden tener un pequeño adicional." },
              { t: "Accesorios", d: "Escritorio integrado, cajón inferior, colchoneta, baranda adicional — cada accesorio tiene su precio. Se puede cotizar con o sin ellos." },
              { t: "Cantidad", d: "A partir de 5 unidades hay descuento por volumen. A partir de 10–20, precio institucional significativo." },
              { t: "Despacho", d: "Dentro del Gran Santiago el despacho es económico. A regiones se coordina con empresa de transporte — consultar según destino." },
            ].map((f) => (
              <div key={f.t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm">{f.t}</p>
                <p className="text-gray-500 text-sm mt-0.5">{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 text-sm text-amber-800">
          <strong>Fabricante vs distribuidor:</strong> Comprar directamente al fabricante elimina el margen del intermediario (generalmente 15–30% del precio final). Como fabricante directo, el precio que ves es el precio de fábrica — sin markups de tienda.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-baratos", label: "Camarotes Baratos", desc: "Opciones de menor precio" },
            { href: "/camarotes-al-por-mayor", label: "Camarotes al Por Mayor", desc: "Precio institucional por volumen" },
            { href: "/camarotes-metalicos", label: "Ver todos los modelos", desc: "Catálogo completo" },
            { href: "/blog/cuanto-cuesta-camarote-chile", label: "Guía de precios 2026", desc: "Artículo detallado" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Pide tu precio exacto</h2>
          <p className="text-gray-400 text-sm mb-5">Tamaño, color y cantidad. Respondemos con precio actualizado el mismo día.</p>
          <a href={wa("Hola, necesito cotizar camarote metálico. Tamaño: [DATO]. Color: [DATO]. Cantidad: [UNIDADES]. Destino de entrega: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
