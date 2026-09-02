"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import NewsLetterForm from "../common/NewsLetterForm";

export default function Footer1EN({ parentClass = "footer" }) {
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

    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []);

  return (
    <footer className={parentClass} id="footer">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-left">
                <div className="logo-footer">
                  <Link href={`/en`} className="logo">
                    <Image
                      alt="Isurki"
                      src="/image/logo/logo.svg"
                      width={169}
                      height={41}
                    />
                  </Link>
                </div>
                <div className="text caption-1">
                  Instrumentation and control for your industry.
                  <br />
                  Our own data acquisition, monitoring and management
                  <br />
                  solutions, designed for demanding environments.
                </div>
                <div className="contact-footer">
                  <div className="address contact-top contact-footer-content">
                    <p className="caption-2">Find us at...</p>
                    <a
                      href="https://www.google.com/maps?q=C/+Gabiria+2,+20305+Irun,+Gipuzkoa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      C/ Gabiria n.2, Planta 1. Local P. Irun, 20305 (Spain)
                    </a>
                  </div>
                  <div className="contact-bottom">
                    <div className="contact-footer-content">
                      <p className="caption-2">Phone</p>
                      <a href="tel:+34943635437">+34 943 63 54 37</a>
                    </div>
                    <div className="contact-footer-content">
                      <p className="caption-2">Email</p>
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
                        <Link href={`/en/news`}>News</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/en/about-us`}>About us</Link>
                      </li>

                      <li className="support-item-footer caption-1">
                        <Link href={`/en/contact-us`}>Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-content our-services footer-col-block">
                  <div className="title-mobile label text-btn-uppercase">
                    Legal
                    <i className="icon-arrow-51" />
                  </div>
                  <div className="tf-collapse-content">
                    <ul>
                      <li className="support-item-footer caption-1">
                        <Link href={`/en/terms-of-use`}>Terms of use</Link>
                      </li>

                      <li className="support-item-footer caption-1">
                        <Link href={`/en/privacy-policy`}>Privacy policy</Link>
                      </li>
                      <li className="support-item-footer caption-1">
                        <Link href={`/en/cookie-policy`}>Cookie policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-subscribe">
                  <div className="label text-btn-uppercase">
                    Subscribe to get our latest updates!
                  </div>
                  <NewsLetterForm lang="en" />
                  <div className="text caption-2">
                    Sign up to stay up to date with our news and events, no
                    spam!
                  </div>
                </div>
                <div className="footer-social">
                  <div className="title-footer">Follow us:</div>
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
