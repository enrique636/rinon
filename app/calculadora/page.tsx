"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

const MODELOS = [
  {
    slug: "camarote-titanic",
    nombre: "Camarote Titanic",
    personas: 2,
    anchoMin: 90,
    largoMin: 195,
    altoMin: 160,
    descripcion: "El estándar más popular. Dos plazas simples, una sobre la otra.",
    ideal: "2 hijos o 2 personas adultas",
  },
  {
    slug: "camarote-nido",
    nombre: "Camarote Nido (3-en-1)",
    personas: 3,
    anchoMin: 100,
    largoMin: 200,
    altoMin: 165,
    descripcion: "Tres camas en la huella de una sola. La tercera se desliza hacia afuera.",
    ideal: "3 personas con espacio limitado",
  },
  {
    slug: "camarote-triple",
    nombre: "Camarote Triple",
    personas: 3,
    anchoMin: 100,
    largoMin: 200,
    altoMin: 185,
    descripcion: "Tres niveles fijos. Requiere techo alto. Máxima capacidad.",
    ideal: "3 personas con techo alto",
  },
  {
    slug: "camarote-con-escritorio",
    nombre: "Camarote con Escritorio",
    personas: 1,
    anchoMin: 100,
    largoMin: 200,
    altoMin: 165,
    descripcion: "Cama arriba y escritorio abajo. Ideal para estudiantes.",
    ideal: "1 persona que estudia o trabaja desde casa",
  },
  {
    slug: "cama-alta",
    nombre: "Cama Alta",
    personas: 1,
    anchoMin: 90,
    largoMin: 195,
    altoMin: 155,
    descripcion: "Una sola cama elevada. Libera espacio bajo la cama para lo que quieras.",
    ideal: "1 persona con pieza pequeña",
  },
];

type Resultado = {
  nombre: string;
  slug: string;
  descripcion: string;
  ideal: string;
  ok: boolean;
  razon?: string;
};

