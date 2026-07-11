import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes en Oferta Santiago — Precio Directo de Fábrica | Rinon.cl",
  description: "¿Buscas camarotes metálicos baratos en Santiago? Al comprar directo al fabricante obtienes el precio más bajo del mercado — sin pasar por distribuidoras ni tiendas. Cotiza hoy.",
  keywords: ["camarotes oferta santiago", "camarotes baratos santiago", "remate camarotes", "camarotes economicos chile", "camarotes precio fabrica", "camarotes baratos metalicos", "oferta camarote metalico santiago", "camarote economico santiago", "camarote barato de calidad"],
  alternates: { canonical: "https://rinon.cl/camarotes-oferta" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesOfertaPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Por qué los camarotes de fábrica son más baratos?", acceptedAnswer: { "@type": "Answer", text: "Al comprar en tienda o distribuidora, el precio ya incluye el margen del distribuidor, el margen de la tienda y los gastos de vitrina. Al comprar directamente al fabricante, todos esos márgenes desaparecen — el precio es el de producción más el del fabricante, sin capas extras encima." } },
          { "@type": "Question", name: "¿Calidad más baja por ser más barato?", acceptedAnswer: { "@type": "Answer", text: "No. El precio más bajo es resultado de eliminar intermediarios, no de bajar la calidad del acero, la soldadura o la pintura. Usamos el mismo tubo de acero 2 pulgadas, la misma soldadura MIG y la misma pintura electrostática en todos los modelos." } },
          { "@type": "Question", name: "¿Tienen modelos de remate o liquidación?", acceptedAnswer: { "@type": "Answer", text: "Fabricamos a pedido — no tenemos stock sobrante ni liquidaciones en el sentido tradicional. Lo que sí tenemos es el precio más bajo posible al ser fabricantes: no hay margen de distribuidor encima. Cotiza por WhatsApp y compara." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Camarotes en Oferta</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos — Precio Directo de Fábrica</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            La mejor oferta en camarotes metálicos en Santiago no es una liquidación ni un remate — es comprar directo al fabricante, sin intermediarios, sin vitrinas, sin márgenes de distribuidora.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Misma calidad de acero, misma soldadura MIG, misma pintura electrostática — precio más bajo porque fabricamos nosotros mismos.
          </p>
          <a href={wa("Hola, busco un camarote al mejor precio. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar precio de fábrica
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Por qué somos más baratos que las tiendas?</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium text-xs">Dónde compras</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium text-xs">Márgenes encima</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium text-xs">¿A medida?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Tienda de muebles", "Fabricante → Distribuidor → Tienda → Tú", "No"],
                  ["Distribuidora", "Fabricante → Distribuidor → Tú", "No"],
                  ["Marketplace (MercadoLibre etc.)", "Fabricante → Vendedor → Tú + comisión plataforma", "Generalmente no"],
                  ["Rinon.cl (fabricante)", "Fabricante → Tú", "Sí, siempre"],
                ].map(([donde, margenes, medida]) => (
                  <tr key={donde} className={donde.includes("Buenos") ? "bg-green-50" : ""}>
                    <td className="py-3 pr-4 text-xs text-gray-700 font-medium">{donde}</td>
                    <td className="py-3 px-4 text-center text-xs text-gray-500">{margenes}</td>
                    <td className={`py-3 px-4 text-center text-xs font-medium ${medida === "Sí, siempre" ? "text-green-700" : "text-gray-400"}`}>{medida}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Modelos más económicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { href: "/camarote-doble", t: "Camarote doble clásico", d: "1 plaza arriba + 1 plaza abajo. El más básico y económico de la línea. Sin extras — precio de entrada." },
              { href: "/camarote-con-escritorio-economico", t: "Camarote con escritorio económico", d: "Escritorio sin estantería lateral. La versión más económica del modelo con escritorio integrado." },
              { href: "/camarote-desmontable", t: "Camarote desmontable", d: "Se arma y desarma. Ideal para arriendo o mudanzas frecuentes. Precio similar al clásico." },
              { href: "/camarote-1-5-plazas", t: "Camarote 1½ plazas", d: "Más cómodo que 1 plaza, menos costo que 2 plazas. El equilibrio entre espacio y precio." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t} →</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza y compara</h2>
          <p className="text-gray-400 text-sm mb-5">Pídenos precio y compáralo con cualquier tienda o distribuidora. No cobramos más por ir a tu casa.</p>
          <a href={wa("Hola, quiero cotizar un camarote al mejor precio disponible. ¿Qué modelo recomiendan para mi presupuesto?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
