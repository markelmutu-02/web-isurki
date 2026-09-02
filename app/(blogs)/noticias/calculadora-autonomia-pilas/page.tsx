import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const TITLE = "Nueva calculadora de consumos y autonomía a pilas";
const DESCRIPTION =
  "Ya disponible la nueva calculadora de IsurLog para estimar el consumo y la autonomía a pilas según comunicaciones, latencia, tipo de pilas y sensores conectados.";
const IMAGE = "/image/blog/battery-calc1.jpg";
const DATE = "2026-09-02";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/noticias/calculadora-autonomia-pilas",
  },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: DATE,
    images: [IMAGE],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: TITLE,
  description: DESCRIPTION,
  image: [`https://isurki.com${IMAGE}`],
  datePublished: DATE,
  author: { "@type": "Organization", name: "Isurki" },
  publisher: {
    "@type": "Organization",
    name: "Isurki",
    logo: {
      "@type": "ImageObject",
      url: "https://isurki.com/image/logo/logo.svg",
    },
  },
};

const tableCell: React.CSSProperties = {
  padding: "10px 12px",
  borderBottom: "1px solid #e0e0e0",
  textAlign: "left",
};

const tableHeadCell: React.CSSProperties = {
  ...tableCell,
  fontWeight: 600,
  borderBottom: "2px solid #24283d",
};

