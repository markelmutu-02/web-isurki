import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function CtaEN() {
  return (
    <section className="section-cta h-1 tf-spacing-3 section-one-page" id="cta">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-inner">
              <div className="image tf-animate-1">
                <Image
                  src="/image/team-item/about-us-contact.jpg"
                  alt="Contact Isurki"
                  className="lazyload"
                  width={344}
                  height={447}
                />
              </div>
              <div className="cta-content">
                <div className="heading-section style-color-white mb-0">
                  <Link
                    href={`/en/contact-us`}
                    className="tag label text-btn-uppercase bg-white wow fadeInUp"
                  >
                    Contact
                  </Link>
                  <h3 className="title-section wow fadeInUp mb-12">
                    Get in touch with us
                  </h3>
                  <div className="sub-title mb-28 body-2 wow fadeInUp"> Our team
                    is ready to answer your questions, offer you the best
                    solution and guide you every step of the way.
                  </div>
                  <div className="bottom">
                    <Link
                      href={`/en/contact-us`}
                      className="tf-btn style-1 bg-white wow fadeInUp"
                    >
                      <span>Request a consultation</span>
                    </Link>
                    <div className="tf-phone no-border color-white g-14">
                      <a href="tel:+34943635437" className="icon wow fadeInUp">
                        <i className="icon-PhoneCall" />
                      </a>
                      <div className="content wow fadeInUp">
                        <p className="caption-2 mb-2">Have a question?</p>
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
