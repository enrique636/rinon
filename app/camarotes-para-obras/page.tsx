import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Obras — Literas Metálicas para Construcción e Industria | Chile",
  description: "Camarotes metálicos para campamentos de obras de construcción, contratistas y faenas industriales. Uso intensivo. Precio por volumen. Fabricante en Chile.",
  keywords: ["camarotes para obras","literas obras construccion","camarotes campamento obra","camarotes construccion chile","literas metalicas obra","camarotes faena construccion","camarotes trabajadores obra","fabricante camarotes obras","camarotes contratistas chile"],
  alternates: { canonical: "https://rinon.cl/camarotes-para-obras" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteParaObrasPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Obras</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Uso intensivo · Precio por volumen</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Obras de Construcción</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos para campamentos de obras civiles, constructoras, contratistas y faenas industriales. Estructura robusta para uso intensivo rotativo por cuadrillas de trabajadores, con precio por volumen y facturación a nombre de la empresa.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-campamento-construccion.jpg" alt="Camarote metálico para obras y construcción — campamento Chile" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito cotizar camarotes para obra/campamento de construcción. Empresa: [NOMBRE]. Cantidad: [UNIDADES]. Duración del proyecto: [MESES]. Ciudad o región: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para mi obra</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { titulo: "Rotación de personal", desc: "El camarote de obra puede tener usuarios distintos cada semana. La estructura debe resistir sin mantenimiento durante toda la duración del proyecto." },
            { titulo: "Arriendo o compra", desc: "Para obras de corta duración también manejamos alternativas de arriendo. Consulta según la duración de tu proyecto." },
            { titulo: "Despacho a faena", desc: "Coordinamos el transporte directamente a la obra o campamento. Piezas desensambladas para facilitar ingreso." },
          ].map((f) => (
            <div key={f.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-faenas", label: "Camarotes para Faenas", desc: "Industria y contratistas" },
            { href: "/camarotes-mineria", label: "Camarotes para Minería", desc: "Campamentos mineros" },
            { href: "/camarote-triple", label: "Camarote Triple", desc: "Máxima capacidad" },
            { href: "/camarotes-al-por-mayor", label: "Precio al Por Mayor", desc: "Descuento por volumen" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para tu obra</h2>
          <p className="text-gray-400 text-sm mb-5">Empresa, cantidad y duración del proyecto. Precio con factura incluida.</p>
          <a href={wa("Hola, necesito camarotes para campamento de obra. Empresa: [NOMBRE]. Cantidad: [UNIDADES]. Duración: [MESES]. Zona: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
