import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const TITLE = "¿Qué es un datalogger IoT y para qué sirve en la industria?";
const DESCRIPTION =
  "Qué es exactamente un datalogger, en qué se diferencia uno IoT de uno tradicional, para qué se usa en la industria y qué tener en cuenta al elegir uno.";
const IMAGE = "/image/blog/isurlog-news.jpg";
const DATE = "2026-09-23";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/guias/que-es-un-datalogger-iot",
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
  "@type": "Article",
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
                  ¿Qué es un datalogger IoT y para qué sirve en la industria?
                </h1>
                <div className="sub-title body-2">
                  Guía &middot; 23 de septiembre de 2026
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
                    Durante décadas, "datalogger" significó lo mismo en la
                    práctica: un dispositivo que registraba medidas en su
                    memoria interna, a la espera de que alguien se desplazara
                    hasta él, lo conectara a un ordenador y descargara los
                    datos manualmente. Eso ha cambiado. Hoy, cuando se habla
                    de un datalogger en un contexto industrial, casi siempre
                    se habla de un datalogger IoT — uno que, además de
                    registrar, transmite.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      ¿Qué es exactamente un datalogger?
                    </h5>
                    <p className="body-2">
                      Un datalogger (o registrador de datos) es un
                      dispositivo electrónico que combina tres elementos:
                      unos sensores que convierten una magnitud física
                      (caudal, nivel, presión, temperatura...) en una señal
                      eléctrica, una unidad de procesamiento que gestiona
                      cuándo y cómo se toma cada medida, y una memoria donde
                      esos datos quedan almacenados. Es, en esencia, la
                      manera de convertir lo que ocurre en el mundo físico en
                      datos que se pueden analizar.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      La diferencia entre un datalogger tradicional y uno IoT
                    </h5>
                    <p className="body-2">
                      Un datalogger tradicional solo almacena: los datos se
                      quedan en su memoria hasta que alguien va físicamente a
                      recogerlos. Esto obliga a visitas periódicas a cada
                      punto de medición — viable si hay pocos puntos y son
                      accesibles, inasumible si hay decenas de ellos
                      repartidos por una red extensa o en lugares de difícil
                      acceso.
                    </p>
                    <p className="body-2">
                      Un datalogger IoT añade comunicaciones: además de
                      registrar, envía los datos a una plataforma en la nube
                      de forma automática, sin intervención humana. Esto
                      permite ver los datos en tiempo (casi) real desde
                      cualquier lugar, recibir alarmas automáticas cuando algo
                      se sale de rango, y gestionar decenas o cientos de
                      dispositivos desde un único sitio, en lugar de
                      desplazarse a cada uno de ellos.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      ¿Para qué se usa un datalogger IoT?
                    </h5>
                    <p className="body-2">
                      Cualquier sector que necesite medir algo de forma
                      remota y continuada puede beneficiarse de un datalogger
                      IoT. Algunos de los usos más habituales:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>Redes de agua:</strong> control de caudal,
                        presión y nivel en redes de abastecimiento,
                        saneamiento, riego o mareógrafos.
                      </li>
                      <li className="body-2">
                        <strong>Sanidad:</strong> control de temperatura en
                        cadena de frío de vacunas y medicamentos, o
                        monitorización de Legionela en redes de agua caliente
                        sanitaria.
                      </li>
                      <li className="body-2">
                        <strong>Agricultura:</strong> humedad del suelo y
                        riego adaptado a la necesidad real del cultivo.
                      </li>
                      <li className="body-2">
                        <strong>Medio ambiente e industria:</strong>{" "}
                        monitorización de instalaciones remotas, sin
                        cobertura eléctrica ni de red, durante meses o años.
                      </li>
                    </ul>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      Tipos de conectividad: cómo "habla" un datalogger IoT
                    </h5>
                    <p className="body-2">
                      No todos los emplazamientos tienen las mismas
                      condiciones, así que no existe una única forma correcta
                      de comunicar un datalogger. Las opciones más habituales:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>NB-IoT:</strong> usa la red móvil existente
                        (con SIM de datos), fácil de desplegar donde hay
                        cobertura celular.
                      </li>
                      <li className="body-2">
                        <strong>LoRa / LoRaWAN:</strong> red propia de largo
                        alcance y bajísimo consumo, ideal donde no hay
                        cobertura móvil.
                      </li>
                      <li className="body-2">
                        <strong>Satélite (NB-IoT-NTN):</strong> para
                        emplazamientos sin ningún tipo de cobertura
                        terrestre — zonas despobladas, forestales, costeras o
                        remotas.
                      </li>
                      <li className="body-2">
                        <strong>WiFi:</strong> cuando ya existe red WiFi en
                        el propio emplazamiento, para instalaciones más
                        sencillas.
                      </li>
                    </ul>
                    <p className="body-2">
                      La mayoría de dataloggers del mercado obligan a elegir
                      una de estas opciones en el momento de comprar el
                      equipo. Esa elección no siempre es fácil de prever de
                      antemano, sobre todo en proyectos con múltiples puntos
                      de instalación y condiciones de cobertura distintas
                      entre sí. Si quieres entender mejor las diferencias
                      entre ellas, tenemos una{" "}
                      <Link
                        href="/guias/lora-vs-nb-iot"
                        style={{ color: "var(--primary)", textDecoration: "underline" }}
                      >
                        guía comparativa de conectividad IoT
                      </Link>{" "}
                      dedicada a esto.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      Autonomía: dataloggers a pilas
                    </h5>
                    <p className="body-2">
                      Cuando no hay red eléctrica en el punto de instalación
                      — algo muy habitual en monitorización remota — la
                      autonomía de las pilas se convierte en un factor clave.
                      Aquí también hay margen de elección: baterías
                      recargables (con la opción de un panel solar para
                      recarga continua) para instalaciones donde se prioriza
                      no generar residuos, o baterías no recargables de alta
                      densidad energética (como las de química LiSOCl2) para
                      maximizar los años de funcionamiento sin visitas de
                      mantenimiento.
                    </p>
                  </div>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src={IMAGE}
                    alt="Datalogger industrial IoT IsurLog"
                    className="lazyload"
                    width={400}
                    height={300}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    <strong>IsurLog</strong>, el datalogger IIoT de Isurki, se
                    diseñó precisamente para no obligar a elegir de
                    antemano: soporta NB-IoT, LoRa, satélite (NB-IoT-NTN) y
                    WiFi en el mismo dispositivo, con autonomía configurable
                    de hasta 4 años según el tipo de pila utilizado. Puedes
                    ver todas sus características en la página de{" "}
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
