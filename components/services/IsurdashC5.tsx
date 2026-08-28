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
                    Gráficos avanzados
                  </a>
                </div>
                <div className="sub-title body-2 text-anime-wave">
                  La visualización se complementa con gráficos avanzados de diferentes tipos, para representar los datos de diferentes maneras. También disponibles en bluetooth con graficado en vivo
                </div>
              </div>
              
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image tf-animate-4">
              <Image
                src="/image/section/isurdashFeatures/Imágen10.png"
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
