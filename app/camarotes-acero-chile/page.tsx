import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes de Acero en Chile | Resistentes al Uso",
  description:
    "Camarotes de acero fabricados en Chile: resistentes, duraderos y aptos para uso intensivo. Acabado con pintura electrostática. Para residencial, hostal y campamento.",
  keywords: [
    "camarotes de acero chile",
    "camarotes acero resistente",
    "camas metalicas acero chile",
    "litera de acero chile",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-acero-chile" },
};

export default function Page() {
  const wa = getWhatsAppUrl("Hola, me interesan camarotes de acero. ¿Qué modelos tienen y cuál es el precio?");

  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Por qué elegir acero y no madera?", acceptedAnswer: { "@type": "Answer", text: "El acero no se deforma, no se apolilla y no cede con el peso a lo largo del tiempo como la madera. Un camarote de acero mantiene su estructura firme durante años, incluso con uso diario." } },
          { "@type": "Question", name: "¿Qué acabado tienen?", acceptedAnswer: { "@type": "Answer", text: "Los camarotes llevan pintura electrostática aplicada al horno, que forma una capa resistente al roce y la humedad. Es más duradera que la pintura común y facilita la limpieza." } },
          { "@type": "Question", name: "¿Sirven para uso intensivo?", acceptedAnswer: { "@type": "Answer", text: "Sí. Por su resistencia, los camarotes de acero se usan tanto en dormitorios residenciales como en hostales y campamentos donde el mobiliario trabaja todos los días." } },
        ],
      }) }} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">De Acero</span>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            🛠️ Acero resistente · Fabricado en Chile
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarotes de Acero en Chile</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6">
            Resistentes, duraderos y aptos para uso intensivo. El acero mantiene la estructura firme
            durante años, sin la deformación de la madera. Ideales para dormitorios, hostales y
            campamentos.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar ahora</a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Ventajas del acero</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "No se deforma", d: "A diferencia de la madera, el acero no cede ni se comba con el peso al pasar el tiempo." },
              { t: "No se apolilla", d: "El metal es inmune a insectos y humedad, factores que dañan los muebles de madera." },
              { t: "Uso intensivo", d: "Aguanta el trajín diario de hostales, internados y campamentos sin fatigarse." },
              { t: "Pintura electrostática", d: "Acabado al horno resistente al roce y fácil de limpiar." },
            ].map((c) => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{c.t}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="grid grid-cols-1 gap-4">
            {[
              { q: "¿Por qué elegir acero y no madera?", a: "El acero no se deforma, no se apolilla y no cede con el peso a lo largo del tiempo. Mantiene su estructura firme durante años, incluso con uso diario." },
              { q: "¿Qué acabado tienen?", a: "Pintura electrostática aplicada al horno, que forma una capa resistente al roce y la humedad, más duradera que la pintura común." },
              { q: "¿Sirven para uso intensivo?", a: "Sí. Se usan tanto en dormitorios residenciales como en hostales y campamentos donde el mobiliario trabaja todos los días." },
            ].map((f) => (
              <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explora más</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { t: "Camarote de acero", h: "/camarote-de-acero" },
              { t: "Camarotes metálicos", h: "/camarotes-metalicos" },
              { t: "Fabricante Chile", h: "/fabricante-camarotes-chile" },
            ].map((l) => (
              <Link key={l.h} href={l.h} className="text-sm border border-gray-200 text-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">{l.t}</Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Camarotes de acero que duran</h2>
          <p className="text-gray-300 text-sm mb-5">Cuéntanos qué modelo buscas y para qué uso. Te enviamos precio y disponibilidad.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
