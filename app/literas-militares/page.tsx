import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Literas Militares — Camarotes para Fuerzas de Orden | Chile",
  description: "Literas militares en acero estructural para cuarteles, regimientos y fuerzas de orden. Ver nuestra página completa de camarotes militares con especificaciones técnicas.",
  alternates: { canonical: "https://rinon.cl/camarotes-militares" },
  robots: { index: false },
};

export default function LiterasMilitaresPage() {
  redirect("/camarotes-militares");
}
