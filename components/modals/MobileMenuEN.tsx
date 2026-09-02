"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { MenuLink } from "@/types/menuLink";

const serviceLinksEN = [
  { title: "IsurLog", href: "/en/isurlog" },
  { title: "Sensorica", href: "/en/sensorica" },
  { title: "IsurDash", href: "/en/isurdash" },
];

export default function MobileMenuEN() {
  const pathname = usePathname();
  const isMenuActive = (link: MenuLink) => {
    return link.href?.split("/").slice(2).join("/") === pathname.split("/").slice(2).join("/");
  };
  const isMenuParentActive = (menu: MenuLink[]) => {
    return menu.some((elm) => isMenuActive(elm));
  };
  const isHomeActive = pathname === "/en";
  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      id="canvasMobileEN"
    >
      <div className="inner-mobile-nav">
        <div className="top-header-mobi">
          <div className="logo-mobile">
            <Link href={`/en`}>
              <Image
                alt="Isurki"
                src="/image/logo/logo-2.svg"
                width={169}
                height={40}
              />
            </Link>
          </div>
          <button
            className="mobile-nav-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="black"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 122.878 122.88"
              enableBackground="new 0 0 122.878 122.88"
              xmlSpace="preserve"
            >
              <g>
                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
              </g>
            </svg>
          </button>
        </div>
        <nav className="mobile-main-nav">
          <ul id="menu-mobile-en" className="menu">
            <li
              className={`menu-item ${
                isHomeActive ? "current-menu-mobile-item" : ""
              } `}
            >
              <Link href={`/en`}>Home</Link>
            </li>
            <li
              className={`menu-item menu-item-has-children-mobile ${
                isMenuParentActive(serviceLinksEN)
                  ? "current-menu-mobile-item"
                  : ""
              } `}
            >
              <a
                href="#dropdown-menu-2-en"
                data-bs-toggle="collapse"
                className="collapsed"
              >
                Products
              </a>
              <div
                id="dropdown-menu-2-en"
                className="collapse"
                data-bs-parent="#menu-mobile-en"
              >
                <ul className="sub-menu-mobile">
                  {serviceLinksEN.map((link, i) => (
                    <li
                      key={i}
                      className={`menu-item ${
                        isMenuActive(link) ? "current-menu-mobile-item" : ""
                      } `}
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className={`menu-item ${
                isMenuActive({ href: "/en/news" })
                  ? "current-menu-mobile-item"
                  : ""
              } `}
            >
              <Link href={`/en/news`}>News</Link>
            </li>
            <li
              className={`menu-item ${
                isMenuActive({ href: "/en/contact-us" })
                  ? "current-menu-mobile-item"
                  : ""
              } `}
            >
              <Link href={`/en/contact-us`}>Contact</Link>
            </li>
          </ul>
          <div className="contact-mobile">
            <h6 className="title-contact-mobile">Contact</h6>
            <div className="content-contact-moblile">
              <a
                href="https://www.google.com/maps?q=C/+Gabiria+2,+20305+Irun,+Gipuzkoa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-MapPin" /> C/ Gabiria n.2, Planta 1. Local
                P. Irun, 20305 (Spain)
              </a>
            </div>
            <div className="content-contact-moblile">
              <a href="mailto:isurki@isurki.com">
                <i className="icon-Envelope" /> isurki@isurki.com
              </a>
            </div>
            <div className="content-contact-moblile">
              <a href="tel:+34943635437">
                <i className="icon-PhoneCall" /> +34 943 63 54 37
              </a>
            </div>
            <div className="content-contact-moblile">
              <ul className="tf-social style-border radius-50 g-8 style-2 color-on-suface-container">
                <li className="item">
                  <a
                    href="https://www.youtube.com/@Isurki613"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon">
                      <svg
                        width={16}
                        height={16}
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
        </nav>
      </div>
    </div>
  );
}
