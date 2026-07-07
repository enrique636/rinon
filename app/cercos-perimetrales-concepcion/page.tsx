import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Concepción y Biobío — Fabricante Chile",
  description: "Cercos perimetrales metálicos para Concepción, Talcahuano, Los Ángeles y toda la Región del Biobío. Fabricante en Santiago con despacho al sur de Chile. Rejas tubulares y portones.",
  keywords: ["cercos perimetrales concepcion", "reja metalica concepcion", "cerco perimetral talcahuano", "rejas metalicas los angeles biobio", "cerco metalico biobio", "fabrica cercos concepcion", "rejas metalicas chile sur", "cerco perimetral chillan", "portones metalicos concepcion"],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-concepcion" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosConcepccionPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Concepción</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho Biobío</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos Perimetrales para Concepción y la Región del Biobío</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas tubulares, mallas separadoras y portones metálicos en Santiago y despachamos a Concepción, Talcahuano, Los Ángeles, Chillán, Coronel y toda la Región del Biobío.
          </p>
          <a href={wa("Hola, necesito cercos perimetrales para Concepción / Biobío. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades que atendemos en el Biobío</h2>
          <div className="flex flex-wrap gap-2">
            {["Concepción","Talcahuano","Los Ángeles","Chillán","San Pedro de la Paz","Coronel","Lota","Tomé","Penco","Arauco","Lebu","Curanilahue","Cañete","Yumbel"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones más frecuentes en la región</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cercos industriales Biobío", d: "Cierre perimetral de plantas industriales, bodegas y parques industriales. Fabricados con tubo de acero estructural de alto calibre." },
              { t: "Rejas residenciales", d: "Para casas y condominios en Concepción y el Gran Concepción. Frontis y cierres de jardín a medida." },
              { t: "Mallas para bodegas", d: "División de espacios interiores en bodegas y superbodegas. Ideal para empresas logísticas de la zona." },
              { t: "Portones industriales", d: "Accesos vehiculares para parques industriales, empresas pesqueras y forestales de la región." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Ver todos los cercos", desc: "Catálogo completo" },
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Todos los tipos" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Para empresas" },
            { href: "/cercos-perimetrales-temuco", label: "Cercos Temuco", desc: "También atendemos La Araucanía" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Proyecto en Concepción o el Biobío</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el tipo de cerco, los metros lineales y la ciudad. Cotizamos con flete incluido.</p>
          <a href={wa("Hola, necesito cercos perimetrales para [CIUDAD BIOBÍO]. El proyecto es: [DESCRIPCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
