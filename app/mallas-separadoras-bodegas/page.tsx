import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mallas Separadoras para Bodegas — División Interna Metálica | Buenos Pal Catre",
  description: "Mallas separadoras para organizar bodegas, galpones y centros de distribución. Divisiones metálicas, paneles separadores y mallas industriales a medida. Santiago y Chile.",
  keywords: ["mallas separadoras bodegas", "divisiones metalicas bodega", "malla divisoria bodega", "separadores para bodega", "paneles separadores bodega galpón", "mallas industriales bodega"],
  alternates: { canonical: "https://rinon.cl/mallas-separadoras-bodegas" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function MallasBodegasPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/mallas-separadoras" className="hover:text-gray-600">Mallas Separadoras</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Bodegas</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 text-sm text-orange-700 font-medium mb-5">📦 Bodegas · Logística · División interna</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mallas Separadoras para Bodegas y Centros Logísticos</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Una bodega bien organizada produce más y pierde menos. Las mallas separadoras metálicas
            dividen el espacio interior en zonas claras — picking, despacho, almacenamiento, tránsito
            de vehículos — sin levantar paredes permanentes y sin oscurecer el espacio.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos divisiones metálicas a medida para cualquier geometría de bodega. Con puertas
            integradas, altura personalizada y posibilidad de reubicar las mallas si el layout cambia.
          </p>
          <a href={wa("Hola, necesito mallas separadoras para organizar el interior de mi bodega. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para mi bodega</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Zonas que más se separan en una bodega</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: "🛒", t: "Zona de picking vs almacenamiento" },
              { icon: "🚚", t: "Andén de carga vs área de stock" },
              { icon: "🚶", t: "Pasillo de personal vs tránsito de montacargas" },
              { icon: "🔒", t: "Bodega de alto valor / acceso restringido" },
              { icon: "🧯", t: "Zona de materiales peligrosos" },
              { icon: "📋", t: "Área de control de calidad / devoluciones" },
            ].map(i => (
              <div key={i.t} className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-center">
                <span className="text-2xl block mb-1">{i.icon}</span>
                <p className="text-xs font-medium text-gray-700">{i.t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Por qué metal y no madera o PVC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Resistencia al uso de montacargas", d: "Un choque de montacargas dobla un panel de madera o PVC. El acero absorbe el impacto y vuelve a su posición." },
              { t: "Ventilación e iluminación", d: "La malla metálica no bloquea el aire ni la luz. El espacio dividido sigue ventilado e iluminado igual que antes." },
              { t: "Fácil de limpiar", d: "Sin poros, sin fibras, sin acumulación de polvo en esquinas. El acero pintado se limpia con agua y detergente." },
              { t: "Reubicable", d: "A diferencia de una pared, una malla metálica se puede desmontar y remontar en otro lugar si el layout de la bodega cambia." },
            ].map(v => (
              <div key={v.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{v.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/mallas-separadoras", label: "Mallas Separadoras — Catálogo", desc: "Todos los tipos y aplicaciones" },
            { href: "/mallas-separadoras-industriales", label: "Para Industrias", desc: "Mallas para uso industrial intensivo" },
            { href: "/cierres-para-bodegas", label: "Cierres Perimetrales para Bodegas", desc: "El cierre exterior de tu bodega" },
            { href: "/estructuras-metalicas", label: "Estructuras Metálicas", desc: "Racks, mezzanines y más" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-orange-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide tu bodega?</h2>
          <p className="text-gray-400 text-sm mb-5">Con las dimensiones del espacio y las zonas que necesitas separar, cotizamos en el día.</p>
          <a href={wa("Hola, necesito mallas separadoras para mi bodega. Quiero separar [DESCRIBIR ZONAS]. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
