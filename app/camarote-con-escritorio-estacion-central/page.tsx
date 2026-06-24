import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Estación Central — Despacho a Domicilio | Camarotes Chile",
  description:
    "Camarote con escritorio para Estación Central. Ideal para estudiantes universitarios. Despacho a domicilio — pago contra entrega.",
  keywords: [
    "camarote con escritorio estacion central",
    "cama alta escritorio estacion central",
    "camarote universitario estacion central",
    "camarotes estacion central santiago",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-con-escritorio-estacion-central" },
};

export default function CamaroteEscritorioEstacionCentralPage() {
  const wa = getWhatsAppUrl("Hola, estoy en Estación Central y busco un camarote con escritorio. ¿Hacen despacho?");
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Estación Central</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            📍 Estación Central · Alta demanda universitaria · Despacho a domicilio
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarote con Escritorio en Estación Central
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Estación Central concentra una de las mayores poblaciones de estudiantes universitarios
            de Santiago, por su cercanía al metro y la USACH. El camarote con escritorio es el
            mueble más solicitado en piezas arrendadas de la zona.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Despachamos a toda la comuna — Barrio Yungay, Exposición, Avenida Buenos Aires y
            todos los sectores. Pago contra entrega. Si arriendan la pieza y no pueden
            recibir hasta el fin de semana, también coordinamos eso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para Estación Central</a>
            <Link href="/camarote-con-escritorio" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver modelos</Link>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-gray-900 mb-2 text-sm">Por qué Estación Central elige camarote con escritorio</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            Las piezas arrendadas en la zona tienen entre 9 y 14 m². Un escritorio aparte más una cama
            individual ocupa prácticamente todo el espacio. El camarote con escritorio fusiona ambos
            en la misma huella de m², liberando espacio para el guardarropa y el movimiento diario.
            Para universitarios que viven solos, es la decisión que más rinde económicamente.
          </p>
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
            { href: "/camarote-con-escritorio-universitario", label: "Para Universitarios", desc: "El más pedido en Estación Central." },
            { href: "/camarote-con-escritorio-habitacion-pequena", label: "Para Habitación Pequeña", desc: "Maximiza piezas de 9-12 m²." },
            { href: "/camarote-con-escritorio-home-office", label: "Para Home Office", desc: "Trabaja y duerme en el mismo espacio." },
            { href: "/camarote-con-escritorio-pieza-arrendada", label: "Para Pieza Arrendada", desc: "Lo que buscan los que arriendan." },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Estás en Estación Central?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el tamaño de la pieza y el uso. Te recomendamos el modelo exacto.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar ahora</a>
        </div>
      </div>
    </div>
  );
}
