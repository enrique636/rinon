import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mallas Separadoras Industriales — Divisiones para Planta y Manufactura | Rinon.cl",
  description: "Mallas separadoras industriales para plantas de manufactura, fábricas y talleres. Divisiones metálicas para zonas de maquinaria, pasillos y áreas de trabajo. Fabricante en Chile.",
  keywords: ["mallas separadoras industriales", "divisiones metalicas industriales", "mallas para plantas manufactura", "separadores zona maquinaria", "mallas seguridad industrial chile", "divisiones para fabrica", "mallas de proteccion maquinaria"],
  alternates: { canonical: "https://rinon.cl/mallas-separadoras-industriales" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function MallasIndustrialesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/mallas-separadoras" className="hover:text-gray-600">Mallas Separadoras</Link><span>/</span>
          <span className="text-gray-700 font-medium">Industriales</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full px-4 py-1.5 text-sm text-zinc-700 font-medium mb-5">🏭 Plantas · Manufactura · Protección de maquinaria</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mallas Separadoras para Industrias y Plantas</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            En una planta de manufactura, la separación de zonas no es cosmética — es de seguridad.
            Separar el área de maquinaria de los pasillos de personal, delimitar zonas de riesgo,
            proteger equipos de accesos no autorizados: todo eso reduce accidentes y cumple las
            normativas de seguridad laboral.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos mallas en acero de mayor calibre que el residencial — pensadas para resistir
            el ambiente industrial, los golpes de equipos en movimiento y las exigencias de inspecciones
            de seguridad.
          </p>
          <a href={wa("Hola, necesito mallas separadoras para una planta industrial. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar mallas industriales</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Las 4 zonas más separadas en plantas industriales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "⚙️", t: "Zona de maquinaria CNC y robots", d: "Las máquinas de control numérico y los brazos robóticos requieren una zona de exclusión de personal. La malla define físicamente ese perímetro y reduce el riesgo de accidente a prácticamente cero." },
              { icon: "🚜", t: "Pasillos de montacargas vs personal", d: "El principal riesgo en una planta industrial es el cruce de montacargas con operarios. La malla separa físicamente ambos flujos, eliminando la dependencia de señalética que suele ignorarse." },
              { icon: "⚡", t: "Cuartos eléctricos y subestaciones", d: "Las subestaciones y tableros eléctricos necesitan acceso restringido. Una malla con puerta y cerradura es la solución más común y más efectiva." },
              { icon: "🧪", t: "Zonas de materiales peligrosos", d: "Productos químicos, combustibles o materiales con restricciones de manejo requieren un perímetro delimitado con acceso controlado. La malla metálica cumple esa función de forma simple y duradera." },
            ].map(z => (
              <div key={z.t} className="flex gap-4 bg-zinc-50 border border-zinc-100 rounded-xl p-5">
                <span className="text-2xl flex-shrink-0">{z.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{z.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{z.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/mallas-separadoras", label: "Mallas Separadoras — Catálogo", desc: "Todos los tipos y aplicaciones disponibles" },
            { href: "/barreras-peatonales", label: "Barreras Peatonales", desc: "Control de flujo peatonal dentro de la planta" },
            { href: "/cierres-para-industrias", label: "Cierres Perimetrales Industriales", desc: "El cierre exterior del predio industrial" },
            { href: "/pintura-electrostatica", label: "Pintura Electrostática", desc: "Acabado resistente a ambientes industriales" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-zinc-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántas zonas necesitas separar?</h2>
          <p className="text-zinc-400 text-sm mb-5">Cuéntanos el layout de tu planta y los metros lineales. Cotizamos con especificaciones industriales.</p>
          <a href={wa("Hola, necesito mallas separadoras para una planta industrial. Quiero separar [ZONAS]. ¿Pueden cotizarme?")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
