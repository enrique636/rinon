import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica La Florida — Fabricante con Instalación | Rinon.cl",
  description: "Rejas metálicas a medida en La Florida. Fabricante directo con instalación. Reja tubular para frontis, cierres de comercio y portones. Cotiza hoy por WhatsApp.",
  keywords: ["reja metalica la florida", "rejas metalicas la florida", "reja tubular la florida", "reja frontis la florida", "fabrica rejas la florida", "portones la florida", "reja de fierro la florida", "cierre metalico la florida"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-la-florida" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasLaFloridaPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">La Florida</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · La Florida</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en La Florida — Precio de Fábrica</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos rejas metálicas a medida en La Florida. Reja de frontis, comercios y cierres de terreno. Precio directo de fábrica — sin distribuidores ni márgenes de tienda.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en La Florida. Las medidas son: [METROS] ml x [ALTURA] m.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar en La Florida
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de La Florida donde instalamos</h2>
          <div className="flex flex-wrap gap-2">
            {["La Florida Centro","Villa La Florida","Los Quillayes","Lucía Irrarrázaval","Departamental","San Ramón","Villa Presidente Alessandri","Trinidad","Nuevo Horizonte","Parque La Florida"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Los más pedidos en La Florida</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis residencial", d: "Para casas en villas y condominios de La Florida. Tubo cuadrado, barrotes verticales, pintura negra o gris oscuro." },
              { t: "Reja con portón", d: "Frontis completo con portón vehicular corredizo o batiente. Todo fabricado a medida del mismo espacio." },
              { t: "Cierre de sitio o terreno", d: "Para predios sin construir que necesitan cierre perimetral en La Florida." },
              { t: "Reja para negocios", d: "Fachadas de locales en Vicuña Mackenna, Departamental o la Florida poniente." },
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
            { href: "/cercos-perimetrales-santiago", label: "Cercos perimetrales", desc: "Cierre completo del predio" },
            { href: "/rejas-metalicas-maipu", label: "Rejas en Maipú", desc: "También atendemos Maipú" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en La Florida hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Dinos los metros, la altura y el tipo. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito una reja metálica en La Florida. Medidas: [METROS] ml, [ALTURA] m. Uso: [FRONTIS/OTRO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
