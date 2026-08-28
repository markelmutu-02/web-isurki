import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section className="section-why-choose h-4 tf-spacing-2">
      <div className="tf-container position-relative">
        <div className="row rg-60 align-items-center">
          <div className="col-lg-6">
            <div className="section-content">
              <div className="heading-section">
                <div className="text-anime-wave">
                  <a href="#" className="tag label text-btn-uppercase">
                    ¿Por qué elegirnos?
                  </a>
                </div>
                <h3 className="text-anime-wave mb-12">
                  Gestión inteligente <br />
                  de sus instalaciones
                </h3>
                <div className="sub-title body-2 text-anime-wave">
                  En Isurki ofrecemos una solución completamente integral:
                  un ecosistema propio en el que cada componente —hardware,
                  software e infraestructura— está diseñado, desarrollado y fabricado íntegramente
                  por nuestro equipo. Esto nos permite garantizar la máxima compatibilidad,
                  fiabilidad y soporte en todas las fases del proyecto (diseño, implantación, puesta en servicio y explotación).
                </div>
              </div>
              <div className="benefit-lists">
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Datalogger IsurLog
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Sensores y actuadores 
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Plataforma IsurDash
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Servidor propio
                  </div>
                </div>
              </div>
              {/*}
              <div className="text-anime-wave">
                <Link
                  href={`/contact-us`}
                  className="tf-btn style-1 bg-on-suface-container"
                >
                  <span> Schedule A Consultation</span>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image tf-animate-4">
              <Image
                src="/image/section/diagrama-ecosistema.png"
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
