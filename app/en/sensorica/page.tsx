import SensoricaDetailsEN from "@/components/services/SensoricaDetailsEN";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sensórica - Industrial IoT sensors || Isurki",
  description:
    "Industrial IoT sensors for flow, pressure, temperature, pH and water quality, fully compatible with Isurki's IsurLog ecosystem.",
  alternates: {
    canonical: "https://isurki.com/en/sensorica",
    languages: {
      es: "https://isurki.com/sensorica",
      en: "https://isurki.com/en/sensorica",
    },
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sensórica",
  description:
    "Range of industrial IoT sensors and actuators for flow, pressure, temperature, pH and water quality, compatible with the IsurLog ecosystem.",
  image: "https://isurki.com/image/section/img-details-service-3.jpg",
  url: "https://isurki.com/en/sensorica",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="page-title-content">

            <h2 className="title-page-title">Sensórica</h2>
            <div className="sub-title body-2">
              Range of sensors and instrumentation fully compatible with our IIoT ecosystem
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <SensoricaDetailsEN />
      </div>
    </>
  );
}
