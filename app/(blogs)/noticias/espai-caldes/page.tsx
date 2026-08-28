import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espai Caldes || Isurki",
  description:
    "Isurki pone en servicio el sistema de instrumentación y control del proyecto Espai-Caldes en Escaldes-Engordany, Andorra.",
};

export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">Espai Caldes</h2>
                <div className="sub-title body-2">
                  Instrumentación y control &middot; 15 de noviembre de 2024
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
                    ISURKI, INSTRUMENTACIÓN Y CONTROL ha culminado
                    recientemente la puesta en servicio de un sistema de
                    instrumentación y control gestionable en la nube con
                    destino al proyecto Espai-Caldes para el municipio de
                    Escaldes-Engordany en el Principado de Andorra.
                  </p>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/tf-post-grid-4.jpg"
                    alt="Espai Caldes"
                    className="lazyload"
                    width={800}
                    height={600}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    El proyecto es consecuencia de la iniciativa de la
                    administración local para impulsar la revitalización de
                    la zona histórica de la parroquia mediante la instalación
                    de una obra artística al aire libre con efectos
                    dinámicos que ejecuta de forma automatizada una serie de
                    escenas basadas en la activación de unos grifos que, de
                    acuerdo a unos patrones configurables, vierten agua al
                    cauce del río Madriu, en el ámbito de otras actuaciones
                    del mismo carácter ejecutadas en la zona de acuerdo al
                    diseño del artista Javier Balmaseda, con el propósito de
                    fundir arte y urbanismo.
                  </p>
                  <p className="body-2">
                    La obra ha sido promovida por el Hble. Comú de
                    Escaldes-Engordany, correspondiendo a ISURKI
                    INSTRUMENTACIÓN Y CONTROL el diseño, programación,
                    ejecución y puesta en servicio de la infraestructura
                    hidráulica necesaria para el sistema de regulación de
                    caudal de cada uno de los 21 grifos que componen la obra.
                  </p>
                  <p className="body-2">
                    El diseño de ISURKI, realizado conjuntamente con la
                    ingeniería local SUPORT ENGINYERS CONSULTORS, con la que
                    lleva colaborando más de 30 años, tiene la particularidad,
                    con respecto a propuestas preliminares menos respetuosas
                    con el medio ambiente, de no utilizar electrobombas sino
                    la energía hidráulica disponible en el río Madriu, lo que
                    ha supuesto:
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        El ahorro en la inversión a realizar en la compra,
                        instalación y puesta en servicio del grupo de
                        bombeo.
                      </li>
                      <li className="body-2">
                        El ahorro en los costos de explotación por factura en
                        el suministro de energía eléctrica para el bombeo,
                        que se estima en 23.174 €/año.
                      </li>
                      <li className="body-2">
                        El ahorro en las emisiones de gases de efecto
                        invernadero, que se estima muy próximo a 50 Tn
                        CO2eq/año.
                      </li>
                    </ul>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      Otras características de la solución
                    </h5>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        Telecontrol del sistema desde la nube.
                      </li>
                      <li className="body-2">
                        Ajuste individualizado del caudal de vertido de cada
                        grifo artístico.
                      </li>
                      <li className="body-2">
                        Cierre automático del suministro de agua al sistema
                        en caso de turbidez muy alta en el agua captada en el
                        río.
                      </li>
                      <li className="body-2">
                        Programación de secuencias y efectos artísticos a la
                        carta.
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
