import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "POLO OARSOALDEA URDINA";
const DESCRIPTION =
  "Isurki takes part in the event organized by POLO OARSOALDEA URDINA on the blue economy and new technologies in Oarsoaldea.";
const IMAGE = "/image/blog/tf-post-grid-7.jpg";
const DATE = "2024-12-04";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/en/news/polo-oarsoaldea",
    languages: {
      es: "https://isurki.com/noticias/polo-oarsoaldea",
      en: "https://isurki.com/en/news/polo-oarsoaldea",
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
  url: "https://isurki.com/en/news/polo-oarsoaldea",
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
                <h2 className="title-page-title">POLO OARSOALDEA URDINA</h2>
                <div className="sub-title body-2">
                  Event &middot; December 4, 2024
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
                    Thanks to AZTI for giving us the opportunity to take part
                    in the event organized by POLO OARSOALDEA URDINA to
                    showcase the initiatives and projects related to the blue
                    economy and new technologies in the Oarsoaldea region.
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
                    We presented the KostaSystem project, led by AZTI, in
                    which ISURKI has been participating in close
                    collaboration with this technology center of the Basque
                    Science and Technology Network since 2018, developing,
                    manufacturing and programming the infrastructure for the
                    acquisition, transmission and hosting of high-resolution
                    images of the coastline.
                  </p>
                  <p className="body-2">
                    In 2024 we took a significant step, presented at this
                    event, to centralize and manage the hosting of 25
                    coastal videometry stations, distributed across
                    different beaches in Spain, France and Morocco, in a new
                    facility set up exclusively for this purpose and located
                    in the same building as our headquarters in Irun.
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
