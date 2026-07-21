"use client";
import { useState } from "react";

interface Props {
  images: { src: string; alt: string }[];
}

export function ProductGallery({ images }: Props) {
  const [idx, setIdx] = useState(0);
  if (!images.length) return null;

  const current = images[idx];
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div>
      {/* Imagen principal */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-3 group">
        <img
          src={current.src}
          alt={current.alt}
          className="w-full h-full object-cover"
          loading={idx === 0 ? "eager" : "lazy"}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Anterior"
            >‹</button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Siguiente"
            >›</button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.slice(0, 8).map((img, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${i === idx ? "border-gray-900" : "border-transparent"}`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
