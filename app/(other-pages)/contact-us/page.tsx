import Link from "next/link";

import Contact from "@/components/otherPages/Contact";
import Locations from "@/components/otherPages/Locations";
import Map from "@/components/otherPages/Map";
import React from "react";
import Breadcumb from "@/components/common/Breadcumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contacto || Isurki",
  description:
    "Ponte en contacto con Isurki para resolver tus dudas sobre nuestras soluciones de instrumentación y control.",
  alternates: {
    canonical: "https://isurki.com/contact-us",
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
            {/*<Breadcumb pageName="Contact Us" />*/}
            <h2 className="title-page-title">Contacto</h2>
            <div className="sub-title body-2">
              Cuéntanos tu proyecto y te ayudamos a encontrar la solución de
              instrumentación
              <br />
              y monitorización que mejor se adapte a tu industria.
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
