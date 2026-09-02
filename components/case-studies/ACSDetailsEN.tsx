"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const AreaLineChart = dynamic(() => import("../charts/CrealineChart"), {
  ssr: false,
});

export default function ACSDetailsEN() {
  return (
    <div className="tf-container tf-spacing-2">
      <div className="row rg-60">
        <div className="col-lg-8">
          <div className="case-studies-details">
            <div className="image-details image mb-40">
              <Image
                src="/image/section/DiagramaACS.jpg"
                alt="Legionella control diagram in a DHW network"
                className="lazyload"
                width={850}
                height={512}
              />
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Description</h4>
              <div className="desc mb-16 body-2">
                Legionella control in the domestic hot water (DHW) networks of Basque public health service (Osakidetza) hospitals.
              </div>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Challenge</h4>
              <div className="desc mb-20 body-2">
                Ensuring the conditions necessary to control Legionella growth in the DHW circuits of 5 hospital buildings at Donostia University Hospital.
              </div>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Solution</h4>
              <div className="desc mb-20 body-2">
                Deployment of a LoRa network made up of 2 gateways and 36 nodes based on{" "}
                <Link
                  href="/en/isurlog"
                  style={{ color: "var(--primary)", textDecoration: "underline" }}
                >
                  IsurLog
                </Link>{" "}
                dataloggers, manageable from a cloud platform with temperature and flow measurements at every critical point of the network. Actuation on thermostatic valves to automatically regulate the optimal temperature of each branch.
              </div>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Client testimonial</h4>
              <div className="desc mb-20 body-2">
                "The implementation of the hot water network control system based on ISURKI's IRIS & ISURLOG ECOSYSTEM solution has allowed us to effectively detect any undesirable scenario that could favor the proliferation of Legionella in our DHW network, and to optimize the management of the technical facilities involved." Daniel López Ortiz, Engineer in the Projects and Infrastructure Department, OSAKIDETZA – OSI DONOSTIALDEA
              </div>
            </div>



          </div>
        </div>
        <div className="col-lg-4">
          <div className="tf-sidebar sidebar-details ml-50">
            <div className="sideber-details">
              <div className="case-details-box mb-40">
                <h5 className="color-on-suface-container">Details</h5>
                <div className="box-item client flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Client:</span>
                  <span className="text-btn color-on-suface-container">
                    OSAKIDETZA
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Tag:</span>
                  <span className="text-btn color-on-suface-container">
                    Healthcare, Water supply
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Start date:</span>
                  <span className="text-btn color-on-suface-container">
                    March 2021
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Duration:</span>
                  <span className="text-btn color-on-suface-container number-month">
                    2 years
                  </span>
                </div>
              </div>
            </div>
            <div className="sidebar-contact sidebar-details">
              <div className="section-content position-relative">
                <div className="heading-section style-color-white">
                  <Link
                    href={`/en/contact-us`}
                    className="tag label text-btn-uppercase color-white mb-16"
                  >
                    Contact us
                  </Link>
                  <h4 className="title-section mb-1">Get in touch</h4>
                  <div className="sub-title caption-1">
                    Contact us and let us help you complete your project.
                  </div>
                </div>
                <div className="list-box-contact style-column mb-28">
                  <div className="box-contact-item">
                    <div className="icon">
                      <i className="icon-MapPin" />
                    </div>
                    <div className="content">
                      <div className="caption-1 title-section-contact">
                        Address
                      </div>
                      <a
                        href="https://www.google.com/maps?q=C/+Gabiria+2,+20305+Irun,+Gipuzkoa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="caption-1 text"
                      >
                        C/ Gabiria n.2, Planta 1. Local P. Irún, 20305
                      </a>
                    </div>
                  </div>
                  <div className="box-contact-item">
                    <div className="icon">
                      <i className="icon-PhoneCall" />
                    </div>
                    <div className="content">
                      <div className="caption-1 title-section-contact">
                        Phone
                      </div>
                      <a href="tel:943635437" className="caption-1 text">
                        943 63 54 37
                      </a>
                    </div>
                  </div>
                  <div className="box-contact-item">
                    <div className="icon">
                      <svg
                        width={33}
                        height={33}
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_9360_10609)">
                          <path
                            d="M16.3335 28.75C22.4086 28.75 27.3335 23.8251 27.3335 17.75C27.3335 11.6749 22.4086 6.75 16.3335 6.75C10.2584 6.75 5.3335 11.6749 5.3335 17.75C5.3335 23.8251 10.2584 28.75 16.3335 28.75Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.3335 4.75L3.3335 8.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M25.3335 4.75L29.3335 8.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.3335 10.75V17.75H23.3335"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect
                              width={32}
                              height={32}
                              fill="white"
                              transform="translate(0.333496 0.75)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="content">
                      <div className="caption-1 title-section-contact">
                        Business hours
                      </div>
                      <span className="caption-1 text">
                        Mon-Fri: 8:00 AM - 7:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/en/contact-us`}
                  className="tf-btn style-1 bg-white bg-white-style-2 w-full text-center"
                >
                  <span> Contact us </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
