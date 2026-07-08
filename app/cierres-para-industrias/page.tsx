import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierres Perimetrales para Industrias — Fabricante en Chile | Buenos Pal Catre",
  description: "Cierres perimetrales industriales para predios, plantas y galpones. Rejas, malla y plancha metálica. Fabricante directo con instalación y factura empresa. Santiago y Chile.",
  keywords: ["cierres perimetrales industrias", "cierre perimetral industrial", "cerco industrial metalico", "rejas industriales santiago", "cierre predio industrial", "fabricante cierres industriales chile"],
  alternates: { canonical: "https://rinon.cl/cierres-para-industrias" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CierresIndustriasPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Industrias</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-zinc-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">🏭 Industrias · Plantas · Predios industriales · Chile</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cierres Perimetrales para Industrias</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Un predio industrial necesita un cierre que dure décadas, no años. Que resista el
            ambiente de manufactura, el tránsito pesado en el perímetro y las exigencias de
            seguridad laboral y normativas sectoriales. Fabricamos cierres industriales en acero
            estructural con pintura electrostática — sin compromisos de calidad.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Trabajamos con plantas de manufactura, industrias alimentarias, talleres metalmecánicos,
            plantas de tratamiento y cualquier predio con exigencias de uso intensivo y control de acceso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa("Hola, necesito cotizar un cierre perimetral para un predio industrial. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar cierre industrial</a>
            <Link href="/cierres-perimetrales" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver todos los tipos</Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Lo que diferencia un cierre industrial de uno residencial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Mayor altura", d: "Los cierres industriales van de 2,00 a 3,00 m de altura estándar. En industrias con normativas de seguridad específicas, pueden llegar a 4,00 m." },
              { t: "Acero de mayor calibre", d: "El tubo y la malla para uso industrial son de mayor espesor que los residenciales. Resistencia al impacto, a la vibración y al ambiente de manufactura." },
              { t: "Pintura electrostática industrial", d: "Aplicamos pintura electrostática resistente a la corrosión y a los agentes químicos presentes en ambientes industriales." },
              { t: "Accesos diseñados para operativa", d: "Portones vehiculares para camiones de alto tonelaje, puertas peatonales con control de acceso, casetas de guardia integradas al diseño del cierre." },
            ].map(i => (
              <div key={i.t} className="bg-zinc-50 border border-zinc-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Industrias a las que hemos atendido</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Manufactura y metalmecánica", "Industria alimentaria", "Plantas de tratamiento", "Centros de distribución", "Talleres automotrices", "Industria química y plásticos"].map(s => (
              <div key={s} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-700">{s}</div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Tipos de cierre disponibles", desc: "Malla, reja tubular, plancha — cuál conviene para tu predio" },
            { href: "/mallas-separadoras-industriales", label: "Mallas separadoras industriales", desc: "División interior del predio — zonas de trabajo y circulación" },
            { href: "/pintura-electrostatica", label: "Pintura electrostática", desc: "El acabado que usamos en todos nuestros cierres industriales" },
            { href: "/estructuras-metalicas", label: "Estructuras metálicas", desc: "Escaleras, mezzanines y soportes para tu planta" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-zinc-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene el perímetro de tu predio?</h2>
          <p className="text-zinc-400 text-sm mb-5">Con los metros y las especificaciones técnicas cotizamos en el día. Factura empresa incluida.</p>
          <a href={wa("Hola, necesito cotizar cierre perimetral para un predio industrial. Puedo enviarles los metros y detalles.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
