import Link from "next/link";

import SensoricaDetails from "@/components/services/SensoricaDetails";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "SENSÓRICA - Gama completa",
  description:
    "Amplia gama de sensores y actuadores para cubrir cualquier necesidad del mercado",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="page-title-content">
            
            <h2 className="title-page-title">Sensórica</h2>
            <div className="sub-title body-2">
              Gama de sensores e instrumentación totalmente compatibles con nuestro ecosistema IIoT
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <SensoricaDetails />
      </div>
    </>
  );
}
