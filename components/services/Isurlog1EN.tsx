import React from "react";
export default function SolutionsEN() {
  return (
    <>
      <h4 className="title-content mb-16">Smart datalogger with cloud data</h4>
      <div className="desc mb-16 body-2 color-on-suface-variant-1">
        ISURLOG is a state-of-the-art smart datalogger that, on top of the
        usual functions of a cloud-connected logger, offers:
      </div>
      <div className="benefit-lists">
        <div className="benefit-items style-small mb-16">
          <div className="icon">
            <i className="icon-checkbox" />
          </div>
          <div className="title">
            Remote wireless communications over contracted terrestrial
            networks (NB-IoT), unlicensed (LoRa, DECT-NR+) and satellite
            (NB-IoT-NTN)
          </div>
        </div>
        <div className="benefit-items style-small mb-16">
          <div className="icon">
            <i className="icon-checkbox" />
          </div>
          <div className="title">
            Local wireless connectivity via Bluetooth and WiFi
          </div>
        </div>
        <div className="benefit-items style-small mb-16">
          <div className="icon">
            <i className="icon-checkbox" />
          </div>
          <div className="title">
            Ultra-low power consumption: maximum battery life. Supports
            external power
          </div>
        </div>
        <div className="benefit-items style-small mb-16">
          <div className="icon">
            <i className="icon-checkbox" />
          </div>
          <div className="title">No blind spots; always listening</div>
        </div>
      </div>
    </>
  );
}
