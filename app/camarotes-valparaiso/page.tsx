import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Metálicos Valparaíso y Viña del Mar — Fabricante en Santiago",
  description: "Camarotes metálicos para Valparaíso, Viña del Mar, Quilpué, Villa Alemana y toda la Región de Valparaíso. Fabricante en Santiago con despacho a la costa. Uso residencial, universitario y hotelero.",
  keywords: ["camarotes valparaiso", "camarotes metalicos valparaiso", "camarotes vina del mar", "camarotes region valparaiso", "comprar camarote valparaiso", "camarotes quilpue", "camarotes universitarios valparaiso", "camarote metalico vina del mar", "camarotes para hostal valparaiso"],
  alternates: { canonical: "https://rinon.cl/camarotes-valparaiso" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamarotesValparaisoPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Hacen despacho de camarotes a Valparaíso y Viña del Mar?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos en Santiago y despachamos a Valparaíso, Viña del Mar, Quilpué, Villa Alemana, Concón y toda la Región de Valparaíso. El flete se coordina al cotizar." } },
          { "@type": "Question", name: "¿Pueden traer camarotes a un hostal o cabañas en Valparaíso?", acceptedAnswer: { "@type": "Answer", text: "Sí. Atendemos hostales, posadas y cabañas de la región. Para uso turístico recomendamos camarotes con protección anticorrosión (ambiente costero) y barandas reforzadas para el uso intensivo de hostal." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link><span>/</span>
          <span className="text-gray-700 font-medium">Valparaíso</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante en Santiago · Despacho Región Valparaíso</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Valparaíso y Viña del Mar</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos en Santiago y despachamos camarotes metálicos a Valparaíso, Viña del Mar, Quilpué, Villa Alemana y toda la Región de Valparaíso. Para uso familiar, universitario, hotelero y hostelero.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-900">
            <strong className="block mb-1">Zona costera — recomendamos acabado anticorrosión</strong>
            <span className="text-xs text-blue-700">El ambiente marino de Valparaíso y Viña acelera la corrosión del acero sin protección. Para camarotes en esta zona recomendamos pintura epóxica o galvanizado en el tratamiento superficial.</span>
          </div>

          <a href={wa("Hola, necesito cotizar camarotes metálicos para Valparaíso / Viña del Mar. Modelo: [MODELO]. Cantidad: [N] unidades. Dirección de entrega: [DIRECCIÓN, CIUDAD].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos más frecuentes en la Región de Valparaíso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Hostales y posadas", d: "Valparaíso es la capital del turismo mochilero en Chile. Los hostales necesitan camarotes resistentes al uso intensivo diario." },
              { t: "Pensiones universitarias", d: "Valparaíso tiene alta densidad de universidades (PUCV, UV, UTFSM). Camarotes para pensiones y residencias de estudiantes." },
              { t: "Uso familiar", d: "Camarotes para dormitorios de casas en Viña del Mar, Quilpué y Villa Alemana. El modelo clásico de 1 plaza arriba + 1 plaza abajo." },
              { t: "Campamentos y obras", d: "La región tiene actividad de construcción y obra. Camarotes de uso intensivo para campamentos de trabajadores." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades de la región con despacho disponible</h2>
          <div className="flex flex-wrap gap-2">
            {["Valparaíso","Viña del Mar","Quilpué","Villa Alemana","Concón","Olmué","Limache","Quillota","San Antonio","Casablanca","Los Andes","San Felipe"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes", label: "Ver catálogo completo", desc: "Todos los modelos disponibles" },
            { href: "/camarote-doble", label: "Camarote doble clásico", desc: "El más solicitado" },
            { href: "/camarote-con-escritorio", label: "Con escritorio", desc: "Para estudiantes" },
            { href: "/camarotes-concepcion", label: "Camarotes Concepción", desc: "También atendemos el sur" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿A qué ciudad de la región llega el pedido?</h2>
          <p className="text-gray-400 text-sm mb-5">Modelo, cantidad y dirección exacta. Coordinamos el despacho a Valparaíso o la región.</p>
          <a href={wa("Hola, quiero camarotes con despacho a Valparaíso / Región de Valparaíso. Ciudad: [CIUDAD]. Modelo: [MODELO]. Cantidad: [N]. Dirección: [DIRECCIÓN].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
