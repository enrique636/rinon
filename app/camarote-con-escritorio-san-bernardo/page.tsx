import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio San Bernardo — Despacho a Domicilio | Camarotes Chile",
  description:
    "Camarote con escritorio para San Bernardo. Despacho a domicilio en toda la comuna. Fabricante directo — pago contra entrega.",
  keywords: [
    "camarote con escritorio san bernardo",
    "cama alta escritorio san bernardo",
    "camarotes san bernardo",
    "camarote san bernardo despacho",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-san-bernardo" },
};

export default function CamaroteEscritorioSanBernardoPage() {
  const wa = getWhatsAppUrl("Hola, vivo en San Bernardo y quiero un camarote con escritorio. ¿Hacen despacho?");
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes con escritorio a San Bernardo?", acceptedAnswer: { "@type": "Answer", text: "Sí. Despachamos e instalamos camarotes con escritorio en San Bernardo con un costo fijo que incluye instalación. Pagas cuando llega el producto a tu domicilio." } },
          { "@type": "Question", name: "¿Cuánto tarda el despacho?", acceptedAnswer: { "@type": "Answer", text: "En Santiago RM la entrega e instalación se realiza en un día acordado, generalmente dentro de la semana de confirmado el pedido. Para regiones coordinamos transporte — el plazo depende de la distancia y disponibilidad de flete." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">San Bernardo</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            📍 San Bernardo · Despacho a domicilio · Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarote con Escritorio en San Bernardo
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Entregamos camarotes con escritorio en toda la comuna de San Bernardo — Cabildo,
            El Mariscal, Covadonga y todos los sectores. Pago contra entrega cuando llega tu pedido.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            San Bernardo tiene hogares con piezas de tamaño variado. En departamentos de los nuevos
            condominios el camarote con escritorio resuelve el espacio de dormitorio + estudio en
            un solo mueble. En casas más antiguas con piezas grandes, la solución puede ser
            diferente. Consúltanos con las medidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-con-escritorio-full-real.jpg" alt="Camarote con escritorio con despacho a San Bernardo" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para San Bernardo</a>
            <Link href="/camarote-con-escritorio" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver modelos</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { t: "Plazo de entrega", v: SITE_CONFIG.despacho.dias, icon: "🚛" },
            { t: "Precio despacho", v: `$${SITE_CONFIG.despacho.precio.toLocaleString("es-CL")}`, icon: "💰" },
            { t: "Pago", v: "Contra entrega", icon: "✅" },
          ].map((d) => (
            <div key={d.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{d.icon}</span>
              <p className="text-xs text-gray-400 mb-1">{d.t}</p>
              <p className="font-bold text-gray-900">{d.v}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-con-escritorio", label: "Camarote con Escritorio Estándar", desc: "El más pedido. Cama arriba, zona de trabajo abajo." },
            { href: "/camarote-con-escritorio-adolescente", label: "Para Adolescentes", desc: "Estudios + cama en una sola estructura." },
            { href: "/camarote-con-escritorio-nino", label: "Para Niños", desc: "Juego arriba, zona de tareas abajo." },
            { href: "/camarote-con-escritorio-departamento", label: "Para Departamentos", desc: "Maximiza cada m² en departamentos nuevos." },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Estás en San Bernardo?</h2>
          <p className="text-gray-400 text-sm mb-5">Contáctanos y coordinamos el despacho a tu dirección.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar ahora</a>
        </div>
      </div>
    </div>
  );
}
