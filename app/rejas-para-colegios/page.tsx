import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Rejas para Colegios — Protección Frontal y Perimetral para Establecimientos | Chile",
  description: "Rejas metálicas para colegios, liceos y jardines infantiles. Protección frontal, cerco perimetral y portones de acceso. Fabricante con instalación en Santiago y regiones.",
  keywords: ["rejas para colegios","reja colegio metalica","reja frontal colegio","rejas metalicas colegios chile","reja liceo metalica","reja jardin infantil","rejas establecimientos educacionales","cerco perimetral colegio","proteccion frontal colegio metalica","fabricante rejas colegios chile"],
  alternates: { canonical: "https://rinon.cl/rejas-para-colegios" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasParaColegiosPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas-santiago" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Colegios</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Institucional · Con instalación</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas para Colegios, Liceos y Jardines Infantiles</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos e instalamos rejas para establecimientos educacionales: protección frontal, cerco perimetral, portones de acceso peatonal y vehicular. Diseñadas para cumplir requisitos de seguridad de menores — sin puntas expuestas, sin espacios por donde puedan introducirse objetos peligrosos.</p>
          <a href={wa("Hola, necesito cotizar rejas para colegio. Establecimiento: [NOMBRE]. Metros lineales: [METROS]. Tipo: [FRONTAL / PERIMETRAL / PORTÓN / TODO]. Ciudad: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para mi establecimiento</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { titulo: "Reja frontal", desc: "La reja que da a la calle. Diseño que permita visibilidad desde dentro hacia afuera para el inspector. Altura mínima 1,80 m. Sin puntas de lanza expuestas a la altura de niños." },
            { titulo: "Cerco perimetral", desc: "Cierre completo del perímetro del establecimiento. Evita salidas no autorizadas de alumnos y acceso de personas ajenas por los costados o parte trasera." },
            { titulo: "Portón de acceso peatonal", desc: "Para control de entrada y salida de alumnos, apoderados y personal. Con sistema de cerradura y posibilidad de portería interior." },
            { titulo: "Portón vehicular", desc: "Para acceso de furgones, camiones de suministros y vehículos de emergencia. Corredizo o batiente según el espacio disponible." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 text-sm text-amber-800">
          <strong>Requisito de seguridad:</strong> Para establecimientos con menores, las rejas no deben tener puntas de lanza expuestas a alturas de 50–150 cm (zona de alcance de niños). En colegios preferimos remate recto o con lanza invertida en la parte superior en lugar del modelo estándar con punta hacia arriba.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cercos-para-colegios", label: "Cercos para Colegios", desc: "Cerco perimetral completo" },
            { href: "/rejas-metalicas-santiago", label: "Rejas Santiago", desc: "Comunas y entregas en RM" },
            { href: "/portones-metalicos", label: "Portones Metálicos", desc: "Acceso vehicular y peatonal" },
            { href: "/rejas-tubulares", label: "Rejas Tubulares", desc: "Modelo sin puntas expuestas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza las rejas de tu establecimiento</h2>
          <p className="text-gray-400 text-sm mb-5">Nombre del establecimiento, metros lineales, tipo y ciudad. Respondemos el mismo día con precio y plazo.</p>
          <a href={wa("Hola, necesito rejas para establecimiento educacional. Nombre: [NOMBRE]. Metros: [METROS]. Tipo: [FRONTAL / PERIMETRAL / PORTÓN]. Ciudad: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
