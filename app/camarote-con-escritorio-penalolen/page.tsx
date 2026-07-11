import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Peñalolén — Despacho a Domicilio | Camarotes Chile",
  description:
    "Camarote con escritorio para Peñalolén. Despacho a domicilio en toda la comuna. Fabricante directo — pago contra entrega. Ideal para piezas pequeñas.",
  keywords: [
    "camarote con escritorio peñalolen",
    "cama alta con escritorio peñalolen",
    "camarote peñalolen",
    "camarotes peñalolen despacho",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-penalolen" },
};

export default function CamaroteEscritorioPenalolenPage() {
  const wa = getWhatsAppUrl("Hola, estoy en Peñalolén y quiero un camarote con escritorio. ¿Hacen despacho a domicilio?");
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Peñalolén</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            📍 Peñalolén · Despacho a domicilio · Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarote con Escritorio en Peñalolén
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Despachamos camarotes con escritorio a toda la comuna de Peñalolén — La Faena,
            Lo Hermida, El Vergel, Villa La Reina sector Peñalolén. Pago contra entrega,
            sin tarjeta de crédito, sin trámites previos.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Somos fabricantes — el camarote no viene de una tienda de retail, viene directo
            de nuestro taller. Eso se traduce en mejor precio, mejor calidad de soldadura
            y la posibilidad de ajustar medidas si tu pieza lo requiere.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-escritorio-economico-universitario.jpg" alt="Camarote con escritorio con despacho a Peñalolén Santiago" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para Peñalolén</a>
            <Link href="/camarote-con-escritorio" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver modelos</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { t: "Plazo de entrega", v: `${SITE_CONFIG.despacho.dias}`, icon: "🚛" },
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
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Modelos populares en Peñalolén</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/camarote-con-escritorio", label: "Camarote con Escritorio Estándar", desc: "Cama 1 plaza arriba, escritorio integrado abajo. El más pedido." },
              { href: "/camarote-con-escritorio-universitario", label: "Para Universitarios", desc: "Zona de estudio integrada. Ideal para quien trabaja o estudia en casa." },
              { href: "/camarote-con-escritorio-adolescente", label: "Para Adolescentes", desc: "La solución para piezas de 9-12 m² con escritorio y almacenamiento." },
              { href: "/camarote-con-escritorio-habitacion-pequena", label: "Para Habitación Pequeña", desc: "Cuando el espacio manda. Máxima funcionalidad en mínimos m²." },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
                <p className="text-gray-500 text-xs">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Estás en Peñalolén?</h2>
          <p className="text-gray-400 text-sm mb-5">Escríbenos y coordinamos el despacho directo a tu dirección.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar ahora</a>
        </div>
      </div>
    </div>
  );
}
