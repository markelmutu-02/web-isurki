import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "DECT NR+";
const DESCRIPTION =
  "IsurLog now includes DECT NR+, the non-cellular 5G standard that lets you build a real private network without a carrier or contract.";
const IMAGE = "/image/blog/dect-nr-plus.jpg";
const DATE = "2026-06-10";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/en/news/dect-nr-plus",
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
  url: "https://isurki.com/en/news/dect-nr-plus",
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
                  DECT NR+: the non-cellular 5G technology for a real
                  private network, without carriers or contracts
                </h2>
                <div className="sub-title body-2">
                  Product &middot; June 10, 2026
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
                    The latest 2026 version of the IsurLog IoT datalogger
                    range includes, in its base configuration, the option to
                    operate on 5G without a carrier or contract, based on
                    the DECT NR+ standard, offering the following
                    disruptive advantages:
                  </p>
                  <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                    <li className="body-2">No cost, free band.</li>
                    <li className="body-2">Global coverage.</li>
                    <li className="body-2">
                      Mesh networks in a decentralized mesh topology.
                    </li>
                    <li className="body-2">
                      Massive density and scalability.
                    </li>
                    <li className="body-2">
                      Telco-grade reliability (99.999%).
                    </li>
                  </ul>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/dect-nr-plus.jpg"
                    alt="Nordic Semiconductor nRF9151 module with DECT NR+ integrated into IsurLog"
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
