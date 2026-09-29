import GuidesGrid from "@/components/blogs/GuidesGrid";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artículos y guías || Isurki",
  description:
    "Artículos y guías técnicas sobre dataloggers, IoT industrial y conectividad remota.",
  alternates: {
    canonical: "https://isurki.com/guias",
  },
};

export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h1 className="title-page-title">Artículos Isurki</h1>
                <div className="sub-title body-2">
                  Guías técnicas sobre dataloggers, IoT industrial y
                  conectividad remota
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2">
        <GuidesGrid />
      </div>
    </>
  );
}
