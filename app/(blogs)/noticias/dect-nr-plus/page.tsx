import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DECT NR+ || Isurki",
  description:
    "IsurLog incorpora DECT NR+, el estándar 5G no celular que permite montar una red privada real sin operadora ni contrato.",
};

export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">
                  DECT NR+: la tecnología 5G no celular para tener una red
                  privada real, sin operadoras ni contratos
                </h2>
                <div className="sub-title body-2">
                  Producto &middot; 10 de junio de 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="blog-content blog-details-content mb-50">
                <div className="desc-blog">
                  <p className="body-2">
                    La última versión 2026 de la gama de datalogger IoT
                    IsurLog incluye en su ejecución básica la opción de
                    operar en 5G sin operadora ni contrato, basándose en el
                    estándar DECT NR+, ofreciendo las siguientes ventajas
                    disruptivas:
                  </p>
                  <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                    <li className="body-2">Sin costo, banda libre.</li>
                    <li className="body-2">Cobertura global.</li>
                    <li className="body-2">
                      Redes mesh en topología mallada descentralizada.
                    </li>
                    <li className="body-2">
                      Densidad y escalabilidad masivas.
                    </li>
                    <li className="body-2">
                      Fiabilidad de grado Telco (99.999%).
                    </li>
                  </ul>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/dect-nr-plus.jpg"
                    alt="Módulo Nordic Semiconductor nRF9151 con DECT NR+ integrado en IsurLog"
                    className="lazyload"
                    width={1200}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
