import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Camarotes para Minería — Fabricante Directo Chile | Camarotes Chile",
  description:
    "Fabricantes de camarotes metálicos para campamentos mineros, faenas y contratistas en Chile. Despacho a Antofagasta, Calama, Copiapó y toda la zona minera. Cotización empresarial.",
  keywords: [
    "camarotes para minería Chile",
    "camarotes campamentos mineros",
    "camarotes para faenas mineras",
    "camas para trabajadores mineros",
    "camarotes industriales minería",
    "equipamiento alojamiento minero",
    "camarotes Antofagasta",
    "camarotes Calama",
    "camarotes Copiapó",
    "camas faena minera Chile",
    "fabricante camarotes minería",
  ],
  alternates: { canonical: "https://rinon.cl/camarotes-mineria" },
  openGraph: {
    title: "Camarotes para Campamentos Mineros — Fabricante Directo Chile",
    description: "Fabricamos camarotes metálicos para campamentos mineros en todo Chile. Antofagasta, Calama, Copiapó y más.",
    type: "website",
    locale: "es_CL",
  },
};

const CIUDADES_MINERAS = [
  { nombre: "Antofagasta", href: "/camarotes-antofagasta", desc: "Capital minera de Chile. Cobremos, Escondida, Spence." },
  { nombre: "Calama", href: "/camarotes-calama", desc: "Puerta de acceso a Chuquicamata y minas del norte." },
  { nombre: "Copiapó", href: "/camarotes-copiapo", desc: "Región de Atacama. Minera Los Pelambres, Punta del Cobre." },
  { nombre: "La Serena", href: "/camarotes-la-serena", desc: "Región de Coquimbo. Mineras del Valle del Elqui." },
  { nombre: "Rancagua", href: "/camarotes-rancagua", desc: "El Teniente. Mayor yacimiento subterráneo del mundo." },
  { nombre: "Vallenar", href: "/camarotes-vallenar", desc: "Atacama. Minera El Alcázar y operaciones del Huasco." },
];

function getMineriaWAUrl(ciudad?: string): string {
  const dest = ciudad ? ` con despacho a *${ciudad}*` : "";
  const msg = encodeURIComponent(`Hola, necesito cotizar camarotes metálicos para campamento minero${dest}. ¿Pueden enviarme información y precios por volumen?`);
  return `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${msg}`;
}

export default function CamarotesMineriaPage() {
  return (
    <div className="py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Camarotes Chile",
            description: "Fabricante de camarotes metálicos para campamentos mineros en Chile.",
            areaServed: { "@type": "Country", name: "Chile" },
            address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
            telephone: SITE_CONFIG.telefono,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Fabrican camarotes para campamentos mineros en Chile?", acceptedAnswer: { "@type": "Answer", text: "Sí. Somos fabricantes directos de camarotes metálicos para campamentos mineros. Despachamos a Antofagasta, Calama, Copiapó, La Serena y toda la zona minera de Chile." } },
              { "@type": "Question", name: "¿Cuánto tiempo demora el despacho a la zona norte?", acceptedAnswer: { "@type": "Answer", text: "El plazo de fabricación y despacho depende del volumen. Para pedidos de 10-20 unidades, entre 3-4 semanas desde la confirmación. El flete al norte se coordina en camión de carga." } },
              { "@type": "Question", name: "¿Los camarotes para minería son diferentes a los residenciales?", acceptedAnswer: { "@type": "Answer", text: "Podemos fabricar los modelos estándar o versiones con mayor robustez según las especificaciones de la empresa. Para campamentos exigentes, recomendamos nuestro camarote industrial con calibre de acero reforzado." } },
            ],
          }),
        }}
      />

      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/empresas" className="hover:text-gray-600">Empresas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Minería</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-full px-4 py-1.5 text-sm text-amber-800 font-medium mb-5">
            ⛏️ Fabricante directo · Despacho zona norte · Cotización por volumen
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Camarotes para Minería — Fabricante Directo en Chile
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Fabricamos camarotes metálicos para campamentos mineros, faenas y contratistas
            en todo Chile. Despachamos a Antofagasta, Calama, Copiapó, Rancagua y cada
            punto de la zona minera nacional.
          </p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-faenero-campamento-minero.jpg" alt="Camarote faenero metálico negro en campamento minero — fabricante directo Chile" className="w-full object-cover" loading="lazy" />
          </div>
