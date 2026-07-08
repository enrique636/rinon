import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, formatPrice, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en Melipilla — Agrícola y Residencial | Camarotes Chile",
  description: "Camarotes metálicos con despacho a Melipilla, Curacaví y Talagante. Para alojamiento agrícola y uso residencial. Pago contra entrega en zona Santiago.",
  keywords: ["camarotes Melipilla", "camarotes Curacaví", "camarotes Talagante", "literas Melipilla", "camarotes agrícolas Melipilla"],
  alternates: { canonical: "https://rinon.cl/camarotes-melipilla" },
};

export default function CamarotesMelipillaPage() {
  const topProducts = products.slice(0, 3);
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Melipilla</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-4">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a Melipilla · Curacaví · Talagante — Pago contra entrega
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en Melipilla, Curacaví y Talagante</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Entregamos camarotes metálicos en Melipilla, Curacaví, Talagante e Isla de Maipo. Para alojamiento agrícola de temporeros y uso residencial. Despacho {formatPrice(SITE_CONFIG.despacho.precio)} · instalación incluida · pago al recibir.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {topProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <span className="text-3xl mb-2 block">{product.emoji}</span>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{product.nombre}</h3>
              <p className="text-gray-500 text-xs mb-3">{product.descripcion}</p>
              <a href={getProductWhatsAppUrl(product.nombre)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">Consultar</a>
            </div>
          ))}
        </div>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cotizar despacho a Melipilla o Curacaví</h2>
          <p className="text-gray-600 text-sm mb-4">Pagas cuando llega instalado.</p>
          <WhatsAppButton message="Hola, quiero cotizar un camarote con despacho a Melipilla o Curacaví." size="lg">Cotizar ahora</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
