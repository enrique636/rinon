import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierres Perimetrales para Bodegas — Fabricante | Rinon.cl",
  description: "Cierres perimetrales para bodegas, galpones y centros de distribución. Fabricamos rejas, mallas y planchas para cerrar el perímetro exterior de tu bodega. Santiago y todo Chile.",
  keywords: ["cierres perimetrales bodegas", "cierre perimetral bodega", "cierre galpón metálico", "rejas para bodega santiago", "cierre perimetral centro logístico"],
  alternates: { canonical: "https://rinon.cl/cierres-para-bodegas" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CierresBodegasPage() {
  return (
    <div className="py-12 px-4">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican cierres perimetrales para bodegas y logística?", acceptedAnswer: { "@type": "Answer", text: "Sí. Fabricamos cierres perimetrales y mallas separadoras para bodegas, centros de distribución y almacenes logísticos. Incluimos portones vehiculares y peatonales." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda la fabricación?", acceptedAnswer: { "@type": "Answer", text: "La fabricación de un cierre para bodega demora entre 5 y 15 días hábiles según el volumen. La instalación se realiza en etapas si el proyecto es grande." } },
        ],
      })} } />
<div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Bodegas</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 text-sm text-slate-700 font-medium mb-5">📦 Bodegas · Galpones · Logística · Santiago y Chile</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cierres Perimetrales para Bodegas y Galpones</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            El cierre perimetral de una bodega define el límite de la propiedad, controla los accesos
            de camiones y personal, y protege el inventario ante robos y accesos no autorizados.
            Fabricamos para bodegas desde 500 m² hasta complejos logísticos de múltiples galpones.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            También fabricamos las divisiones <em>internas</em> de bodega — las mallas separadoras
            que organizan el espacio interior. Ver: <Link href="/mallas-separadoras-bodegas" className="text-gray-900 underline">Mallas separadoras para bodegas</Link>.
          </p>
          <a href={wa("Hola, necesito cotizar un cierre perimetral para una bodega / galpón. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para mi bodega</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Qué incluye el cierre de una bodega</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cierre perimetral exterior", d: "El cerco que delimita el predio completo de la bodega o galpón. Puede ser malla, reja tubular o plancha según el nivel de privacidad y seguridad requerido." },
              { t: "Portón de acceso vehicular", d: "Portón corredizo o batiente para acceso de camiones y vehículos de carga. Fabricamos con apertura manual o motorizada." },
              { t: "Puerta peatonal", d: "Acceso independiente para personal, integrado al cierre perimetral. Con cerradura, llavín o control de acceso." },
              { t: "Divisiones internas (opcional)", d: "Mallas separadoras dentro de la bodega para dividir zonas de carga, picking, almacenamiento y circulación de vehículos." },
            ].map(i => (
              <div key={i.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/mallas-separadoras-bodegas", label: "Mallas Separadoras para Bodegas", desc: "División interior — organiza el espacio de la bodega" },
            { href: "/cierres-para-industrias", label: "Cierres para Industrias", desc: "Para predios industriales con mayor complejidad" },
            { href: "/cierres-perimetrales", label: "Todos los cierres", desc: "Ver todos los tipos disponibles" },
            { href: "/portones-metalicos", label: "Portones para bodegas", desc: "Acceso vehicular y peatonal" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene tu bodega?</h2>
          <p className="text-gray-400 text-sm mb-5">Con los metros lineales del perímetro y el tipo de acceso que necesitas, cotizamos en el día.</p>
          <a href={wa("Hola, necesito cotizar cierre perimetral para bodega/galpón. El perímetro aproximado es de [METROS] metros.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
