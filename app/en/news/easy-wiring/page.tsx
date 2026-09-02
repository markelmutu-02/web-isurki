import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "Easy-Wiring";
const DESCRIPTION =
  "Isurki introduces Easy-Wiring, the new wiring system for the IsurLog range designed to simplify field installation.";
const IMAGE = "/image/blog/easy-wiring.jpg";
const DATE = "2026-05-15";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/en/news/easy-wiring",
    languages: {
      es: "https://isurki.com/noticias/easy-wiring",
      en: "https://isurki.com/en/news/easy-wiring",
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
  url: "https://isurki.com/en/news/easy-wiring",
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
                  Easy-Wiring: the new wiring system for IsurLog
                </h2>
                <div className="sub-title body-2">
                  Product &middot; May 15, 2026
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
                    Isurki introduces Easy-Wiring, the new wiring system
                    built into the IsurLog datalogger range to simplify and
                    speed up field installation.
                  </p>
                  <p className="body-2">
                    Easy-Wiring is a simple, robust wiring solution designed
                    to make it easier to connect IsurLog dataloggers to
                    field devices. Thanks to tool-free lever connectors,
                    installation is quick and does not require stripping or
                    pre-preparing cables beforehand, reducing commissioning
                    time and the margin for error during installation.
                  </p>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/easy-wiring.jpg"
                    alt="Interior wiring of an IsurLog with the Easy-Wiring system"
                    className="lazyload"
                    width={1500}
                    height={2000}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    Its main advantages include:
                  </p>
                  <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                    <li className="body-2">Tool-free.</li>
                    <li className="body-2">Fast.</li>
                    <li className="body-2">Robust and reliable.</li>
                    <li className="body-2">
                      Allows jumpers for wiring RS485 buses in a
                      Daisy-Chain architecture.
                    </li>
                  </ul>
                  <p className="body-2">
                    This last feature is especially useful in installations
                    with several field devices connected to the same RS485
                    bus, since it lets you route the signal from one
                    connector to another without additional wiring or
                    external elements, simplifying the assembly and
                    maintenance of the installation.
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
