import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "KOSTASystem";
const DESCRIPTION =
  "Isurki desarrolla, junto a AZTI, estaciones remotas basadas en TORADEX Apalis para la vigilancia videométrica del litoral vasco.";
const IMAGE = "/image/blog/tf-post-grid-6.jpg";
const DATE = "2020-07-08";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/noticias/kostasystem",
    languages: {
      es: "https://isurki.com/noticias/kostasystem",
      en: "https://isurki.com/en/news/kostasystem",
    },
  },
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
                <h2 className="title-page-title">El proyecto KOSTASystem</h2>
                <div className="sub-title body-2">
                  Instrumentación y control &middot; 8 de julio de 2020
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
                    ISURKI, empresa de ingeniería electrónica ubicada en el
                    norte de España y colaborador oficial del fabricante
                    suizo de SoM TORADEX, ha desarrollado y desplegado,
                    durante los últimos cuatro años y en estrecha
                    colaboración con el centro de investigación de ciencias
                    marinas AZTI, un TORADEX Apalis SoM basado en gama de
                    adquisición y procesamiento de imágenes de estaciones
                    remotas compactas y autónomas para la vigilancia
                    videométrica del litoral del País Vasco.
                  </p>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/tf-post-grid-6.jpg"
                    alt="KOSTASystem"
                    className="lazyload"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    El núcleo principal es el ordenador industrial integrado
                    TORADEX Apalis TK1 SoM de ISURKI IXORA BOX PC embebido,
                    que gestiona diferentes tareas como la adquisición,
                    procesamiento, almacenamiento y transmisión 4G de
                    imágenes, optimización del consumo de energía,
                    monitorización en tiempo real, mensajería de alarmas,
                    etc. Las características principales de IXORA BOX PC
                    incluyen NVIDIA® Tegra K1 Quad-core Arm® 2.1 GHz μP, 2 GB
                    DDR, 16 GB Flash. La nueva versión 1.2 de la placa TESDA
                    de entradas/salidas industriales empotrada incluye 4
                    entradas analógicas, 4 entradas digitales y 4 salidas de
                    relé.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      Ventajas frente a la solución x86 anterior
                    </h5>
                    <p className="body-2">
                      El uso de los ordenadores industriales embebidos IXORA
                      BOX PC basados en TORADEX ha supuesto un avance de
                      vanguardia en las prestaciones realizadas por las
                      estaciones remotas de KOSTASystem con respecto a la
                      solución informática x86 utilizada al inicio de este
                      proyecto, potenciándolas con las siguientes ventajas:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        Reducción del consumo, permitiendo un funcionamiento
                        autónomo con un tamaño mínimo de panel solar.
                      </li>
                      <li className="body-2">
                        Reducción del tamaño del gabinete, minimizando el
                        impacto visual y permitiendo un montaje elevado para
                        reducir el riesgo de vandalismo.
                      </li>
                      <li className="body-2">Funcionamiento sin ventilador.</li>
                      <li className="body-2">Reducción de costo.</li>
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
