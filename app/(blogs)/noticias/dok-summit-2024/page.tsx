import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOK Summit 2024 || Isurki",
  description:
    "Isurki participa como ponente en el DOK Summit 2024 presentando el proyecto europeo SMARTDROP.",
};

export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">DOK Summit 2024</h2>
                <div className="sub-title body-2">
                  Evento &middot; 26 de noviembre de 2024
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
                    ISURKI, INSTRUMENTACIÓN Y CONTROL ha participado
                    recientemente como ponente en el evento DOK SUMMIT 2024
                    celebrado en el Palacio Euskalduna de Bilbao los pasados
                    días 11 y 12 de noviembre.
                  </p>
                  <p className="body-2">
                    Este evento es una referencia a nivel mundial del sector
                    digital en apoyo para la transición hacia un futuro
                    sostenible.
                  </p>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/tf-post-grid-5.jpg"
                    alt="DOK Summit 2024"
                    className="lazyload"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    Iñaki Mutuberria, CEO de ISURKI, presentó la ponencia
                    titulada &ldquo;Resiliencia de los cultivos de regadío
                    frente al cambio climático&rdquo; basada en el proyecto
                    europeo SMARTDROP, financiado con fondos europeos dentro
                    del programa de ayudas a la innovación para la mejora de
                    la eficiencia de infraestructuras hidráulicas,
                    CircInWater (CIW), para el que ISURKI fue seleccionada en
                    2023, en colaboración con la empresa húngara SEACON
                    EUROPE, junto con otras once empresas europeas.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">Qué aporta SMARTDROP</h5>
                    <p className="body-2">
                      SMARTDROP es una solución digital en la nube para
                      optimizar la eficiencia de las infraestructuras de
                      riego del sector agrícola, aumentar la productividad y
                      su resiliencia frente al cambio climático, con las
                      siguientes novedades disruptivas:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>Vanguardia tecnológica:</strong> basada en
                        Energy Harvesting, IoT y Data Analysis.
                      </li>
                      <li className="body-2">
                        <strong>Modular y flexible:</strong> compuesto por
                        diferentes módulos independientes, escalables y
                        compatibles entre sí.
                      </li>
                      <li className="body-2">
                        <strong>Integral:</strong> contempla todos los
                        dispositivos y software necesarios.
                      </li>
                    </ul>
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
