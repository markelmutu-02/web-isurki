import Blogs3 from "@/components/blogs/Blogs3";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Noticias || Isurki",
  description:
    "Últimas noticias y eventos de Isurki",
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">Noticias Isurki</h2>
                <div className="sub-title body-2">
                  Sección en la que podrá ver ejemplos de casos reales en los que Isurki ha intervenido, 
                  <br/>
                  los proyectos más destacables de Isurki y casos de éxito
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2">
        <Blogs3 />
      </div>
    </>
  );
}
