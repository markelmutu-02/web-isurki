"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const AreaLineChart = dynamic(() => import("../charts/CrealineChart"), {
  ssr: false,
});

export default function RiegoDetailsEN() {
  return (
    <div className="tf-container tf-spacing-2">
      <div className="row rg-60">
        <div className="col-lg-8">
          <div className="case-studies-details">
            <div className="image-details image mb-40">
              <Image
                src="/image/section/DiagramaRiego.jpg"
                alt="Smart irrigation diagram for a livestock farm"
                className="lazyload"
                width={850}
                height={512}
              />
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Description</h4>
              <div className="desc mb-16 body-2">
                Improving the efficiency and use of pressurized irrigation networks.
              </div>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Challenge</h4>
              <div className="desc mb-20 body-2">
                The Aravell i Bellestar irrigation community, in northern Lleida, operates an irrigation network built in the 1970s, made up of 11 km of open channel and 20 km of pressurized pipeline supplying irrigation water to 443 ha under an 800 l/s water-use concession granted by the river basin authority. The challenge is to quantify the current efficiency of the hydraulic infrastructure and optimize its performance, locating leaks and modulating the service pressure to match demand.
              </div>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Solution</h4>
              <div className="desc mb-20 body-2">
                        ◦ <strong>To control flows captured (1) and returned (2) in the open channel:</strong> Instrumentation and{" "}
                        <Link
                          href="/en/isurlog"
                          style={{ color: "var(--primary)", textDecoration: "underline" }}
                        >
                          ISURLOG
                        </Link>{" "}
                        dataloggers with NB-IoT communications and cloud data. <br/>
                        ◦ <strong>For the main branches in the pressurized pipeline, with ISURLOG-NB dataloggers:</strong>  <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;▪ Measuring the flow diverted at the head of the branch. <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;▪ Regulating service pressure according to demand. <br/>
                        ◦ <strong>For the connections to individual crop plots:</strong> <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;▪ Adaptive irrigation based on soil moisture and weather conditions with an ISURDROP kit made up of an ultrasonic flow meter, an on/off valve and an IsurLog datalogger with LoRaWAN communications. On-demand irrigation by time slots or by desired m³.
              </div> <br/>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Client testimonial</h4>
              <div className="desc mb-20 body-2">
                "The implementation of ISURKI's cloud-based irrigation control system has allowed us to optimize the operation and water consumption for irrigating an entire 30 ha plot of pasture for dairy cattle production, based on the needs of each moment of the season." Carles Solans, owner of the SOLANS-CASTELLS farming operation.
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
                    SOLANS-CASTELLS
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Tag:</span>
                  <span className="text-btn color-on-suface-container">
                    Smart irrigation
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Start date:</span>
                  <span className="text-btn color-on-suface-container">
                    February 2025
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Duration:</span>
                  <span className="text-btn color-on-suface-container number-month">
                    8 months
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
