import Details1 from "@/components/case-studies/MareografosDetails";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mareógrafos || Isurki",
  description:
    "Registro de la evolución de la altura de marea y agitación del espejo de agua en estuarios y puertos marítimos para AZTI.",
  alternates: {
    canonical: "https://isurki.com/mareografos-details",
    languages: {
      es: "https://isurki.com/mareografos-details",
      en: "https://isurki.com/en/tide-gauges",
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
