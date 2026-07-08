import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Iquique y Tarapacá — Fabricante Chile",
  description: "Cercos perimetrales metálicos para Iquique, Alto Hospicio y la Región de Tarapacá. Fabricante en Santiago con despacho al norte. Reja galvanizada para zona minera y costera.",
  keywords: ["cercos perimetrales iquique", "reja metalica iquique", "cerco perimetral alto hospicio", "rejas metalicas norte chile iquique", "cerco metalico tarapaca", "fabrica cercos iquique", "portones metalicos iquique", "rejas metalicas arica"],
  alternates: { canonical: "https://rinon.cl/cercos-perimetrales-iquique" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosIquiquePage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Iquique</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho norte extremo</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Iquique y Tarapacá</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos cercos perimetrales, rejas tubulares y portones metálicos en Santiago y despachamos a Iquique, Alto Hospicio, Pozo Almonte y toda la Región de Tarapacá. Para la zona costera e industrial recomendamos galvanizado en caliente.
          </p>
          <a href={wa("Hola, necesito cercos perimetrales para Iquique / Tarapacá. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h3 className="font-bold text-amber-900 mb-2 text-sm">Zona costera e industrial — recomendamos galvanizado</h3>
            <p className="text-amber-700 text-xs leading-relaxed">Iquique tiene exposición marina constante. Para cercos en zona costera, el sector industrial del Puerto o faenas en el interior, el galvanizado en caliente es la única opción que dura décadas sin mantenimiento.</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades que atendemos en el norte</h2>
          <div className="flex flex-wrap gap-2">
            {["Iquique","Alto Hospicio","Pozo Almonte","Colchane","Huara","Pica","Arica","Azapa","Putre","Camiña"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Ver todos los cercos", desc: "Catálogo completo" },
            { href: "/cercos-perimetrales-antofagasta", label: "Cercos Antofagasta", desc: "Norte minero" },
            { href: "/rejas-metalicas-por-mayor", label: "Por mayor", desc: "Para proyectos industriales" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para bodegas y galpones" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Proyecto en Iquique o el norte de Chile</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos la ciudad, el tipo de cerco y los metros. Cotizamos con flete incluido.</p>
          <a href={wa("Hola, necesito cercos perimetrales para [CIUDAD TARAPACÁ/ARICA]. Proyecto: [DESCRIPCIÓN]. Metros: [N] ml.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
