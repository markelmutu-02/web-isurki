"use client";
import React from "react";

export default function PerformanceEN() {
  return (
    <>
      <h4 className="title-content mb-16">Our own design and manufacturing</h4>
      <div className="desc mb-32 body-2 color-on-suface-variant-1">
        At Isurki we control every phase of the process, from design to
        final installation. Our board design is entirely our own. Once
        manufactured with their components soldered, we load the firmware
        at our own facilities — also developed by our team — bringing each
        device to life.
      </div>
      <div>
        <video
          src="/image/section/timelapseprinter.mp4"
          width={850}
          height={512}
          autoPlay
          loop
          muted
          playsInline
          className="lazyload"
        />
      </div>
      <div className="desc mb-32 body-2 color-on-suface-variant-1">
        We also design and manufacture, with our own 3D printers, the
        enclosures that protect the boards, adapting them to each
        installation environment. We complete the ecosystem with custom
        accessories, such as solar panels that recharge our devices'
        batteries and guarantee their autonomy at any location. This total
        control over design and manufacturing lets us offer quality,
        reliability and a level of customization that doesn't depend on
        third parties.
      </div>
    </>
  );
}
