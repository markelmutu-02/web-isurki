import Link from "next/link";

import SensoricaDetails from "@/components/services/SensoricaDetails";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sensórica - Sensores industriales IoT || Isurki",
  description:
    "Sensores industriales IoT para caudal, presión, temperatura, pH y calidad del agua, totalmente compatibles con el ecosistema IsurLog de Isurki.",
  alternates: {
    canonical: "https://isurki.com/sensorica",
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
    "Gama de sensores y actuadores industriales IoT para caudal, presión, temperatura, pH y calidad del agua, compatibles con el ecosistema IsurLog.",
  image: "https://isurki.com/image/section/img-details-service-3.jpg",
  url: "https://isurki.com/sensorica",
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
              Gama de sensores e instrumentación totalmente compatibles con nuestro ecosistema IIoT
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <SensoricaDetails />
      </div>
    </>
  );
}
