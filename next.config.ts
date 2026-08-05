import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/camarote-con-escritorio-metalico",
        destination: "/camarote-con-escritorio",
        permanent: true,
      },
      {
        source: "/camarote-con-escritorio-premium",
        destination: "/camarote-con-escritorio-full",
        permanent: true,
      },
      {
        source: "/cama-alta-2-plazas-con-escritorio",
        destination: "/camarote-dos-plazas-abajo",
        permanent: true,
      },
      {
        source: "/cama-alta-con-escritorio",
        destination: "/cama-alta",
        permanent: true,
      },
      {
        source: "/camarote-con-escritorio-a-medida",
        destination: "/camarote-con-escritorio",
        permanent: true,
      },
      {
        source: "/camarotes-temporeros",
        destination: "/camarotes-agricolas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
