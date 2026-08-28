"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const AreaLineChart = dynamic(() => import("../charts/CrealineChart"), {
  ssr: false,
});

export default function Details1() {
  return (
    <div className="tf-container tf-spacing-2">
      <div className="row rg-60">
        <div className="col-lg-8">
          <div className="case-studies-details">
            <div className="image-details image mb-40">
              <Image
                src="/image/section/DiagramaRiego.jpg"
                alt=""
                className="lazyload"
                width={850}
                height={512}
              />
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Descripción</h4>
              <div className="desc mb-16 body-2">
                Mejora en la eficiencia y uso de redes de riego a presión.
              </div>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Problemática</h4>
              <div className="desc mb-20 body-2">
                La comunidad de regantes de Aravell i Bellestar, en el norte de Lleida, cuenta con una red de riego construida en la década de los 70, compuesta por 11 km de canal a cielo abierto y 20 km de tubería a presión que suministran agua de riego a una superficie de 443 ha haciendo uso de una concesión del dominio público hidráulico otorgada por el organismo de cuenca de 800 l/s. El reto es cuantificar la eficiencia actual de la infraestructura hidráulica y optimizar su rendimiento, localizando fugas y modulando la presión de servicio a las necesidades de la demanda.
              </div>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">Solución</h4>
              <div className="desc mb-20 body-2">
                        ◦ <strong>Para el control de caudales captados (1) y retornados (2) en canal a cielo abierto:</strong> Instrumentación y dataloggers ISURLOG con comunicaciones NB-IoT y datos en la nube. <br/>
                        ◦ <strong>Para los ramales principales en tubería a presión, con dataloggers ISURLOG-NB:</strong>  <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;▪ Medición de caudal derivado en cabecera del ramal. <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;▪ Regulación de presión de servicio en función de la demanda. <br/>
                        ◦ <strong>Para las acometidas a las parcelas de cultivo individuales:</strong> <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;▪ Riego adaptativo en función de la humedad del suelo y de las condiciones meteorológicas con kit ISURDROP compuesto por caudalímetro ultrasónico, válvula on/off y datalogger IsurLog con comunicaciones LoRaWAN. Riego a demanda por franjas temporales o por m3 deseados.
              </div> <br/>
            </div>
            <div className="detalis-content mb-40">
              <h4 className="title-content mb-16">La opinión del cliente</h4>
              <div className="desc mb-20 body-2">
                "La implantación del sistema de control de riego desde la nube de ISURKI nos ha permitido optimizar la operativa y el consumo de agua para regar toda una parcela de 30 ha para cultivo de pasto para ganado de producción lechera en función de las necesidades de cada momento de la campaña". Carles Solans, propietario de la explotación agropecuaria SOLANS-CASTELLS.
              </div>
            </div>
            
            
            
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tf-sidebar sidebar-details ml-50">
            <div className="sideber-details">
              <div className="case-details-box mb-40">
                <h5 className="color-on-suface-container">Detalles</h5>
                <div className="box-item client flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Cliente:</span>
                  <span className="text-btn color-on-suface-container">
                    SOLANS-CASTELLS
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Etiqueta:</span>
                  <span className="text-btn color-on-suface-container">
                    Riego inteligente
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Fecha de inicio:</span>
                  <span className="text-btn color-on-suface-container">
                    Febrero 2025
                  </span>
                </div>
                <div className="box-item flex justify-content-between align-items-center">
                  <span className="color-on-suface-variant-1">Duración:</span>
                  <span className="text-btn color-on-suface-container number-month">
                    8 meses
                  </span>
                </div>
              </div>
            </div>
            <div className="sidebar-contact sidebar-details">
              <div className="section-content position-relative">
                <div className="heading-section style-color-white">
                  <Link
                    href={`/contact-us`}
                    className="tag label text-btn-uppercase color-white mb-16"
                  >
                    Contáctanos
                  </Link>
                  <h4 className="title-section mb-1">Ponte en contacto</h4>
                  <div className="sub-title caption-1">
                    Contacta con nosotros para que te ayudemos a cumplir tu proyecto.
                  </div>
                </div>
                <div className="list-box-contact style-column mb-28">
                  <div className="box-contact-item">
                    <div className="icon">
                      <i className="icon-MapPin" />
                    </div>
                    <div className="content">
                      <div className="caption-1 title-section-contact">
                        Dirección
                      </div>
                      <a
                        href="https://www.google.com/maps?q=C/+Gabiria+2,+20305+Irun,+Gipuzkoa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="caption-1 text"
                      >
                        C/ Gabiria n.2, Planta 1. Local P. Irún, 20305
                      </a>
                    </div>
                  </div>
                  <div className="box-contact-item">
                    <div className="icon">
                      <i className="icon-PhoneCall" />
                    </div>
                    <div className="content">
                      <div className="caption-1 title-section-contact">
                        Teléfono
                      </div>
                      <a href="tel:943635437" className="caption-1 text">
                        943 63 54 37
                      </a>
                    </div>
                  </div>
                  <div className="box-contact-item">
                    <div className="icon">
                      <svg
                        width={33}
                        height={33}
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_9360_10609)">
                          <path
                            d="M16.3335 28.75C22.4086 28.75 27.3335 23.8251 27.3335 17.75C27.3335 11.6749 22.4086 6.75 16.3335 6.75C10.2584 6.75 5.3335 11.6749 5.3335 17.75C5.3335 23.8251 10.2584 28.75 16.3335 28.75Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.3335 4.75L3.3335 8.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M25.3335 4.75L29.3335 8.75"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.3335 10.75V17.75H23.3335"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect
                              width={32}
                              height={32}
                              fill="white"
                              transform="translate(0.333496 0.75)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="content">
                      <div className="caption-1 title-section-contact">
                        Horario de trabajo
                      </div>
                      <span className="caption-1 text">
                        Lun-Vie: 8:00 - 19:00
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/contact-us`}
                  className="tf-btn style-1 bg-white bg-white-style-2 w-full text-center"
                >
                  <span> Contáctanos </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
