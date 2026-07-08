import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cierres Perimetrales para Condominios — Reja y Malla | Buenos Pal Catre",
  description: "Cierres perimetrales para condominios y conjuntos habitacionales en Chile. Rejas tubulares, mallas y soluciones a medida. Estética + seguridad. Fabricante directo.",
  keywords: ["cierres perimetrales condominios", "cierre perimetral condominio", "reja condominio santiago", "cierre conjunto habitacional", "cerco condominio metalico", "fabricante cierre condominio chile"],
  alternates: { canonical: "https://rinon.cl/cierres-para-condominios" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CierresCondominiosPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/cierres-perimetrales" className="hover:text-gray-600">Cierres Perimetrales</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Condominios</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-sm text-blue-700 font-medium mb-5">🏘️ Condominios · Seguridad + Estética · Santiago</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cierres Perimetrales para Condominios</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            El cierre perimetral de un condominio tiene dos funciones simultáneas: seguridad y estética.
            Un mal cierre hace que el proyecto se vea descuidado. Un buen cierre eleva la percepción del
            conjunto, aumenta la sensación de seguridad de los residentes y puede ser un diferencial
            en la venta o arriendo de las unidades.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Fabricamos cierres para condominios en diseño de reja tubular — el más solicitado por combinar
            seguridad, visibilidad y estética. Con portón peatonal y vehicular integrados.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa("Hola, necesito cotizar un cierre perimetral para un condominio. ¿Pueden ayudarme?")} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para mi condominio</a>
            <Link href="/cierres-perimetrales" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver todos los tipos</Link>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Qué incluye el cierre de un condominio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Cierre perimetral principal", d: "Reja tubular a lo largo de todo el perímetro del condominio. Altura estándar 1,80-2,00 m. Diseño con puntas o liso según la preferencia del proyecto." },
              { t: "Portón vehicular", d: "Acceso de vehículos. Corredizo o batiente según el espacio disponible. Con cerradura manual o preparado para motorización." },
              { t: "Puerta peatonal", d: "Acceso independiente para residentes a pie. Integrada al diseño del cierre. Con cerradura y mirilla si se requiere." },
              { t: "Remate de esquinas y uniones", d: "Las esquinas y los puntos de unión del cierre son los que más se deterioran. Fabricamos con refuerzo en esos puntos para que el cierre dure sin deformarse." },
            ].map(i => (
              <div key={i.t} className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{i.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{i.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Tipos de cliente que nos contactan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { t: "Constructoras", d: "Cierre del proyecto al terminar la obra. Reemplaza el cierre temporal de construcción." },
              { t: "Administraciones de edificios", d: "Reposición o mejora del cierre perimetral existente en condominios ya habitados." },
              { t: "Comités de residentes", d: "Cuando los residentes deciden mejorar la seguridad del conjunto y contratan directamente." },
            ].map(c => (
              <div key={c.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{c.t}</h3>
                <p className="text-gray-500 text-xs">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/cierres-perimetrales", label: "Todos los cierres perimetrales", desc: "Tipos disponibles y proceso de cotización" },
            { href: "/cierres-para-constructoras", label: "Para Constructoras", desc: "Si eres constructora y necesitas el cierre definitivo del proyecto" },
            { href: "/portones-metalicos", label: "Portones Metálicos", desc: "Acceso vehicular integrado al cierre" },
            { href: "/pintura-electrostatica", label: "Pintura Electrostática", desc: "El acabado que usamos — dura décadas" },
          ].map(l => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Cuántos metros tiene el perímetro de tu condominio?</h2>
          <p className="text-gray-400 text-sm mb-5">Cuéntanos los metros, el diseño que buscas y si necesitas portón. Cotizamos en el día.</p>
          <a href={wa("Hola, necesito cotizar un cierre perimetral para un condominio. El perímetro es de aproximadamente [METROS] metros.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
