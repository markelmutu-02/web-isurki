import Details1 from "@/components/case-studies/MareografosDetailsEN";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tide gauges || Isurki",
  description:
    "Recording tidal height and water surface agitation in estuaries and seaports for AZTI.",
  alternates: {
    canonical: "https://isurki.com/en/tide-gauges",
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
