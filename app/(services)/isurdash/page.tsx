import DetailsIsurdash from "@/components/services/DetailsIsurdash";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "IsurDash - Plataforma IoT de monitorización remota || Isurki",
  description:
    "IsurDash es la plataforma de visualización y gestión remota de datos IoT de Isurki: dashboards, histórico y alarmas para el datalogger IsurLog.",
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "IsurDash",
  description:
    "Plataforma de visualización y gestión remota de datos IoT de Isurki: dashboards, histórico y alarmas para el datalogger IsurLog.",
  image: "https://isurki.com/image/section/img-details-service-2.jpg",
  url: "https://isurki.com/isurdash",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  brand: {
    "@type": "Brand",
    name: "Isurki",
  },
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="page-title-content">
            <h2 className="title-page-title">IsurDash</h2>
            <div className="sub-title body-2">
              La plataforma web de Isurki que controla por completo el ecosistema de Isurki
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <DetailsIsurdash />
      </div>
    </>
  );
}
