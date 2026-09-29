import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/noticias/que-es-un-datalogger-iot",
        destination: "/guias/que-es-un-datalogger-iot",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
