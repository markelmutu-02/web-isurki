"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Isurdash3EN from "./Isurdash3EN"
import IsurdashC1EN from "./IsurdashC1EN";
import IsurdashC2EN from "./IsurdashC2EN";
import IsurdashC5EN from "./IsurdashC5EN";
import IsurdashC4EN from "./IsurdashC4EN";
import IsurdashC3EN from "./IsurdashC3EN";
import IsurdashC6EN from "./IsurdashC6EN";
import IsurdashC7EN from "./IsurdashC7EN";
import IsurdashC8EN from "./IsurdashC8EN";
import IsurdashC9EN from "./IsurdashC9EN";

const AreaLineChart = dynamic(() => import("../charts/CrealineChart"), {
  ssr: false,
});

export default function Performance() {
  return (
    <>
      <h4 className="title-content mb-16">
        IsurDash features
      </h4>
      <br/>
      <IsurdashC1EN/>
      <br/>
      <IsurdashC2EN/>
      <br/>
      <IsurdashC3EN/>
      <br/>
      <IsurdashC4EN/>
      <br/>
      <IsurdashC5EN/>
      <br/>
      <IsurdashC6EN/>
      <br/>
      <IsurdashC7EN/>
      <br/>
      <IsurdashC8EN/>
      <br/>
      <IsurdashC9EN/>

    </>
  );
}
