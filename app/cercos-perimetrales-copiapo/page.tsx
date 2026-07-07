import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos Perimetrales Copiapó — Fabricante con Despacho a Atacama",
  description: "Cercos perimetrales metálicos para Copiapó y la Región de Atacama. Fabricante en Santiago con despacho. Rejas para casas, empresas mineras y parcelas en el desierto de Atacama.",
  keywords: [
    "cercos perimetrales copiapo",
    "cerco metalico copiapo",
    "reja perimetral copiapo",
    "rejas metalicas copiapo",
    "cerco para casa copiapo",
    "fabricante cercos copiapo",
    "cercos region atacama",
    "cerco empresa minera copiapo",
    "reja galvanizada copiapo",
    "portones copiapo atacama",
  ],
  alternates: { canonical: "https://dumar.cl/cercos-perimetrales-copiapo" },
};

const wa = (msg: string) =>
  `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosPerimetralesCopiapoPgae() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Copiapó</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">
            Fabricante en Santiago · Despacho Región de Atacama
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cercos Perimetrales para Copiapó y la Región de Atacama
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos y despachamos cercos perimetrales metálicos a Copiapó, Caldera,
            Tierra Amarilla y toda la Región de Atacama. Clima árido y seco — la pintura
            electrostática dura muchos años sin mantenimiento en el desierto.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-900">
            <strong className="block mb-1">Zona árida — pintura electrostática rinde bien</strong>
            <p className="text-xs text-blue-700 leading-relaxed">
              Copiapó tiene clima desértico con muy baja humedad. A diferencia de las zonas
              costeras o del sur lluvioso, la pintura electrostática al horno rinde excelente
              en Atacama. No hay riesgo de oxidación acelerada por lluvia. El sol intenso
              del desierto es el factor a considerar — usamos pinturas con pigmento UV estable.
            </p>
          </div>

          <a
            href={wa("Hola, necesito cotizar un cerco perimetral para Copiapó / Atacama. Metros: [METROS] ml. Altura: [ALTURA] m. Uso: [CASA / EMPRESA / PARCELA]. Ciudad: [CIUDAD].")}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ciudades de Atacama que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Copiapó","Caldera","Chañaral","Diego de Almagro","Tierra Amarilla",
              "Vallenar","Freirina","Huasco","Alto del Carmen"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos frecuentes en la Región de Atacama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                t: "Casas residenciales en Copiapó",
                d: "Frontis de casa con reja tubular negra electrostática. Portón vehicular batiente o corredizo. Los colores oscuros resisten bien el sol del desierto.",
              },
              {
                t: "Instalaciones de empresas mineras",
                d: "Atacama es la principal región minera de Chile. Cercos para perímetros de campamentos, instalaciones y bodegas de empresas mineras y de servicios.",
              },
              {
                t: "Bodegas y galpones industriales",
                d: "Copiapó tiene actividad logística y de distribución asociada a la minería. Cercos para perímetros de bodegas y patios de maquinaria.",
              },
              {
                t: "Accesos de Caldera y sector costero",
                d: "Caldera tiene ambiente costero salino — en ese caso recomendamos galvanizado. Para Copiapó ciudad, pintura electrostática estándar es suficiente.",
              },
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
            { href: "/cercos-perimetrales-la-serena", label: "Cercos La Serena", desc: "Región de Coquimbo" },
            { href: "/cercos-perimetrales-arica", label: "Cercos Arica", desc: "Extremo norte" },
            { href: "/cercos-perimetrales-antofagasta", label: "Cercos Antofagasta", desc: "Región minera del norte" },
            { href: "/cierres-perimetrales", label: "Cercos perimetrales", desc: "Todos los tipos" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu cerco para Copiapó</h2>
          <p className="text-gray-400 text-sm mb-5">
            Metros, altura y ciudad. Coordinamos el despacho a Copiapó y toda la Región de Atacama.
          </p>
          <a
            href={wa("Hola, necesito un cerco perimetral para Copiapó / Atacama. Metros: [METROS] ml. Altura: [ALTURA] m. Ciudad: [CIUDAD].")}
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
