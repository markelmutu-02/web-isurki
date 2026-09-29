import Details1 from "@/components/services/Details1";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ISURLOG - Datalogger IoT a pilas ultraeficiente || Isurki",
  description:
    "IsurLog: datalogger industrial IoT a pilas para medir caudal, presión, nivel y temperatura, con comunicaciones NB-IoT, LoRa, satélite y DECT NR+.",
  alternates: {
    canonical: "https://isurki.com/isurlog",
    languages: {
      es: "https://isurki.com/isurlog",
      en: "https://isurki.com/en/isurlog",
    },
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IsurLog",
  description:
    "Datalogger industrial IoT a pilas de ultra bajo consumo para la medición remota de caudal, presión, nivel y temperatura, con comunicaciones NB-IoT, LoRa, DECT NR+ y satelitales.",
  image: "https://isurki.com/image/section/img-details-service-1.jpg",
  url: "https://isurki.com/isurlog",
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
            
            <h1 className="title-page-title">IsurLog</h1>
            <div className="sub-title body-2">
              Datalogger IIoT de última generación con el software más potente del mercado
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Details1 />
      </div>
    </>
  );
}
