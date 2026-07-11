import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes Militares — Literas Metálicas para Cuarteles y Regimientos | Chile",
  description: "Camarotes militares fabricados en acero estructural. Resistentes, apilables y certificados para cuarteles, regimientos, bomberos y fuerzas de orden. Cotización B2B.",
  keywords: ["camarotes militares","litera militar chile","camarote metalico militar","camarotes cuartel","camarotes regimiento","literas militares acero","camarotes bomberos","camarotes fuerzas orden","camarotes institucionales metalicos","fabricante camarotes militares chile"],
  alternates: { canonical: "https://rinon.cl/camarotes-militares" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const faq = [
  { q: "¿Qué diferencia tiene un camarote militar de uno residencial?", a: "El camarote militar usa tubo estructural de mayor espesor (1,5 mm o más), soldaduras reforzadas, sistema de fijación entre camas apilables y pintura en polvo de alta resistencia. Está diseñado para uso intensivo 24/7 por múltiples usuarios." },
  { q: "¿Pueden apilarse más de dos niveles?", a: "Fabricamos camarotes de 2 y 3 niveles. Para aplicaciones donde el espacio vertical lo permite, el triple nivel permite maximizar la capacidad de alojamiento manteniendo el espacio en planta." },
  { q: "¿Ofrecen cotización por volumen para instituciones?", a: "Sí. Para pedidos de 10 unidades o más ofrecemos precio institucional con descuento por volumen, plazos de entrega coordinados y factura a nombre de la institución." },
  { q: "¿Las camas cumplen normas de seguridad?", a: "Fabricamos bajo norma NCh de construcción metálica. Las soldaduras se realizan con proceso MIG y los acabados con pintura electrostática al horno, que garantiza adherencia y durabilidad superior a la pintura convencional." },
];

export default function CamarotesMilitaresPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Camarotes Militares</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Uso intensivo · Precio institucional</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Militares — Literas de Acero para Uso Institucional</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos camarotes militares en acero estructural para cuarteles, regimientos, bases, institutos de formación, cuerpos de bomberos y fuerzas de orden. Resistentes al uso intensivo, fáciles de limpiar y con precio institucional por volumen.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa("Hola, necesito cotizar camarotes militares/institucionales. Cantidad: [UNIDADES]. Configuración: [2 NIVELES / 3 NIVELES]. Institución: [NOMBRE]. ¿Tienen precio por volumen?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar institucional</a>
            <a href={wa("Hola, necesito ficha técnica de camarotes militares/institucionales para presentar a mi institución.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Solicitar ficha técnica</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { titulo: "Acero estructural", desc: "Tubo cuadrado y rectangular de 1,5 mm de espesor mínimo, soldadura MIG certificada" },
            { titulo: "Pintura al horno", desc: "Electrostática en polvo. No se pela, no se escurre. Resistente a humedad y rozamiento constante" },
            { titulo: "Configuración modular", desc: "2 o 3 niveles. Apilables entre sí. Se pueden separar en camas individuales si se requiere" },
          ].map((f) => (
            <div key={f.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Usos institucionales que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Cuarteles del Ejército","Regimientos","Bases Navales","Fuerza Aérea","Cuerpos de Bomberos","Carabineros","PDI","Gendarmería","Institutos de formación","Escuelas militares","Brigadas de emergencia"].map((u) => (
              <span key={u} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-700 font-medium">{u}</span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Especificaciones técnicas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Material estructura", "Tubo cuadrado y rectangular acero ASTM A500"],
                  ["Espesor mínimo", "1,5 mm (superior a camarote residencial estándar de 1,2 mm)"],
                  ["Proceso soldadura", "MIG / MAG — cordones continuos en puntos de carga"],
                  ["Acabado", "Pintura electrostática al horno 60-80 micrones"],
                  ["Colores disponibles", "Negro mate, gris militar, verde oliva, beige institucional"],
                  ["Medidas estándar", "200 × 90 cm por plaza. Altura total: 165 cm (2 niveles)"],
                  ["Capacidad de carga", "150 kg por plaza"],
                  ["Sistema de fijación", "Tornillos de cabeza hexagonal + seguros de acero"],
                  ["Entrega", "Coordinada por lotes para instalaciones grandes"],
                ].map(([campo, valor]) => (
                  <tr key={campo}>
                    <td className="py-2.5 pr-4 text-gray-500 font-medium w-1/3">{campo}</td>
                    <td className="py-2.5 text-gray-900">{valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-para-universidades", label: "Para Universidades", desc: "Residencias estudiantiles" },
            { href: "/camarotes-para-internados", label: "Para Internados", desc: "Colegios e institutos" },
            { href: "/camarotes-para-hospitales", label: "Para Hospitales", desc: "Instituciones de salud" },
            { href: "/mobiliario-institucional", label: "Mobiliario Institucional", desc: "Hub de todos los sectores" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotización institucional</h2>
          <p className="text-gray-400 text-sm mb-5">Precio por volumen · Factura a nombre de la institución · Entrega coordinada</p>
          <a href={wa("Hola, necesito cotizar camarotes militares/institucionales. Cantidad: [UNIDADES]. Institución: [NOMBRE]. Configuración requerida: [DATOS].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
        })}} />
      </div>
    </div>
  );
}
