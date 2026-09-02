import DetailsIsurdashEN from "@/components/services/DetailsIsurdashEN";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "IsurDash - Remote monitoring IoT platform || Isurki",
  description:
    "IsurDash is Isurki's remote IoT data visualization and management platform: dashboards, history and alarms for the IsurLog datalogger.",
  alternates: {
    canonical: "https://isurki.com/en/isurdash",
    languages: {
      es: "https://isurki.com/isurdash",
      en: "https://isurki.com/en/isurdash",
    },
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "IsurDash",
  description:
    "Isurki's remote IoT data visualization and management platform: dashboards, history and alarms for the IsurLog datalogger.",
  image: "https://isurki.com/image/section/img-details-service-2.jpg",
  url: "https://isurki.com/en/isurdash",
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
              Isurki's web platform that fully controls the Isurki ecosystem
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <DetailsIsurdashEN />
      </div>
    </>
  );
}
