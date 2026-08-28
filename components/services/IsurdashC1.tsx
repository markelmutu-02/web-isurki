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
                    Mapa resumen
                  </a>
                </div>
                <div className="sub-title body-2 text-anime-wave">
                  Mapa resumen que ofrece información visual sobre el estado de cada estación teniendo en cuenta el estado de conexión y la batería de cada una.
                </div>
              </div>
              
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image tf-animate-4">
              <Image
                src="/image/section/isurdashFeatures/Imágen9.png"
                alt=""
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
