import Image from "next/image";
import React from "react";

export default function FeaturesEN() {
  return (
    <section className="section-why-choose h-4 tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row rg-60 align-items-center">
          <div className="col-lg-6">
            <div className="section-content">
              <div className="heading-section">
                <div className="text-anime-wave">
                  <a href="#" className="tag label text-btn-uppercase">
                    Why choose us?
                  </a>
                </div>
                <h3 className="text-anime-wave mb-12">
                  Smart management <br />
                  of your facilities
                </h3>
                <div className="sub-title body-2 text-anime-wave">
                  At Isurki we offer a fully integrated solution: our own
                  ecosystem in which every component — hardware, software and
                  infrastructure — is designed, developed and manufactured
                  entirely by our team. This lets us guarantee maximum
                  compatibility, reliability and support across every phase
                  of the project (design, deployment, commissioning and
                  operation).
                </div>
              </div>
              <div className="benefit-lists">
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">IsurLog datalogger</div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">Sensors and actuators</div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">IsurDash platform</div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">Own server</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image tf-animate-4">
              <Image
                src="/image/section/diagrama-ecosistema.png"
                alt="Isurki instrumentation and control ecosystem: IsurLog, sensors, IsurDash and own server"
                className="lazyload"
                width={615}
                height={615}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
