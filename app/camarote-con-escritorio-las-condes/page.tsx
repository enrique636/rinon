import type { Metadata } from "next";
import Link from "next/link";
import { formatPrice, getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio en Las Condes — Despacho con Instalación | Camarotes Chile",
  description: `Camarote con escritorio con despacho a Las Condes. Pago contra entrega. Despacho + instalación ${formatPrice(SITE_CONFIG.despacho.precio)}. Fabricante directo.`,
  keywords: ["camarote con escritorio Las Condes", "litera escritorio Las Condes", "cama alta escritorio Las Condes", "camarote Las Condes con escritorio"],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-las-condes" },
};

export default function CamaroteEscritorioLasCondesPage() {
  const wa = getWhatsAppUrl("Hola, quiero cotizar un camarote con escritorio con despacho a Las Condes. ¿Qué modelos tienen?");
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Las Condes</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Las Condes · Pago contra entrega · Instalación incluida
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarote con Escritorio en Las Condes</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-4">Despacho e instalación de camarotes con escritorio en Las Condes. Cama arriba, zona de estudio abajo. Pagas cuando llega instalado — sin adelanto. Despacho {formatPrice(SITE_CONFIG.despacho.precio)}.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: "📍", t: `Despacho ${formatPrice(SITE_CONFIG.despacho.precio)}`, d: "Las Condes · Instalación incluida" },
            { icon: "💳", t: "Pago contra entrega", d: "Pagas al recibir instalado" },
            { icon: "⏱️", t: SITE_CONFIG.despacho.dias, d: "Plazo estimado" },
          ].map(i => <div key={i.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4"><p className="text-xl mb-1">{i.icon}</p><p className="font-semibold text-gray-900 text-sm">{i.t}</p><p className="text-gray-400 text-xs">{i.d}</p></div>)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Camarote con Escritorio" },
            { href: "/camarote-con-escritorio-premium", emoji: "⭐", nombre: "Camarote Escritorio Premium" },
            { href: "/cama-alta-con-escritorio", emoji: "🪜", nombre: "Cama Alta con Escritorio" },
            { href: "/camarote-con-escritorio-a-medida", emoji: "✏️", nombre: "A Medida" },
          ].map(p => (
            <Link key={p.nombre} href={p.href} className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all">
              <span className="text-2xl">{p.emoji}</span>
              <span className="font-semibold text-gray-900 text-sm">{p.nombre}</span>
            </Link>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cotizar camarote con escritorio en Las Condes</h2>
          <p className="text-gray-600 text-sm mb-4">Pagas cuando llega instalado.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar ahora</a>
        </div>
      </div>
    </div>
  );
}
