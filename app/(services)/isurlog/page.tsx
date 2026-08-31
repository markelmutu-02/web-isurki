import Details1 from "@/components/services/Details1";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ISURLOG - Datalogger de medición de caudal y presión || Isurki",
  description:
    "IsurLog: datalogger industrial de ultra bajo consumo para la medición remota de caudal, presión, nivel y temperatura, con comunicaciones NB-IoT, LoRa, DECT NR+ y satelitales.",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="page-title-content">
            
            <h2 className="title-page-title">IsurLog</h2>
            <div className="sub-title body-2">
              Datalogger IIoT de última generación para la medición de caudal, presión, nivel y temperatura, con el software más potente del mercado
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <Details1 />
      </div>
    </>
  );
}
