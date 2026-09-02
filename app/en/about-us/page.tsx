import Benefits from "@/components/common/CaracteristicasEN";
import About from "@/components/common/AboutIsurkiEN";
import React from "react";
import History from "@/components/otherPages/IsurkiHistoryEN";
import Features from "@/components/common/IsurkiFeaturesEN";
import Cta from "@/components/common/Cta2EN";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About us - Isurki",
  description: "Discover who we are and our history",
  alternates: {
    canonical: "https://isurki.com/en/about-us",
    languages: {
      es: "https://isurki.com/about-us",
      en: "https://isurki.com/en/about-us",
    },
  },
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-4">
        <div className="tf-container">
          <div className="page-title-content">
            <h2 className="title-page-title">Get to know us</h2>
            <div className="sub-title body-2">
              Discover our mission to empower our clients with expert solutions for greater confidence,
              <br />
              sustainable growth and success.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Benefits />
        <About />
        <History />
        <Features hasBorder parentClass="section-why-choose h-2 page-about" />
        <Cta />
      </div>
    </>
  );
}
