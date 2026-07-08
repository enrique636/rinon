import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Estructuras Metálicas a Pedido Santiago — Fabricante Directo",
  description: "Fabricamos estructuras metálicas a pedido en Santiago. Mezzanines, escaleras, plataformas, vigas y marquesinas. Diseño y fabricación según tus medidas exactas. Cotiza hoy.",
  keywords: ["estructuras metalicas a pedido", "estructuras metalicas santiago", "estructura metalica a medida", "fabricar estructura metalica", "mezzanine metalico santiago", "escalera metalica a pedido", "plataforma metalica santiago", "vigas metalicas a pedido", "fabricante estructuras metalicas chile"],
  alternates: { canonical: "https://rinon.cl/estructuras-metalicas-a-pedido" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function EstructurasMetalicasAPedidoPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Buenos Pal Catre — Estructuras Metálicas a Pedido",
        description: "Fabricamos estructuras metálicas a pedido en Santiago: mezzanines, escaleras, plataformas, vigas, marquesinas y estructuras industriales.",
        areaServed: "Santiago, Chile",
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Fabrican cualquier tipo de estructura metálica a pedido?", acceptedAnswer: { "@type": "Answer", text: "Sí. Si se puede fabricar en acero y tiene sentido estructural, lo cotizamos. Trabajamos con mezzanines, escaleras, plataformas industriales, vigas, marquesinas, techumbres metálicas, soportes y estructuras personalizadas para casas, bodegas y empresas." } },
          { "@type": "Question", name: "¿Cómo cotizo una estructura metálica a pedido?", acceptedAnswer: { "@type": "Answer", text: "Cuéntanos qué necesitas: el tipo de estructura, las medidas aproximadas y el uso previsto. Si tienes plano o bosquejo, mejor. Respondemos con precio y plazo estimado. Puedes enviarlo por WhatsApp o correo." } },
          { "@type": "Question", name: "¿Cuánto tiempo tarda fabricar una estructura metálica?", acceptedAnswer: { "@type": "Answer", text: "Depende de la complejidad. Una escalera metálica estándar puede estar lista en 5 a 10 días hábiles. Un mezzanine o plataforma industrial requiere más tiempo de diseño y fabricación. Te confirmamos el plazo al cotizar." } },
        ],
      })}} />

      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Estructuras Metálicas a Pedido</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Santiago · Diseño y fabricación</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Estructuras Metálicas a Pedido en Santiago</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4 leading-relaxed">
            Fabricamos estructuras metálicas a medida: mezzanines, escaleras, plataformas, vigas, marquesinas y estructuras industriales. Si lo necesitas en acero y lo puedes describir, lo cotizamos.
          </p>
          <p className="text-gray-400 text-sm max-w-2xl mb-6">
            Cuéntanos qué necesitas — con tus medidas o un bosquejo. Respondemos con precio y plazo.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={wa("Hola, necesito cotizar una estructura metálica a pedido. El proyecto es: [DESCRIPCIÓN Y MEDIDAS APROXIMADAS].")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              Cotizar por WhatsApp
            </a>
            <a href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent("Cotización — Estructura metálica a pedido")}`}
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-600 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm transition-colors">
              Enviar por correo
            </a>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Qué fabricamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Mezzanines metálicos", d: "Estructura elevada sobre el nivel del piso para ampliar el espacio útil de una bodega o galpón. Incluye escalera de acceso, barandas y plataforma." },
              { t: "Escaleras metálicas", d: "Escaleras de un tramo o varios, con o sin descanso, para uso interior o exterior. Barandas de acero incluidas. Medidas exactas según el espacio." },
              { t: "Plataformas industriales", d: "Plataformas elevadas para operación de maquinaria, acceso a equipos o almacenaje secundario en galpones e industrias." },
              { t: "Marquesinas y techumbres", d: "Estructuras de cubierta metálica para entradas, estacionamientos, pasillos de conexión y zonas de carga y descarga." },
              { t: "Soportes y vigas", d: "Soportes estructurales, vigas, pilares y marcos metálicos para uso residencial o industrial. Según especificación del calculista si aplica." },
              { t: "Estructuras a medida", d: "Si tu proyecto no calza en ninguna categoría anterior, cuéntanoslo igual. Si se puede fabricar en acero, lo cotizamos." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cómo es el proceso</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "Nos cuentas qué necesitas", d: "Por WhatsApp, correo o llamada. Descripción del proyecto, medidas aproximadas y el uso previsto. Un bosquejo dibujado a mano es suficiente para empezar." },
              { n: "2", t: "Te cotizamos con precio y plazo", d: "En uno a dos días hábiles te respondemos con el precio total y el plazo de fabricación e instalación." },
              { n: "3", t: "Aprobación y fabricación", d: "Apruebas el presupuesto, confirmamos materiales y empezamos a fabricar. El pago puede ser en cuotas según el proyecto." },
              { n: "4", t: "Instalación en el sitio", d: "Coordinamos la fecha de entrega e instalación. En estructuras grandes el montaje se hace en el sitio final." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <span className="w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Materiales que usamos</h2>
          <div className="space-y-2">
            {[
              ["Acero estructural", "Perfiles laminados (H, I, C, L) según la carga y el diseño de la estructura"],
              ["Tubo cuadrado y redondo", "Para estructuras livianas o elementos secundarios"],
              ["Plancha de acero", "Para plataformas, pisos de mezzanines y superficies de trabajo"],
              ["Soldadura MIG/MAG", "Soldadura continua certificable para estructuras que lo requieran"],
              ["Pintura anticorrosiva", "Imprimación y esmalte de terminación. Galvanizado disponible para estructuras expuestas"],
            ].map(([cat, desc]) => (
              <div key={cat} className="flex gap-3 bg-white border border-gray-200 rounded-lg p-3 text-xs">
                <span className="font-medium text-gray-700 min-w-[120px] flex-shrink-0">{cat}</span>
                <span className="text-gray-500">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Cercos y cierres", desc: "Si también necesitas cercar el predio" },
            { href: "/portones-industriales", label: "Portones industriales", desc: "Accesos para bodegas y galpones" },
            { href: "/rejas-metalicas", label: "Rejas metálicas", desc: "Cierres de frontis y perímetros" },
            { href: "/empresas", label: "Para empresas", desc: "Proyectos industriales completos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Qué estructura necesitas?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos el proyecto — por WhatsApp o correo. Si tienes un bosquejo, mejor. Cotizamos en 1-2 días hábiles.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={wa("Hola, necesito cotizar una estructura metálica a pedido. El proyecto es: [DESCRIPCIÓN]. Las medidas aproximadas son: [MEDIDAS].")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">
              WhatsApp
            </a>
            <a href={`mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent("Cotización — Estructura metálica a pedido")}&body=${encodeURIComponent("Hola,\n\nNecesito cotizar una estructura metálica a pedido.\n\nTipo de estructura: \nMedidas aproximadas: \nUso previsto: \nFecha estimada de necesidad: \n\nAdjunto bosquejo si tengo uno.")}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors">
              Correo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
