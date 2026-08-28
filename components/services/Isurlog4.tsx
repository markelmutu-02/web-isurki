import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <section className="section-why-choose">
      <div className="tf-container position-relative">
        <div className="row rg-60">
          <div className="col-12">
            <div className="section-content">
              <div className="heading-section">
                <div className="text-anime-wave">
                  <a href="#" className="tag label text-btn-uppercase">
                    ¿Por qué Isurlog?
                  </a>
                </div>
                <h3 className="text-anime-wave mb-12">
                  Características principales
                </h3>
                <div className="sub-title body-2 text-anime-wave">
                  ISURLOG es un datalogger inteligente de última generación que, además de las funciones propias de un registrador con conexión a la nube, permite:
                </div>
              </div>
              <div className="benefit-lists">
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Integrar comunicaciones remotas inalámbricas a través de redes de datos terrestres (NB-IoT), satelitales (NB-IoT-NTN) y propietarias (LoRa).
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Incorporar conectividad inalámbrica local mediante BlueTooth y WiFi.
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Gestionar el consumo del dispositivo para garantizar la máxima autonomía de las pilas.
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Ofrecer información constante sobre los parámetros de los sensores y estados de dispositivos conectados, incluyendo el control de actuadores de campo.
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Permitir la configuración inalámbrica remota y local, desde cualquier dispositivo con conexión a internet y/o comunicaciones Bluetooth, de los parámetros operativos del sistema.
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Enviar mensajes en tiempo real, mediante email, SMS y mensajería Telegram, sobre alarmas y diagnóstico de funcionamiento, tanto del proceso a controlar como de las propias unidades ISURLOG que lo controlan.
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Generar automáticamente una base de datos de registros históricos con alojamiento en la nube, que permita analizar y optimizar el funcionamiento de la infraestructura a controlar.
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Gestionar remotamente el parque de unidades instaladas, mediante la plataforma en la nube IsurDash.
                  </div>
                </div>
                <div className="benefit-items text-anime-wave">
                  <div className="icon">
                    <i className="icon-checkbox" />
                  </div>
                  <div className="title">
                    Integrar un sensor interior de temperatura y humedad para monitorizar las condiciones operativas.
                  </div>
                </div>
              </div>
              {/*}
              <div className="text-anime-wave">
                <Link
                  href={`/contact-us`}
                  className="tf-btn style-1 bg-on-suface-container"
                >
                  <span> Schedule A Consultation</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}