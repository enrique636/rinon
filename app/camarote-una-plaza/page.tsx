import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote de 1 Plaza — Litera Metálica 90×190 cm | Fabricante Chile",
  description: "Camarote metálico de 1 plaza (90×190 cm). El modelo más solicitado para piezas, habitaciones de arriendo y uso institucional. Fabricante directo en Chile.",
  keywords: ["camarote una plaza","camarote 1 plaza metalico","litera 1 plaza chile","camarote 90x190 metalico","camarote una plaza precio chile","litera una plaza acero","camarote metalico 1 plaza santiago","camarote 1 plaza barrato","fabricante camarote una plaza"],
  alternates: { canonical: "https://rinon.cl/camarote-una-plaza" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteUnaPlazaPage() {
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Camarote de 1 Plaza Metálico",
        description: "Camarote metálico de 1 plaza (90×190 cm). El modelo más solicitado para piezas, habitaciones de arriendo y uso institucional. Fabricante directo en Chile.",
        provider: {
          "@type": "LocalBusiness",
          name: "Camarotes Chile",
          address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
        },
        serviceType: "Fabricación de camarotes metálicos",
        areaServed: { "@type": "Country", name: "Chile" },
        brand: { "@type": "Brand", name: "Camarotes Chile" },
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "¿Cuánto pesa el camarote de 1 plaza?", acceptedAnswer: { "@type": "Answer", text: "El camarote metálico de 1 plaza pesa entre 35 y 45 kg dependiendo del modelo y el grosor del tubo. Es perfectamente manejable entre dos personas para instalación y traslado." } },
          { "@type": "Question", name: "¿Incluye colchón el camarote de 1 plaza?", acceptedAnswer: { "@type": "Answer", text: "No. El precio es solo por la estructura metálica. El colchón para 1 plaza (90×190 cm) se consigue en cualquier tienda de colchones. Recomendamos un grosor de entre 15 y 20 cm." } },
        ],
      })}} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">1 Plaza</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · El más solicitado · 90 × 190 cm</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarote de 1 Plaza — 90 × 190 cm</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-5 leading-relaxed">El camarote de 1 plaza es el modelo más solicitado del catálogo. Con 90 cm de ancho y 190 cm de largo, ocupa el mínimo espacio horizontal posible. Ideal para piezas arrendadas, habitaciones compartidas, dormitorios de niños y uso institucional.</p>

          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-metalico-negro-fondo-blanco.jpg" alt="Camarote de 1 plaza metálico negro — 90x190 cm fabricante directo Chile" className="w-full object-cover" loading="lazy" />
          </div>

          <a href={wa("Hola, necesito cotizar camarote de 1 plaza (90×190 cm). Color: [DATO]. Cantidad: [UNIDADES]. ¿Con o sin escalera lateral? ¿Con cajón inferior?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar camarote 1 plaza</a>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-gray-900 mb-3 text-sm">Especificaciones</h2>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            {[
              ["Ancho por plaza", "90 cm"],
              ["Largo", "190 cm (estándar) / 200 cm (opcional)"],
              ["Altura total", "~165 cm"],
              ["Altura libre nivel inferior", "~75–80 cm"],
              ["Capacidad de carga", "120 kg por nivel"],
              ["Material", "Tubo cuadrado acero"],
              ["Acabado", "Pintura electrostática al horno"],
              ["Colores", "Negro, blanco, gris, café y más"],
            ].map(([k, v]) => (
              <div key={k} className="contents">
                <span className="text-gray-500">{k}</span>
                <span className="text-gray-900 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-adultos", label: "Camarote Adulto 1,5 Plazas", desc: "Más ancho para mayor comodidad" },
            { href: "/litera-metalica", label: "Litera Metálica", desc: "Todos los modelos" },
            { href: "/camarote-triple", label: "Camarote Triple", desc: "3 plazas, máxima capacidad" },
            { href: "/camarotes-metalicos", label: "Ver catálogo completo", desc: "Todos los modelos" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Pide tu cotización</h2>
          <p className="text-gray-400 text-sm mb-5">Color, cantidad y si necesitas cajón o escalera lateral. Respondemos el mismo día.</p>
          <a href={wa("Hola, quiero cotizar camarote de 1 plaza (90×190). Color: [DATO]. Cantidad: [UNIDADES]. Extras: [CAJÓN / ESCALERA LATERAL / NINGUNO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
