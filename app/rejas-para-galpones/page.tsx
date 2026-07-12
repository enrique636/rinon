import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas para Galpones — Seguridad Industrial y Separación de Sectores",
  description: "Rejas metálicas para galpones en Chile. Separación de sectores, accesos vehiculares y control de circulación interior. Fabricante directo con instalación en la RM.",
  keywords: [
    "rejas para galpones",
    "reja galpón industrial",
    "malla separadora galpón",
    "reja metalica galpón chile",
    "separacion sectores galpón",
    "cierre interno galpón metalico",
    "reja acceso galpón",
    "fabricante rejas industriales chile",
    "reja interior bodega galpón",
    "control acceso galpón metalico",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-para-galpones" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasParaGalponesPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican rejas para galpones y bodegas?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos rejas perimetrales y portones para galpones industriales, bodegas y maestranzas. Los modelos más usados son tubo estructural de 2 pulgadas con portón corredizo." } },
          { "@type": "Question", name: "¿Soportan el clima industrial?", acceptedAnswer: { "@type": "Answer", text: "Sí. Aplicamos pintura electrostática al horno que protege el metal de la corrosión en ambientes industriales. Para exposición extrema ofrecemos versión galvanizada." } },
        ],
      })} } />
<div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rejas para Galpones</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Industrial · Separación de sectores · Instalación en Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas para Galpones — Separación y Control de Acceso</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            En un galpón industrial, las rejas metálicas cumplen una función distinta a la de
            una casa: no es seguridad perimetral, sino organización interna — separar zonas
            de trabajo, controlar quién accede a cada área y delimitar el paso de equipos y
            personal. Fabricamos rejas interiores para galpones en tubo y malla de acero.
          </p>
          <a
            href={wa("Hola, necesito cotizar rejas para galpón. Uso: [SEPARACIÓN DE SECTORES / ACCESO VEHICULAR / CIERRE DE PERÍMETRO INTERNO]. Largo aproximado: [METROS] m. Altura: [ALTURA] m. Tipo de cierre: [FIJO / CON PUERTA / CON PORTÓN]. Ubicación: [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar rejas para galpón
          </a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos más comunes en galpones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Separación de sectores de trabajo", d: "Divide zonas de producción, almacenamiento y despacho dentro del mismo galpón. La reja marca el límite y controla el paso sin bloquear la visual ni la ventilación." },
              { t: "Acceso vehicular interno", d: "Portón metálico en el interior del galpón para separar la zona de carga/descarga del área de producción. Puede ser corredizo o batiente según el espacio disponible." },
              { t: "Malla de seguridad para maquinaria", d: "Reja de malla industrial alrededor de equipos peligrosos — para cumplir la normativa de seguridad ocupacional (DS 594) y proteger al personal de accidentes." },
              { t: "Cierre de zona de productos de valor", d: "Reja interior con cerradura para proteger inventario, herramientas o insumos de alto valor dentro del galpón. Acceso restringido sin necesidad de un cuarto separado." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de reja según el uso en galpón</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Tipo</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Descripción</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Reja tubular fija", "Marco de tubo con barrotes verticales. Alta rigidez, bajo mantenimiento.", "Separación permanente de sectores"],
                  ["Malla romboidal en marco", "Marco de tubo con malla de acero galvanizado. Más económica.", "Zonas de visual sin acceso físico"],
                  ["Portón corredizo industrial", "Portón en tubo reforzado sobre riel. Apertura lateral sin espacio extra.", "Acceso de pallets y equipos grandes"],
                  ["Reja plegable o acordeón", "Se pliega hacia los lados. Útil cuando el acceso varía en ancho.", "Accesos flexibles y pasillos anchos"],
                ].map(([tipo, desc, ideal]) => (
                  <tr key={tipo} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{tipo}</td>
                    <td className="p-3 text-gray-500">{desc}</td>
                    <td className="p-3 text-gray-500">{ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-industriales", label: "Rejas industriales", desc: "Guía completa de rejas para industria" },
            { href: "/cercos-para-estacionamientos", label: "Cercos para estacionamientos", desc: "Perímetro exterior del galpón" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Accesos de alto tráfico y camiones" },
            { href: "/mallas-separadoras", label: "Mallas separadoras", desc: "Separación interna en bodegas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza rejas para tu galpón</h2>
          <p className="text-gray-400 text-sm mb-5">Metros lineales, uso y si necesitas portón. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar rejas para galpón. Uso: [DATO]. Metros: [METROS] m. Altura: [ALTURA] m. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
