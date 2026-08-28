"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import NavOnepage from "./NavOnepage";

export default function Header1({ onepage = false }) {
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header style-1 style-absolute header-fixed ${
        isFixed ? "is-fixed" : ""
      } `}
      id="header"
    >
      <div className="tf-container w-1870">
        <div className="row">
          <div className="col-12">
            <div className="header-content">
              <div className="header-left">
                <div className="logo">
                  <Link href={`/`}>
                    <Image
                      alt="Isurki"
                      src="/image/logo/logo.svg"
                      width={169}
                      height={40}
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul
                    className={` menu-primary-menu ${
                      onepage ? "navigation" : ""
                    } `}
                  >
                    {onepage ? <NavOnepage /> : <Nav />}
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="nav-btn">
                  <Link
                    href={`/contact-us`}
                    className="tf-btn bg-white style-1 hover-bg-primary"
                  >
                    <span>Ponte en contacto</span>
                  </Link>
                </div>
                <div className="nav-icon">
                  <div className="mobile-button">
                    <a href="#canvasMobile" data-bs-toggle="offcanvas">
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
