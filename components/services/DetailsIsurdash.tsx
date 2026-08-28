"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Isurdash1 from "./Isurdash1";
import Isurdash2 from "./Isurdash2";
import Isurdash4 from "./Isurdash4";
import Isurdash5 from "./Isurdash5"
import ContactForm from "../common/ContactForm";
export default function Details1() {
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

    // Aplica el mismo ocultado al montar, para que la pestaña inicial no
    // herede la altura de las pestañas ocultas antes del primer cambio de tab.
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
                    alt="Plataforma de visualización IsurDash"
                    className="lazyload"
                    width={850}
                    height={512}
                  />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurdash1 />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-2">
                  <Isurdash2 />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2" role="tabpanel">
              <div className="service-details-content">
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurdash4 />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3" role="tabpanel">
              <div className="service-details-content">
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurdash5 />
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
                    Funcionalidades <i className="icon-arrowRight" />
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#tab-3"
                    className="list-menu-item title"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    Descargas <i className="icon-arrowRight" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar-details mb-40">
                    <ContactForm />
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}
