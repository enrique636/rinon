import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Presupuesto Cerco Perimetral Chile — Cómo Obtener Precio en el Día",
  description: "Pide presupuesto de cerco perimetral en Chile. Fabricante directo. Con 4 datos básicos te entregamos precio completo con instalación el mismo día — sin visita técnica previa para la mayoría de los casos.",
  keywords: ["presupuesto cerco perimetral","presupuesto cerco metalico chile","como pedir presupuesto cerco","cotizar cerco perimetral chile","presupuesto cierre perimetral santiago","pedir precio cerco metalico","presupuesto reja perimetral","cerco perimetral cotizacion online","precio cerco instalado chile"],
  alternates: { canonical: "https://rinon.cl/presupuesto-cerco-perimetral" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PresupuestoCercoPerimetralPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cómo pido un presupuesto de cerco perimetral?", acceptedAnswer: { "@type": "Answer", text: "Solo necesitamos los metros lineales del proyecto, la altura deseada y el tipo de uso (casa, condominio, empresa, industria). Con esos datos te enviamos el presupuesto por WhatsApp el mismo día." } },
          { "@type": "Question", name: "¿El presupuesto incluye instalación?", acceptedAnswer: { "@type": "Answer", text: "Sí. El presupuesto incluye fabricación e instalación para la Región Metropolitana. Para regiones, el transporte se cotiza por separado." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Presupuesto</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Presupuesto el mismo día · Sin visita técnica · Con instalación incluida</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Presupuesto de Cerco Perimetral — Precio el Mismo Día</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">No necesitas esperar una visita técnica para saber el precio de tu cerco. Con 4 datos básicos te respondemos con el presupuesto completo el mismo día — fabricación e instalación incluidas. Para proyectos grandes o complejos, coordinamos visita técnica gratuita.</p>
          <a href={wa("Hola, necesito presupuesto de cerco perimetral. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA / INDUSTRIAL]. Portones: [CANTIDAD]. Ubicación: [COMUNA / CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Pedir presupuesto ahora</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Los 4 datos que necesitas para el presupuesto</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Metros lineales totales", d: "Mide el perímetro completo de tu terreno o la zona que vas a cercar. Incluye portones y puertas en la medición — se descuentan después para calcularlos aparte." },
              { n: "2", t: "Altura del cerco", d: "La altura más común para casas es 1,50–1,80 m. Para empresas e industrias, 2,00–2,40 m. Para cercos decorativos bajos (jardín), 60–100 cm." },
              { n: "3", t: "Uso de la propiedad", d: "Casa, empresa, bodega, parcela, colegio — el uso define el tipo de cerco recomendado y el acabado." },
              { n: "4", t: "Ubicación", d: "La comuna o ciudad define el costo de transporte e instalación, y en zonas costeras o del sur, el tipo de acabado recomendado (galvanizado vs pintado)." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{step.n}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{step.t}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Cómo medir el perímetro?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Si no tienes el plano del terreno, la forma más sencilla es medir con cinta métrica o contar pasos desde la acera. Una persona da pasos de aprox. 75–80 cm. También puedes usar Google Maps: haz clic derecho en el mapa satelital de tu propiedad → "Medir distancia" y traza el perímetro.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            No necesitas la medida exacta para cotizar. Con un estimado aproximado (±10%) te entregamos el presupuesto, y ajustamos al confirmar el pedido.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-precio", label: "Precios de cercos", desc: "Factores que afectan el costo" },
            { href: "/blog/como-medir-metros-lineales-reja", label: "Cómo medir metros lineales", desc: "Guía paso a paso" },
            { href: "/cierres-perimetrales", label: "Tipos de cierres", desc: "Elige el tipo correcto" },
            { href: "/blog/cuanto-cuesta-cierre-perimetral-chile", desc: "Guía completa de costos en Chile", label: "Cuánto cuesta un cierre" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Tu presupuesto en menos de 24 horas</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura, uso y ubicación. Con esos datos tienes el precio completo hoy mismo.</p>
          <a href={wa("Hola, necesito presupuesto cerco perimetral. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO]. Portones: [CANTIDAD]. Ubicación: [DATO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
