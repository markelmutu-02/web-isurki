import Details1 from "@/components/case-studies/RiegoDetails";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Riego inteligente de campos para ganado || Isurki",
  description:
    "Mejora en la eficiencia y uso de redes de riego a presión para la explotación agropecuaria Solans-Castells.",
  alternates: {
    canonical: "https://isurki.com/control-riego-details",
    languages: {
      es: "https://isurki.com/control-riego-details",
      en: "https://isurki.com/en/smart-irrigation",
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
