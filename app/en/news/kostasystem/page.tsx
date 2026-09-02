import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "KOSTASystem";
const DESCRIPTION =
  "Isurki, together with AZTI, develops remote stations based on TORADEX Apalis for videometric monitoring of the Basque coastline.";
const IMAGE = "/image/blog/tf-post-grid-6.jpg";
const DATE = "2020-07-08";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/en/news/kostasystem",
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
  url: "https://isurki.com/en/news/kostasystem",
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
                <h2 className="title-page-title">The KOSTASystem project</h2>
                <div className="sub-title body-2">
                  Instrumentation and control &middot; July 8, 2020
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
                    ISURKI, an electronic engineering company based in
                    northern Spain and an official partner of the Swiss SoM
                    manufacturer TORADEX, has developed and deployed, over
                    the last four years and in close collaboration with the
                    AZTI marine science research center, a TORADEX Apalis
                    SoM-based range of image acquisition and processing for
                    compact, autonomous remote stations for videometric
                    monitoring of the Basque Country coastline.
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
                    The main core is ISURKI&apos;s embedded industrial
                    computer, the IXORA BOX PC, built around the TORADEX
                    Apalis TK1 SoM, which manages tasks such as image
                    acquisition, processing, storage and 4G transmission,
                    power consumption optimization, real-time monitoring,
                    alarm messaging, and more. The main features of the
                    IXORA BOX PC include an NVIDIA(R) Tegra K1 Quad-core
                    Arm(R) 2.1 GHz processor, 2 GB DDR and 16 GB Flash. The
                    new version 1.2 of the embedded TESDA industrial
                    input/output board includes 4 analog inputs, 4 digital
                    inputs and 4 relay outputs.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      Advantages over the previous x86 solution
                    </h5>
                    <p className="body-2">
                      The use of TORADEX-based IXORA BOX PC embedded
                      industrial computers has meant a cutting-edge
                      advancement in the performance of KOSTASystem&apos;s
                      remote stations compared to the x86 computing solution
                      used at the start of this project, enhancing them with
                      the following advantages:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        Reduced power consumption, allowing autonomous
                        operation with a minimal solar panel size.
                      </li>
                      <li className="body-2">
                        Reduced cabinet size, minimizing visual impact and
                        allowing elevated mounting to reduce the risk of
                        vandalism.
                      </li>
                      <li className="body-2">Fanless operation.</li>
                      <li className="body-2">Cost reduction.</li>
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
