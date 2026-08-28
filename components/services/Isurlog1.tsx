import React from "react";
import Image from "next/image";
export default function Solutions() {
  return (
    <>
      <h4 className="title-content mb-16">Datalogger inteligente con datos en la nube</h4>
      <div className="desc mb-16 body-2 color-on-suface-variant-1">
        ISURLOG es un datalogger inteligente de última generación que, además de las funciones propias de un registrador con conexión a la nube, ofrece:
      </div>
        <div className="benefit-lists">
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Comunicaciones remotas wireless por redes terrestres con contrato (NB-IoT), libres (LoRa, DECT-NR+) y satelitales (NB-IoT-NTN)</div>
          </div>
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Conectividad inalámbrica local mediante BlueTooth y WiFi</div>
          </div>
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Ultra bajo consumo: máxima autonomía de las pilas. Admite alimentación externa</div>
          </div>
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Sin ventanas; siempre a la escucha</div>
          </div>
        </div>
        
      
      
    </>
  );
}
