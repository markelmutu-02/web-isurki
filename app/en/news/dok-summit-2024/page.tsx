import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "DOK Summit 2024";
const DESCRIPTION =
  "Isurki takes part as a speaker at DOK Summit 2024, presenting the European SMARTDROP project.";
const IMAGE = "/image/blog/tf-post-grid-5.jpg";
const DATE = "2024-11-26";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/en/news/dok-summit-2024",
    languages: {
      es: "https://isurki.com/noticias/dok-summit-2024",
      en: "https://isurki.com/en/news/dok-summit-2024",
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
  url: "https://isurki.com/en/news/dok-summit-2024",
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
                <h2 className="title-page-title">DOK Summit 2024</h2>
                <div className="sub-title body-2">
                  Event &middot; November 26, 2024
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
                    ISURKI, INSTRUMENTACION Y CONTROL recently took part as a
                    speaker at the DOK SUMMIT 2024 event held at the
                    Euskalduna Palace in Bilbao on November 11 and 12.
                  </p>
                  <p className="body-2">
                    This event is a world-leading reference in the digital
                    sector supporting the transition towards a sustainable
                    future.
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
                    Inaki Mutuberria, CEO of ISURKI, gave the talk titled
                    &ldquo;Resilience of irrigated crops against climate
                    change&rdquo; based on the European SMARTDROP project,
                    funded with European funds under the innovation support
                    program to improve the efficiency of hydraulic
                    infrastructure, CircInWater (CIW), for which ISURKI was
                    selected in 2023, in collaboration with the Hungarian
                    company SEACON EUROPE, together with eleven other
                    European companies.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">What SMARTDROP delivers</h5>
                    <p className="body-2">
                      SMARTDROP is a cloud-based digital solution to
                      optimize the efficiency of irrigation infrastructure in
                      the agricultural sector, increase productivity and its
                      resilience against climate change, with the following
                      disruptive innovations:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>Technological edge:</strong> based on Energy
                        Harvesting, IoT and Data Analysis.
                      </li>
                      <li className="body-2">
                        <strong>Modular and flexible:</strong> made up of
                        different independent modules, scalable and
                        compatible with one another.
                      </li>
                      <li className="body-2">
                        <strong>Comprehensive:</strong> covers all the
                        necessary devices and software.
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
