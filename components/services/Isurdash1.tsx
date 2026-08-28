import React from "react";
import Image from "next/image";
export default function Solutions() {
  return (
    <>
      <h4 className="title-content mb-16">Dashboard para el control del ecosistema de Isurki</h4>
      <div className="desc mb-16 body-2 color-on-suface-variant-1">
        IsurDash es el software que controla por completo el ecosistema de Isurki, permitiendo visualizar datos, modificar configuraciones y conectar con los dispositivos IsurLog.
        Entre otras características, IsurDash destaca por:
      </div>
      <div className="cols g-10">
        <div className="benefit-lists">
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Panel resumen claro y completo</div>
          </div>
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Control de roles y permisos</div>
          </div>
          <div className="benefit-items style-small">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">
              Variedad de gráficos para mejor representación
            </div>
          </div>
        </div>
        <div className="benefit-lists">
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">Alarmas personalizables</div>
          </div>
          <div className="benefit-items style-small mb-16">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">
              Conexión con IsurLogs por diferentes vías
            </div>
          </div>
          <div className="benefit-items style-small">
            <div className="icon">
              <i className="icon-checkbox" />
            </div>
            <div className="title">
              Integración con servicios externos
            </div>
          </div>
        </div>
      </div>
    </>
  );
}