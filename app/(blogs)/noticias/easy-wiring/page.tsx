import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "Easy-Wiring";
const DESCRIPTION =
  "Isurki presenta Easy-Wiring, el nuevo sistema de cableado de la gama IsurLog para simplificar la instalación en campo.";
const IMAGE = "/image/blog/easy-wiring.jpg";
const DATE = "2026-05-15";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: DATE,
    images: [IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: TITLE,
  description: DESCRIPTION,
  image: [`https://isurki.com${IMAGE}`],
  datePublished: DATE,
  author: { "@type": "Organization", name: "Isurki" },
  publisher: {
    "@type": "Organization",
    name: "Isurki",
    logo: {
      "@type": "ImageObject",
      url: "https://isurki.com/image/logo/logo.svg",
    },
  },
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">
                  Easy-Wiring: el nuevo sistema de cableado para IsurLog
                </h2>
                <div className="sub-title body-2">
                  Producto &middot; 15 de mayo de 2026
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
                    Isurki presenta Easy-Wiring, el nuevo sistema de cableado
                    incorporado en la gama de dataloggers IsurLog para
                    simplificar y agilizar la instalación en campo.
                  </p>
                  <p className="body-2">
                    Easy-Wiring es una solución de cableado sencilla y
                    robusta diseñada para facilitar el conexionado de los
                    dataloggers IsurLog con los dispositivos de campo.
                    Gracias a conectores de palanca que no requieren
                    herramientas, la instalación se realiza de forma rápida
                    y sin necesidad de pelar ni preparar previamente los
                    cables, reduciendo el tiempo de puesta en marcha y el
                    margen de error durante la instalación.
                  </p>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/easy-wiring.jpg"
                    alt="Conexionado interior de un IsurLog con el sistema Easy-Wiring"
                    className="lazyload"
                    width={1500}
                    height={2000}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    Entre sus principales ventajas destacan:
                  </p>
                  <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                    <li className="body-2">Sin herramientas.</li>
                    <li className="body-2">Rápida.</li>
                    <li className="body-2">Robusta y confiable.</li>
                    <li className="body-2">
                      Permite realizar puentes para conexionado en buses
                      RS485 en arquitectura Daisy-Chain.
                    </li>
                  </ul>
                  <p className="body-2">
                    Esta última característica resulta especialmente útil en
                    instalaciones con varios dispositivos de campo
                    conectados a un mismo bus RS485, ya que permite derivar
                    la señal de un conector a otro sin necesidad de cableado
                    adicional ni elementos externos, simplificando el
                    montaje y el mantenimiento de la instalación.
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
