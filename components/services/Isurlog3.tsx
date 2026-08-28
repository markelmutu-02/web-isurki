import React from "react";

export default function Steps() {
  return (
    <>
      <h4 className="title-content mb-16">Proceso de fabricación</h4>
      <div className="desc mb-32 body-2 color-on-suface-variant-1">
        Nuestro proceso combina análisis técnico, fabricación propia y mejora
        continua para ofrecer soluciones fiables. Cada etapa está pensada para
        garantizar robustez, adaptabilidad y la máxima confianza en cada
        dispositivo instalado.
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
                Análisis y diseño
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              Analizamos los posibles requisitos de todo tipo de clientes y
              diseñamos una solución robusta y adaptable, capaz de
              responder a las necesidades de cualquier entorno.
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
                Fabricación y ensamblado
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              Fabricamos y montamos cada placa, cargamos el firmware
              correspondiente y damos de alta el dispositivo en la plataforma
              IsurDash, listo para empezar a funcionar.
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
                Pruebas y opiniones
              </a>
            </h5>
            <div className="desc body-2 color-on-suface-variant-1">
              Nos encontramos en un proceso continuo de mejora, realizando
              pruebas constantes y adaptando el análisis y diseño según las
              opiniones de nuestros clientes.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}