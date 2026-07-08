import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Tubular Santiago — Fabricante Directo con Instalación",
  description: "Rejas tubulares en Santiago. Fabricante directo en acero cuadrado o rectangular. Para frontis residencial, cerco perimetral, portones e industria. Pintura electrostática incluida. Cotiza hoy.",
  keywords: [
    "reja tubular",
    "reja tubular santiago",
    "reja tubular precio",
    "reja tubular para frontis",
    "reja tubular acero",
    "reja de tubo cuadrado",
    "reja tubular precio chile",
    "fabricante reja tubular santiago",
    "reja tubular galvanizada",
    "reja tubular instalacion",
    "reja tubo cuadrado santiago",
  ],
  alternates: { canonical: "https://rinon.cl/reja-tubular" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejaTubularPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué es una reja tubular?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Una reja tubular es una reja metálica fabricada con tubos de acero — generalmente tubo cuadrado (de sección cuadrada) o tubo rectangular. Es el tipo de reja más común en Chile para frontis residencial, cerco perimetral e industria. La diferencia con una reja de ángulo o perfil es el tipo de material: el tubo tiene el material distribuido en las paredes huecas, lo que lo hace más resistente por peso que el ángulo sólido.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué calibre de tubo cuadrado usar para una reja de frontis?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Para frontis residencial estándar (1,20 a 1,80 m de alto), el tubo cuadrado de 1\" (25x25 mm) es suficiente y es el más usado. Para alturas mayores a 1,80 m o uso en cerco perimetral de mayor exposición, se recomienda tubo de 1,5\" o 2\". Para uso industrial, desde 2\" en adelante.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué diferencia hay entre reja tubular y reja de ángulo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La reja tubular usa tubo cuadrado o rectangular (sección hueca) mientras que la reja de ángulo usa perfil de ángulo (sección en L, sólida). El tubo es más rígido y más resistente por el mismo peso. La reja tubular tiene mejor aspecto terminado y es el estándar actual en rejas nuevas. La reja de ángulo es más antigua y se usa menos en obra nueva hoy.",
                },
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Reja Tubular</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Pintura electrostática incluida · Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reja Tubular en Santiago — Fabricante Directo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas tubulares de acero a medida en Santiago. Tubo cuadrado de 1\" a 3\",
            con pintura electrostática al horno, instalación incluida. Para frontis residencial,
            cerco perimetral, industria y portones.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja tubular en Santiago. Los metros son: [METROS] ml. Altura: [ALTURA] m. Calibre de tubo si lo sé: [CALIBRE]. Estoy en [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar reja tubular
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Calibres de tubo cuadrado disponibles</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium text-xs">Calibre</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-medium text-xs">Sección</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-medium text-xs">Uso recomendado</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-medium text-xs">Aplicación típica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["¾\"", "19×19 mm", "Liviano / decorativo", "Rejas interiores, jardines"],
                  ["1\"", "25×25 mm", "Residencial estándar", "Frontis de casa, 1,20–1,80 m"],
                  ["1½\"", "38×38 mm", "Residencial reforzado", "Frontis alto, cercos de parcela"],
                  ["2\"", "50×50 mm", "Semi-industrial", "Cerco comercial, portones grandes"],
                  ["2½\" – 3\"", "65–75 mm", "Industrial / pesado", "Industria, parques, alta seguridad"],
                ].map(([cal, sec, uso, apl]) => (
                  <tr key={cal}>
                    <td className="py-3 pr-4 text-gray-900 text-xs font-semibold">{cal}</td>
                    <td className="py-3 px-3 text-gray-500 text-xs">{sec}</td>
                    <td className="py-3 px-3 text-gray-700 text-xs">{uso}</td>
                    <td className="py-3 px-3 text-gray-500 text-xs">{apl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">¿No sabes qué calibre necesitas? Escríbenos con el uso y te recomendamos.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Aplicaciones de la reja tubular</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Frontis residencial","Cerco perimetral","Reja para ventanas","Portón vehicular",
              "Cierre industrial","Mallas separadoras","Reja de jardín","Cerco de parcela",
              "Acceso peatonal","Barandas","Divisiones internas","Rejas para locales",
            ].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">{item}</div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Reja tubular galvanizada o pintada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Pintada (electrostática al horno)", d: "Pintura en polvo curada al horno — dura, uniforme, en negro o cualquier color RAL. El estándar para zonas interiores y Santiago. Más económica que galvanizada." },
              { t: "Galvanizada en caliente", d: "Recubrimiento de zinc — máxima protección contra corrosión. Recomendada para zona costera (Valparaíso, V Región), sur húmedo (Biobío, Los Lagos) o instalaciones industriales." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas", label: "Galería de rejas", desc: "Todos los modelos disponibles" },
            { href: "/rejas-metalicas-para-casas", label: "Reja para casas", desc: "Frontis completo + portón" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "Para zona costera o húmeda" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "El acabado de todas nuestras rejas" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros de reja tubular necesitas?</h2>
          <p className="text-gray-400 text-sm mb-5">Metros lineales, altura, calibre si lo sabes y comuna. Cotizamos el mismo día.</p>
          <a
            href={wa("Hola, quiero cotizar una reja tubular. Metros: [METROS] ml. Altura: [ALTURA] m. Tubo: [CALIBRE si lo sé]. Con portón: [SÍ / NO]. Comuna: [COMUNA].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
