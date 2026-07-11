import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Hospitales y Clínicas — Literas Metálicas Sanitarias | Chile",
  description: "Camarotes y camas metálicas para hospitales, clínicas, postas rurales y residencias de salud. Fáciles de limpiar y desinfectar. Fabricante. Cotización institucional.",
  keywords: ["camarotes hospitales","literas clinica hospital","camas metalicas hospital","camarotes residencia salud","literas metalicas hospitales chile","camas hospitalarias metalicas","camarotes posta rural","fabricante camas hospital chile","camarotes instituciones salud"],
  alternates: { canonical: "https://rinon.cl/camarotes-para-hospitales" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function CamaroteParaHospitalesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Hospitales</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Sanitario · Precio institucional</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes para Hospitales, Clínicas y Residencias de Salud</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos camas y camarotes metálicos para establecimientos de salud: hospitales, clínicas, postas rurales, CESFAM, residencias de adulto mayor y centros de rehabilitación. Diseñados para soportar limpieza diaria con desinfectantes de alto espectro.</p>
          <a href={wa("Hola, necesito cotizar camarotes/camas para hospital o establecimiento de salud. Institución: [NOMBRE]. Cantidad: [UNIDADES]. Configuración: [CAMA INDIVIDUAL / CAMAROTE 2 NIVELES]. Ciudad: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar para mi establecimiento</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { titulo: "Acabado sanitario", desc: "Pintura electrostática al horno. Sin porosidades donde pueda acumularse suciedad. Resiste cloro, alcohol y desinfectantes de uso hospitalario." },
            { titulo: "Sin tornillos expuestos", desc: "Las uniones quedan embebidas o con tapa. Facilita la limpieza y evita acumulación de polvo en zonas de difícil acceso." },
            { titulo: "Ruedas con freno (opcional)", desc: "Versión con ruedas de goma con freno para facilitar el movimiento y reconfiguración de salas." },
            { titulo: "Baranda de seguridad", desc: "Nivel superior con baranda lateral de 30 cm. Evita caídas en pacientes que se mueven durante el sueño." },
          ].map((item) => (
            <div key={item.titulo} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Establecimientos que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Hospitales públicos","Clínicas privadas","CESFAM","Postas rurales","Residencias adulto mayor","ELEAM","Centros de rehabilitación","Hogares de acogida","Clínicas psiquiátricas","Centros de diálisis"].map((u) => (
              <span key={u} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-700 font-medium">{u}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/camarotes-militares", label: "Camarotes Institucionales", desc: "Alta resistencia uso intensivo" },
            { href: "/camarotes-para-universidades", label: "Para Residencias Estudiantiles", desc: "Internados y hogares" },
            { href: "/camarotes-para-internados", label: "Para Internados", desc: "Colegios y hogares juveniles" },
            { href: "/camarotes-al-por-mayor", label: "Precio al Por Mayor", desc: "Descuentos por volumen" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotización para tu establecimiento de salud</h2>
          <p className="text-gray-400 text-sm mb-5">Factura institucional, precio por volumen y entrega coordinada con bodega.</p>
          <a href={wa("Hola, necesito camas o camarotes para establecimiento de salud. Institución: [NOMBRE]. Cantidad: [UNIDADES]. Ciudad: [CIUDAD].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
