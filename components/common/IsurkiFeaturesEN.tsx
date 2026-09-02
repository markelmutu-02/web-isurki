import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function FeaturesEN({
  parentClass = "section-why-choose h-2 tf-spacing-31",
  hasBorder = false,
}) {
  return (
    <section className={parentClass}>
      <div className="tf-container position-relative">
        <div
          className={` ${
            hasBorder
              ? "row rg-60 border-bottom tf-spacing-31"
              : "row rg-60 align-items-center"
          } `}
        >
          <div className="col-lg-6">
            <div className="image mr-15 tf-animate-1">
              <Image
                src="/image/section/img-section-why-choose-h2.jpg"
                alt="Why choose Isurki"
                className="lazyload"
                width={615}
                height={615}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-content ml-15">
              <div className="heading-section">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase">
                    Why choose us?
                  </a>
                </div>
                <h3 className="title-section wow fadeInUp mb-12">
                  We drive your progress with
                  <br />
                  tailor-made solutions.
                </h3>
                <div className="sub-title body-2 wow fadeInUp">
                  Choose us for our experience, our personalized solutions
                  and our commitment to your success. We design and
                  manufacture our own technology to deliver reliable and
                  long-lasting results.
                </div>
              </div>
              <div className="benefit-lists">
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Over 30 years of experience in instrumentation and monitoring.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    In-house design and manufacturing, with full technological independence.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1">
                    Custom solutions tailored to the needs of each project.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    IoT technology and cloud platforms for real-time control.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Ongoing support and guidance throughout the product's entire lifecycle.
                  </div>
                </div>
              </div>
              <Link
                href={`/en/contact-us`}
                className="tf-btn style-1 bg-on-suface-container wow fadeInUp"
              >
                <span> Request a consultation </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
