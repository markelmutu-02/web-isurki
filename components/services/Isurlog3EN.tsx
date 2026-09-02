import React from "react";

export default function StepsEN() {
  return (
    <>
      <h4 className="title-content mb-16">Manufacturing process</h4>
      <div className="desc mb-32 body-2 color-on-suface-variant-1">
        Our process combines technical analysis, in-house manufacturing and
        continuous improvement to deliver reliable solutions. Every stage is
        designed to guarantee robustness, adaptability and maximum
        confidence in every installed device.
      </div>
      <div className="process-list style-column">
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-ChartPieSlice" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Analysis and design
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              We analyze the possible requirements of all kinds of clients
              and design a robust and adaptable solution, capable of
              responding to the needs of any environment.
            </div>
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-Crosshair1" />
          </div>
          <div className="circle" />
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Manufacturing and assembly
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              We manufacture and assemble each board, load the corresponding
              firmware and register the device on the IsurDash platform,
              ready to start working.
            </div>
          </div>
        </div>
        <div className="process-item style-3 style-3-2">
          <div className="icon">
            <i className="icon-ChartLineUp" />
          </div>
          <div className="process-content">
            <h5>
              <a href="#" className="name-process">
                Testing and feedback
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              We are in a continuous improvement process, running constant
              tests and adapting the analysis and design based on our
              clients' feedback.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
