import React from "react";
import Image from "next/image";
export default function Solutions() {
  return (
    <>
      <h4 className="title-content mb-16">Dashboard for controlling the entire Isurki ecosystem</h4>
      <div className="desc mb-16 body-2 color-on-suface-variant-1">
        IsurDash is the software that fully controls the Isurki ecosystem, allowing you to view data, modify configurations and connect to IsurLog devices.
        Among other features, IsurDash stands out for:
      </div>
      <div className="cols g-10">
        <div className="benefit-lists">
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Clear and complete summary panel</div>
          </div>
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Role and permission management</div>
          </div>
          <div className="benefit-items style-small">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">
              A variety of charts for better data representation
            </div>
          </div>
        </div>
        <div className="benefit-lists">
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Customizable alarms</div>
          </div>
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">
              Connection to IsurLogs through different channels
            </div>
          </div>
          <div className="benefit-items style-small">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">
              Integration with external services
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
