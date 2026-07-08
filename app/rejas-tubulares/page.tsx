import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas Tubulares Santiago — Fabricante de Reja de Tubo Cuadrado",
  description: "Rejas tubulares de acero en Santiago. Fabricante directo. Reja de tubo cuadrado estructural para frontis, ventanas, puertas y perímetros. El tipo de reja más resistente y versátil. Instalación incluida.",
  keywords: [
    "rejas tubulares",
    "reja tubular acero",
    "reja de tubo cuadrado",
    "reja tubular santiago",
    "reja de tubo estructural",
    "reja tubular precio chile",
    "fabricante rejas tubulares",
    "reja metalica tubular para casa",
    "reja tubo cuadrado frontis",
    "rejas de tubo redondo santiago",
  ],
  alternates: { canonical: "https://rinon.cl/rejas-tubulares" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasTubularesPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Qué es una reja tubular?", acceptedAnswer: { "@type": "Answer", text: "Una reja tubular es una reja metálica fabricada con tubo cuadrado o redondo de acero estructural. Es el tipo de reja más usado en Chile — resistente, versátil y económica. Los tubos cuadrados (20×20, 25×25, 30×30 mm) son los más comunes para frontis y ventanas." } },
              { "@type": "Question", name: "¿Cuál es el espesor de tubo correcto para una reja?", acceptedAnswer: { "@type": "Answer", text: "Para rejas de ventana, tubo 15×15 o 20×20 mm. Para frontis residencial, tubo 25×25 mm. Para cercos industriales o de mayor seguridad, tubo 30×30 o 40×40 mm. A mayor espesor, mayor peso, costo y resistencia." } },
              { "@type": "Question", name: "¿Tubo cuadrado o tubo redondo para rejas?", acceptedAnswer: { "@type": "Answer", text: "El tubo cuadrado es el estándar para la mayoría de las rejas — más fácil de soldar, mejor agarre para la pintura electrostática y visualmente más limpio. El tubo redondo se usa más en diseños decorativos o barandas donde el aspecto importa." } },
            ],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Rejas Tubulares</span>
        </nav>
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Tubo cuadrado estructural · El estándar del mercado · Instalación en Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Tubulares — Fabricadas en Tubo de Acero Estructural</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">La reja tubular es el tipo de reja más usado en Chile — y con razón. El tubo cuadrado de acero estructural ofrece la mejor relación entre resistencia, precio y facilidad de instalación. Fabricamos rejas tubulares a medida para frontis, ventanas, puertas y perímetros en Santiago.</p>
          <a href={wa("Hola, necesito cotizar una reja tubular. Uso: [FRONTIS / VENTANA / PUERTA / PERÍMETRO]. Medidas: [ALTO x ANCHO o metros lineales]. Espesor de tubo: [15 / 20 / 25 / 30 mm o consultarme]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar reja tubular</a>
        </div>
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Espesores de tubo más usados</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Perfil</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Uso típico</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Característica</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["15×15 mm", "Rejas de ventana, interior", "Liviano, económico, suficiente para ventanas de primer piso"],
                  ["20×20 mm", "Ventanas, rejas bajas de jardín", "Estándar para ventanas y rejas decorativas bajas"],
                  ["25×25 mm", "Frontis residencial, portones", "El más usado para reja de frontis de casa"],
                  ["30×30 mm", "Frontis con mayor seguridad, industrial", "Mayor resistencia al forzado, más pesado"],
                  ["40×40 mm", "Industrial, cercos de alta seguridad", "Máxima resistencia, proyectos industriales"],
                ].map(([perf, uso, car]) => (
                  <tr key={perf} className="border-t border-gray-100">
                    <td className="p-3 font-medium text-gray-700">{perf}</td>
                    <td className="p-3 text-gray-500">{uso}</td>
                    <td className="p-3 text-gray-500">{car}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/rejas-metalicas-para-casas", label: "Rejas para casas", desc: "Frontis con tubular 25×25 mm" },
            { href: "/rejas-de-seguridad", label: "Rejas de seguridad", desc: "Barrotes reforzados y separación reducida" },
            { href: "/rejas-para-ventanas", label: "Rejas para ventanas", desc: "Tubular 15–20 mm para ventanas" },
            { href: "/cercos-metalicos", label: "Cercos metálicos", desc: "Perímetros completos con tubular" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja tubular</h2>
          <p className="text-gray-400 text-sm mb-5">Uso, medidas y espesor de tubo. Cotizamos el mismo día con instalación.</p>
          <a href={wa("Hola, necesito cotizar reja tubular. Uso: [FRONTIS / VENTANA / PUERTA]. Medidas: [DATO]. Estoy en [COMUNA].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
