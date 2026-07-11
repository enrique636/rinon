import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Camarotes para Niños — Literas Metálicas Seguras para Menores | Chile",
  description: "Camarotes metálicos para niños y adolescentes. Sin tornillos expuestos, baranda de seguridad, escalera con peldaños anchos y acabado no tóxico. Fabricante en Santiago.",
  keywords: ["camarotes para ninos","literas ninos chile","camarote metalico ninos","literas metalicas niños","camarote infantil metalico","literas ninos santiago","camarote seguro para ninos","litera ninos precio chile","fabricante camarotes ninos","camarote ninos 1 plaza"],
  alternates: { canonical: "https://rinon.cl/camarotes-ninos" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

const faq = [
  { q: "¿A partir de qué edad es seguro el nivel superior de un camarote?", a: "La mayoría de los fabricantes y pediatras recomiendan que los niños menores de 6 años no duerman en el nivel superior. Entre 6 y 12 años, con baranda de seguridad correcta y que el niño pueda bajar solo sin ayuda. Mayores de 12 años sin restricción." },
  { q: "¿Qué medida de camarote conviene para niños?", a: "La medida estándar de 1 plaza (90 × 190 cm) es adecuada hasta los 10–12 años. Para adolescentes y menores de talla mayor, recomendamos 1,5 plazas (120 × 190 cm) para mayor comodidad." },
  { q: "¿La pintura del camarote es segura para niños?", a: "La pintura electrostática al horno que usamos es la misma que se usa en electrodomésticos y muebles hospitalarios. No contiene plomo ni componentes tóxicos. Una vez curada al horno, no desprende vapores ni partículas en condiciones normales de uso." },
  { q: "¿Puedo separar el camarote en dos camas individuales?", a: "Sí. Nuestros camarotes están diseñados para separarse en dos camas individuales cuando los niños crezcan o ya no compartan cuarto. El sistema de tornillos permite armar y desarmar sin herramientas especiales." },
];

export default function CamarotesNinosPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/camarotes-metalicos" className="hover:text-gray-600">Camarotes Metálicos</Link><span>/</span>
          <span className="text-gray-700 font-medium">Para Niños</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante directo · Seguro · Sin tornillos expuestos</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Camarotes Metálicos para Niños</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">Fabricamos camarotes metálicos seguros para niños y adolescentes. Estructura sin filos, sin tornillos expuestos, baranda lateral de 30 cm en el nivel superior y escalera con peldaños anchos. Pintura electrostática al horno sin componentes tóxicos.</p>
                    <div className="my-6 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/camarote-petalo-habitacion-nina.jpg" alt="Camarote pétalo metálico negro con madera en habitación de niña" className="w-full object-cover" loading="lazy" />
          </div>
<a href={wa("Hola, necesito cotizar camarote para niños. Edad: [AÑOS]. Medida: [1 PLAZA / 1,5 PLAZAS]. Color: [DATO]. ¿Con escritorio o cajón abajo?")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar camarote para niños</a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Características de seguridad para niños</h2>
          <div className="space-y-3">
            {[
              { t: "Baranda lateral de 30 cm", d: "El nivel superior tiene baranda en los cuatro lados excepto el acceso. Evita caídas durante el sueño." },
              { t: "Sin tornillos expuestos", d: "Todos los tornillos embebidos o con tapa de plástico. Sin bordes ni puntas que puedan causar cortes." },
              { t: "Escalera con peldaños anchos", d: "Peldaños de 20 cm de ancho, más seguros que los simples travesaños de tubo redondo." },
              { t: "Pintura sin tóxicos", d: "Electrostática al horno. Sin plomo, sin disolventes. Aprobada para uso en mobiliario hospitalario." },
              { t: "Separable en camas individuales", d: "Cuando el niño crezca o si ya no comparten cuarto, el camarote se separa en dos camas independientes." },
            ].map((item) => (
              <div key={item.t} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.t}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{item.d}</p>
                </div>
              </div>
            ))}
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
            { href: "/camarotes-metalicos", label: "Ver todos los modelos", desc: "Catálogo completo" },
            { href: "/camarote-con-escritorio", label: "Camarote con Escritorio", desc: "Estudios para niños y adolescentes" },
            { href: "/camarotes-adultos", label: "Para Adultos", desc: "Mayor capacidad de carga" },
            { href: "/litera-metalica", label: "Literas Metálicas", desc: "Todos los modelos y medidas" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza el camarote para tus hijos</h2>
          <p className="text-gray-400 text-sm mb-5">Edad, medida, color y si necesitas escritorio o cajón abajo. Respondemos el mismo día.</p>
          <a href={wa("Hola, necesito camarote para niños. Edad: [AÑOS]. Medida: [DATO]. Color: [DATO]. Extras: [ESCRITORIO / CAJÓN / NINGUNO].")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">Cotizar por WhatsApp</a>
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
