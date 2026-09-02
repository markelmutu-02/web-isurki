import Details1 from "@/components/case-studies/RiegoDetailsEN";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Smart irrigation for livestock fields || Isurki",
  description:
    "Improving the efficiency and use of pressurized irrigation networks for the Solans-Castells farming operation.",
  alternates: {
    canonical: "https://isurki.com/en/smart-irrigation",
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
