import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Maipú — Fabricante con Instalación | Buenos Pal Catre",
  description: "Rejas metálicas a medida en Maipú. Fabricante directo con instalación en toda la comuna. Reja tubular para frontis, cierres y comercios. Cotiza hoy por WhatsApp.",
  keywords: ["reja metalica maipu", "rejas metalicas maipu", "reja de fierro maipu", "reja tubular maipu", "reja frontis maipu", "fabrica rejas maipu", "cierre metalico maipu", "portones maipu", "reja metalica precio maipu"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-maipu" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasMaipuPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican rejas metálicas en Maipú?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos rejas metálicas a medida e instalamos en toda la comuna de Maipú — Rinconada, Monte Tabor, El Abrazo, Ciudad de los Lagos y todo el sector. La entrega e instalación está incluida en el precio." } },
          { "@type": "Question", name: "¿Cuánto cuesta una reja para el frontis en Maipú?", acceptedAnswer: { "@type": "Answer", text: "El precio depende de los metros lineales, la altura, la separación entre barrotes y el acabado. Para un frontis estándar en Maipú de 8 a 12 metros lineales, cotiza por WhatsApp con las medidas y te respondemos el mismo día." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Maipú</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · Maipú</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Maipú — Fabricante Directo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas tubulares, cierres de frontis y portones metálicos a medida en Santiago e instalamos en toda la comuna de Maipú. Sin intermediarios — precio de fábrica y entrega rápida.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Maipú. Las medidas son: [METROS] ml x [ALTURA] m. Tipo: [FRONTIS/COMERCIO/BODEGAS].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar en Maipú
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sectores de Maipú donde instalamos</h2>
          <div className="flex flex-wrap gap-2">
            {["Rinconada de Maipú","Monte Tabor","El Abrazo","Ciudad de los Lagos","Villa Los Jardines","Maipú Centro","Carmen de Huechuraba","Villa Tres Alameda","El Carmen","Maipú Sur","La Farfana","El Parrón"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de reja más pedidos en Maipú</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis para casa", d: "La más solicitada en las villas y loteos de Maipú. Tubo cuadrado de 1\" con barrotes verticales, pintura negra o gris. Altura desde 1,50 m." },
              { t: "Reja para comercios y locales", d: "Cierres de fachada para negocios en la Panam o en centros comerciales de Maipú. Con puerta integrada y cerrojo." },
              { t: "Cierre de terreno o sitio", d: "Para sitios sin construir o predios en Maipú que necesitan cierre perimetral antes de edificar." },
              { t: "Portón vehicular", d: "Complemento para el frontis. Corredizo o batiente, fabricado a la medida del vano de acceso." },
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
            { href: "/portones-metalicos", label: "Portones metálicos", desc: "Complemento para la reja" },
            { href: "/cierres-perimetrales", label: "Cercos perimetrales", desc: "Cierre completo del predio" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros de reja necesitas en Maipú?</h2>
          <p className="text-gray-400 text-sm mb-5">Dinos los metros, la altura y el tipo. Cotizamos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Maipú. Medidas: [METROS] ml, [ALTURA] m. Uso: [FRONTIS / NEGOCIO / TERRENO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
