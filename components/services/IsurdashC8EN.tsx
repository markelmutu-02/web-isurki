import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Features({
  parentClass = "section-why-choose h-2 tf-spacing-0",
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
                src="/image/section/isurdashFeatures/Imágen1.png"
                alt="IsurDash MicroPython REPL console"
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
                    MicroPython REPL console
                  </a>
                </div>

                <div className="sub-title body-2 wow fadeInUp">
                  MicroPython REPL console for running Python commands on the Isurlog by connecting via USB (serial port), or remotely in the case of NB-IoT units.
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
