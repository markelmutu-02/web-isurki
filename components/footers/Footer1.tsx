"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import NewsLetterForm from "../common/NewsLetterForm";

export default function Footer1({ parentClass = "footer" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".title-mobile");

    const toggleOpen = (event: Event) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const parent = target.closest(".footer-col-block") as HTMLElement | null;
      if (!parent) return;
      const content = parent.querySelector(
        ".tf-collapse-content"
      ) as HTMLElement | null;
      if (!content) return;

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  return (
    <footer className={parentClass} id="footer">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-left">
                <div className="logo-footer">
                  <Link href={`/`} className="logo">
                    <Image
                      alt=""
                      src="/image/logo/logo.svg"
                      width={169}
                      height={41}
                    />
                  </Link>
                </div>
                <div className="text caption-1">
                  Instrumentación y control al servicio de su industria.  
                  <br />
                  Soluciones propias de captación, monitorización y gestión 
                  <br />
                  de datos, diseñadas para entornos exigentes.
                </div>
                <div className="contact-footer">
                  <div className="address contact-top contact-footer-content">
                    <p className="caption-2">Estamos en...</p>
                    <a
                      href="https://www.google.com/maps?q=C/+Gabiria+2,+20305+Irun,+Gipuzkoa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      C/ Gabiria n.2, Planta 1. Local P. Irún, 20305
                    </a>
                  </div>
                  <div className="contact-bottom">
                    <div className="contact-footer-content">
                      <p className="caption-2">Teléfono</p>
                      <a href="tel:943635437">943 63 54 37</a>
                    </div>
                    <div className="contact-footer-content">
                      <p className="caption-2">Correo electrónico</p>
                      <a href="mailto:isurki@isurki.com">isurki@isurki.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-center">
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Isurki
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>
                      <li className="support-item-footer caption-1">
                        <Link href={`/noticias`}>
                          Noticias
                        </Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/about-us`}>Sobre nosotros</Link>
                      </li>

                      <li className="support-item-footer caption-1">
                        <Link href={`/contact-us`}>Contacto</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Declaraciones
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>
                      <li className="support-item-footer caption-1">
                        <Link href={`/terminos-de-uso`}>Términos de uso</Link>
                      </li>

                      <li className="support-item-footer caption-1">
                        <Link href={`/politica-de-privacidad`}>Política de privacidad</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/politica-de-cookies`}>Política de cookies</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-subscribe">
                  <div className="label text-btn-uppercase">
                    Suscribete para no perderte nuestras novedades!
                  </div>
                  <NewsLetterForm />
                  <div className="text caption-2">
                    Date de alta para no perderte nuestras noticias y eventos sin spam!
                  </div>
                </div>
                <div className="footer-social">
                  <div className="title-footer">Puedes seguirnos en:</div>
                  <ul className="tf-social style-border radius-50 g-8 style-2">
                    <li className="item">
                      <a href="https://www.youtube.com/@Isurki613" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="#FF0000"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </div>
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
