import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para María Elena — Campamento Minero y Salitreras | Buenos Pal Catre",
  description:
    "Camarotes metálicos para María Elena y campamentos de la Región de Antofagasta. Fabricante directo con despacho nacional. Factura empresa, volúmenes desde 10 unidades.",
  keywords: [
    "camarotes maria elena antofagasta",
    "camarotes campamento salitreras",
    "camas minería maria elena",
    "camarotes metalicos region antofagasta",
    "proveedor camarotes maria elena",
  ],
  alternates: { canonical: "https://dumar.cl/camarotes-maria-elena" },
};

export default function CamarotesMariElenaPage() {
  const wa = getWhatsAppUrl("Hola, necesito cotizar camarotes para un proyecto en María Elena. ¿Pueden enviarme información?");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a María Elena?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos camarotes metálicos a María Elena y a toda la Región de Antofagasta con empresa de transporte. Para pedidos de 10 o más unidades coordinamos despacho consolidado que reduce el costo de flete." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-mineria" className="hover:text-gray-600">Minería</Link><span>/</span>
          <span className="text-gray-700 font-medium">María Elena</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-sm text-amber-700 font-medium mb-5">⛏️ María Elena · Industria salitrera · Despacho nacional</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para María Elena y Salitreras</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            María Elena es la última ciudad salitrera activa de Chile y uno de los polos de trabajo
            continuo de la Región de Antofagasta. Las faenas y campamentos de la zona requieren
            camarotes que soporten uso intensivo, turnos dobles y condiciones de desierto extremo.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos camarotes metálicos de uso industrial desde Santiago y despachamos a toda la
            zona norte. Para proyectos de equipamiento completo de campamento, cotizamos por volumen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para María Elena</a>
            <Link href="/empresas" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver catálogo empresas</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { icon: "🏗️", t: "Uso industrial", d: "Diseñados para faenas con turnos 4x3 o 7x7" },
            { icon: "🧾", t: "Factura empresa", d: "Emisión de factura electrónica para todas las empresas" },
            { icon: "🚚", t: "Despacho nacional", d: "Enviamos a María Elena con empresa de transporte" },
          ].map((f) => (
            <div key={f.t} className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{f.icon}</span>
              <p className="font-semibold text-gray-900 text-sm mb-1">{f.t}</p>
              <p className="text-gray-500 text-xs">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-mineria", label: "Camarotes para Minería", desc: "Catálogo completo para faenas mineras" },
            { href: "/camarotes-antofagasta", label: "Camarotes Antofagasta", desc: "Capital regional — despacho frecuente" },
            { href: "/camarotes-calama", label: "Camarotes Calama", desc: "Principal ciudad minera del norte" },
            { href: "/camarotes-al-por-mayor", label: "Compra al por mayor", desc: "Precios por volumen para proyectos grandes" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Proyecto en María Elena</h2>
          <p className="text-amber-200 text-sm mb-5">Cuéntanos la cantidad, el uso y el plazo. Cotizamos con despacho incluido.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Solicitar cotización</a>
        </div>
      </div>
    </div>
  );
}
