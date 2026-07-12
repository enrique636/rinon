import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { getProductWhatsAppUrl, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes en La Serena — Minería y Residencial | Camarotes Chile",
  description:
    "Camarotes metálicos con despacho a La Serena y Coquimbo. Para campamentos mineros de la Región de Coquimbo y uso residencial. Fabricante directo.",
  keywords: ["camarotes La Serena", "camarotes Coquimbo", "camarotes minería Coquimbo", "literas La Serena", "camas campamento La Serena"],
  alternates: { canonical: "https://rinon.cl/camarotes-la-serena" },
  openGraph: { title: "Camarotes en La Serena y Coquimbo — Minería y Residencial", description: "Camarotes metálicos con despacho a La Serena para minería y residencial.", type: "website", locale: "es_CL" },
};

function getWA(tipo?: string) {
  const t = tipo ? ` para ${tipo}` : "";
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(`Hola, necesito cotizar camarotes${t} con despacho a La Serena o Coquimbo. ¿Pueden ayudarme?`)}`;
}

export default function CamarotesLaSerenaPage() {
  const topProducts = products.slice(0, 3);
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness", name: "Camarotes Chile",
        areaServed: [{ "@type": "City", name: "La Serena" }, { "@type": "City", name: "Coquimbo" }],
        address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        telephone: SITE_CONFIG.telefono,
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Serena / Coquimbo</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">
            ⛏️ Región de Coquimbo · Los Pelambres · Filo del Sol
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes en La Serena y Coquimbo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Despachamos camarotes metálicos a La Serena, Coquimbo y toda la Región de Coquimbo.
            Principal hub logístico para Los Pelambres, Filo del Sol y las operaciones mineras del Valle del Elqui.
            También servimos el mercado residencial de la zona.
          </p>
          <div className="flex gap-3 flex-wrap">
            <div className="my-5 rounded-2xl overflow-hidden shadow-sm"><img src="/images/camarotes/camarote-metalico-nordico.jpg" alt="Camarote metálico La Serena — entrega Región de Coquimbo" className="w-full object-cover" loading="lazy" /></div>
          <a href={getWA("campamento minero")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para minería</a>
            <a href={getWA("uso residencial")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Cotizar residencial</a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {topProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4 hover:border-gray-400 transition-all">
              <span className="text-3xl">{product.emoji}</span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{product.nombre}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{product.descripcion}</p>
                <a href={getProductWhatsAppUrl(product.nombre)} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors">Consultar</a>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes en La Serena o Coquimbo?</h2>
          <p className="text-amber-200 text-sm mb-5">Para empresa o residencial. Cotización en el día.</p>
          <WhatsAppButton message="Hola, necesito cotizar camarotes con despacho a La Serena o Coquimbo. ¿Pueden ayudarme?" size="lg">Cotizar por WhatsApp</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
