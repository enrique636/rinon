import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Internados — Literas Metálicas para Colegios e Institutos | Chile",
  description: "Camarotes metálicos para internados de colegios, institutos técnicos y hogares juveniles. Fabricante directo. Resistentes, seguros y con precio institucional.",
  keywords: ["camarotes para internados","literas internado colegio","camarotes colegio internado","camas metalicas internado","literas metalicas colegio chile","camarotes hogar juvenil","fabricante camarotes internados","camarotes institucionales colegios"],
  alternates: { canonical: "https://rinon.cl/camarotes-para-internados" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteParaInternadosPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Internados</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Uso juvenil intensivo · Precio institucional</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Internados — Colegios, Institutos y Hogares Juveniles</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Equipamos internados de colegios, liceos, institutos técnicos y hogares juveniles con camarotes metálicos diseñados para uso intensivo y seguro. Estructura robusta, esquinas sin filos y acceso fácil al nivel superior.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camas-institucionales-dormitorio-multiple.jpg" alt="Camas institucionales grises en dormitorio múltiple para internados" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito cotizar camarotes para internado de colegio/instituto. Cantidad: [UNIDADES]. Institución: [NOMBRE]. Configuración: [2 / 3 NIVELES]. Ciudad: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para mi institución</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">¿Qué hace diferente un camarote para internado?</h2>
          <div className="space-y-3">
            {[
              { t: "Escalera integrada con peldaños anchos", d: "El acceso al nivel superior es más seguro con peldaños de 20 cm de ancho, no con simples travesaños." },
              { t: "Baranda de seguridad lateral", d: "El nivel superior incluye baranda lateral de 30 cm de altura para evitar caídas durante el sueño." },
              { t: "Sin tornillos expuestos", d: "Los tornillos de unión quedan embebidos o con tapa plástica. Sin filos ni salientes que puedan causar cortes." },
              { t: "Acabado resistente a limpieza frecuente", d: "La pintura electrostática al horno soporta limpieza con cloro y desinfectantes industriales sin deteriorarse." },
            ].map((item) => (
              <div key={item.t} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.t}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-para-universidades", label: "Camarotes para Universidades", desc: "Residencias estudiantiles" },
            { href: "/camarotes-militares", label: "Camarotes Militares", desc: "Institutos de formación" },
            { href: "/camarote-triple", label: "Camarote Triple", desc: "3 plazas para máxima capacidad" },
            { href: "/camarotes-al-por-mayor", label: "Precio al Por Mayor", desc: "Descuentos por volumen" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza para tu internado</h2>
          <p className="text-gray-400 text-sm mb-5">Cantidad, ciudad y configuración. Precio institucional con factura incluida.</p>
          <a href={wa("Hola, necesito camarotes para internado. Cantidad: [UNIDADES]. Institución: [NOMBRE]. Ciudad: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
