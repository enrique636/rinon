import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Puente Alto — Fabricante con Instalación | Rinon.cl",
  description: "Rejas metálicas a medida en Puente Alto. Fabricante directo con instalación en toda la comuna. Reja tubular para frontis, cierres comerciales y portones. Cotiza hoy.",
  keywords: ["reja metalica puente alto", "rejas metalicas puente alto", "reja de fierro puente alto", "reja tubular puente alto", "reja frontis puente alto", "fabrica rejas puente alto", "portones puente alto", "cierre metalico puente alto", "rejas metalicas san jose de maipo"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-puente-alto" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasPuenteAltoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Puente Alto</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · Puente Alto</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Puente Alto — Fabricante Directo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Puente Alto es la comuna más poblada de Chile. Fabricamos e instalamos rejas metálicas a medida en toda la comuna — desde el centro hasta La Obra, Pirque y San José de Maipo. Precio de fábrica, sin intermediarios.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Puente Alto. Las medidas son: [METROS] ml x [ALTURA] m. Sector: [SECTOR/VILLA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar en Puente Alto
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Puente Alto donde instalamos</h2>
          <div className="flex flex-wrap gap-2">
            {["Puente Alto Centro","Condominio Los Quillayes","Villa La Serena","El Pinar","La Obra","Villa El Sauce","Rinconada de Maipú","San José de Maipo","Pirque","Las Vizcachas","El Principal","Condominio Los Robles"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos más pedidos en Puente Alto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis residencial", d: "La demanda más alta de la comuna. Tubo cuadrado de 1\", barrotes verticales, pintura negra o gris. Para todas las villas y sectores de Puente Alto." },
              { t: "Cierre de sitio o terreno", d: "Para lotes y terrenos sin construir en Puente Alto o zonas de expansión hacia La Obra y Pirque." },
              { t: "Reja para negocios y locales", d: "Cierres de fachada para locales en Concha y Toro, Las Vizcachas o el centro de Puente Alto." },
              { t: "Portón vehicular", d: "Complemento para el frontis. Batiente simple o doble para la mayoría de las casas de la comuna." },
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
            { href: "/reja-metalica-santiago", label: "Rejas en toda la RM", desc: "Todas las comunas" },
            { href: "/rejas-metalicas-san-bernardo", label: "Rejas San Bernardo", desc: "También atendemos San Bernardo" },
            { href: "/cercos-perimetrales-santiago", label: "Cercos perimetrales", desc: "Cierres completos del predio" },
            { href: "/portones-residenciales", label: "Portones residenciales", desc: "Accesos para casas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Puente Alto hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Dinos los metros, la altura y el sector. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito reja metálica en Puente Alto. Medidas: [METROS] ml, [ALTURA] m. Sector: [SECTOR].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
