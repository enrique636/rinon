import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mallas 3D — Cerco Perimetral con Panel Soldado | Fabricante Chile",
  description: "Mallas 3D o paneles soldados para cercos perimetrales. Mayor rigidez que la malla eslabonada, mejor acabado, resistente al pandeo. Fabricante y distribuidor en Chile.",
  keywords: ["mallas 3d chile","panel soldado cerco","malla 3d perimetral","cerco panel soldado","malla soldada 3d","panel rigido cerco perimetral","malla 3d precio chile","cerco malla 3d santiago","panel 3d cerco industrial","fabricante mallas 3d chile"],
  alternates: { canonical: "https://rinon.cl/mallas-3d" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const faq = [
  { q: "¿Qué es una malla 3D o panel soldado?", a: "Es un panel de alambre de acero soldado electrónicamente en cada intersección, formando una grilla rígida. A diferencia de la malla eslabonada que puede deformarse, el panel soldado mantiene su forma bajo impacto y presión lateral." },
  { q: "¿En qué se diferencia de la malla eslabonada?", a: "La malla eslabonada (tipo diamante) es flexible y puede pandear o deformarse con el tiempo. El panel 3D es rígido, más difícil de escalar y tiene mejor aspecto visual. Tiene mayor costo inicial pero menor mantenimiento." },
  { q: "¿Para qué usos es más recomendable la malla 3D?", a: "Es ideal para perímetros industriales, bodegas, conjuntos habitacionales y colegios donde se requiere mayor disuasión visual y resistencia al intento de escalada o pandeo por impactos." },
  { q: "¿Se puede galvanizar la malla 3D?", a: "Sí. Ofrecemos paneles galvanizados en frío o pintados con pintura epoxi para ambientes con mayor humedad o exposición a la intemperie agresiva." },
];

export default function Mallas3DPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales-santiago" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Mallas 3D</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Panel soldado rígido · Industrial y residencial</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mallas 3D — Cerco con Panel Soldado Rígido</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">La malla 3D (también llamada panel soldado o malla electrosoldada) es el sistema de cerco perimetral que combina mayor rigidez, mejor aspecto y más dificulad de escalada que la malla eslabonada tradicional. Ideal para industrias, bodegas, colegios y conjuntos habitacionales.</p>
          <a href={wa("Hola, necesito cotizar malla 3D / panel soldado para cerco perimetral. Metros lineales: [METROS]. Altura del panel: [ALTURA]. Uso: [INDUSTRIAL / RESIDENCIAL / OTRO]. Con portón: [SÍ / NO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar malla 3D</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Malla 3D vs Malla Eslabonada — Comparativa</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Característica</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Malla 3D (panel soldado)</th>
                  <th className="text-left p-3 border border-gray-100 font-semibold text-gray-700">Malla eslabonada</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ["Rigidez", "Alta — no pandea", "Baja — se deforma"],
                  ["Dificultad de escalada", "Alta", "Media"],
                  ["Aspecto visual", "Prolijo, industrial", "Funcional, menos estético"],
                  ["Resistencia al impacto", "Alta", "Media"],
                  ["Costo inicial", "Mayor", "Menor"],
                  ["Mantenimiento", "Bajo", "Medio"],
                  ["Ideal para", "Industria, bodegas, colegios", "Parcelas, terrenos grandes"],
                ].map(([c, a, b]) => (
                  <tr key={c} className="even:bg-gray-50">
                    <td className="p-3 border border-gray-100 font-medium text-gray-700">{c}</td>
                    <td className="p-3 border border-gray-100 text-green-700">{a}</td>
                    <td className="p-3 border border-gray-100">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-para-empresas", label: "Cercos para Empresas", desc: "Industrial y comercial" },
            { href: "/mallas-separadoras-industriales", label: "Mallas Separadoras", desc: "División interna de espacios" },
            { href: "/cercos-perimetrales-santiago", label: "Cercos RM", desc: "Todas las comunas" },
            { href: "/cercos-perimetrales-precio", label: "Precio de cercos", desc: "Cuánto cuesta por metro lineal" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco de malla 3D</h2>
          <p className="text-gray-400 text-sm mb-5">Metros lineales, altura y uso. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito malla 3D / panel soldado para cerco. Metros: [METROS]. Altura: [ALTURA]. Uso: [INDUSTRIAL / RESIDENCIAL].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
        })}} />
      </div>
    </div>
  );
}
