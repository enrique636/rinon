import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Linares — Literas para Maule y Ñuble | Chile",
  description: "Camarotes metálicos para Linares, Parral, San Javier y el sur del Maule. Habitacional y agrícola. Fabricante. Despacho a la VII Región.",
  keywords: ["camarotes linares","literas metalicas linares","camarotes maule sur","camarotes metalicos linares chile","literas linares","camarotes parral maule","camarotes san javier maule","fabricante camarotes linares"],
  alternates: { canonical: "https://rinon.cl/camarotes-linares" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesLinaresPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Linares</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Despacho VII Región · Habitacional y agrícola</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Linares y Sur del Maule</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Proveemos camarotes metálicos para hogares, empresas agrícolas y establecimientos en Linares, Parral, San Javier y el sur de la Región del Maule. Fabricante directo con coordinación de despacho.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-triple-campamento-agricola.jpg" alt="Camarote triple agrícola Linares — fundos y faenas Maule" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito camarotes metálicos para Linares / Maule. Cantidad: [UNIDADES]. Uso: [HABITACIONAL / AGRÍCOLA / EMPRESA]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para Linares</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-talca", label: "Camarotes Talca", desc: "Capital del Maule" },
            { href: "/camarotes-chillan", label: "Camarotes Chillán", desc: "Región de Ñuble" },
            { href: "/camarotes-agricolas", label: "Camarotes Agrícolas", desc: "Temporeros y cosechas" },
            { href: "/camarotes-metalicos", label: "Ver catálogo completo", desc: "Todos los modelos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para Linares</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad, uso y dirección. Coordinamos despacho al Maule.</p>
          <a href={wa("Hola, necesito camarotes para Linares. Cantidad: [UNIDADES]. Dirección: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
