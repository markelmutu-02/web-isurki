import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Features({
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
                alt="Por qué elegir Isurki"
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
                    ¿Por qué elegirnos?
                  </a>
                </div>
                <h3 className="title-section wow fadeInUp mb-12">
                  Impulsamos tu progreso con
                  <br />
                  soluciones a medida.
                </h3>
                <div className="sub-title body-2 wow fadeInUp">
                  Elígenos por nuestra experiencia, nuestras soluciones
                  personalizadas y nuestro compromiso con tu éxito. Diseñamos y
                  fabricamos tecnología propia para ofrecerte resultados fiables
                  y duraderos.
                </div>
              </div>
              <div className="benefit-lists">
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Más de 30 años de experiencia en instrumentación y monitorización.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Diseño y fabricación propios, con total independencia tecnológica.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1">
                    Soluciones a medida adaptadas a las necesidades de cada proyecto.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Tecnología IoT y plataformas en la nube para el control en tiempo real.
                  </div>
                </div>
                <div className="benefit-items">
                  <div className="icon wow fadeInUp">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title wow fadeInUp" data-wow-delay=".1s">
                    Soporte y acompañamiento continuo durante toda la vida del producto.
                  </div>
                </div>
              </div>
              <Link
                href={`/contact-us`}
                className="tf-btn style-1 bg-on-suface-container wow fadeInUp"
              >
                <span> Solicita una consulta </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}