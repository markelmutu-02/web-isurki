import Details1 from "@/components/case-studies/ACSDetailsEN";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Legionella control in a DHW network || Isurki",
  description:
    "Legionella control in the domestic hot water (DHW) networks of Basque public health service (Osakidetza) hospitals.",
  alternates: {
    canonical: "https://isurki.com/en/legionella-control-acs",
    languages: {
      es: "https://isurki.com/control-ACS-details",
      en: "https://isurki.com/en/legionella-control-acs",
    },
  },
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-16">
        <div className="tf-container">

        </div>
      </div>
      <div className="main-content">
        <Details1 />
      </div>
    </>
  );
}
