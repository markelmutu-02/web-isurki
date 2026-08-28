import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Cta() {
  return (
    <section className="section-cta h-1 tf-spacing-3 section-one-page" id="cta">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-inner">
              <div className="image tf-animate-1">
                <Image
                  src="/image/team-item/about-us-contact.jpg"
                  alt="Contacta con Isurki"
                  className="lazyload"
                  width={344}
                  height={447}
                />
              </div>
              <div className="cta-content">
                <div className="heading-section style-color-white mb-0">
                  <Link
                    href={`/contact-us`}
                    className="tag label text-btn-uppercase bg-white wow fadeInUp"
                  >
                    Contacto
                  </Link>
                  <h3 className="title-section wow fadeInUp mb-12">
                    Ponte en contacto con nosotros
                  </h3>
                  <div className="sub-title mb-28 body-2 wow fadeInUp"> Nuestro equipo
                    está listo para resolver tus dudas, ofrecerte la mejor
                    solución y acompañarte en cada paso del camino.
                  </div>
                  <div className="bottom">
                    <Link
                      href={`/contact-us`}
                      className="tf-btn style-1 bg-white wow fadeInUp"
                    >
                      <span>Solicita una consulta</span>
                    </Link>
                    <div className="tf-phone no-border color-white g-14">
                      <a href="tel:+34943635437" className="icon wow fadeInUp">
                        <i className="icon-PhoneCall" />
                      </a>
                      <div className="content wow fadeInUp">
                        <p className="caption-2 mb-2">¿Tienes alguna pregunta?</p>
                        <h6>
                          <a href="tel:+34943635437">943 63 54 37</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}