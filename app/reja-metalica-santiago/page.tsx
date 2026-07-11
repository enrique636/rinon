import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Santiago — Fabricante con Instalación Incluida",
  description: "Rejas metálicas a medida en Santiago. Fabricante directo con instalación en toda la RM. Reja tubular, barra sólida y galvanizada. Residencial, comercial e industrial. Cotiza hoy.",
  keywords: ["reja metalica santiago", "rejas metalicas santiago", "reja de fierro santiago", "reja tubular santiago", "fabrica rejas metalicas santiago", "rejas metalicas con instalacion santiago", "reja metalica precio santiago", "reja metalica para casa santiago", "rejas para frontis santiago"],
  alternates: { canonical: "https://rinon.cl/reja-metalica-santiago" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const COMUNAS_REJAS = ["Las Condes","Providencia","Vitacura","Lo Barnechea","La Reina","Ñuñoa","Maipú","Pudahuel","La Florida","San Bernardo","Puente Alto","Quilicura","Huechuraba","Colina","Lampa","Renca","Santiago Centro","Independencia","Recoleta","Lo Prado","Quinta Normal","Cerrillos","El Bosque","La Pintana","Peñalolén","Macul","Estación Central"];

export default function RejaMetalicaSantiagoPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Reja Metálica Santiago — Fabricante Directo",
        description: "Rejas metálicas residenciales, comerciales e industriales fabricadas a medida en Santiago. Instalación incluida en toda la Región Metropolitana.",
        brand: { "@type": "Brand", name: "Rinon.cl" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican rejas metálicas en Santiago con instalación?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos la reja en nuestro taller en Santiago e instalamos en toda la Región Metropolitana. El precio incluye fabricación e instalación — no hay cargos ocultos." } },
          { "@type": "Question", name: "¿Cuánto tarda fabricar una reja metálica en Santiago?", acceptedAnswer: { "@type": "Answer", text: "El plazo depende del tamaño del proyecto y la carga de producción del momento. Al cotizar te confirmamos el plazo exacto. Para proyectos medianos (hasta 15 metros lineales) el plazo típico es de pocos días hábiles." } },
          { "@type": "Question", name: "¿Qué tipo de reja conviene para frontis en Santiago?", acceptedAnswer: { "@type": "Answer", text: "Para frontis residencial en Santiago lo más frecuente es reja tubular de tubo cuadrado 1 pulgada, con separación de 8 a 12 cm y pintura negra o gris. Es la opción con mejor balance de precio, seguridad y estética." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Santiago</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · Toda la RM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reja Metálica en Santiago — Fabricante Directo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas metálicas a medida en Santiago e instalamos en toda la Región Metropolitana. Reja tubular para frontis, comercios, bodegas e industria. Sin intermediarios — precio de fábrica.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Santiago. Las medidas son: [ANCHO] x [ALTO]. Tipo: [FRONTIS / BODEGAS / OTRO]. Comuna: [COMUNA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de reja más pedidos en Santiago</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis", d: "La más pedida en comunas residenciales de Santiago. Tubo cuadrado de 1\" con barrotes verticales. Pintura negra o color a elección." },
              { t: "Reja para comercios", d: "Protección de locales, vitrinas y accesos comerciales. Con cerrojo y golpe de puerta. En acero de mayor espesor." },
              { t: "Reja para bodegas y galpones", d: "Cierre perimetral de áreas de almacenaje. Malla separadora o reja tubular según el uso." },
              { t: "Reja galvanizada", d: "Para zonas con alta exposición a la humedad o para proyectos donde la durabilidad prima sobre el costo inicial." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comunas donde instalamos rejas en Santiago</h2>
          <div className="flex flex-wrap gap-2">
            {COMUNAS_REJAS.map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-precio", label: "Factores de precio", desc: "Qué determina el costo de una reja" },
            { href: "/cercos-perimetrales-santiago", label: "Cercos perimetrales", desc: "Cierre completo del perímetro" },
            { href: "/portones-metalicos", label: "Portones", desc: "Accesos y portones a medida" },
            { href: "/rejas-metalicas", label: "Pillar page rejas", desc: "Todo sobre rejas metálicas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Santiago hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el tipo, los metros lineales, la altura y la comuna. Respondemos el mismo día.</p>
          <a href={wa("Hola, quiero cotizar una reja metálica en Santiago. Tipo: [FRONTIS/BODEGAS/OTRO], medidas: [METROS] ml x [ALTURA] m. Comuna: [COMUNA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
