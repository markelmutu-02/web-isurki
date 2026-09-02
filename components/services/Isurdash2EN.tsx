"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Isurdash3EN from "./Isurdash3EN"
const AreaLineChart = dynamic(() => import("../charts/CrealineChart"), {
  ssr: false,
});

export default function Performance() {
  return (
    <>
      <h4 className="title-content mb-16">
        Entirely our own
      </h4>
      <Isurdash3EN/>
      <div className="desc mb-32 body-2 color-on-suface-variant-1">
        At Isurki we understand that software is just as important as the hardware it controls.
        That is why IsurDash is developed with the same rigor and closeness to the customer that
        characterizes our whole ecosystem: we listen to the real needs of each project and turn
        them into concrete features, without depending on third parties or external deadlines.
      </div>

    </>
  );
}
