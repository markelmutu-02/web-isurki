"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Isurlog1 from "./Isurlog1";
import Isurlog2 from "./Isurlog2";
import Isurlog3 from "./Isurlog3";
import Isurlog4 from "./Isurlog4";
import Isurlog5 from "./Isurlog5";
import Isurlog6 from "./Isurlog6"
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
                    src="/image/section/img-details-service-1.jpg"
                    alt="Datalogger industrial IsurLog"
                    className="lazyload"
                    width={850}
                    height={512}
                  />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurlog1 />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-2">
                  <Isurlog2 />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-3">
                  <Isurlog3 />
                </div>
                <div className="detalis-content mb-60">
                  <h4 className="title-content mb-16">
                    Casos de éxito con IsurLog
                  </h4>
                  <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                    <li className="body-2">
                      <Link href="/control-vacunas-details">
                        Control de temperatura de vacunas para Osakidetza
                      </Link>
                    </li>
                    <li className="body-2">
                      <Link href="/mareografos-details">
                        Red de mareógrafos para AZTI
                      </Link>
                    </li>
                    <li className="body-2">
                      <Link href="/control-ACS-details">
                        Control de Legionela en red ACS para Osakidetza
                      </Link>
                    </li>
                    <li className="body-2">
                      <Link href="/control-riego-details">
                        Riego inteligente para Solans-Castells
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2" role="tabpanel">
              <div className="service-details-content">
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurlog4 />
                </div>
                <div className="detalis-content mb-60" id="menu-sidebar-2">
                  <Isurlog5 />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3" role="tabpanel">
              <div className="service-details-content">
                <div className="detalis-content mb-60" id="menu-sidebar-1">
                  <Isurlog6 />
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
                    Especificaciones técnicas <i className="icon-arrowRight" />
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