<a
            href={getMineriaWAUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors shadow-sm"
          >
            Cotizar camarotes para minería
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Por qué los campamentos mineros eligen camarotes metálicos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { titulo: "Resistencia extrema", desc: "El acero no se deteriora por el calor del desierto, la humedad costera ni las variaciones térmicas nocturnas. Una inversión que dura décadas." },
              { titulo: "Fácil traslado entre faenas", desc: "Los camarotes metálicos se arman y desarman sin herramientas especiales. Cuando la faena termina, se trasladan completos a la siguiente." },
              { titulo: "Mantenimiento mínimo", desc: "Sin problemas de polillas, hongos ni humedad absorbida. Un repaso de pintura anticorrosiva cada varios años es suficiente." },
              { titulo: "Costo por vida útil bajo", desc: "En campamentos mineros de largo aliento, el costo por año de uso de un camarote metálico es muy inferior al de alternativas en madera o MDF." },
              { titulo: "Higiene y sanidad", desc: "Superficie lisa, sin porosidades. Cumple con exigencias de empresas de salud ocupacional que auditan condiciones de alojamiento en faenas." },
              { titulo: "Precio de fábrica en volumen", desc: "Al comprar directamente al fabricante, el precio por unidad mejora considerablemente en pedidos de 20 o más unidades." },
            ].map(v => (
              <div key={v.titulo} className="flex gap-3 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <span className="text-amber-500 text-lg mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{v.titulo}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ciudades mineras con despacho confirmado</h2>
          <p className="text-gray-500 text-sm mb-5">Cotizamos despacho a todas las ciudades de la zona minera de Chile. Flete en camión de carga, coordinated con la empresa.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CIUDADES_MINERAS.map(c => (
              <div key={c.nombre} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-sm transition-all">
                <h3 className="font-bold text-gray-900 mb-1">{c.nombre}</h3>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed">{c.desc}</p>
                <a
                  href={getMineriaWAUrl(c.nombre)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#25D366] text-white font-semibold rounded-lg px-3 py-1.5 hover:bg-[#1ebe5d] transition-colors"
                >
                  Cotizar a {c.nombre}
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">¿Tu ciudad no aparece? <a href={getMineriaWAUrl()} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Consúltanos por WhatsApp</a> — despachamos a toda la zona minera.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes — camarotes para minería</h2>
          <div className="space-y-4">
            {[
              { q: "¿Cuál es el pedido mínimo para campamentos mineros?", a: "Cotizamos desde 5 unidades. Para campamentos de más de 20 personas, el precio por unidad mejora significativamente. Consúltanos la cantidad estimada." },
              { q: "¿Los camarotes cumplen con normas de seguridad laboral?", a: "Nuestros camarotes incluyen barandas de seguridad en el nivel superior según buenas prácticas de diseño. Para requisitos específicos de la empresa (normas internas o exigencias de mutual de seguridad), podemos adaptar el diseño." },
              { q: "¿Pueden entregar directamente en el campamento?", a: "Sí. Coordinamos el flete con empresas de transporte de carga que tienen experiencia en zonas mineras, incluyendo acceso a faenas con control de ingreso." },
              { q: "¿Emiten factura y dan garantía?", a: "Sí. Emitimos factura electrónica de empresa. La garantía estructural es parte del proceso de fabricación con control de calidad en soldaduras y acabados." },
            ].map(faq => (
              <div key={faq.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Necesitas camarotes para tu campamento minero?</h2>
          <p className="text-amber-200 text-sm mb-6 max-w-lg mx-auto">
            Cuéntanos la cantidad de camas, el destino y tus especificaciones.
            Te enviamos cotización en el día. Sin compromiso.
          </p>
          <a
            href={getMineriaWAUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
          >
            Cotizar por WhatsApp ahora
          </a>
        </div>
      </div>
    </div>
  );
}
