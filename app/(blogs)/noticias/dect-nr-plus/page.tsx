import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const TITLE = "DECT NR+";
const DESCRIPTION =
  "IsurLog incorpora DECT NR+, el estándar 5G no celular que permite montar una red privada real sin operadora ni contrato.";
const IMAGE = "/image/blog/dect-nr-plus.jpg";
const DATE = "2026-06-10";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/noticias/dect-nr-plus",
    languages: {
      es: "https://isurki.com/noticias/dect-nr-plus",
      en: "https://isurki.com/en/news/dect-nr-plus",
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
                    La última versión 2026 de la gama de datalogger IoT{" "}
                    <Link
                      href="/isurlog"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      IsurLog
                    </Link>{" "}
                    incluye en su
                    ejecución básica la opción de
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
