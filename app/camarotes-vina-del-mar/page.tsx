import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Viña del Mar — Literas Acero Valparaíso | Fabricante",
  description: "Camarotes metálicos para Viña del Mar, Valparaíso, Concón y toda la V Región. Hostal, habitacional y uso institucional. Fabricante. Despacho a la costa.",
  keywords: ["camarotes vina del mar","literas metalicas vina del mar","camarotes valparaiso","camarotes quinta region","literas vina del mar","camarotes metalicos valparaiso","camarotes hostal vina del mar","camarotes concon","fabricante camarotes vina del mar"],
  alternates: { canonical: "https://rinon.cl/camarotes-vina-del-mar" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesVinaDelMarPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Viña del Mar</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Despacho V Región · Hostal y habitacional</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Viña del Mar y Valparaíso</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos para hostales, hogares y empresas en Viña del Mar, Valparaíso, Concón, Villa Alemana y toda la V Región. El ambiente marino exige acabados de calidad — usamos pintura electrostática al horno para garantizar durabilidad frente a la humedad costera.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-petalo-premium.jpg" alt="Camarote pétalo premium Viña del Mar — elegante y resistente" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito camarotes metálicos para Viña del Mar / Valparaíso. Cantidad: [UNIDADES]. Uso: [HOSTAL / HABITACIONAL / EMPRESA]. Dirección de entrega: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Viña del Mar</a>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8 text-sm text-blue-800">
          <strong>Ambiente marino:</strong> En ciudades costeras como Viña del Mar y Valparaíso, la humedad y la brisa marina aceleran la oxidación. La pintura electrostática al horno que usamos resiste mucho mejor que la pintura convencional en aerosol. Es especialmente importante para muebles que estarán en habitaciones con ventanas al mar o balcones expuestos.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { titulo: "Hostales y hospedajes", desc: "Viña del Mar concentra decenas de hostales que renuevan mobiliario periódicamente. Camarotes metálicos para habitaciones compartidas con uso turístico intensivo." },
            { titulo: "Habitaciones de arriendo", desc: "La alta densidad de estudiantes universitarios (UVM, PUCV, UDLA) genera demanda constante de camarotes para piezas de arriendo compartidas." },
            { titulo: "Empresas y contratistas", desc: "Empresas constructoras y de servicios con personal en faenas en la V Región. Precio por volumen con factura." },
            { titulo: "Despacho coordinado", desc: "Despachamos desde Santiago con empresa de transporte. Tiempo estimado: 24–48 horas hábiles. Para pedidos grandes, coordinamos directamente." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-hostal", label: "Camarotes para Hostal", desc: "Uso turístico intensivo" },
            { href: "/camarotes-valparaiso", label: "Camarotes Valparaíso", desc: "Ciudad puerto V Región" },
            { href: "/camarotes-al-por-mayor", label: "Precio al Por Mayor", desc: "Descuento por volumen" },
            { href: "/camarotes-metalicos", label: "Ver todos los modelos", desc: "Catálogo completo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Viña del Mar</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad, uso y dirección. Despacho 24–48 h desde Santiago.</p>
          <a href={wa("Hola, necesito camarotes para Viña del Mar. Cantidad: [UNIDADES]. Uso: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
