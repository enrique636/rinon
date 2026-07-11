import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { formatPrice, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote Triple en Chile | Litera de 3 Pisos — Pago Contra Entrega Santiago",
  description:
    "Camarote triple metálico de 3 niveles. La solución para familias que necesitan 3 camas en el mínimo espacio. Pago contra entrega en Santiago. Consulta por WhatsApp.",
  keywords: [
    "camarote triple",
    "litera triple",
    "camarote 3 pisos",
    "camarote tres camas",
    "litera triple Chile",
    "camarote triple Santiago",
    "camarote triple metálico",
    "cama triple Chile",
    "litera 3 niveles",
  ],
  alternates: { canonical: "https://rinon.cl/camarote-triple" },
  openGraph: {
    title: "Camarote Triple (3 Pisos) en Chile — Santiago",
    description: "Camarote metálico de 3 niveles. 3 camas verticales en el mínimo espacio posible. Pago contra entrega Santiago.",
    type: "website",
    locale: "es_CL",
  },
};

const imgs = [
  { src: "/images/camarotes/camarote-triple-litera-negro.jpg", alt: "Camarote triple metálico negro tres pisos fondo blanco" },
  { src: "/images/camarotes/camarote-triple-campamento-agricola.jpg", alt: "Camarote triple en campamento agrícola" },
  { src: "/images/camarotes/camarote-triple-faena-forestal.jpg", alt: "Camarote triple en faena forestal" },
  { src: "/images/camarotes/camarote-triple-dormitorio-hostal.jpg", alt: "Camarote triple dormitorio hostal" },
  { src: "/images/camarotes/camarote-triple-campamento-construccion.jpg", alt: "Camarote triple campamento de construcción" },
  { src: "/images/camarotes/camarote-triple-campamento-mineria.jpg", alt: "Camarote triple campamento minería" },
  { src: "/images/camarotes/camarote-triple-dormitorio-multiple.jpg", alt: "Camarote triple dormitorio con literas múltiples" },
  { src: "/images/camarotes/camarote-triple-campamento-premium.jpg", alt: "Camarote triple campamento premium corporativo" },
];

const faqs = [
  {
    q: "¿Qué es un camarote triple?",
    a: "Un camarote triple es una estructura metálica de 3 niveles de camas superpuestas. Tiene cama inferior, cama media y cama superior, todas de 1 plaza, en un solo módulo vertical.",
  },
  {
    q: "¿Cuánta altura de techo necesito para un camarote triple?",
    a: "El camarote triple requiere mayor altura de techo que un camarote estándar, generalmente al menos 230-250 cm dependiendo del modelo. Es importante medir la altura de tu espacio antes de comprar. Consúltanos y te orientamos.",
  },
  {
    q: "¿Es seguro el nivel superior de un camarote triple?",
    a: "Sí, el nivel superior incluye barandas de seguridad. Sin embargo, por la mayor altura, se recomienda para adolescentes y adultos, no para niños pequeños. Se pueden agregar barandas adicionales.",
  },
  {
    q: "¿Se pueden pedir medidas especiales para el camarote triple?",
    a: `Sí. Aceptamos hasta 3 cambios de medida por pedido a ${formatPrice(SITE_CONFIG.cambioMedida.precio)} cada uno. Esto permite adaptar el largo o ancho del camarote a tu espacio.`,
  },
  {
    q: "¿Cuánto cuesta el despacho en Santiago?",
    a: `El despacho tiene un costo de ${formatPrice(SITE_CONFIG.despacho.precio)} en Santiago y alrededores. El pago es contra entrega: pagas cuando el camarote llega instalado a tu casa.`,
  },
  {
    q: "¿Se puede agregar parrilla adicional al camarote triple?",
    a: "Sí. Se pueden agregar hasta 2 parrillas metálicas adicionales. Consúltanos el precio al momento de cotizar.",
  },
];

