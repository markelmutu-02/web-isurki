import Benefits from "@/components/common/Caracteristicas";
import About from "@/components/common/AboutIsurki";
import React from "react";
import History from "@/components/otherPages/IsurkiHistory";
import Features from "@/components/common/IsurkiFeatures";
import Cta from "@/components/common/Cta2";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Sobre nosotros - Isurki",
  description:
    "Descubre quiénes somos y nuestra historia",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-4">
        <div className="tf-container">
          <div className="page-title-content">
            <h2 className="title-page-title">Conócenos</h2>
            <div className="sub-title body-2">
              Descubra nuestra misión de empoderar a los clientes con soluciones expertas para una mayor confianza,
              <br />
              crecimiento y éxito sostenibles.
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
