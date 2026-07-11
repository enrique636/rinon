import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierres para Obras — Cierre Perimetral de Obra Temporal | Rinon.cl",
  description: "Cierres perimetrales para obras de construcción. Temporales y definitivos. Malla electrosoldada, vallas y panels modulares. Instalación en Santiago y despacho nacional.",
  keywords: ["cierre para obras", "cierre perimetral obra", "cierre temporal obra construccion", "malla cierre obra", "cierre de obra santiago", "valla obra construccion"],
  alternates: { canonical: "https://rinon.cl/cierres-para-obras" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CierresObrasPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Obras</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 text-sm text-yellow-800 font-medium mb-5">🚧 Cierre de obra · Temporal y definitivo · Santiago y regiones</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cierres Perimetrales para Obras de Construcción</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            El cierre de obra es lo primero que se instala y lo último que se retira. Define el
            perímetro de seguridad, cumple la normativa municipal y proyecta la imagen del proyecto.
            Fabricamos e instalamos cierres para obras de cualquier escala en Santiago y todo Chile.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Desde una remodelación de casa en Providencia hasta un desarrollo de edificios en Maipú —
            tenemos el tipo de cierre correcto para cada proyecto y presupuesto.
          </p>
          <a href={wa("Hola, necesito un cierre perimetral para una obra. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar cierre de obra</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Tipos de cierre según el proyecto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Cierre temporal con malla", desc: "Para obras que duran meses o años. Malla electrosoldada sobre postes removibles. Se retira al terminar sin dejar huella.", ideal: "Construcción de casas, edificios, renovaciones" },
              { t: "Valla modular en vía pública", desc: "Para obras que ocupan vereda o calzada. Módulos de acero que cumplen normativa municipal de vialidad.", ideal: "Obras en vía pública, renovaciones urbanas" },
              { t: "Cierre definitivo al terminar", desc: "Cuando la obra concluye, el cierre temporal se reemplaza por reja tubular o plancha que forma parte del proyecto final.", ideal: "Condominios, edificios de uso mixto, industrias" },
            ].map(t => (
              <div key={t.t} className="bg-yellow-50 border border-yellow-100 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{t.t}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{t.desc}</p>
                <p className="text-xs text-gray-500"><strong>Ideal para:</strong> {t.ideal}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Todos los cierres perimetrales", desc: "Catálogo completo — 6 tipos disponibles" },
            { href: "/cierres-para-constructoras", label: "Para Constructoras", desc: "Servicio específico para empresas constructoras" },
            { href: "/cierres-para-industrias", label: "Para Industrias", desc: "Cierres industriales definitivos" },
            { href: "/portones-metalicos", label: "Portones para obras", desc: "Accesos peatonal y vehicular integrados" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-yellow-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuándo empieza tu obra?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el terreno, los metros y la fecha de inicio. Coordinamos el cierre para que esté listo el día uno.</p>
          <a href={wa("Hola, necesito un cierre perimetral para una obra. La fecha de inicio es [FECHA]. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
