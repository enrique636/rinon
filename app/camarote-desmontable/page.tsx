import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Desmontable — Se Arma y Desarma Fácil | Rinon.cl",
  description: "Camarote metálico desmontable fabricado en Chile. Se arma y desarma sin herramienta especializada. Ideal para arrendatarios, residencias universitarias y mudanzas frecuentes.",
  keywords: [
    "camarote desmontable",
    "camarote metalico desmontable",
    "camarote que se arma y desarma",
    "litera desmontable chile",
    "camarote para arriendo desmontable",
    "camarote facil montaje",
    "camarote sin herramienta",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-desmontable" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteDesmontablePage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Camarote Desmontable",
            description:
              "Camarote metálico desmontable. Se arma y desarma sin herramienta especializada. Fabricado en Chile por Rinon.cl.",
            brand: { "@type": "Brand", name: "Rinon.cl" },
            manufacturer: {
              "@type": "Organization",
              name: "Rinon.cl",
              address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "CLP",
              seller: { "@type": "Organization", name: "Rinon.cl" },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cuánto tiempo tarda armar el camarote desmontable?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Entre 30 y 60 minutos para dos personas. Las piezas vienen identificadas y el proceso no requiere herramienta especializada — solo llave allen o destornillador según el modelo.",
                },
              },
              {
                "@type": "Question",
                name: "¿El camarote desmontable pierde resistencia al armarse y desarmarse varias veces?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, si se arma correctamente. La clave es apretar bien todos los pernos en cada montaje y revisar que ninguna unión quede floja antes de usarlo. Un camarote que traquea o se mueve al usarlo es señal de que algún perno no está bien apretado.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede despachar a regiones desmontado?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, y es la ventaja principal del modelo desmontable. Al ir en piezas, el embalaje es más compacto y el costo de flete es menor. Despachamos a todo Chile.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Camarote Desmontable</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 text-sm text-teal-700 font-medium mb-5">
            🔧 Se arma y desarma · Sin herramienta especializada · Despacho a todo Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarote Desmontable
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Un camarote metálico diseñado para armarse y desarmarse cuantas veces necesites.
            Sin soldar, sin cortar, sin herramienta especializada. Las piezas se unen con pernos
            y la estructura mantiene la rigidez del acero en cada montaje.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            El modelo preferido por arrendatarios que se mudan seguido, residencias universitarias
            que rotan habitaciones, y familias que quieren llevar el camarote si cambian de casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={wa("Hola, me interesa el camarote desmontable. ¿Pueden darme el precio y las medidas?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
            >
              Cotizar por WhatsApp
            </a>
            <Link
              href="/camarotes"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-base hover:border-gray-400 transition-colors"
            >
              Ver todos los modelos
            </Link>
          </div>
        </div>

        {/* Características */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Cómo funciona el sistema desmontable</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "🔩", t: "Uniones con pernos", d: "Todos los puntos de unión se hacen con pernos y tuercas. Sin soldaduras en el montaje — solo herramienta manual básica." },
              { icon: "🏷️", t: "Piezas identificadas", d: "Cada pieza viene marcada. El proceso de montaje es intuitivo y no requiere instrucciones técnicas para seguirlo." },
              { icon: "⏱️", t: "30 a 60 minutos", d: "Tiempo estimado de montaje para dos personas. Al segundo o tercer armado, baja a menos de 30 minutos." },
              { icon: "💪", t: "Misma resistencia que el fijo", d: "Si todos los pernos están bien apretados, la rigidez es la misma que un camarote soldado. La diferencia es que lo puedes desarmar." },
            ].map((i) => (
              <div key={i.t} className="flex gap-4 bg-teal-50 border border-teal-100 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{i.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{i.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Para quién es */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Para quién es el modelo desmontable?</h2>
          <div className="space-y-3">
            {[
              { icon: "🏠", t: "Arrendatarios", d: "Si arriendas y te mudas cada 1-2 años, no tiene sentido comprar un camarote que no puedes llevar. El modelo desmontable es tuyo — lo llevas donde vayas." },
              { icon: "🎓", t: "Residencias universitarias", d: "Las residencias que rotan habitaciones o que necesitan guardar los camarotes en temporada de vacaciones. Se desarman, se almacenan en poco espacio y se vuelven a armar." },
              { icon: "📦", t: "Despacho a regiones", d: "Al ir en piezas, el embalaje es más compacto que el de un camarote armado. Reduce el costo de flete a regiones y el riesgo de daño en el transporte." },
              { icon: "🏗️", t: "Proyectos temporales", d: "Campamentos de faena, habilitaciones temporales, proyectos de corta duración donde el mobiliario no puede quedar fijo." },
            ].map((c) => (
              <div key={c.t} className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-xl flex-shrink-0">{c.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{c.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consejo de uso */}
        <div className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h3 className="font-bold text-amber-900 mb-2">⚠️ Importante para el montaje correcto</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              Un camarote desmontable que traquea o se siente inestable no tiene problema de
              estructura — tiene pernos flojos. Antes del primer uso, verifica que todos los puntos
              de unión estén bien apretados. Si tienes dudas del montaje, escríbenos por WhatsApp
              y te guiamos paso a paso.
            </p>
          </div>
        </div>

        {/* Links internos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-titanic", label: "Camarote Titanic", desc: "El más robusto — para uso intensivo fijo" },
            { href: "/camarote-con-escritorio", label: "Camarote con Escritorio", desc: "¿Necesitas escritorio? También disponible desmontable" },
            { href: "/camarotes", label: "Todos los modelos", desc: "Ver el catálogo completo de camarotes" },
            { href: "/empresas", label: "Para Empresas", desc: "Camarotes para faenas, campamentos y residencias" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-teal-400 transition-all"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Lo necesitas para mudarte o para una faena?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Cuéntanos el uso y cuántos camarotes necesitas. Cotizamos con despacho incluido.
          </p>
          <a
            href={wa("Hola, me interesa el camarote desmontable. Lo necesito para [USO]. ¿Pueden cotizarme?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
