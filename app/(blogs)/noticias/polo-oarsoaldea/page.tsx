import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "POLO OARSOALDEA URDINA || Isurki",
  description:
    "Isurki participa en el evento organizado por POLO OARSOALDEA URDINA sobre economía azul y nuevas tecnologías en Oarsoaldea.",
};

export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">POLO OARSOALDEA URDINA</h2>
                <div className="sub-title body-2">
                  Evento &middot; 4 de diciembre de 2024
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
                    Gracias a AZTI por darnos la oportunidad de participar en
                    el evento organizado por POLO OARSOALDEA URDINA para la
                    difusión de las actuaciones y proyectos relacionados con
                    la economía azul y las nuevas tecnologías en la comarca
                    de Oarsoaldea.
                  </p>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/tf-post-grid-7.jpg"
                    alt="POLO OARSOALDEA URDINA"
                    className="lazyload"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    Hemos presentado el proyecto KostaSystem liderado por
                    AZTI y en el que ISURKI lleva participando en estrecha
                    colaboración con este centro tecnológico de la Red Vasca
                    de Ciencia y Tecnología desde 2018 en el desarrollo,
                    fabricación y programación de la infraestructura para la
                    adquisición, transmisión y alojamiento de imágenes de la
                    costa en alta resolución.
                  </p>
                  <p className="body-2">
                    En 2024 hemos dado un paso significativo, presentado en
                    este evento, para centralizar y gestionar el hosting de
                    25 estaciones de videometría costera, repartidas por
                    diferentes arenales de España, Francia y Marruecos, en un
                    nuevo local habilitado exclusivamente para este
                    propósito y situado en el mismo edificio de nuestra sede
                    central en Irún.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
