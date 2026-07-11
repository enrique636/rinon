import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Chillán — Literas Acero Región de Ñuble | Chile",
  description: "Camarotes metálicos para Chillán y la Región de Ñuble. Habitacional, institucional y agrícola. Fabricante. Despacho a Chillán Viejo, San Carlos, Yungay y Ñuble.",
  keywords: ["camarotes chillan","literas metalicas chillan","camarotes nuble","camarotes metalicos chillan chile","literas chillan","camarotes region nuble","fabricante camarotes chillan","camarotes san carlos nuble","camarotes chilian"],
  alternates: { canonical: "https://rinon.cl/camarotes-chillan" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesChillanPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Chillán</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Despacho Ñuble · Habitacional y agrícola</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Chillán y la Región de Ñuble</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos para hogares, empresas agrícolas y establecimientos en Chillán, Chillán Viejo, San Carlos, Yungay y toda la Región de Ñuble. Fabricante directo con despacho coordinado a la zona centro-sur.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-triple-campamento-premium.jpg" alt="Camarote triple premium Chillán — campamentos Biobío" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito camarotes metálicos para Chillán / Región de Ñuble. Cantidad: [UNIDADES]. Uso: [HABITACIONAL / AGRICOLA / EMPRESA / OTRO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Chillán</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {[
            { titulo: "Sector agrícola", desc: "Chillán es el centro agropecuario de la Región de Ñuble. Camarotes para casas de temporeros, campamentos agrícolas y bodegas con personal." },
            { titulo: "Habitacional", desc: "Dormitorios, casas y piezas de arriendo en el Gran Chillán. Camarotes estándar en 1 y 1,5 plazas para hogares." },
            { titulo: "Institucional", desc: "Colegios, liceos e internados de la zona. Precio institucional por volumen con factura." },
            { titulo: "Despacho a Ñuble", desc: "Coordinamos el transporte desde Santiago. Tiempo estimado: 24–48 horas hábiles para Chillán." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-concepcion", label: "Camarotes Concepción", desc: "Capital de Biobío" },
            { href: "/camarotes-talcahuano", label: "Camarotes Talcahuano", desc: "Puerto industrial" },
            { href: "/camarotes-agricolas", label: "Camarotes Agrícolas", desc: "Temporadas y cosechas" },
            { href: "/camarotes-metalicos", label: "Ver todos los modelos", desc: "Catálogo completo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Chillán</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad, uso y dirección. Despacho en 24–48 h hábiles.</p>
          <a href={wa("Hola, necesito camarotes para Chillán. Cantidad: [UNIDADES]. Uso: [DATO]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
