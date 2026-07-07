import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cercos para Condominios en Santiago — Fabricante Directo",
  description: "Cercos y rejas metálicas para condominios en Santiago. Cierre perimetral, portones de acceso y mallas interiores para condominios residenciales e industriales. Fabricante con instalación.",
  keywords: ["cercos para condominios", "reja para condominio santiago", "cerco perimetral condominio", "portón para condominio", "reja condominio precio", "cierre perimetral condominio santiago", "fabricante rejas condominios", "cerco para condominio residencial"],
  alternates: { canonical: "https://dumar.cl/cercos-para-condominios" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CercosParaCondominiosPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Qué tipo de cerco es el más común en condominios residenciales?", acceptedAnswer: { "@type": "Answer", text: "En condominios residenciales de Santiago el más común es la reja tubular de tubo cuadrado de 1\" a 1½\", con altura de 1,80 m a 2,00 m. El acceso principal lleva portón corredizo automático con control de acceso, y se deja una puerta peatonal con intercomunicador." } },
          { "@type": "Question", name: "¿Trabajan con la administración del condominio o con el comité de propietarios?", acceptedAnswer: { "@type": "Answer", text: "Trabajamos con quien tenga la responsabilidad del proyecto — administrador, comité de copropietarios, constructora o empresa inmobiliaria. Emitimos factura y podemos cotizar por proyecto con especificaciones técnicas." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cercos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Condominios</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Proyectos · Santiago</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cercos y Rejas para Condominios en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos e instalamos el cerco perimetral completo para condominios residenciales e industriales en Santiago. Reja perimetral, portones de acceso automáticos y mallas separadoras interiores — en un solo proyecto, con un solo fabricante.
          </p>
          <a href={wa("Hola, necesito cotizar el cerco perimetral de un condominio en Santiago. Metros aproximados: [N] ml. Tipo: [RESIDENCIAL / INDUSTRIAL]. Portón: [SÍ / NO, CUÁNTOS]. Ubicación: [COMUNA].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo que incluye el cierre de un condominio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja perimetral", d: "El cerco que rodea todo el condominio. El material y la altura se definen según el tipo de condominio y el nivel de seguridad requerido." },
              { t: "Portón principal de acceso vehicular", d: "Corredizo automático para el ingreso de autos. Con control de acceso: remoto, tarjeta, intercomunicador o botonera." },
              { t: "Acceso peatonal", d: "Puerta peatonal con intercomunicador o tarjeta. Para el ingreso de residentes a pie, visitas y deliveries." },
              { t: "Acceso de servicio", d: "Portón secundario para vehículos de servicio (camiones de basura, mudanzas, mantención)." },
              { t: "Separaciones interiores", d: "Mallas o rejas que dividen zonas dentro del condominio — estacionamientos, jardines, zona de bodegas, áreas de juego." },
              { t: "Cierre de estacionamientos", d: "Para condominios con estacionamientos privados individuales — mallas con lock o rejas abatibles." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de condominios con los que trabajamos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {["Condominios residenciales horizontales","Condominios de casas","Edificios residenciales","Proyectos inmobiliarios en obra","Condominios industriales","Bodegas en condominio","Condominios de oficinas","Townhouses","Parcelas en condominio"].map((item) => (
              <div key={item} className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">{item}</div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Tiene tu condominio un proyecto que requiere cierre?</h2>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-900">
            <p className="font-semibold mb-1">Para cotizaciones de condominios necesitamos:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-blue-800">
              <li>Metros lineales estimados del perímetro (puede ser aproximado)</li>
              <li>Número y tipo de accesos vehiculares y peatonales</li>
              <li>Altura requerida del cerco</li>
              <li>Si requiere sistema de control de acceso o solo cierre manual</li>
              <li>Nombre del proyecto o condominio y comuna</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/portones-automaticos", label: "Portones automáticos", desc: "Acceso vehicular con motor" },
            { href: "/cierre-perimetral-industrial", label: "Cierre industrial", desc: "Para condominios de bodegas" },
            { href: "/rejas-metalicas-por-mayor", label: "Proyectos por volumen", desc: "Para obras y constructoras" },
            { href: "/rejas-galvanizadas", label: "Cerco galvanizado", desc: "Para condominios al aire libre" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza el cerco de tu condominio</h2>
          <p className="text-gray-400 text-sm mb-5">Metros estimados, número de accesos, altura y tipo. Coordinamos la visita a terreno si es necesario.</p>
          <a href={wa("Hola, represento al [COMITÉ / ADMINISTRACIÓN / CONSTRUCTORA] del condominio [NOMBRE] en [COMUNA]. Necesito cotizar el cerco perimetral. Metros aproximados: [N] ml.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
