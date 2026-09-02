import Link from "next/link";
import React from "react";

export default function ProcessEN() {
  return (
    <section
      className="section-process h-1 tf-spacing-2 hover-active-step section-one-page"
      id="process"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-2 mb-40">
              <div className="left">
                <div className="text-anime-wave">
                  <a href="#" className="tag label text-btn-uppercase">
                    Where do we work?
                  </a>
                </div>
                <h3 className="title-section text-anime-wave">
                  Our fields of activity are...
                </h3>
              </div>
              <div className="text-anime-wave-2">
                <Link
                  href={`/en/contact-us`}
                  className="tf-btn style-1 bg-on-suface-container"
                >
                  <span> Get in touch </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row rg-30">
          <div className="col-lg-3 col-sm-6">
            <div className="process-item step-hover">
              <div className="process-top wow fadeInUp">
                <div className="icon wow fadeInUp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>
                </div>
                <span className="label text-btn-uppercase wow fadeInUp" />
              </div>
              <div className="process-content">
                <h5 className="wow fadeInUp">
                  <a href="#" className="name-process">
                    Water supply and sanitation
                  </a>
                </h5>
                <div className="desc wow fadeInUp">
                  Improving the water efficiency of drinking water networks
                  and controlling abstraction and return flow rates.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="process-item step-hover">
              <div className="process-top wow fadeInUp" data-wow-delay=".1s">
                <div className="icon wow fadeInUp" data-wow-delay=".1s">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/></svg>
                </div>
                <span
                  className="label text-btn-uppercase wow fadeInUp"
                  data-wow-delay=".1s"
                />
              </div>
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".1s">
                  <a href="#" className="name-process">
                    Environment
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".1s">
                  Monitoring surface and groundwater bodies.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="process-item step-hover">
              <div className="process-top wow fadeInUp" data-wow-delay=".2s">
                <div className="icon wow fadeInUp" data-wow-delay=".2s">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10"/><path d="m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002"/></svg>
                </div>
                <span
                  className="label text-btn-uppercase wow fadeInUp"
                  data-wow-delay=".2s"
                />
              </div>
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".2s">
                  <a href="#" className="name-process">
                    Operational oceanography
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".2s">
                  Tidal evolution and the effects of climate change.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="process-item step-hover">
              <div className="process-top wow fadeInUp" data-wow-delay=".3s">
                <div className="icon wow fadeInUp" data-wow-delay=".3s">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>
                </div>
                <span
                  className="label text-btn-uppercase wow fadeInUp"
                  data-wow-delay=".3s"
                />
              </div>
              <div className="process-content">
                <h5 className="wow fadeInUp" data-wow-delay=".3s">
                  <a href="#" className="name-process">
                    Public health and high-occupancy buildings
                  </a>
                </h5>
                <div className="desc wow fadeInUp" data-wow-delay=".3s">
                  Preventing Legionella proliferation in DHW networks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
