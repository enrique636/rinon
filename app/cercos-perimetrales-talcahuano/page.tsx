import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Talcahuano — Fabricante con Instalación",
  description: "Cercos perimetrales en Talcahuano y Biobío. Fabricante directo. Cercos galvanizados para zona costera e industrial. Resistentes al salitre marino y la humedad del Biobío.",
  keywords: [
    "cercos perimetrales talcahuano",
    "cerco perimetral talcahuano",
    "reja metalica talcahuano",
    "cerco galvanizado talcahuano",
    "fabricante cercos talcahuano",
    "cerco industrial talcahuano",
    "cerco perimetral concepcion",
    "reja metalica concepcion",
    "cercos zona costera biobio",
    "cerco resistente salitre talcahuano",
  ],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-talcahuano" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesTalcahuanoPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cercos-perimetrales" className="hover:text-gray-600">Cercos Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Talcahuano</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante directo · Galvanizado para zona costera · Biobío
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales en Talcahuano — Zona Costera e Industrial
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Talcahuano combina ambiente costero, industrial portuario y lluvias del Biobío —
            una de las condiciones más agresivas para el acero en Chile. Fabricamos cercos
            perimetrales con el acabado correcto para cada uso: galvanizado para el perímetro
            industrial y pintura electrostática reforzada para uso residencial.
          </p>
          <a
            href={wa("Hola, necesito cotizar un cerco perimetral en Talcahuano. Metros totales: [METROS] ml. Altura: [ALTURA] m. Uso: [INDUSTRIAL / EMPRESA / CASA / PARCELA]. Zona: [SECTOR].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar mi cerco en Talcahuano
          </a>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-900">
          <strong>Zona costera e industrial:</strong> Talcahuano tiene ambiente marino con salitre, humedad permanente y lluvia concentrada entre mayo y agosto. Para instalaciones que van a durar 20+ años, recomendamos galvanizado en caliente o galvanizado más pintura electrostática. La pintura sola tiene una vida útil significativamente menor en esta zona.
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Acabado recomendado según uso</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700">Uso</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Acabado recomendado</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Duración estimada</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Industria, puerto, bodega", "Galvanizado en caliente", "25–35 años"],
                  ["Empresa con exigencia visual", "Galvanizado + pintura electrostática", "15–25 años"],
                  ["Casa o condominio residencial", "Pintura electrostática reforzada", "8–12 años"],
                  ["Cerco de obra temporal", "Pintura estándar", "3–5 años"],
                ].map(([uso, acabado, dur]) => (
                  <tr key={uso} className="border-t border-gray-100">
                    <td className="p-3 text-gray-700">{uso}</td>
                    <td className="p-3 text-gray-500 font-medium">{acabado}</td>
                    <td className="p-3 text-gray-500">{dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-perimetrales-concepcion", label: "Cercos Concepción", desc: "Región Biobío" },
            { href: "/cercos-perimetrales-los-angeles", label: "Cercos Los Ángeles", desc: "Sur Biobío interior lluvioso" },
            { href: "/rejas-galvanizadas", label: "Rejas galvanizadas", desc: "El acabado que resiste la costa" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Empresas y bodegas" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco en Talcahuano</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros totales, altura y uso (industrial, empresa, casa). Respondemos el mismo día.
          </p>
          <a
            href={wa("Hola, necesito cotizar un cerco perimetral en Talcahuano. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [DATO].")}
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