export default function CalculadoraPage() {
  const [ancho, setAncho] = useState("");
  const [largo, setLargo] = useState("");
  const [alto, setAlto] = useState("");
  const [personas, setPersonas] = useState("");
  const [calculado, setCalculado] = useState(false);
  const [resultados, setResultados] = useState<Resultado[]>([]);

  function calcular() {
    const a = parseInt(ancho);
    const l = parseInt(largo);
    const h = parseInt(alto);
    const p = parseInt(personas);

    if (!a || !l || !h || !p) return;

    const res: Resultado[] = MODELOS.map(m => {
      const espacioSuelo = a >= m.anchoMin + 80 && l >= m.largoMin + 70;
      const altoSuficiente = h >= m.altoMin;
      const personasSuficientes = p <= m.personas;

      let razon = "";
      if (!espacioSuelo) razon = `Necesitas al menos ${m.anchoMin + 80} cm de ancho o ${m.largoMin + 70} cm de largo disponible`;
      else if (!altoSuficiente) razon = `El techo está a ${h} cm. Necesitas mínimo ${m.altoMin} cm de alto`;
      else if (!personasSuficientes) razon = `Este modelo es para hasta ${m.personas} persona(s), no para ${p}`;

      return {
        nombre: m.nombre,
        slug: m.slug,
        descripcion: m.descripcion,
        ideal: m.ideal,
        ok: espacioSuelo && altoSuficiente && personasSuficientes,
        razon: razon || undefined,
      };
    });

    setResultados(res);
    setCalculado(true);
  }

  const aptos = resultados.filter(r => r.ok);
  const noAptos = resultados.filter(r => !r.ok);

  const waMsg = `Hola, usé la calculadora de camarotes y me salieron estos modelos recomendados para mi pieza: ${aptos.map(r => r.nombre).join(", ")}. Ancho: ${ancho}cm, Largo: ${largo}cm, Alto del techo: ${alto}cm, personas: ${personas}. ¿Puedes darme precios?`;

  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-gray-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Calculadora</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">¿Qué camarote cabe en tu pieza?</h1>
          <p className="text-gray-500">Ingresa las medidas de tu habitación y te decimos qué modelos son posibles. Gratis, sin registro.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Ancho de la pieza (cm)</label>
              <input
                type="number"
                value={ancho}
                onChange={e => setAncho(e.target.value)}
                placeholder="Ej: 280"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Largo de la pieza (cm)</label>
              <input
                type="number"
                value={largo}
                onChange={e => setLargo(e.target.value)}
                placeholder="Ej: 340"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Alto del techo (cm)</label>
              <input
                type="number"
                value={alto}
                onChange={e => setAlto(e.target.value)}
                placeholder="Ej: 240"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">¿Cuántas personas dormirán?</label>
              <select
                value={personas}
                onChange={e => setPersonas(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 bg-white"
              >
                <option value="">Seleccionar</option>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
              </select>
            </div>
          </div>
          <button
            onClick={calcular}
            disabled={!ancho || !largo || !alto || !personas}
            className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Calcular modelos posibles
          </button>
          <p className="text-xs text-gray-400 text-center mt-3">Los resultados son orientativos. El espacio necesario incluye margen de circulación.</p>
        </div>

        {calculado && (
          <div className="space-y-4">
            {aptos.length > 0 ? (
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {aptos.length === 1 ? "1 modelo que cabe en tu pieza" : `${aptos.length} modelos que caben en tu pieza`}
                </h2>
                <div className="space-y-3">
                  {aptos.map(r => (
                    <div key={r.slug} className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900">{r.nombre}</p>
                          <p className="text-gray-600 text-sm mt-0.5">{r.descripcion}</p>
                          <p className="text-green-700 text-xs mt-1">✓ Ideal para: {r.ideal}</p>
                        </div>
                        <Link href={`/${r.slug}`} className="text-xs border border-green-300 text-green-700 rounded-lg px-3 py-1.5 hover:bg-green-100 transition-colors whitespace-nowrap">
                          Ver más
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4">
                  <p className="text-sm text-gray-700 mb-3 font-medium">¿Te interesa uno de estos modelos? Pide la cotización con las medidas ya ingresadas:</p>
                  <a
                    href={getWhatsAppUrl(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Pedir cotización por WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
                <p className="text-amber-800 font-semibold mb-2">Ningún modelo estándar cabe con las medidas ingresadas</p>
                <p className="text-amber-700 text-sm mb-4">Podemos fabricar a medida. Cuéntanos las dimensiones exactas de tu pieza y vemos qué podemos hacer.</p>
                <a
                  href={getWhatsAppUrl(`Hola, tengo una pieza de ${ancho}cm de ancho, ${largo}cm de largo y ${alto}cm de alto. Necesito un camarote para ${personas} persona(s) y los modelos estándar no caben. ¿Pueden hacer algo a medida?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-2.5 px-6 rounded-xl text-sm transition-colors"
                >
                  Consultar camarote a medida
                </a>
              </div>
            )}

            {noAptos.length > 0 && aptos.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-3">Modelos que no aplican para tu pieza:</h3>
                <div className="space-y-2">
                  {noAptos.map(r => (
                    <div key={r.slug} className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-700">{r.nombre}</p>
                        {r.razon && <p className="text-xs text-gray-400 mt-0.5">{r.razon}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {!calculado && (
          <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-3xl mb-3">📐</p>
            <p className="text-gray-500 text-sm">Ingresa las medidas de tu pieza para ver qué modelos son posibles</p>
          </div>
        )}

        <div className="mt-10 text-sm text-gray-400 space-y-1">
          <p className="font-medium text-gray-600 mb-2">Notas sobre el cálculo</p>
          <p>• Las medidas de los modelos son aproximadas. El largo estándar es ~200-210 cm y el ancho varía entre 90-110 cm.</p>
          <p>• Se reserva 70-80 cm de margen de circulación alrededor del camarote y espacio para la escalera.</p>
          <p>• El alto mínimo del techo depende del modelo: camarote nido y estándar ~165 cm; triple ~185 cm.</p>
          <p>• Para medidas exactas del modelo que te interesa, consúltanos por WhatsApp.</p>
        </div>
      </div>
    </div>
  );
}
