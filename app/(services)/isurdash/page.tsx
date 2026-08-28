import DetailsIsurdash from "@/components/services/DetailsIsurdash";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "ISURDASH - El dashboard definitivo",
  description:
    "Dashboard de visualización y configuración para el datalogger IsurLog",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="page-title-content">
            <h2 className="title-page-title">IsurDash</h2>
            <div className="sub-title body-2">
              La plataforma web de Isurki que controla por completo el ecosistema de Isurki
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <DetailsIsurdash />
      </div>
    </>
  );
}
