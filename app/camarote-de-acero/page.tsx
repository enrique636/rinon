import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Camarote de Acero — Literas Metálicas Estructurales | Chile",
  description: "Camarotes fabricados en acero estructural con soldadura MIG y pintura electrostática al horno. Ver catálogo completo.",
  alternates: { canonical: "https://rinon.cl/camarotes-metalicos" },
  robots: { index: false },
};

export default function CamaroteDeAceroPage() {
  redirect("/camarotes-metalicos");
}
