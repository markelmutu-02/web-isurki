import React from "react";
import Image from "next/image";
import { Metadata } from "next";

const TITLE = "LiSOCl2 Batteries";
const DESCRIPTION =
  "The ISURLOG (2026) now supports non-rechargeable LiSOCl2 batteries, extending its field battery life from 17 to 38 Ah.";
const IMAGE = "/image/blog/pilas-portada.jpg";
const DATE = "2026-08-10";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/en/news/lisocl2-batteries",
    languages: {
      es: "https://isurki.com/noticias/baterias-lisocl2",
      en: "https://isurki.com/en/news/lisocl2-batteries",
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
  url: "https://isurki.com/en/news/lisocl2-batteries",
};

const tableCell: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid #e0e0e0",
  textAlign: "left",
};

const tableHeadCell: React.CSSProperties = {
  ...tableCell,
  fontWeight: 600,
  borderBottom: "2px solid #24283d",
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
                  New LiSOCl2 batteries for the ISURLOG: up to 4 years of
                  maintenance-free battery life
                </h2>
                <div className="sub-title body-2">
                  Product &middot; August 10, 2026
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
                    The ISURLOG (2026) IoT datalogger takes a qualitative
                    leap in its design by adding support for non-rechargeable
                    lithium thionyl chloride (LiSOCl2) batteries, expanding
                    its operational capabilities in the field and drastically
                    reducing the maintenance burden.
                  </p>
                  <p className="body-2">
                    This hardware update allows two 19 Ah LiSOCl2 batteries
                    to be fitted, reaching a total capacity of 38 Ah.
                    Compared with the previous configuration based on 5
                    NCR18650B lithium-ion cells (3400 mAh per cell, 17 Ah in
                    total), the new option not only more than doubles the
                    available energy density, but also drastically optimizes
                    charge retention in long-term deployments.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      1. Main technical improvements
                    </h5>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>Greater storage capacity:</strong> a direct
                        increase from 17 Ah to 38 Ah, which multiplies the
                        periods of continuous operation without needing to
                        replace the power source.
                      </li>
                      <li className="body-2">
                        <strong>Minimal self-discharge:</strong> LiSOCl2
                        chemistry reduces the rate of charge loss to 1% per
                        year, compared with the 1% per month typical of
                        traditional lithium-ion cells. This ensures optimal
                        operational stability in isolated or hard-to-reach
                        nodes.
                      </li>
                      <li className="body-2">
                        <strong>
                          Quick-mounting and maintenance system:
                        </strong>{" "}
                        a dedicated accessory has been designed that firmly
                        secures the batteries to the ISURLOG housing. This
                        mechanism protects the components against vibration
                        and simplifies the field replacement procedure,
                        reducing downtime.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/baterias-lisocl2-1.jpg"
                    alt="LiSOCl2 batteries and mounting system for the ISURLOG"
                    className="lazyload"
                    width={800}
                    height={800}
                  />
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      2. Practical examples of increased field battery life
                    </h5>
                    <p className="body-2">
                      To illustrate the real-world impact of this
                      improvement in a typical industrial monitoring
                      scenario, let&apos;s consider two cases with the
                      following working configuration:
                    </p>

                    <div style={{ overflowX: "auto", marginBottom: 24 }}>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          minWidth: 560,
                        }}
                      >
                        <thead>
                          <tr>
                            <th style={tableHeadCell}>Case</th>
                            <th style={tableHeadCell}>
                              Local data logging
                            </th>
                            <th style={tableHeadCell}>
                              Data upload to the cloud
                            </th>
                            <th style={tableHeadCell}>
                              Sensors considered
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={tableCell}>No. 1</td>
                            <td style={tableCell}>15 min.</td>
                            <td style={tableCell}>3 hours</td>
                            <td style={tableCell}>
                              A 4-20 mA analog sensor powered directly from
                              the ISURLOG at 12 V.
                            </td>
                          </tr>
                          <tr>
                            <td style={tableCell}>No. 2</td>
                            <td style={tableCell}>5 min.</td>
                            <td style={tableCell}>1 hour</td>
                            <td style={tableCell}>
                              A Modbus flow meter with its own batteries,
                              reading 3 parameters (instantaneous flow,
                              accumulated flow, flow meter battery level).
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="body-2">
                      Under these two operating profiles, the battery life
                      comparison is as follows:
                    </p>

                    <div style={{ overflowX: "auto", marginBottom: 24 }}>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          minWidth: 640,
                        }}
                      >
                        <thead>
                          <tr>
                            <th style={tableHeadCell}>
                              Battery configuration
                            </th>
                            <th style={tableHeadCell}>Capacity</th>
                            <th style={tableHeadCell}>
                              Annual self-discharge
                            </th>
                            <th style={tableHeadCell}>
                              Estimated battery life &ndash; Case No. 1
                            </th>
                            <th style={tableHeadCell}>
                              Estimated battery life &ndash; Case No. 2
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={tableCell}>
                              Rechargeable Li-ion (NCR18650B)
                            </td>
                            <td style={tableCell}>17 Ah</td>
                            <td style={tableCell}>12%</td>
                            <td style={tableCell}>1.6 years (19.3 months)</td>
                            <td style={tableCell}>1.4 years (17.1 months)</td>
                          </tr>
                          <tr>
                            <td style={tableCell}>Non-rechargeable LiSOCl2</td>
                            <td style={tableCell}>38 Ah</td>
                            <td style={tableCell}>1%</td>
                            <td style={tableCell}>3.9 years (46.4 months)</td>
                            <td style={tableCell}>3.4 years (40.9 months)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="body-2">
                      Thanks to the combination of higher energy density and
                      negligible self-discharge in LiSOCl2 cells, the
                      ISURLOG makes it possible to extend preventive
                      replacement cycles from a year and a half to almost
                      four years of uninterrupted operation.
                    </p>
                  </div>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/baterias-lisocl2-2.jpg"
                    alt="Detail of the LiSOCl2 battery installation on the ISURLOG"
                    className="lazyload"
                    width={800}
                    height={800}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    With this improvement, the ISURLOG strengthens its
                    reliability in remote monitoring applications, offering
                    a solution with greater energy durability and
                    substantially lower operating costs for the supervision
                    of industrial assets.
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
