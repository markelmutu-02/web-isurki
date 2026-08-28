"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import OdometerComponent from "./OdometerComponent";
import { counters } from "@/data/cta";
import ModalVideo from "./ModalVideo";

export default function About() {
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
                            SOMOS ISURKI
                          </a>
                        </div>
                        <h3 className="title-section mb-28 text-anime-wave">
                          Impulsando la transformación
                          <br />
                          digital
                        </h3>
                        <div className="sub-title mb-32 text-anime-wave">
                          En Isurki acompañamos a las empresas en su transformación digital
                          con una propuesta <br/> totalmente personalizada:
                          analizamos cada caso, asesoramos con criterio y diseñamos<br/>
                          la mejor solución para lograr un resultado hecho a medida.
                        </div>
                        <div className="text-anime-wave">
                          <Link
                            href={`/contact-us`}
                            className="tf-btn style-1 bg-on-suface-container"
                          >
                            <span> Contactanos </span>
                          </Link>
                        </div>
                      </div>
                      <div className="wg-counter style-column g-40">
                        {counters.map((counter, index) => (
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
                                Profesionalismo
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
                                Innovación
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
                                Compromiso
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
                            Trabajamos con rigor, seriedad y experiencia en cada proyecto, cumpliendo plazos y compromisos para ofrecerte siempre un servicio de la máxima calidad.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="innovation"
                          role="tabpanel"
                        >
                          <p className="text">
                            Aplicamos las últimas tendencias y avances para mantener tu negocio a la vanguardia y siempre un paso por delante.
                          </p>
                        </div>
                        <div
                          className="tab-pane"
                          id="commitment"
                          role="tabpanel"
                        >
                          <p className="text">
                            Trabajamos con transparencia, honestidad y responsabilidad, poniendo los valores y la confianza en el centro de cada proyecto.
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
                              alt="Equipo de Isurki"
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
