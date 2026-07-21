#!/usr/bin/env python3
"""Add photos to camarote-con-escritorio-* pages that are still missing them."""
import re
import os

APP_DIR = "/Users/enriquekraiser/rinon.cl/app"

PAGES = {
    "camarote-con-escritorio-departamento": ("camarote-escritorio-full-dormitorio-completo.jpg", "Camarote con escritorio en departamento pequeño de Santiago"),
    "camarote-con-escritorio-dos-hermanos": ("camarote-escritorio-full-gamer.jpg", "Camarote con escritorio para dos hermanos compartiendo pieza"),
    "camarote-con-escritorio-estacion-central": ("camarote-escritorio-economico-dormitorio.jpg", "Camarote con escritorio con despacho a Estación Central Santiago"),
    "camarote-con-escritorio-habitacion-pequena": ("camarote-escritorio-economico-pieza-pequena.jpg", "Camarote con escritorio en habitación pequeña — solución de espacio"),
    "camarote-con-escritorio-la-florida": ("camarote-escritorio-economico-juvenil.jpg", "Camarote con escritorio con despacho a La Florida Santiago"),
    "camarote-con-escritorio-las-condes": ("camarote-escritorio-full-nordico.jpg", "Camarote con escritorio con despacho a Las Condes Santiago"),
    "camarote-con-escritorio-maipu": ("camarote-escritorio-full-productividad.jpg", "Camarote con escritorio con despacho a Maipú Santiago"),
    "camarote-con-escritorio-nino": ("camarote-escritorio-economico-gamer.jpg", "Camarote con escritorio para niño — cama arriba escritorio abajo"),
    "camarote-con-escritorio-nunoa": ("camarote-escritorio-full-universitario.jpg", "Camarote con escritorio con despacho a Ñuñoa Santiago"),
    "camarote-con-escritorio-penalolen": ("camarote-escritorio-economico-universitario.jpg", "Camarote con escritorio con despacho a Peñalolén Santiago"),
    "camarote-con-escritorio-pieza-arrendada": ("camarote-con-escritorio-economico-real.jpg", "Camarote con escritorio para pieza arrendada — pago contra entrega"),
    "camarote-con-escritorio-providencia": ("camarote-escritorio-full-home-office.jpg", "Camarote con escritorio con despacho a Providencia Santiago"),
    "camarote-con-escritorio-pudahuel": ("camarote-escritorio-economico-estudio.jpg", "Camarote con escritorio con despacho a Pudahuel Santiago"),
    "camarote-con-escritorio-puente-alto": ("camarote-escritorio-economico-dormitorio.jpg", "Camarote con escritorio con despacho a Puente Alto Santiago"),
    "camarote-con-escritorio-quilicura": ("camarote-escritorio-full-juvenil.jpg", "Camarote con escritorio con despacho a Quilicura Santiago"),
    "camarote-con-escritorio-san-bernardo": ("camarote-con-escritorio-full-real.jpg", "Camarote con escritorio con despacho a San Bernardo"),
    "camarote-con-escritorio-santiago": ("camarote-escritorio-full-home-office.jpg", "Camarote con escritorio en Santiago — pago contra entrega"),
}

PHOTO_DIV = '''
          <div className="my-5 rounded-2xl overflow-hidden shadow-sm">
            <img src="/images/camarotes/{photo}" alt="{alt}" className="w-full object-cover" loading="lazy" />
          </div>
'''

updated = 0
errors = 0

for slug, (photo, alt) in PAGES.items():
    path = os.path.join(APP_DIR, slug, "page.tsx")
    if not os.path.exists(path):
        print(f"SKIP (not found): {slug}")
        continue

    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    if "images/camarotes" in content:
        print(f"SKIP (already has photo): {slug}")
        continue

    # Find first bg-[#25D366] occurrence
    idx = content.find("bg-[#25D366]")
    if idx == -1:
        print(f"ERROR (no CTA found): {slug}")
        errors += 1
        continue

    # Walk backward up to 600 chars to find the nearest <a opening
    search_start = max(0, idx - 600)
    chunk = content[search_start:idx]
    a_pos = chunk.rfind("<a ")
    if a_pos == -1:
        print(f"ERROR (no <a tag found): {slug}")
        errors += 1
        continue

    insert_pos = search_start + a_pos
    photo_block = PHOTO_DIV.format(photo=photo, alt=alt)
    new_content = content[:insert_pos] + photo_block + content[insert_pos:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)

    print(f"OK: {slug} → {photo}")
    updated += 1

print(f"\nDone: {updated} updated, {errors} errors")
