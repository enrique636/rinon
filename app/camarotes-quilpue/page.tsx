import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Quilpué — Literas Gran Valparaíso | V Región",
  description: "Camarotes metálicos para Quilpué, Villa Alemana y el Gran Valparaíso. Habitacional y empresas. Fabricante directo. Despacho rápido a la V Región.",
  keywords: ["camarotes quilpue","literas metalicas quilpue","camarotes villa alemana","camarotes gran valparaiso","literas quilpue chile","camarotes quinta region quilpue","fabricante camarotes quilpue","camarotes villa alemana chile"],
  alternates: { canonical: "https://rinon.cl/camarotes-quilpue" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesQuilpuePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Quilpué</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Gran Valparaíso · Despacho rápido</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Quilpué y Gran Valparaíso</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos para hogares y empresas en Quilpué, Villa Alemana, Limache y el corredor del Gran Valparaíso. Fabricante directo con despacho en 24–48 horas hábiles.</p>
          <a href={wa("Hola, necesito camarotes metálicos para Quilpué / Gran Valparaíso. Cantidad: [UNIDADES]. Uso: [HABITACIONAL / EMPRESA]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Quilpué</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-vina-del-mar", label: "Camarotes Viña del Mar", desc: "Ciudad turística y costera" },
            { href: "/camarotes-valparaiso", label: "Camarotes Valparaíso", desc: "Puerto y capital V Región" },
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
          <h2 className="text-2xl font-bold mb-2">Cotiza para Quilpué</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad y dirección. Despacho 24–48 h hábiles desde Santiago.</p>
          <a href={wa("Hola, necesito camarotes para Quilpué. Cantidad: [UNIDADES]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
