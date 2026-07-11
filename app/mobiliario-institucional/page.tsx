import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mobiliario Institucional Metálico — Fabricante para Empresas e Instituciones | Chile",
  description: "Camarotes, literas y estructuras metálicas para instituciones. Militar, hospitalario, educacional, industrial y minería. Fabricante directo con precio institucional en Chile.",
  keywords: ["mobiliario institucional metalico","mobiliario institucional chile","fabricante mobiliario institucional","camarotes institucionales","literas institucionales metalicas","mobiliario metalico empresas","mobiliario metalico instituciones","camarotes para instituciones chile","literas metalicas instituciones"],
  alternates: { canonical: "https://rinon.cl/mobiliario-institucional" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const segmentos = [
  { href: "/camarotes-militares", nombre: "Fuerzas de Orden y Militares", desc: "Cuarteles, regimientos, bases navales, cuerpos de bomberos, Carabineros, PDI y Gendarmería.", badge: "Alta exigencia" },
  { href: "/camarotes-para-hospitales", nombre: "Salud", desc: "Hospitales, clínicas, CESFAM, residencias de adulto mayor, centros de rehabilitación y hogares de acogida.", badge: "Sanitario" },
  { href: "/camarotes-para-universidades", nombre: "Educación Superior", desc: "Residencias universitarias, hogares estudiantiles y albergues universitarios.", badge: "B2B" },
  { href: "/camarotes-para-internados", nombre: "Educación Escolar", desc: "Internados de colegios, liceos y institutos técnicos. Hogares juveniles.", badge: "Seguridad" },
  { href: "/camarotes-mineria", nombre: "Minería e Industria", desc: "Campamentos mineros, plantas concentradoras, faenas de construcción y contratistas.", badge: "Uso intensivo" },
  { href: "/camarotes-salmoneras", nombre: "Acuicultura y Pesca", desc: "Salmoneras, plantas de proceso y centros de cultivo en Los Lagos, Aysén y Magallanes.", badge: "Resistente a humedad" },
];

export default function MobiliarioInstitucionalPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Mobiliario Institucional</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Precio institucional · Todo Chile</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mobiliario Institucional Metálico</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos camarotes, literas y estructuras metálicas para instituciones que requieren mayor resistencia, durabilidad y precio por volumen que el mercado residencial puede ofrecer. Atendemos fuerzas de orden, salud, educación, minería y acuicultura.</p>
          <a href={wa("Hola, necesito cotizar mobiliario metálico institucional. Institución: [NOMBRE]. Tipo de producto: [CAMAROTES / LITERAS / OTRO]. Cantidad: [UNIDADES]. Ciudad: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para mi institución</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Sectores que atendemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {segmentos.map((s) => (
              <Link key={s.href} href={s.href} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-400 hover:shadow-sm transition-all block">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">{s.nombre}</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">{s.badge}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <p className="text-gray-400 text-xs mt-2 font-medium">Ver página →</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué diferencia el mobiliario institucional del residencial?</h2>
          <div className="space-y-3">
            {[
              { t: "Espesor de material", d: "1,5 mm mínimo vs 1,0–1,2 mm residencial. Más resistencia a cargas repetidas y uso intensivo." },
              { t: "Proceso de soldadura", d: "MIG/MAG con cordones continuos. Sin puntos de soldadura que puedan aflojar con el tiempo." },
              { t: "Acabado al horno", d: "Pintura electrostática de 60–80 micrones. Resiste cloro, desinfectantes industriales y uso continuo." },
              { t: "Precio por volumen", d: "Cotización institucional con descuento a partir de 10 unidades. Factura a nombre de la institución." },
            ].map((item) => (
              <div key={item.t} className="flex gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">{item.t}: </span>
                  <span className="text-gray-500 text-sm">{item.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotización institucional</h2>
          <p className="text-gray-400 text-sm mb-5">Indícanos tu institución, tipo de producto y cantidad. Respondemos con precio y plazo el mismo día.</p>
          <a href={wa("Hola, necesito cotizar mobiliario institucional metálico. Institución: [NOMBRE]. Tipo: [CAMAROTES / LITERAS / OTRO]. Cantidad: [UNIDADES]. Ciudad: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
