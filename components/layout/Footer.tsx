import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Marca */}
        <div>
          <p className="text-white font-bold text-lg mb-2">
            Camarotes con Escritorio
          </p>
          <p className="text-sm leading-relaxed">
            Fabricación chilena de camarotes con escritorio para dormitorios juveniles, universitarios, gamer y home office.
          </p>
          <p className="text-sm mt-3">
            Santiago, Región Metropolitana, Chile
          </p>
        </div>

        {/* Columna 2: Links */}
        <div>
          <p className="text-white font-semibold text-sm mb-3">Productos</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/camarote-con-escritorio-metalico" className="hover:text-white transition-colors">Camarote Metálico</Link></li>
            <li><Link href="/camarote-con-escritorio-premium" className="hover:text-white transition-colors">Camarote Premium</Link></li>
            <li><Link href="/cama-alta-con-escritorio" className="hover:text-white transition-colors">Cama Alta con Escritorio</Link></li>
            <li><Link href="/cama-alta-2-plazas-con-escritorio" className="hover:text-white transition-colors">Cama Alta 2 Plazas</Link></li>
            <li><Link href="/camarote-con-escritorio-a-medida" className="hover:text-white transition-colors">A Medida</Link></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <p className="text-white font-semibold text-sm mb-3">Contacto</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="text-green-400">●</span>
                WhatsApp
              </a>
            </li>
            <li>
              <Link href="/cotizar" className="hover:text-white transition-colors">
                Solicitar Cotización
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {new Date().getFullYear()} Camarotes con Escritorio Chile. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/camarotes-con-escritorio" className="hover:text-white transition-colors">
              Camarotes con Escritorio
            </Link>
            <Link href="/cama-alta-con-escritorio" className="hover:text-white transition-colors">
              Camas Altas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
