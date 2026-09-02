"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavEN from "./NavEN";

export default function Header1EN() {
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
                  <Link href={`/en`}>
                    <Image
                      alt="Isurki"
                      src="/image/logo/logo.svg"
                      width={169}
                      height={40}
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul className=" menu-primary-menu ">
                    <NavEN />
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <div className="nav-btn">
                  <Link
                    href={`/en/contact-us`}
                    className="tf-btn bg-white style-1 hover-bg-primary"
                  >
                    <span>Get in touch</span>
                  </Link>
                </div>
                <div className="nav-icon">
                  <div className="mobile-button">
                    <a href="#canvasMobileEN" data-bs-toggle="offcanvas">
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
