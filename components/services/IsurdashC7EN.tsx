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
                    Live orientation (Bluetooth)
                  </a>
                </div>
                <div className="sub-title body-2 text-anime-wave">
                  Orientation can be displayed live, without having to wait for the next transmission; by connecting via Bluetooth to the Isurlog, the orientation is shown in real time
                </div>
              </div>


            </div>
          </div>
          <div className="col-lg-6">
            <div className="image tf-animate-4">
              <Image
                src="/image/section/isurdashFeatures/Imágen8.png"
                alt="Live orientation over Bluetooth in IsurDash"
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
