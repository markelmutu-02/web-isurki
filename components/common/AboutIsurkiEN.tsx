"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import OdometerComponent from "./OdometerComponent";
import { countersEN } from "@/data/aboutEN";
import ModalVideo from "./ModalVideo";

export default function AboutEN() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="section-about h-2 section-one-page" id="about">
        <div className="about-inner">
          <div className="section-about-left">
            <div className="about-top">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="about-content">
                      <div className="heading-section">
                        <div className="text-anime-wave">
                          <a href="#" className="tag label text-btn-uppercase">
                            WE ARE ISURKI
                          </a>
                        </div>
                        <h3 className="title-section mb-28 text-anime-wave">
                          Driving digital
                          <br />
                          transformation
                        </h3>
                        <div className="sub-title mb-32 text-anime-wave">
                          At Isurki we guide companies through their digital transformation
                          with a fully personalized approach: <br /> we analyze every case, advise with judgment, and design
                          the best solution to deliver a truly custom-made result.
                        </div>
                        <div className="text-anime-wave">
                          <Link
                            href={`/en/contact-us`}
                            className="tf-btn style-1 bg-on-suface-container"
                          >
                            <span> Contact us </span>
                          </Link>
                        </div>
                      </div>
                      <div className="wg-counter style-column g-40">
                        {countersEN.map((counter, index) => (
                          <div className="counter-item" key={index}>
                            <div className="counter">
                              <div className="number-counter">
                                <h4 className="number odometer color-primary">
                                  <OdometerComponent max={counter.value} />
                                </h4>
                                <h4 className="plus color-primary">+</h4>
                              </div>
                              <p className="text text-btn-uppercase label">
                                {counter.label}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-bottom">
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="flat-animate-tab">
                      <div className="wg-tab style-small">
                        <ul className="tab-product min-w-366" role="tablist">
                          <li className="nav-tab-item" role="presentation">
                            <h6>
                              <a
                                href="#expertise"
                                data-bs-toggle="tab"
                                role="tab"
                                className="active"
                              >
                                Professionalism
                              </a>
                            </h6>
                          </li>
                          <li className="nav-tab-item" role="presentation">
                            <h6>
                              <a
                                href="#innovation"
                                data-bs-toggle="tab"
                                role="tab"
                              >
                                Innovation
                              </a>
                            </h6>
                          </li>
                          <li className="nav-tab-item" role="presentation">
                            <h6>
                              <a
                                href="#commitment"
                                data-bs-toggle="tab"
                                role="tab"
                              >
                                Commitment
                              </a>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content">
                        <div
                          className="tab-pane active show"
                          id="expertise"
                          role="tabpanel"
                        >
                          <p className="text">
                            We work with rigor, seriousness and experience on every project, meeting deadlines and commitments to always offer you the highest quality service.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="innovation"
                          role="tabpanel"
                        >
                          <p className="text">
                            We apply the latest trends and advances to keep your business at the cutting edge and always one step ahead.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="commitment"
                          role="tabpanel"
                        >
                          <p className="text">
                            We work with transparency, honesty and responsibility, putting values and trust at the center of every project.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-about-right tf-animate-4">
            <Image
                              src="/image/team-item/about-us-1.jpg"
                              alt="Isurki team"
                              className="lazyload"
                              width={650}
                              height={650}
                            />
          </div>
        </div>
      </section>
      <ModalVideo
        videoId={"XHOmBV4js_E"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
