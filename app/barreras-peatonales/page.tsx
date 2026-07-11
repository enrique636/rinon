import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Barreras Peatonales Metálicas — Separación de Peatones y Vehículos | Rinon.cl",
  description: "Fabricamos barreras peatonales metálicas para empresas, obras, industrias y espacios públicos. Separación segura de flujos peatonales y vehiculares. A medida, con instalación.",
  keywords: [
    "barreras peatonales", "barrera peatonal metalica", "separadores peatonales", "mallas de proteccion peatonal",
    "vallas peatonales", "separacion peatones vehiculos", "proteccion peatonal metalica", "barreras peatonales empresa",
    "mallas para controlar peatones", "cierres para peatones obras",
  ],
  alternates: { canonical: "https://rinon.cl/barreras-peatonales" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function BarrerasPeatonalesPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Qué es una barrera peatonal metálica?", acceptedAnswer: { "@type": "Answer", text: "Es una estructura de acero que separa físicamente el tránsito de peatones del tránsito vehicular o de zonas de riesgo. Puede ser un módulo individual, un sistema de paneles encadenados o una malla fija instalada en el suelo. Su función es guiar o restringir el movimiento de personas en un espacio determinado." } },
          { "@type": "Question", name: "¿Se pueden mover o son fijas?", acceptedAnswer: { "@type": "Answer", text: "Depende del modelo. Las barreras modulares con bases de peso propio se pueden reubicar sin herramienta. Las mallas fijas ancladas al piso son permanentes. Fabricamos ambas según el uso — si necesitas flexibilidad para reconfigurar el espacio, te recomendamos el sistema modular." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/mallas-separadoras" className="hover:text-gray-600">Mallas Separadoras</Link><span>/</span>
          <span className="text-gray-700 font-medium">Barreras Peatonales</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 text-sm text-red-700 font-medium mb-5">🚶 Control peatonal · Seguridad · Fabricante en Chile</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Barreras Peatonales Metálicas</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Cuando peatones y vehículos comparten un mismo espacio, el riesgo de accidente aumenta
            exponencialmente. Las barreras peatonales metálicas separan ambos flujos de forma clara,
            visible y resistente — guiando al peatón por rutas seguras sin depender de señalética que
            nadie lee.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos para industrias, bodegas, estacionamientos, obras, municipios y cualquier
            espacio donde separar personas de vehículos sea una necesidad de seguridad real.
          </p>
          <a href={wa("Hola, necesito barreras peatonales metálicas para [DESCRIBIR USO]. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar barreras peatonales</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Dónde se usan más</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🏭", t: "Industrias y fábricas", d: "Zonas de carga y descarga, pasillos internos, acceso a maquinaria. El 60% de los accidentes en industria ocurre en la intersección de personas y vehículos internos." },
              { icon: "📦", t: "Bodegas y centros logísticos", d: "Pasillos de personal separados de rutas de montacargas y transpaletas. Reduce los incidentes y acelera la circulación al eliminar las interferencias." },
              { icon: "🚧", t: "Obras en vía pública", d: "Separación del peatón del área de trabajo. Barreras modulares que delimitan el paso peatonal habilitado alrededor de la obra." },
              { icon: "🅿️", t: "Estacionamientos", d: "Separación de la zona de estacionamiento del acceso peatonal. Define rutas claras para que los peatones no circulen entre autos en movimiento." },
              { icon: "🏫", t: "Colegios e instituciones", d: "Zonas de bajada de vehículos separadas de la circulación de alumnos. Muy solicitado para mejorar la seguridad en horarios de entrada y salida." },
              { icon: "🏛️", t: "Municipios y espacio público", d: "Puntos de cruce peatonal, esquinas con alta circulación, eventos masivos. Las barreras definen los flujos sin obra civil permanente." },
            ].map(a => (
              <div key={a.t} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{a.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{a.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/mallas-separadoras", label: "Mallas Separadoras", desc: "Catálogo completo de divisiones metálicas" },
            { href: "/mallas-separadoras-bodegas", label: "Para Bodegas", desc: "División interior de bodegas y galpones" },
            { href: "/cierres-perimetrales", label: "Cierres Perimetrales", desc: "El cierre exterior del predio" },
            { href: "/cierres-para-obras", label: "Cierres para Obras", desc: "Control de perímetro en construcción" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-red-300 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿En qué espacio necesitas separar peatones?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el uso, el espacio y los metros lineales. Cotizamos sin compromiso.</p>
          <a href={wa("Hola, necesito barreras peatonales para separar [DESCRIBIR]. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
