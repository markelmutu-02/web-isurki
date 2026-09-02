import Details1EN from "@/components/services/Details1EN";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ISURLOG - Ultra-efficient battery-powered IoT datalogger || Isurki",
  description:
    "IsurLog: ultra-low-power battery-operated industrial IoT datalogger. Compatible with flow, pressure, level and temperature sensors via 4-20 mA analog and Modbus inputs, with NB-IoT, LoRa, DECT NR+ and satellite communications.",
  alternates: {
    canonical: "https://isurki.com/en/isurlog",
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
    "Ultra-low-power battery-operated industrial IoT datalogger for remote measurement of flow, pressure, level and temperature, with NB-IoT, LoRa, DECT NR+ and satellite communications.",
  image: "https://isurki.com/image/section/img-details-service-1.jpg",
  url: "https://isurki.com/en/isurlog",
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

            <h2 className="title-page-title">IsurLog</h2>
            <div className="sub-title body-2">
              Next-generation IIoT datalogger with the most powerful software on the market
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Details1EN />
      </div>
    </>
  );
}
