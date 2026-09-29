import React from "react";
import Link from "next/link";
import { Metadata } from "next";

const TITLE = "NB-IoT vs LoRa vs satélite: guía para elegir la conectividad de tu proyecto IoT";
const DESCRIPTION =
  "Diferencias entre NB-IoT, LoRa/LoRaWAN, satélite (NB-IoT-NTN) y WiFi para un proyecto IoT industrial, y cómo elegir la opción correcta según el emplazamiento.";
const DATE = "2026-09-24";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/guias/lora-vs-nb-iot",
  },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: DATE,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
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
                <h1 className="title-page-title">
                  NB-IoT vs LoRa vs satélite: guía para elegir la
                  conectividad de tu proyecto IoT
                </h1>
                <div className="sub-title body-2">
                  Guía &middot; 24 de septiembre de 2026
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
                    Si ya sabes qué es un{" "}
                    <Link
                      href="/guias/que-es-un-datalogger-iot"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      datalogger IoT
                    </Link>
                    , el siguiente paso suele ser una pregunta que no tiene
                    una respuesta única: ¿cómo va a comunicarse? La elección
                    de conectividad no es solo una cuestión técnica —
                    condiciona el coste, el consumo, y sobre todo si el
                    dispositivo va a funcionar de verdad en el emplazamiento
                    real, que casi nunca coincide exactamente con lo previsto
                    sobre el papel.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      NB-IoT: aprovechar la red móvil que ya existe
                    </h5>
                    <p className="body-2">
                      NB-IoT (Narrowband IoT) es una tecnología celular:
                      utiliza las mismas antenas y bandas con licencia que la
                      telefonía móvil 4G/LTE, mediante una SIM de datos. Su
                      gran ventaja es que no requiere desplegar
                      infraestructura propia — si hay cobertura móvil en el
                      emplazamiento, el dispositivo funciona sin más. A
                      cambio, depende de un operador (con su correspondiente
                      contrato/tarifa de datos) y consume algo más de energía
                      que otras alternativas de bajo consumo.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      LoRa / LoRaWAN: red propia, sin depender de un operador
                    </h5>
                    <p className="body-2">
                      LoRa utiliza espectro sin licencia y una modulación
                      propia de largo alcance. A diferencia de NB-IoT, no
                      necesita SIM ni contrato — pero sí requiere desplegar
                      una puerta de enlace (gateway) propia, que hace de
                      punto de acceso para todos los dispositivos LoRa de la
                      zona. Es la opción natural cuando no hay cobertura
                      móvil, o cuando se quiere evitar por completo la
                      dependencia de un operador — por ejemplo, con muchos
                      dispositivos concentrados en una misma zona (una
                      planta, una comunidad de regantes, un polígono),
                      compensa el coste de instalar un único gateway para
                      todos ellos.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      Satélite (NB-IoT-NTN): cuando no hay ninguna cobertura
                      terrestre
                    </h5>
                    <p className="body-2">
                      Las redes satelitales no terrestres (NTN) permiten que
                      un dispositivo NB-IoT se comunique directamente con un
                      satélite en lugar de una antena terrestre, usando
                      básicamente la misma pila de protocolos. Es la única
                      opción realista para emplazamientos sin cobertura móvil
                      ni posibilidad de desplegar un gateway LoRa cercano —
                      zonas despobladas, forestales, costeras, plataformas
                      offshore o infraestructuras lineales que cruzan
                      grandes extensiones sin ningún tipo de red.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      WiFi: la opción más simple, cuando ya está disponible
                    </h5>
                    <p className="body-2">
                      Si el emplazamiento ya cuenta con red WiFi propia (una
                      nave industrial, un edificio, una instalación con
                      infraestructura de red existente), usarla directamente
                      es la opción más simple: no añade coste de
                      conectividad ni depende de cobertura externa, aunque
                      limita el dispositivo al alcance de esa red.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">Comparativa rápida</h5>
                    <div style={{ overflowX: "auto", marginBottom: 24 }}>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          minWidth: 640,
                        }}
                      >
                        <thead>
                          <tr>
                            <th style={tableHeadCell}>Tecnología</th>
                            <th style={tableHeadCell}>Requiere</th>
                            <th style={tableHeadCell}>Cobertura</th>
                            <th style={tableHeadCell}>Consumo</th>
                            <th style={tableHeadCell}>Mejor para...</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={tableCell}>NB-IoT</td>
                            <td style={tableCell}>SIM + contrato de datos</td>
                            <td style={tableCell}>
                              Donde ya hay red móvil 4G/LTE
                            </td>
                            <td style={tableCell}>Medio</td>
                            <td style={tableCell}>
                              Puntos dispersos con cobertura móvil
                            </td>
                          </tr>
                          <tr>
                            <td style={tableCell}>LoRa / LoRaWAN</td>
                            <td style={tableCell}>Gateway propio</td>
                            <td style={tableCell}>
                              La que cubra el gateway (largo alcance)
                            </td>
                            <td style={tableCell}>Muy bajo</td>
                            <td style={tableCell}>
                              Muchos dispositivos concentrados en una zona
                              sin cobertura móvil
                            </td>
                          </tr>
                          <tr>
                            <td style={tableCell}>Satélite (NB-IoT-NTN)</td>
                            <td style={tableCell}>Plan de datos satelital</td>
                            <td style={tableCell}>Global</td>
                            <td style={tableCell}>Medio</td>
                            <td style={tableCell}>
                              Emplazamientos sin ninguna cobertura terrestre
                            </td>
                          </tr>
                          <tr>
                            <td style={tableCell}>WiFi</td>
                            <td style={tableCell}>Red WiFi existente</td>
                            <td style={tableCell}>
                              La del propio emplazamiento
                            </td>
                            <td style={tableCell}>Variable</td>
                            <td style={tableCell}>
                              Instalaciones con red ya disponible
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">¿Cómo elegir?</h5>
                    <p className="body-2">
                      En la práctica, la respuesta correcta casi nunca es
                      "siempre la misma tecnología" — depende del
                      emplazamiento concreto, y en proyectos con varios
                      puntos de instalación puede que la respuesta sea
                      distinta para cada uno. Por eso, cada vez más, la
                      pregunta relevante no es "¿qué tecnología elijo?" sino
                      "¿necesito un dispositivo que me obligue a elegir de
                      antemano, o uno que se adapte a lo que me encuentre en
                      cada sitio?".
                    </p>
                  </div>
                </div>

                <div className="desc-blog">
                  <h5 className="title-desc">Cómo lo aplicamos en IsurLog</h5>
                  <p className="body-2">
                    En nuestros proyectos combinamos estas tecnologías según
                    lo que pide cada emplazamiento, sin cambiar de datalogger.
                    En el proyecto de{" "}
                    <Link
                      href="/mareografos-details"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      mareógrafos
                    </Link>
                    , con puntos de medición dispersos a lo largo de la costa,
                    usamos IsurLog con <strong>NB-IoT</strong>: aprovechar la
                    cobertura móvil ya existente evita desplegar
                    infraestructura propia en cada punto.
                  </p>
                  <p className="body-2">
                    En instalaciones con muchos puntos concentrados en una
                    misma zona — como en el control de cadena de frío en{" "}
                    <Link
                      href="/control-vacunas-details"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      centros de salud
                    </Link>{" "}
                    o el{" "}
                    <Link
                      href="/control-ACS-details"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      control de Legionela
                    </Link>{" "}
                    — desplegamos en cambio redes <strong>LoRa</strong>{" "}
                    propias con sus gateways correspondientes, evitando
                    depender de un operador y reduciendo el coste por punto
                    cuando hay decenas de nodos.
                  </p>
                  <p className="body-2">
                    Incluso dentro de un mismo proyecto combinamos
                    tecnologías: en el de{" "}
                    <Link
                      href="/control-riego-details"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      riego inteligente
                    </Link>
                    , el datalogger principal se comunica por NB-IoT,
                    mientras que los kits ISURDROP de las tomas de riego usan
                    LoRaWAN — cada punto con la conectividad que mejor
                    encaja, sin obligar a unificar todo el proyecto bajo una
                    única tecnología.
                  </p>
                  <p className="body-2">
                    Para emplazamientos sin ninguna cobertura terrestre
                    estamos incorporando conectividad{" "}
                    <strong>satelital (NB-IoT-NTN)</strong>, actualmente en
                    fase de evaluación de equipos, y ofrecemos{" "}
                    <strong>WiFi</strong> como opción sencilla cuando el
                    emplazamiento ya cuenta con red propia.
                  </p>
                  <p className="body-2">
                    Más información en la página de{" "}
                    <Link
                      href="/isurlog"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      IsurLog
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
