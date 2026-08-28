import Link from "next/link";

import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Página no encontrada || Isurki",
  description: "La página que buscas no existe o se ha movido.",
};
export default function page() {
  return (
    <>
      <div className="main-content">
        <div className="wg-404">
          <div className="inner-404">
            <div className="tf-container position-relative">
              <div className="row">
                <div className="col-12">
                  <div className="content-404">
                    <div className="text-oops">Vaya</div>
                    <h3>No encontramos esta página</h3>
                    <h6 className="text">
                      La página que buscas no existe o se ha movido. Prueba a
                      volver al inicio.
                    </h6>
                    <Link href={`/`} className="tf-btn bg-white style-1">
                      <span>Volver al inicio</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