export default function CamaroteTriplePage() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: "https://rinon.cl" },
            { "@type": "ListItem", position: 2, name: "Camarotes", item: "https://rinon.cl/camarotes" },
            { "@type": "ListItem", position: 3, name: "Camarote Triple", item: "https://rinon.cl/camarote-triple" },
          ],
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Camarote Triple Metálico (3 Pisos)",
          description: "Camarote metálico de 3 niveles con 3 camas de 1 plaza superpuestas. Fabricación chilena. Ideal para familias numerosas y espacios reducidos.",
          brand: { "@type": "Brand", name: "Camarotes Chile" },
          material: "Acero",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "CLP",
            seller: { "@type": "Organization", name: "Camarotes Chile" },
            areaServed: "Santiago, Chile",
          },
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}} />

        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <Link href="/camarotes" className="hover:text-gray-600">Camarotes</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Camarote Triple</span>
        </nav>

        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div className="grid grid-cols-2 gap-2">
            {imgs.slice(0, 4).map((img) => (
              <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <div>
            <span className="inline-block bg-gray-900 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">
              3 niveles
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Camarote Triple</h1>
            <p className="text-green-600 font-medium mb-4">
              También llamado litera triple o camarote de 3 pisos
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              El <strong>camarote triple</strong> es la solución definitiva cuando necesitas 3 camas
              en el menor espacio posible. Con tres niveles de camas de 1 plaza superpuestas en una
              sola estructura metálica, es ideal para familias con varios hijos o espacios donde
              maximizar la capacidad es la prioridad absoluta.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Nivel inferior: 1 plaza", "Nivel medio: 1 plaza", "Nivel superior: 1 plaza"].map((nivel) => (
                <div key={nivel} className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-center">
                  <p className="text-gray-700 font-medium text-xs">{nivel}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-800 font-bold">Pago contra entrega</p>
                  <p className="text-green-600 text-sm">Despacho {formatPrice(SITE_CONFIG.despacho.precio)} · Solo Santiago</p>
                </div>
                <span className="text-2xl">🚚</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <WhatsAppButton
                size="lg"
                message="Hola, me interesa el Camarote Triple. ¿Cuál es el precio y disponibilidad en Santiago?"
                className="w-full justify-center"
              >
                Consultar precio por WhatsApp
              </WhatsAppButton>
              <Link href="/cotizar"
                className="w-full text-center py-3.5 border-2 border-gray-200 hover:border-gray-400 text-gray-700 font-semibold rounded-full transition-colors">
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>

        {/* Contenido SEO */}
        <div className="max-w-3xl mb-14 space-y-6 text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900">¿Qué es un camarote triple y cuándo usarlo?</h2>
          <p>
            Un <strong>camarote triple</strong> —también conocido como <strong>litera triple</strong>,
            <strong> litera de 3 pisos</strong> o <strong>camarote de 3 niveles</strong>— es una estructura
            metálica que apila tres camas de 1 plaza en vertical. Es el modelo menos común pero el más eficiente
            en términos de espacio: tres personas pueden dormir en prácticamente la misma huella de suelo
            que una cama individual.
          </p>
          <p>
            En Chile, el <strong>camarote triple metálico</strong> se usa principalmente en dos contextos:
            familias con tres hijos que comparten habitación y necesitan maximizar cada centímetro, y
            residencias, hostales o espacios de alojamiento compartido donde la capacidad por cuarto es
            la métrica más importante.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Consideraciones clave antes de comprar</h2>
          <h3 className="text-lg font-semibold text-gray-800">Altura del techo</h3>
          <p>
            Este es el factor más crítico. Un <strong>camarote triple</strong> requiere significativamente
            más altura que un camarote estándar. Antes de cotizar, mide la altura de tu techo.
            Como referencia, necesitas espacio suficiente para la estructura más el espacio cómodo
            sobre la cama superior. Consúltanos con la medida exacta y te orientamos sobre el modelo adecuado.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">¿Para quién es cada nivel?</h3>
          <p>
            La cama inferior es la más accesible y cómoda para adultos. La media es ideal para niños
            mayores o adolescentes. La superior, al ser la más alta, es más recomendable para adolescentes
            y adultos jóvenes que se sientan cómodos subiendo y bajando con agilidad.
            Para niños pequeños, el nivel superior puede no ser la opción más segura.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Estructura reforzada</h3>
          <p>
            Al tener tres niveles, el <strong>camarote triple metálico</strong> requiere una estructura
            más robusta que un camarote estándar. Nuestros modelos están fabricados en acero de calidad
            para garantizar la estabilidad y seguridad de los tres niveles simultáneamente.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Accesorios disponibles</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Parrillas metálicas adicionales:</strong> hasta 2 por pedido. Precio a consultar.</li>
            <li><strong>Barandas de seguridad extra:</strong> hasta 2 por pedido. Esencial para el nivel superior si hay niños.</li>
            <li><strong>Cambios de medida:</strong> hasta 3, a {formatPrice(SITE_CONFIG.cambioMedida.precio)} c/u. Para adaptar largo o ancho a tu espacio.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900">Camarote triple vs camarote nido: ¿cuál elegir?</h2>
          <p>
            Ambos dan acceso a 3 camas, pero funcionan distinto. El <strong>camarote triple</strong>
            tiene las 3 camas siempre disponibles y apiladas: perfecto cuando las 3 se usan todas las noches.
            El <strong>camarote nido</strong> tiene 2 camas permanentes y una tercera deslizante que
            se guarda de día: ideal cuando la tercera cama se necesita solo ocasionalmente.
            Si las 3 personas duermen ahí cada noche, el triple es la mejor opción.
          </p>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 text-center mb-14">
          <h2 className="text-xl font-bold mb-2">¿Cuánto mide tu techo?</h2>
          <p className="text-gray-300 text-sm mb-5">
            Cuéntanos la altura de tu espacio y te decimos si el camarote triple es viable. Respuesta inmediata por WhatsApp.
          </p>
          <WhatsAppButton message="Hola, me interesa el camarote triple. Mi techo mide [X] cm de alto. ¿Es viable?">
            Consultar por WhatsApp
          </WhatsAppButton>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes — camarote triple</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1.5">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
          {imgs.slice(4).map((img) => (
            <div key={img.src} className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">También puede interesarte</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/camarote-nido", emoji: "🪺", nombre: "Camarote Nido" },
              { href: "/cama-alta", emoji: "🪜", nombre: "Cama Alta" },
              { href: "/camarote-doble", emoji: "👫", nombre: "Camarote Doble" },
              { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Con Escritorio" },
            ].map((p) => (
              <Link key={p.href} href={p.href}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all text-center">
                <span className="text-2xl block mb-1">{p.emoji}</span>
                <p className="text-sm font-medium text-gray-700">{p.nombre}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
