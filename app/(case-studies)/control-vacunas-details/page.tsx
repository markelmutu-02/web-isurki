import Details1 from "@/components/case-studies/VacunasDetails";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Control de vacunas || Isurki",
  description:
    "Control de temperatura en almacenamiento refrigerado de medicamentos y vacunas para Osakidetza.",
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
