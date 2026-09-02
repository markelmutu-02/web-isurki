import Details1 from "@/components/case-studies/Details1";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Control de temperatura en red ACS || Isurki",
  description:
    "Control de Legionela en las redes ACS de hospitales del Servicio Vasco de Salud (Osakidetza).",
  alternates: {
    canonical: "https://isurki.com/control-ACS-details",
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
