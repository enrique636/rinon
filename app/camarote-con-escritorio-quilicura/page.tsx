import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Quilicura — Despacho a Domicilio | Camarotes Chile",
  description:
    "Camarotes con escritorio para Quilicura. Despacho a domicilio en toda la comuna. Fabricante directo — pago contra entrega.",
  keywords: [
    "camarote con escritorio quilicura",
    "cama alta escritorio quilicura",
    "camarotes quilicura",
    "camarote quilicura despacho",
  ],
  alternates: { canonical: "https://dumar.cl/camarote-con-escritorio-quilicura" },
};

export default function CamaroteEscritorioQuilicuraPage() {
  const wa = getWhatsAppUrl("Hola, estoy en Quilicura y quiero un camarote con escritorio. ¿Tienen despacho a la comuna?");
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarote-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">Quilicura</span>
        </nav>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
            📍 Quilicura · Despacho a domicilio · Pago contra entrega
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Camarote con Escritorio en Quilicura
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-4">
            Entregamos camarotes con escritorio en toda la comuna de Quilicura — Ciudad Empresarial,
            Enea, Quilicura Centro, Nuevo Quilicura y todos los sectores. Fabricante directo con
            pago contra entrega.
          </p>
          <p className="text-gray-500 text-base max-w-2xl mb-6">
            Quilicura tiene un alto porcentaje de familias jóvenes en condominios y departamentos.
            El camarote con escritorio es la solución más popular para piezas de 9-14 m² donde
            los niños y adolescentes necesitan espacio para estudiar y dormir.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full text-sm transition-colors">Cotizar para Quilicura</a>
            <Link href="/camarote-con-escritorio" className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full text-sm hover:border-gray-400 transition-colors">Ver modelos</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            { t: "Plazo de entrega", v: SITE_CONFIG.despacho.dias, icon: "🚛" },
            { t: "Precio despacho", v: `$${SITE_CONFIG.despacho.precio.toLocaleString("es-CL")}`, icon: "💰" },
            { t: "Pago", v: "Contra entrega", icon: "✅" },
          ].map((d) => (
            <div key={d.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <span className="text-2xl block mb-2">{d.icon}</span>
              <p className="text-xs text-gray-400 mb-1">{d.t}</p>
              <p className="font-bold text-gray-900">{d.v}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarote-con-escritorio-nino", label: "Para Niños", desc: "Zona de juego arriba, escritorio de tareas abajo. Favorito de Quilicura." },
            { href: "/camarote-con-escritorio-adolescente", label: "Para Adolescentes", desc: "Estudios + área privada. Perfecto para prepas." },
            { href: "/camarote-con-escritorio-departamento", label: "Para Departamentos", desc: "Ideal para condominios con piezas compactas." },
            { href: "/camarote-con-escritorio", label: "Ver todos los modelos", desc: "Todos los camarotes con escritorio disponibles." },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label}</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">¿Estás en Quilicura?</h2>
          <p className="text-gray-400 text-sm mb-5">Escríbenos y te confirmamos disponibilidad y plazo de despacho.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar ahora</a>
        </div>
      </div>
    </div>
  );
}
