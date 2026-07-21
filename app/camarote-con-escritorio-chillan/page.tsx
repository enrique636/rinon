import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarote con Escritorio Chillán | Región de Ñuble",
  description: "Camarotes metálicos con escritorio con despacho a Chillán y la Región de Ñuble. Fabricante en Santiago. Entrega en 4-7 días hábiles a tu domicilio en Chillán.",
  keywords: ["camarote con escritorio chillan", "litera escritorio chillan", "cama alta escritorio chillan", "camarote nuble escritorio"],
  alternates: { canonical: "https://rinon.cl/camarote-con-escritorio-chillan" },
};

export default function Page() {
  const ciudad = "Chillán";
  const wa = getWhatsAppUrl("Hola, quiero cotizar un camarote con escritorio con despacho a Chillán.");
  return (
    <div className="py-12 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: `¿Hacen despacho a ${ciudad}?`, acceptedAnswer: { "@type": "Answer", text: `Sí. Despachamos a ${ciudad} y toda la Región de Ñuble vía transporte terrestre. El camarote se envía desarmado en cajas protegidas.` } },
          { "@type": "Question", name: `¿Cuánto demora el despacho a ${ciudad}?`, acceptedAnswer: { "@type": "Answer", text: `El tiempo de despacho a ${ciudad} es de aproximadamente 4-7 días hábiles dependiendo del servicio de transporte disponible en tu zona.` } },
          { "@type": "Question", name: "¿Cómo llega el camarote?", acceptedAnswer: { "@type": "Answer", text: "Para regiones, el camarote se despacha desarmado en cajas protegidas. Incluye instrucciones de armado detalladas. También puedes coordinar instalación en destino consultándonos." } },
        ],
      }) }} />
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-con-escritorio" className="hover:text-gray-600">Camarotes con Escritorio</Link><span>/</span>
          <span className="text-gray-700 font-medium">{ciudad}</span>
        </nav>
        <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 text-sm text-green-700 font-medium mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full" /> Despacho a {ciudad} · Envío nacional
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Camarote con Escritorio en {ciudad}</h1>
        <p className="text-gray-500 text-lg max-w-2xl mb-6">Fabricamos en Santiago y despachamos a {ciudad}, en la Región de Ñuble. Camarotes metálicos con escritorio integrado, enviados desarmados en cajas protegidas. Tiempo estimado de entrega: 4-7 días hábiles.</p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { href: "/camarote-con-escritorio", emoji: "📚", nombre: "Camarote con Escritorio" },
            { href: "/camarote-con-escritorio-economico", emoji: "💰", nombre: "Económico" },
            { href: "/camarote-con-escritorio-full", emoji: "⭐", nombre: "Full" },
            { href: "/camarote-con-escritorio-a-medida", emoji: "🔧", nombre: "A Medida" },
          ].map(p => (
            <Link key={p.nombre} href={p.href} className="flex gap-3 items-center bg-white border border-gray-200 rounded-xl p-4 hover:border-green-300 transition-all">
              <span className="text-2xl">{p.emoji}</span><span className="font-semibold text-gray-900 text-sm">{p.nombre}</span>
            </Link>
          ))}
        </div>
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-bold text-gray-900">¿Cómo funciona el despacho a {ciudad}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "💬", t: "Cotiza por WhatsApp", d: `Dinos tu modelo y dirección en ${ciudad}. Te confirmamos disponibilidad y costo de despacho.` },
              { icon: "📦", t: "Empacamos y despachamos", d: "El camarote sale de nuestro taller en Santiago empacado para transporte. Se envía vía transporte terrestre." },
              { icon: "🏠", t: `Recibes en ${ciudad}`, d: "Llega a tu domicilio o terminal de buses. Incluye instrucciones de armado paso a paso." },
            ].map(s => (
              <div key={s.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{s.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 mb-10">
          <h2 className="text-xl font-bold text-gray-900">Preguntas frecuentes</h2>
          {[
            { q: `¿Hacen despacho a ${ciudad}?`, a: `Sí. Despachamos a ${ciudad} y la Región de Ñuble vía transporte terrestre. El camarote llega desarmado en cajas protegidas.` },
            { q: "¿Cuánto demora el envío?", a: `El tiempo de despacho a ${ciudad} es de aproximadamente 4-7 días hábiles.` },
            { q: "¿Cómo se arma?", a: "Incluye instrucciones detalladas de armado. La mayoría de nuestros clientes lo arman solos sin herramientas especiales." },
          ].map(f => (
            <div key={f.q} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotizar despacho a {ciudad}</h2>
          <p className="text-gray-400 text-sm mb-6">Respondemos en minutos con precio y plazo exacto.</p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
