"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Isurdash1EN from "./Isurdash1EN";
import Isurdash2EN from "./Isurdash2EN";
import Isurdash4EN from "./Isurdash4EN";
import Isurdash5EN from "./Isurdash5EN"
import ContactForm from "../common/ContactForm";
export default function DetailsIsurdashEN() {
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

    // Apply the same hiding on mount, so the initial tab does not
    // inherit the height of the hidden tabs before the first tab change.
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
                    src="/image/section/img-details-service-2.jpg"
                    alt="IsurDash visualization platform"
                    className="lazyload"
                    width={850}
                    height={512}
                  />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurdash1EN />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-2">
                  <Isurdash2EN />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2" role="tabpanel">
              <div className="service-details-content">
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurdash4EN />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3" role="tabpanel">
              <div className="service-details-content">
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurdash5EN />
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
                    IsurDash <i className="icon-arrowRight" />
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab-2"
                    className="list-menu-item title"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Features <i className="icon-arrowRight" />
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
