import type { Metadata } from "next";
import Link from "next/link";
import { seoPages } from "@/lib/seo";
import { products } from "@/lib/products";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getProductWhatsAppUrl } from "@/lib/config";

export const metadata: Metadata = seoPages.categoriaGeneral;

export default function CamarotesPage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header SEO */}
        <div className="text-center mb-12">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-600">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600">Camarotes con Escritorio</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Camarotes con Escritorio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Todos nuestros modelos de camarotes con escritorio fabricados en Chile.
            Metálicos, premium, camas altas y a medida para Santiago y regiones.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              <div className="bg-gray-100 aspect-[4/3] relative overflow-hidden">
                {product.imgSrc ? (
                  <img src={product.imgSrc} alt={product.imgAlt ?? product.nombre} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-400 text-sm">Foto próximamente</span>
                  </div>
                )}
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h2 className="font-bold text-gray-900 text-lg mb-2">
                  {product.nombre}
                </h2>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {product.descripcion}
                </p>

                {/* Características rápidas */}
                <ul className="text-xs text-gray-500 space-y-1 mb-4">
                  {product.caracteristicas.slice(0, 3).map((c) => (
                    <li key={c} className="flex items-start gap-1.5">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {c}
                    </li>
                  ))}
                </ul>

                {product.medidas && product.medidas !== "A confirmar con fabricante" && (
                  <p className="text-xs text-gray-400 mb-4">Medidas: {product.medidas}</p>
                )}

                <div className="flex flex-col gap-2">
                  <a
                    href={getProductWhatsAppUrl(product.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-xl text-sm transition-colors"
                  >
                    Consultar por WhatsApp
                  </a>
                  <Link
                    href={`/${product.slug}`}
                    className="w-full text-center py-2.5 border border-gray-200 hover:border-gray-400 text-gray-700 font-medium rounded-xl text-sm transition-colors"
                  >
                    Ver ficha completa
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Texto SEO */}
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir un camarote con escritorio?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Un camarote con escritorio integrado es la solución más inteligente para maximizar el espacio en dormitorios pequeños.
            En lugar de tener cama y escritorio ocupando el doble del espacio, el diseño vertical permite tener ambos en un solo mueble.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Son ideales para estudiantes universitarios que necesitan un espacio de estudio en su pieza,
            para gamers que quieren un setup completo sin sacrificar la cama,
            para home office en dormitorios pequeños, y para niños y adolescentes que necesitan estudiar y descansar en el mismo espacio.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
            Fabricación chilena — entrega en Santiago y regiones
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Fabricamos nuestros camarotes con escritorio en Chile con acero de primera calidad.
            Hacemos entregas e instalaciones en Santiago, Región Metropolitana y despacho a regiones.
            Contáctanos por WhatsApp para coordinar tu pedido y consultar disponibilidad.
          </p>
        </div>
      </div>
    </div>
  );
}
