import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section className="section-why-choose h-4 tf-spacing-0">
      <div className="tf-container position-relative">
        <div className="row rg-60 align-items-center">
          <div className="col-lg-6">
            <div className="section-content">
              <div className="heading-section">
                <div className="wow fadeInUp">
                  <a href="#" className="tag label text-btn-uppercase">
                    Firmware updates
                  </a>
                </div>
                <div className="sub-title body-2 text-anime-wave">
                  Ability to update the Isurlog firmware via USB (serial port), or remotely in the case of NB-IoT units. Files are downloaded automatically from GitHub so the user does not need to provide update files
                </div>
              </div>


            </div>
          </div>
          <div className="col-lg-6">
            <div className="image tf-animate-4">
              <Image
                src="/image/section/isurdashFeatures/Imágen2.png"
                alt="Remote firmware update for IsurLog"
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
