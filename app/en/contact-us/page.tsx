import Link from "next/link";

import Contact from "@/components/otherPages/ContactEN";
import Locations from "@/components/otherPages/LocationsEN";
import Map from "@/components/otherPages/Map";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact || Isurki",
  description:
    "Get in touch with Isurki to discuss your instrumentation and control needs.",
  alternates: {
    canonical: "https://isurki.com/en/contact-us",
    languages: {
      es: "https://isurki.com/contact-us",
      en: "https://isurki.com/en/contact-us",
    },
  },
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-13">
        <div className="tf-container position-relative">
          <div className="page-title-content">
            <h2 className="title-page-title">Contact</h2>
            <div className="sub-title body-2">
              Tell us about your project and we'll help you find the
              instrumentation and monitoring solution
              <br />
              that best fits your industry.
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Contact />
        <Map />
        <Locations />
      </div>
    </>
  );
}
