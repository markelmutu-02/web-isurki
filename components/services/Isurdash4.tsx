"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Isurdash3 from "./Isurdash3"
import IsurdashC1 from "./IsurdashC1";
import IsurdashC2 from "./IsurdashC2";
import IsurdashC5 from "./IsurdashC5";
import IsurdashC4 from "./IsurdashC4";
import IsurdashC3 from "./IsurdashC3";
import IsurdashC6 from "./IsurdashC6";
import IsurdashC7 from "./IsurdashC7";
import IsurdashC8 from "./IsurdashC8";
import IsurdashC9 from "./IsurdashC9";

const AreaLineChart = dynamic(() => import("../charts/CrealineChart"), {
  ssr: false,
});

export default function Performance() {
  return (
    <>
      <h4 className="title-content mb-16">
        Funcionalidades de IsurDash
      </h4>
      <br/>
      <IsurdashC1/>
      <br/>
      <IsurdashC2/>
      <br/>
      <IsurdashC3/>
      <br/>
      <IsurdashC4/>
      <br/>
      <IsurdashC5/>
      <br/>
      <IsurdashC6/>
      <br/>
      <IsurdashC7/>
      <br/>
      <IsurdashC8/>
      <br/>
      <IsurdashC9/>
      
    </>
  );
}
