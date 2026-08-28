"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
const AreaLineChart = dynamic(() => import("../charts/CrealineChart"), {
  ssr: false,
});

export default function Performance() {
  return (
    <>
      <h4 className="title-content mb-16">
        Diseño y fabricación propios
      </h4>
      <div className="desc mb-32 body-2 color-on-suface-variant-1">
        En Isurki controlamos cada fase del proceso, desde el diseño hasta la instalación final.
        El diseño de nuestras placas es enteramente propio. Una vez fabricadas con sus componentes soldados, cargamos en nuestras instalaciones el firmware, también desarrollado por nuestro equipo, dando vida a cada dispositivo.
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
        Además, diseñamos y fabricamos con impresoras 3D propias las carcasas que protegen las placas, adaptándolas a cada entorno de instalación. Completamos el ecosistema con accesorios a medida, como placas solares que recargan las pilas de nuestros dispositivos y garantizan su autonomía en cualquier ubicación.
        Este control total sobre diseño y fabricación nos permite ofrecer calidad, fiabilidad y capacidad de personalización que no dependen de terceros.
      </div>
      
    </>
  );
}
