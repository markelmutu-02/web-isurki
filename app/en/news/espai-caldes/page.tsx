import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "Espai Caldes";
const DESCRIPTION =
  "Isurki commissions the instrumentation and control system for the Espai-Caldes project in Escaldes-Engordany, Andorra.";
const IMAGE = "/image/blog/tf-post-grid-4.jpg";
const DATE = "2024-11-15";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/en/news/espai-caldes",
    languages: {
      es: "https://isurki.com/noticias/espai-caldes",
      en: "https://isurki.com/en/news/espai-caldes",
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
  url: "https://isurki.com/en/news/espai-caldes",
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
                <h2 className="title-page-title">Espai Caldes</h2>
                <div className="sub-title body-2">
                  Instrumentation and control &middot; November 15, 2024
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
                    ISURKI, INSTRUMENTACION Y CONTROL has recently completed
                    the commissioning of a cloud-manageable instrumentation
                    and control system for the Espai-Caldes project in the
                    municipality of Escaldes-Engordany, in the Principality
                    of Andorra.
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
                    The project stems from a local government initiative to
                    revitalize the historic area of the parish through the
                    installation of an outdoor artistic work with dynamic
                    effects that automatically runs a series of scenes based
                    on the activation of a set of taps that, following
                    configurable patterns, release water into the Madriu
                    river channel, as part of other works of the same
                    nature carried out in the area following the design of
                    artist Javier Balmaseda, with the aim of blending art
                    and urban design.
                  </p>
                  <p className="body-2">
                    The work was commissioned by the Honorable Comu of
                    Escaldes-Engordany, with ISURKI INSTRUMENTACION Y
                    CONTROL responsible for the design, programming,
                    execution and commissioning of the hydraulic
                    infrastructure needed for the flow regulation system of
                    each of the 21 taps that make up the artwork.
                  </p>
                  <p className="body-2">
                    ISURKI&apos;s design, carried out jointly with the local
                    engineering firm SUPORT ENGINYERS CONSULTORS, with which
                    it has been collaborating for over 30 years, has the
                    distinctive feature, compared to earlier, less
                    environmentally friendly proposals, of not using
                    electric pumps but rather the hydraulic energy available
                    in the Madriu river, which has resulted in:
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        Savings on the investment required to purchase,
                        install and commission the pumping unit.
                      </li>
                      <li className="body-2">
                        Savings on operating costs from the electricity
                        supply bill for pumping, estimated at 23,174 EUR per
                        year.
                      </li>
                      <li className="body-2">
                        Savings in greenhouse gas emissions, estimated at
                        close to 50 metric tons of CO2eq per year.
                      </li>
                    </ul>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      Other features of the solution
                    </h5>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        Remote control of the system from the cloud.
                      </li>
                      <li className="body-2">
                        Individual adjustment of the discharge flow for each
                        artistic tap.
                      </li>
                      <li className="body-2">
                        Automatic shutoff of the water supply to the system
                        in the event of very high turbidity in the water
                        drawn from the river.
                      </li>
                      <li className="body-2">
                        Custom programming of artistic sequences and
                        effects.
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