export default function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">
                  Ya disponible la nueva calculadora de consumos y autonomía a
                  pilas
                </h2>
                <div className="sub-title body-2">
                  Producto &middot; 2 de septiembre de 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="blog-content blog-details-content mb-50">
                <div className="desc-blog">
                  <p className="body-2">
                    Isurki pone a disposición de sus clientes una nueva
                    calculadora de consumos y autonomía a pilas para la gama{" "}
                    <Link
                      href="/isurlog"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      IsurLog
                    </Link>
                    . La herramienta
                    permite simular distintos
                    escenarios de trabajo (comunicaciones, frecuencia de
                    lectura, tipo de pilas y sensores conectados) y estimar de
                    forma inmediata la autonomía resultante, facilitando la
                    elección de la configuración con mejor relación entre
                    prestaciones y autonomía.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      1. Factores configurables considerados en el cálculo
                    </h5>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>Comunicaciones:</strong> NB-IoT, LoRaWAN o
                        Wi-Fi.
                      </li>
                      <li className="body-2">
                        <strong>Tiempo de latencia:</strong> intervalo
                        temporal entre dos adquisiciones consecutivas de las
                        lecturas de los sensores conectados y su registro en
                        la memoria interna del datalogger.
                      </li>
                      <li className="body-2">
                        <strong>Periodo de refresco en la plataforma:</strong>{" "}
                        se configura introduciendo el número de registros
                        consecutivos al cabo del cual el datalogger procede a
                        subir los datos a la plataforma IsurDash.
                      </li>
                      <li className="body-2">
                        <strong>
                          Tipo, número de pilas y coeficiente de descarga
                        </strong>{" "}
                        que equipa la unidad.
                      </li>
                    </ul>

                    <div style={{ overflowX: "auto", marginBottom: 24 }}>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          minWidth: 480,
                        }}
                      >
                        <thead>
                          <tr>
                            <th style={tableHeadCell}>Tipo de pilas</th>
                            <th style={tableHeadCell}>Nº de unidades</th>
                            <th style={tableHeadCell}>
                              Coeficiente de descarga
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={tableCell}>
                              Recargables, química Li-Ion (tipo 18650)
                            </td>
                            <td style={tableCell}>De 1 a 5</td>
                            <td style={tableCell}>12% anual</td>
                          </tr>
                          <tr>
                            <td style={tableCell}>
                              No recargables, química Li-SOCl2
                            </td>
                            <td style={tableCell}>De 1 a 2</td>
                            <td style={tableCell}>1% anual</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="body-2">
                      Además, se tiene en cuenta el tipo y número de sensores
                      conectados, su tensión de alimentación, el consumo medio
                      previsto y el tiempo de pre-adquisición de cada uno:
                    </p>

                    <div style={{ overflowX: "auto", marginBottom: 24 }}>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          minWidth: 720,
                        }}
                      >
                        <thead>
                          <tr>
                            <th style={tableHeadCell}>Tipo de sensor</th>
                            <th style={tableHeadCell}>Nº</th>
                            <th style={tableHeadCell}>
                              Tensión de alimentación
                            </th>
                            <th style={tableHeadCell}>Consumo medio</th>
                            <th style={tableHeadCell}>
                              Tiempo de pre-adquisición
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={tableCell}>
                              Salida analógica 4-20 mA
                            </td>
                            <td style={tableCell}>0 a 4</td>
                            <td style={tableCell}>9-12-18-24 Vcc</td>
                            <td style={tableCell}>4 a 20 mA</td>
                            <td style={tableCell}>0 a 10000 ms</td>
                          </tr>
                          <tr>
                            <td style={tableCell}>Modbus RTU</td>
                            <td style={tableCell}>0 a 4</td>
                            <td style={tableCell}>9-12-18-24 Vcc</td>
                            <td style={tableCell}>5 a 80 mA</td>
                            <td style={tableCell}>0 a 10000 ms</td>
                          </tr>
                          <tr>
                            <td style={tableCell}>Entrada digital</td>
                            <td style={tableCell}>0 a 1</td>
                            <td style={tableCell}>&ndash;</td>
                            <td style={tableCell}>0,1 a 50 mA</td>
                            <td style={tableCell}>5 a 5000 ms</td>
                          </tr>
                          <tr>
                            <td style={tableCell}>Pt100</td>
                            <td style={tableCell}>0 a 1</td>
                            <td style={tableCell}>&ndash;</td>
                            <td style={tableCell}>0,1 a 50 mA</td>
                            <td style={tableCell}>5 a 5000 ms</td>
                          </tr>
                          <tr>
                            <td style={tableCell}>
                              Sensor interno de temperatura y H.R.
                            </td>
                            <td style={tableCell}>0 a 1</td>
                            <td style={tableCell}>&ndash;</td>
                            <td style={tableCell}>0,1 a 50 mA</td>
                            <td style={tableCell}>5 a 5000 ms</td>
                          </tr>
                          <tr>
                            <td style={tableCell}>
                              Acelerómetro interno
                            </td>
                            <td style={tableCell}>0 a 1</td>
                            <td style={tableCell}>&ndash;</td>
                            <td style={tableCell}>0,1 a 50 mA</td>
                            <td style={tableCell}>5 a 5000 ms</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">2. Resultados de cálculo</h5>
                    <p className="body-2">
                      Una vez que el usuario ha introducido los datos
                      necesarios para configurar su escenario de trabajo, la
                      aplicación muestra los resultados obtenidos, con una
                      estimación del tiempo de autonomía y una segmentación de
                      las diferentes tareas que afectan al consumo, de forma
                      que el usuario pueda simular diferentes escenarios hasta
                      determinar el que ofrece una mejor relación
                      prestaciones-autonomía.
                    </p>
                    <p className="body-2">
                      El ejemplo de la captura siguiente muestra los
                      resultados obtenidos para una unidad ISURLOG funcionando
                      en las siguientes condiciones:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">Comunicaciones NB-IoT.</li>
                      <li className="body-2">
                        Tiempo de adquisición y registro: 10 minutos.
                      </li>
                      <li className="body-2">
                        Intervalo de actualización en la nube: 1 hora.
                      </li>
                      <li className="body-2">
                        Alimentación mediante dos baterías Li-SOCl2.
                      </li>
                    </ul>

                    <div className="image-blog image-blog-sm">
                      <Image
                        src="/image/blog/calc-interface2.jpg"
                        alt="Interfaz de la calculadora de consumos y autonomía a pilas de IsurLog"
                        className="lazyload"
                        width={800}
                        height={600}
                      />
                    </div>

                    <p className="body-2">
                      Obteniéndose como resultado en este escenario una
                      autonomía de 5,8 años y el conjunto de datos
                      adicionales recogidos en la captura adjunta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
