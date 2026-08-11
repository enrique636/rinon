import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { MetalServicesLinks } from "@/components/ui/MetalServicesLinks";

export const metadata: Metadata = {
  title: "Portones Metálicos a Medida | Fabricante Santiago",
  description: "Portones metálicos fabricados a medida en Santiago. Corredizos y batientes para casas, empresas, bodegas y condominios. Pintura electrostática incluida. Cotiza sin compromiso.",
  keywords: ["portones metalicos", "portones metalicos santiago", "portón metálico a medida", "portones metalicos precio", "fabricante portones santiago", "portones corredizos metalicos", "portones para casas", "portones para empresas"],
  alternates: { canonical: "https://rinon.cl/portones-metalicos" },
  openGraph: {
    title: "Portones Metálicos a Medida en Santiago | Rinon.cl",
    description: "Portones corredizos, batientes y de doble hoja. Fabricación, pintura electrostática e instalación en Santiago.",
    type: "website",
    locale: "es_CL",
    url: "https://rinon.cl/portones-metalicos",
  },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function PortonesMetalicosPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        name: "Fabricación de portones metálicos a medida",
        description: "Portones metálicos corredizos, batientes y de doble hoja fabricados a medida en Santiago.",
        provider: { "@type": "LocalBusiness", name: "Rinon.cl", url: "https://rinon.cl", telephone: SITE_CONFIG.telefono },
        areaServed: { "@type": "AdministrativeArea", name: "Región Metropolitana de Santiago" },
        serviceType: "Fabricación e instalación de portones metálicos",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
          { "@type": "Question", name: "¿Cuánto cuesta un portón metálico?", acceptedAnswer: { "@type": "Answer", text: "El precio depende del ancho, el tipo (corredizo o batiente), el diseño y si incluye pintura electrostática. Cotizamos por WhatsApp con las medidas del vano — la apertura disponible donde va el portón." } },
          { "@type": "Question", name: "¿Cuánto demora fabricar un portón metálico?", acceptedAnswer: { "@type": "Answer", text: "Un portón estándar (sin diseño complejo) tarda entre 7-15 días hábiles desde aprobada la cotización. Portones con diseño especial o de mayor tamaño pueden tomar 3-4 semanas." } },
          { "@type": "Question", name: "¿El portón viene con instalación?", acceptedAnswer: { "@type": "Answer", text: "Sí, en Santiago RM incluimos la instalación. Necesitamos que el vano esté listo (rieles en el suelo o muros para el batiente según el tipo). Para regiones, evaluamos según el volumen del proyecto." } },
        ],
      }) }} />
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Portones Metálicos</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-5">🚪 Corredizos y batientes · A medida · Santiago</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portones Metálicos a Medida en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Fabricamos portones metálicos a medida para casas, bodegas, empresas, condominios y
            cualquier proyecto que necesite un acceso vehicular robusto. Corredizos, batientes
            o de doble hoja — según el espacio disponible y el uso.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos en acero, aplicamos pintura electrostática en nuestro taller y los instalamos
            en la Región Metropolitana. Para regiones, despachamos con instrucciones de montaje.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa("Hola, necesito cotizar un portón metálico. ¿Pueden ayudarme con las medidas y el tipo?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar portón</a>
            <Link href="/cierres-perimetrales" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver cierres completos</Link>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Tipos de portón que fabricamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Portón corredizo", d: "Desliza lateralmente sobre rieles. Ideal cuando no hay espacio para que el portón abra hacia afuera o hacia adentro. El más solicitado para bodegas y empresas.", ideal: "Bodegas, empresas, estacionamientos" },
              { t: "Portón batiente", d: "Abre hacia un lado o ambos lados. Más económico que el corredizo. Requiere espacio libre en el lado de apertura. Muy usado en casas y accesos secundarios.", ideal: "Casas, accesos secundarios, parcelas" },
              { t: "Portón doble hoja", d: "Dos hojas que abren hacia ambos lados desde el centro. Para vanos muy anchos (más de 4 metros) donde el corredizo requeriría demasiado espacio lateral.", ideal: "Accesos industriales anchos, galpones" },
            ].map(t => (
              <div key={t.t} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{t.t}</h3>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">{t.d}</p>
                <p className="text-xs text-gray-400"><strong>Ideal para:</strong> {t.ideal}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Medidas que necesitamos para cotizar</h2>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
            <p className="text-gray-600 text-sm mb-3">Para cotizarte el portón necesitamos:</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>• <strong className="text-gray-700">Ancho del vano</strong> — la apertura disponible donde va el portón</li>
              <li>• <strong className="text-gray-700">Alto del portón</strong> — estándar 2,00 m, o la altura que necesites</li>
              <li>• <strong className="text-gray-700">Tipo</strong> — corredizo, batiente o doble hoja</li>
              <li>• <strong className="text-gray-700">Uso</strong> — casa, bodega, empresa, condominio</li>
              <li>• <strong className="text-gray-700">Fotos del lugar</strong> (si es posible) — nos ayudan a entender el espacio</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Cierres Perimetrales", desc: "El cierre completo del predio — el portón es parte del sistema" },
            { href: "/cierres-para-condominios", label: "Para Condominios", desc: "Portones con cierre completo para conjuntos habitacionales" },
            { href: "/pintura-electrostatica", label: "Pintura Electrostática", desc: "El acabado que aplicamos a todos los portones" },
            { href: "/estructuras-metalicas", label: "Estructuras Metálicas", desc: "Otros trabajos de metal a medida" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <MetalServicesLinks current="/portones-metalicos" />

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuánto mide el vano de tu portón?</h2>
          <p className="text-gray-400 text-sm mb-5">Con el ancho, el alto y una foto si tienes, cotizamos en el día.</p>
          <a href={wa("Hola, necesito cotizar un portón metálico. El vano mide [ANCHO] de ancho x [ALTO] de alto. Es para [USO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
