import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const TITLE = "Conectividad satelital NTN ya disponible en IsurLog";
const DESCRIPTION =
  "IsurLog incorpora de serie conectividad satelital NTN, permitiendo desplegar dataloggers IoT en zonas sin cobertura terrestre sin necesidad de un módem satelital independiente.";
const IMAGE = "/image/blog/isurlog-ntn.jpg";
const DATE = "2026-09-23";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/noticias/conectividad-satelital-ntn",
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
                  Conectividad satelital NTN ya disponible en IsurLog
                </h1>
                <div className="sub-title body-2">
                  Producto &middot; 23 de septiembre de 2026
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
                    La conectividad satelital siempre ha supuesto un reto en
                    complejidad y coste que tradicionalmente los usuarios se
                    mostraban reticentes a abordar. Un módem satelital
                    dedicado por sí solo puede costar hoy en día más que una
                    unidad{" "}
                    <Link
                      href="/isurlog"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      ISURLOG
                    </Link>{" "}
                    completa — antes de haber añadido un solo sensor, una
                    carcasa o una batería que sobreviva una temporada en el
                    campo. Este reto ha trazado silenciosamente una línea roja
                    en el mapa: todo lo que está dentro de la cobertura
                    celular recibe IoT en tiempo real, y todo lo que está
                    fuera de ella — las áreas despobladas, las masas
                    forestales, la línea de costa, la plataforma offshore, el
                    oleoducto que cruza un campo abierto — está condenado a
                    una descarga de datos presencial cableada, en el mejor de
                    los casos.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      NTN es la razón por la que esta línea empieza a
                      difuminarse
                    </h5>
                    <p className="body-2">
                      Las redes satelitales no terrestres (NTN) hacen algo
                      engañosamente sencillo: permiten que un dispositivo
                      NB-IoT normal comunique con un satélite usando la misma
                      pila de protocolos que ya utiliza para comunicarse con
                      una antena de telefonía móvil. No hay radio satélite
                      propietaria. No hay un segundo módem ajeno al
                      datalogger. No hay un ecosistema separado que integrar.
                      Si el módem de tu dispositivo soporta NTN, como en el
                      caso de ISURLOG, enlazar con un satélite es una
                      capacidad de firmware, que no implica un rediseño de
                      hardware.
                    </p>
                  </div>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src={IMAGE}
                    alt="Conectividad satelital NTN en IsurLog"
                    className="lazyload"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    <strong>Conclusión:</strong> NTN forma parte de la
                    ejecución estándar de ISURLOG y permite el despliegue de
                    dataloggers IoT en zonas sin cobertura terrestre.
                  </p>
                  <p className="body-2">
                    <a
                      href="https://docs.isurlog.isurki.com/blog/2026/08/31/ntn-on-the-nrf9151-low-cost-satellite-iot-without-a-separate-satellite-modem/#limitations-and-whats-next"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      ¿Quieres probar? ¡Te lo ponemos fácil!
                    </a>
                  </p>
                  <p className="body-2">
                    Si tienes un escenario operativo en el que NTN realmente
                    se justifica — un sitio al que NB-IoT terrestre o GPRS
                    simplemente no puede llegar — nos gustaría proponerte un
                    programa de evaluación.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">Lo que ofrece Isurki</h5>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        Una unidad de evaluación — un datalogger
                        ISURLOG-NTN, sin coste de adquisición.
                      </li>
                      <li className="body-2">
                        Conectividad global — acceso a una solución que
                        garantiza la recepción de datos de los sensores desde
                        cualquier lugar del planeta.
                      </li>
                      <li className="body-2">
                        Es tuyo para siempre: una vez completado el periodo
                        de evaluación de un año, la unidad es tuya sin coste
                        ni condiciones.
                      </li>
                    </ul>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">Lo que ofreces</h5>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        Un caso de uso real: el compromiso de instalar y
                        activar la unidad en un lugar que técnicamente
                        justifique la conectividad satelital (sin cobertura
                        terrestre NB-IoT o GPRS).
                      </li>
                      <li className="body-2">
                        Continuidad y mantenimiento — mantener la unidad
                        funcionando al menos un año, cubrir el plan de datos
                        NTN con un operador como{" "}
                        <a
                          href="https://monogoto.io/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--primary)", textDecoration: "underline" }}
                        >
                          Monogoto
                        </a>
                        , y conectar al menos un sensor necesario (de tu
                        propio inventario o adquirido para el proyecto).
                      </li>
                    </ul>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">Términos del programa</h5>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        Despliegue — comprometerse a instalar y activar la
                        unidad en un plazo inferior a 3 meses tras recibirla.
                      </li>
                      <li className="body-2">
                        Operación — mantener el sistema activo y realizar
                        mantenimiento preventivo del registrador y los
                        sensores durante toda la evaluación de un año.
                      </li>
                      <li className="body-2">
                        Ajuste técnico — la aplicación debe requerir
                        realmente conectividad NTN, sin que exista una
                        alternativa terrestre.
                      </li>
                      <li className="body-2">
                        Autorizar visualización: autorizar a Isurki a
                        publicar noticias exclusivamente relacionadas con el
                        caso de uso y facilitar imágenes ilustrativas.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    Si crees que tu proyecto encaja en este programa de
                    evaluación, escríbenos a{" "}
                    <a href="mailto:isurki@isurki.com">isurki@isurki.com</a>.
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
