import Details1 from "@/components/case-studies/VacunasDetailsEN";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Vaccine temperature control || Isurki",
  description:
    "Temperature control in refrigerated storage of medicines and vaccines for Osakidetza.",
  alternates: {
    canonical: "https://isurki.com/en/vaccine-temperature-control",
    languages: {
      es: "https://isurki.com/control-vacunas-details",
      en: "https://isurki.com/en/vaccine-temperature-control",
    },
  },
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-16">

      </div>
      <div className="main-content">
        <Details1 />
      </div>
    </>
  );
}
