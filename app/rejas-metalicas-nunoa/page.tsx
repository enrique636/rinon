import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Ñuñoa — Fabricante con Instalación | Buenos Pal Catre",
  description: "Rejas metálicas a medida en Ñuñoa. Frontis, comercios y departamentos. Fabricante directo con instalación incluida. Cotiza hoy por WhatsApp.",
  keywords: ["reja metalica nunoa", "rejas metalicas nunoa", "reja de fierro nunoa", "reja tubular nunoa", "reja frontis nunoa", "fabrica rejas nunoa", "portones nunoa", "reja metalica precio nunoa"],
  alternates: { canonical: "https://dumar.cl/rejas-metalicas-nunoa" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasNunoaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Ñuñoa</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · Ñuñoa</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Ñuñoa — Fabricante Directo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas a medida en Ñuñoa. Reja de frontis para casas y edificios de baja altura, cierres de locales comerciales y portones vehiculares. Sin intermediarios — precio de fábrica.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Ñuñoa. Las medidas son: [METROS] ml x [ALTURA] m.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar en Ñuñoa
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores y tipos más pedidos en Ñuñoa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis residencial", d: "Para casas en Ñuñoa, especialmente en sectores como Villa Frei, Lo Hermida y alrededores del Estadio Nacional. Tubo cuadrado, barrotes verticales." },
              { t: "Reja para locales y comercios", d: "Ñuñoa tiene alta densidad comercial. Cierres de fachada para locales en Irarrázaval, Av. Ñuñoa y el barrio Italia." },
              { t: "Portón con control de acceso", d: "Para edificios de baja altura y casas con estacionamiento. Corredizo o batiente según el ancho del vano." },
              { t: "Cierre de jardín o terraza", d: "Rejas bajas (80–100 cm) para delimitar jardines o terrazas. Diseño más liviano y estético." },
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
            { href: "/reja-metalica-santiago", label: "Rejas en toda la RM", desc: "Otras comunas de Santiago" },
            { href: "/rejas-metalicas-precio", label: "Factores de precio", desc: "Qué determina el costo" },
            { href: "/portones-metalicos", label: "Portones", desc: "Accesos vehiculares" },
            { href: "/cercos-perimetrales-santiago", label: "Cercos en Santiago", desc: "Cierres completos de predio" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Ñuñoa hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura, tipo de uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito una reja metálica en Ñuñoa. Medidas: [METROS] ml, [ALTURA] m. Uso: [FRONTIS/COMERCIO/OTRO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
