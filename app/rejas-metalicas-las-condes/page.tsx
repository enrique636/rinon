import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Reja Metálica Las Condes — Fabricante con Instalación | Rinon.cl",
  description: "Rejas metálicas a medida en Las Condes. Frontis residencial, condominios y comercios. Fabricante directo con instalación incluida. Diseños premium disponibles. Cotiza hoy.",
  keywords: ["reja metalica las condes", "rejas metalicas las condes", "reja tubular las condes", "reja frontis las condes", "fabrica rejas las condes", "portones las condes", "reja metalica vitacura", "reja metalica lo barnechea", "rejas premium santiago oriente"],
  alternates: { canonical: "https://rinon.cl/rejas-metalicas-las-condes" },
};

const wa = (msg: string) => `https://wa.me/${SITE_CONFIG.whatsapp.numero}?text=${encodeURIComponent(msg)}`;

export default function RejasMetalicasLasCondesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Inicio</Link><span>/</span>
          <Link href="/rejas-metalicas" className="hover:text-gray-600">Rejas Metálicas</Link><span>/</span>
          <span className="text-gray-700 font-medium">Las Condes</span>
        </nav>

        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Fabricante · Instalación incluida · Las Condes y Oriente</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rejas Metálicas en Las Condes — Fabricante Directo</h1>
          <p className="text-gray-500 text-lg max-w-2xl mb-6 leading-relaxed">
            Fabricamos rejas metálicas a medida e instalamos en Las Condes, Vitacura y Lo Barnechea. Reja tubular de frontis, cierres de condominio y portones. Diseños con mayor detalle disponibles para propiedades premium.
          </p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Las Condes. Las medidas son: [METROS] ml x [ALTURA] m.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar en Las Condes
          </a>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lo más pedido en Las Condes y sectores oriente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { t: "Reja de frontis para casa", d: "Para casas en Las Condes, El Golf, Apoquindo y sectores residenciales premium. Tubo cuadrado de 1\" o 1½\", barrotes verticales con mayor separación y diseño más limpio." },
              { t: "Cerco de condominio", d: "Cierres perimetrales para condominios y urbanizaciones cerradas en Las Condes, Vitacura y Lo Barnechea." },
              { t: "Portón vehicular con automatización", d: "Portón corredizo motorizado para hogares con mayor frecuencia de uso. La automatización se cotiza al cotizar el portón." },
              { t: "Reja con diseño personalizado", d: "Para propiedades que buscan un frontis distintivo — diseños con elementos horizontales, combinaciones de tubo redondo/cuadrado u otras variantes." },
            ].map((item) => (
              <div key={item.t} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.t}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Comunas del sector oriente que atendemos</h2>
          <div className="flex flex-wrap gap-2">
            {["Las Condes","Vitacura","Lo Barnechea","La Reina","Peñalolén","Providencia","Ñuñoa","Macul"].map((c) => (
              <span key={c} className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{c}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { href: "/reja-metalica-santiago", label: "Rejas en toda la RM", desc: "Todas las comunas" },
            { href: "/rejas-metalicas-precio", label: "Factores de precio", desc: "Por qué el precio varía" },
            { href: "/cercos-perimetrales-santiago", label: "Cercos perimetrales", desc: "Cierre completo del predio" },
            { href: "/portones-industriales", label: "Portones", desc: "Accesos vehiculares" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-all">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{l.label} →</h3>
              <p className="text-gray-500 text-xs">{l.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Cotiza tu reja en Las Condes hoy</h2>
          <p className="text-gray-400 text-sm mb-5">Metros, altura, tipo. Si tienes referencia de estilo o foto, compártela — cotizamos el mismo día.</p>
          <a href={wa("Hola, necesito cotizar una reja metálica en Las Condes / sector oriente. Medidas: [METROS] ml x [ALTURA] m. Uso: [FRONTIS/CONDOMINIO/OTRO].")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
