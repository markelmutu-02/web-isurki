"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Isurdash3 from "./Isurdash3"
const AreaLineChart = dynamic(() => import("../charts/CrealineChart"), {
  ssr: false,
});

export default function Performance() {
  return (
    <>
      <h4 className="title-content mb-16">
        Completamente nuestro
      </h4>
      <Isurdash3/>
      <div className="desc mb-32 body-2 color-on-suface-variant-1">
        En Isurki entendemos que el software es tan importante como el hardware que controla. 
        Por eso IsurDash se desarrolla con el mismo rigor y cercanía al cliente que caracteriza 
        a todo nuestro ecosistema: escuchamos las necesidades reales de cada proyecto y las 
        convertimos en funciones concretas, sin depender de terceros ni de plazos ajenos.
      </div>
      
    </>
  );
}
