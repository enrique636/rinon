import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja para Jardín Santiago — Cerco Decorativo para Patio y Jardín",
  description: "Rejas metálicas para jardín en Santiago. Cercos decorativos bajos para delimitar jardines, patios y terrazas. Fabricante directo con instalación incluida. Diseños simples y forja ornamental.",
  keywords: [
    "reja para jardin",
    "reja metalica jardin",
    "cerco para jardin santiago",
    "reja decorativa para jardin",
    "reja baja para jardin",
    "reja de metal para jardin",
    "cerco bajo jardin precio",
    "reja para patio exterior",
    "reja jardin acero",
    "cerco ornamental jardin chile",
  ],
  alternates: { canonical: "https://dumar.cl/reja-para-jardin" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejaParaJardinPage() {
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
                name: "¿Qué altura lleva una reja para jardín?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Para jardines y patios, las rejas bajas van entre 40 y 80 cm de altura. Sirven para delimitar zonas, separar el jardín de la vereda interior o encuadrar arriates. Para mayor privacidad o seguridad, se pueden llevar a 1,20–1,50 m manteniendo diseño decorativo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Se puede hacer una reja para jardín con diseño de forja?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Fabricamos rejas de jardín con elementos ornamentales de hierro forjado: lanzas, flor de lis, espirales y rombos. El diseño es a medida y el acabado lleva pintura electrostática al horno en el color que elijas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto cuesta una reja para jardín?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio depende del diseño, la altura y los metros lineales. Las rejas bajas simples (tubular liso) son más económicas; los modelos con forja ornamental tienen un costo mayor por el trabajo manual. Cotiza por WhatsApp con los metros y la altura para el precio exacto.",
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
          <span className="text-gray-700 font-medium">Reja para Jardín</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Diseño decorativo · A medida · Instalación en Santiago
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reja para Jardín — Cercos Decorativos para Patio y Terraza
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Una reja de jardín no es solo seguridad — es diseño. Fabricamos cercos metálicos
            bajos y decorativos para delimitar jardines, patios y terrazas. Desde el tubular
            simple hasta la forja ornamental, a medida en Santiago con instalación incluida.
          </p>
          <a
            href={wa("Hola, necesito cotizar una reja para jardín o patio. Altura: [ALTURA cm]. Metros lineales: [METROS] ml. Diseño: [SIMPLE / FORJA / CON LANZAS]. Estoy en [COMUNA].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi reja de jardín
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Estilos de reja para jardín</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Tubular liso", d: "Tubo cuadrado o redondo con barrotes verticales. El diseño más limpio y económico. Ideal para jardines modernos y minimalistas. Altura 50–100 cm." },
              { t: "Lanzas y puntas", d: "Barrotes con punta piramidal o lanza en el extremo superior. Diseño clásico que suma un punto de seguridad disuasivo sin perder la estética." },
              { t: "Forja ornamental", d: "Elementos de hierro forjado a mano: espirales, flores de lis, rombos. El estilo más elaborado, ideal para casas de diseño colonial, mediterráneo o clásico." },
              { t: "Mixto con relleno", d: "Marco tubular con paneles de malla o rombos soldados. Más opaco que el tubular simple pero mantiene ligereza visual. Popular en terrazas y decks." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Alturas más usadas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Altura</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Uso típico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["40–60 cm", "Delimitar arriates, bordes de jardín, caminos internos"],
                  ["70–100 cm", "Separar zonas del patio, cerco de jardín frente a la casa"],
                  ["1,20 m", "Cerco de jardín con algo de seguridad pero sin bloquear la vista"],
                  ["1,50 m", "Jardín con privacidad parcial, ideal para terraza de departamento"],
                ].map(([h, u]) => (
                  <tr key={h} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{h}</td>
                    <td className="p-3 text-gray-500">{u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-decorativas", label: "Rejas decorativas", desc: "Forja, rombos y diseños ornamentales" },
            { href: "/rejas-para-exteriores", label: "Rejas para exteriores", desc: "Acabados resistentes a la intemperie" },
            { href: "/barandas-metalicas", label: "Barandas metálicas", desc: "Para terrazas y escaleras" },
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis completo con portón" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros de jardín necesitas cercar?</h2>
          <p className="text-gray-400 text-sm mb-5">
            Altura, metros y estilo. Cotizamos con instalación el mismo día.
          </p>
          <a
            href={wa("Hola, necesito una reja para jardín o patio. Altura: [ALTURA cm]. Metros: [METROS] ml. Diseño: [SIMPLE / FORJA / CON LANZAS]. Estoy en [COMUNA].")}
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
