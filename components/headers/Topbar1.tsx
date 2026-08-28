import React from "react";
import LanguageDropdown from "./LanguageSelect";

export default function Topbar1() {
  return (
    <div className="top-bar">
      <div className="tf-container w-1870">
        <div className="row">
          <div className="col-12">
            <div className="top-bar-inner">
              <div className="tf-tb-left">
                <div className="top-bar-content">
                  <i className="icon-MapPin" />
                  <p className="caption-1">
                    C/ Gabiria n.2, Planta 1. Local P. Irún, 20305
                  </p>
                </div>
                <div className="top-bar-content">
                  <i className="icon-Envelope" />
                  <a href="mailto:isurki@isurki.com" className="caption-1 color-white">
                    isurki@isurki.com
                  </a>
                </div>
                <LanguageDropdown />
              </div>
              <div className="tf-tb-right">
                <div className="top-bar-content tf-phone-topbar">
                  <div className="icon">
                    <i className="icon-PhoneCall" />
                  </div>
                  <p className="text-btn">943 63 54 37</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
