"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Isurlog1EN from "./Isurlog1EN";
import Isurlog2EN from "./Isurlog2EN";
import Isurlog3EN from "./Isurlog3EN";
import Isurlog4EN from "./Isurlog4EN";
import Isurlog5EN from "./Isurlog5EN";
import Isurlog6EN from "./Isurlog6EN"
import ContactForm from "../common/ContactForm";
export default function Details1EN() {
  useEffect(() => {
    const applyTabDisplay = (newTargetSelector: string) => {
      const allPanes = document.querySelectorAll(".tab-content > .tab-pane");
      allPanes.forEach((pane) => {
        const el = pane as HTMLElement;
        el.style.display = `#${el.id}` === newTargetSelector ? "" : "none";
      });
    };

    const handleTabShown = (e: Event) => {
      const bsEvent = e as any;
      const newTargetSelector = bsEvent.target?.getAttribute("href");
      if (!newTargetSelector) return;
      applyTabDisplay(newTargetSelector);
    };

    const activePane = document.querySelector(
      ".tab-content > .tab-pane.active"
    );
    if (activePane) applyTabDisplay(`#${activePane.id}`);

    document.addEventListener("shown.bs.tab", handleTabShown);

    return () => {
      document.removeEventListener("shown.bs.tab", handleTabShown);
    };
  }, []);

  return (
    <div className="tf-container tf-spacing-2">
      <div className="row rg-60">
        <div className="col-lg-8">
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1" role="tabpanel">
              <div className="service-details-content">
                <div className="image-details image mb-60">
                  <Image
                    src="/image/section/img-details-service-1.jpg"
                    alt="IsurLog industrial datalogger"
                    className="lazyload"
                    width={850}
                    height={512}
                  />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurlog1EN />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-2">
                  <Isurlog2EN />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-3">
                  <Isurlog3EN />
                </div>
                <div className="detalis-content mb-60">
                  <h4 className="title-content mb-16">
                    Success stories with IsurLog
                  </h4>
                  <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                    <li className="body-2">
                      <Link
                        href="/en/vaccine-temperature-control"
                        style={{ color: "var(--primary)", textDecoration: "underline" }}
                      >
                        Vaccine temperature control for Osakidetza
                      </Link>
                    </li>
                    <li className="body-2">
                      <Link
                        href="/en/tide-gauges"
                        style={{ color: "var(--primary)", textDecoration: "underline" }}
                      >
                        Tide gauge network for AZTI
                      </Link>
                    </li>
                    <li className="body-2">
                      <Link
                        href="/en/legionella-control-acs"
                        style={{ color: "var(--primary)", textDecoration: "underline" }}
                      >
                        Legionella control in DHW network for Osakidetza
                      </Link>
                    </li>
                    <li className="body-2">
                      <Link
                        href="/en/smart-irrigation"
                        style={{ color: "var(--primary)", textDecoration: "underline" }}
                      >
                        Smart irrigation for Solans-Castells
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2" role="tabpanel">
              <div className="service-details-content">
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurlog4EN />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-2">
                  <Isurlog5EN />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3" role="tabpanel">
              <div className="service-details-content">
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurlog6EN />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tf-sidebar ml-50">
            <div className="sidebar-details mb-40">
              <ul className="menu-sidebar-tab" role="tablist">
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab-1"
                    className="list-menu-item title active"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Isurlog <i className="icon-arrowRight" />
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab-2"
                    className="list-menu-item title"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Technical specifications <i className="icon-arrowRight" />
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab-3"
                    className="list-menu-item title"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Downloads <i className="icon-arrowRight" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-details mb-40">
                    <ContactForm lang="en" />
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}
