import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cama Loft Metálica — Cama Elevada con Espacio Abajo | Santiago Chile",
  description: "Cama loft metálica fabricada a medida. Cama arriba + espacio libre abajo para escritorio, sofá o armario. Ideal para departamentos pequeños. Fabricante en Santiago.",
  keywords: ["cama loft metalica","cama loft santiago","cama elevada metalica","cama loft chile","cama alta metalica con espacio abajo","cama loft adulto","cama loft departamento","cama loft escritorio abajo","cama loft precio chile","fabricante cama loft santiago"],
  alternates: { canonical: "https://rinon.cl/cama-loft-metalica" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaLoftMetalicaPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Cama Loft Metálica",
        description: "Cama loft metálica elevada con espacio libre abajo para escritorio, sofá o almacenamiento. Fabricada en acero con pintura electrostática al horno.",
        brand: { "@type": "Brand", name: "Rinon.cl" },
        material: "Acero pintado electrostáticamente al horno",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "CLP",
          seller: { "@type": "Organization", name: "Rinon.cl" },
        },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cuánta altura libre queda bajo la cama loft?", acceptedAnswer: { "@type": "Answer", text: "La altura libre bajo la cama depende del modelo y la medida del colchón. Con colchón de 15 cm, la altura útil disponible es de aproximadamente 100–110 cm. Al cotizar, indícanos para qué necesitas usar ese espacio (escritorio, sofá, armario) y ajustamos la altura." } },
          { "@type": "Question", name: "¿La cama loft es segura para adultos?", acceptedAnswer: { "@type": "Answer", text: "Sí. Nuestras camas loft están fabricadas en acero estructural con pintura al horno y soportan al menos 120 kg en la cama superior. Incluyen barandas de seguridad en los lados expuestos." } },
        ],
      })}} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Cama Loft Metálica</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · A medida · Santiago y despacho a Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cama Loft Metálica — Cama Arriba, Espacio Libre Abajo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-5 leading-relaxed">La cama loft metálica es una cama elevada de una sola plaza con el espacio inferior completamente libre. Abajo puedes instalar un escritorio, un sofá, un armario o lo que necesites. Ideal para departamentos pequeños, piezas arrendadas y estudios.</p>

          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-full-nordico.jpg" alt="Cama loft metálica nórdica — espacio libre abajo para escritorio" className="w-full object-cover" loading="lazy" />
          </div>

          <a href={wa("Hola, necesito cotizar cama loft metálica. Medida: [1 PLAZA / 1,5 PLAZAS / 2 PLAZAS]. Altura libre abajo: [DATO]. Uso abajo: [ESCRITORIO / SOFÁ / ARMARIO / OTRO]. Color: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar mi cama loft</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { titulo: "Gana espacio", desc: "La cama ocupa solo el espacio vertical. El metro cuadrado del suelo queda completamente libre para otros usos." },
            { titulo: "A medida exacta", desc: "Fabricamos al centímetro. Si tu pieza tiene 2,30 m de altura, hacemos la loft con esa altura libre abajo." },
            { titulo: "Acero al horno", desc: "Estructura en acero con pintura electrostática al horno. Más resistente que MDF o madera laminada." },
          ].map((f) => (
            <div key={f.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Configuraciones disponibles</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Modelo</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Medida cama</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Altura libre abajo</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Ideal para</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr><td className="p-3 border border-gray-100">Loft 1 plaza</td><td className="p-3 border border-gray-100">90 × 190 cm</td><td className="p-3 border border-gray-100">150 cm (estándar)</td><td className="p-3 border border-gray-100">Piezas arrendadas, estudios</td></tr>
                <tr className="bg-gray-50"><td className="p-3 border border-gray-100">Loft 1,5 plazas</td><td className="p-3 border border-gray-100">120 × 190 cm</td><td className="p-3 border border-gray-100">150 cm (estándar)</td><td className="p-3 border border-gray-100">Adolescentes, jóvenes adultos</td></tr>
                <tr><td className="p-3 border border-gray-100">Loft 2 plazas</td><td className="p-3 border border-gray-100">140 × 190 cm</td><td className="p-3 border border-gray-100">150 cm (estándar)</td><td className="p-3 border border-gray-100">Adultos, departamento pequeño</td></tr>
                <tr className="bg-gray-50"><td className="p-3 border border-gray-100">Loft a medida</td><td className="p-3 border border-gray-100">Tu medida</td><td className="p-3 border border-gray-100">Tu altura</td><td className="p-3 border border-gray-100">Cualquier espacio específico</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cama-alta-con-escritorio", label: "Cama Alta con Escritorio", desc: "Loft con escritorio integrado abajo" },
            { href: "/camarote-con-escritorio", label: "Camarote con Escritorio", desc: "2 camas + escritorio" },
            { href: "/cama-alta", label: "Cama Alta Metálica", desc: "Cama elevada estándar" },
            { href: "/camarotes-metalicos", label: "Todos los modelos", desc: "Ver catálogo completo" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Diseña tu cama loft a medida</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos las medidas de tu pieza y qué necesitas poner abajo. Cotizamos gratis.</p>
          <a href={wa("Hola, quiero cotizar cama loft metálica. Medida: [DATO]. Altura libre que necesito abajo: [DATO]. Uso del espacio de abajo: [ESCRITORIO / SOFÁ / ARMARIO]. Color: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
