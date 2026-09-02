import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

const TITLE = "Baterías LiSOCl2";
const DESCRIPTION =
  "El ISURLOG (v2026) incorpora soporte para baterías LiSOCl2 no recargables, ampliando su autonomía en campo de 17 a 38 Ah.";
const IMAGE = "/image/blog/pilas-portada.jpg";
const DATE = "2026-08-10";

export const metadata: Metadata = {
  title: `${TITLE} || Isurki`,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://isurki.com/noticias/baterias-lisocl2",
    languages: {
      es: "https://isurki.com/noticias/baterias-lisocl2",
      en: "https://isurki.com/en/news/lisocl2-batteries",
    },
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
                  Nuevas baterías LiSOCl2 para el ISURLOG: hasta 4 años de
                  autonomía sin mantenimiento
                </h2>
                <div className="sub-title body-2">
                  Producto &middot; 10 de agosto de 2026
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
                    El datalogger IoT{" "}
                    <Link
                      href="/isurlog"
                      style={{ color: "var(--primary)", textDecoration: "underline" }}
                    >
                      ISURLOG
                    </Link>{" "}
                    (v2026) da un salto cualitativo
                    en su diseño al incorporar soporte para baterías no
                    recargables de cloruro de tionilo y litio (LiSOCl2),
                    ampliando sus capacidades operativas en campo y
                    reduciendo de forma drástica la servidumbre de
                    mantenimiento.
                  </p>
                  <p className="body-2">
                    Esta actualización de hardware permite alojar 2 baterías
                    LiSOCl2 de 19 Ah cada una, alcanzando una capacidad total
                    de 38 Ah. Frente a la configuración previa basada en 5
                    celdas de Ion de litio NCR18650B (3400 mAh por celda,
                    sumando 17 Ah), la nueva opción no solo más que duplica
                    la densidad energética disponible, sino que optimiza
                    drásticamente la conservación de la carga en despliegues
                    prolongados.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      1. Principales avances técnicos
                    </h5>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>Mayor capacidad de almacenamiento:</strong>{" "}
                        incremento directo de 17 Ah a 38 Ah, lo que
                        multiplica los periodos de funcionamiento continuo
                        sin necesidad de reemplazar la fuente de
                        alimentación.
                      </li>
                      <li className="body-2">
                        <strong>Mínima autodescarga:</strong> la química
                        LiSOCl2 reduce la tasa de pérdida de carga a un 1%
                        anual, en comparación con el 1% mensual
                        característico de las celdas de Ion-Litio
                        tradicionales. Esto asegura una estabilidad operativa
                        óptima en nodos aislados o de difícil acceso.
                      </li>
                      <li className="body-2">
                        <strong>
                          Sistema de anclaje y mantenimiento rápido:
                        </strong>{" "}
                        se ha diseñado un accesorio específico que fija las
                        baterías de forma firme a la carcasa del ISURLOG.
                        Este mecanismo protege los componentes frente a
                        vibraciones y simplifica el procedimiento de
                        sustitución en campo, reduciendo el tiempo de parada
                        técnica.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/baterias-lisocl2-1.jpg"
                    alt="Baterías LiSOCl2 y sistema de anclaje del ISURLOG"
                    className="lazyload"
                    width={800}
                    height={800}
                  />
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">
                      2. Casos prácticos de aumento de la autonomía en campo
                    </h5>
                    <p className="body-2">
                      Para ilustrar el impacto real de esta mejora en un
                      escenario habitual de monitorización industrial,
                      consideremos dos casos con la siguiente configuración
                      de trabajo:
                    </p>

                    <div style={{ overflowX: "auto", marginBottom: 24 }}>
                      <table
                        style={{
                          width: "100%",
                          borderCollapse: "collapse",
                          minWidth: 560,
                        }}
                      >
                        <thead>
                          <tr>
                            <th style={tableHeadCell}>Caso</th>
                            <th style={tableHeadCell}>
                              Registro local de datos
                            </th>
                            <th style={tableHeadCell}>
                              Envío de datos a la nube
                            </th>
                            <th style={tableHeadCell}>
                              Sensores considerados
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={tableCell}>Nº 1</td>
                            <td style={tableCell}>15 min.</td>
                            <td style={tableCell}>3 horas</td>
                            <td style={tableCell}>
                              Un sensor analógico 4-20 mA alimentado
                              directamente desde el ISURLOG a 12 V.
                            </td>
                          </tr>
                          <tr>
                            <td style={tableCell}>Nº 2</td>
                            <td style={tableCell}>5 min.</td>
                            <td style={tableCell}>1 hora</td>
                            <td style={tableCell}>
                              Un caudalímetro Modbus con sus propias baterías
                              de alimentación, lectura de 3 parámetros
                              (caudal instantáneo, acumulado, batería del
                              caudalímetro).
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="body-2">
                      Bajo estos dos perfiles de funcionamiento, la
                      comparativa de vida útil de las baterías resulta:
                    </p>

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
                            <th style={tableHeadCell}>
                              Configuración de baterías
                            </th>
                            <th style={tableHeadCell}>Capacidad</th>
                            <th style={tableHeadCell}>
                              Autodescarga anual
                            </th>
                            <th style={tableHeadCell}>
                              Autonomía estimada &ndash; Caso nº 1
                            </th>
                            <th style={tableHeadCell}>
                              Autonomía estimada &ndash; Caso nº 2
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={tableCell}>
                              Ion-Litio recargable (NCR18650B)
                            </td>
                            <td style={tableCell}>17 Ah</td>
                            <td style={tableCell}>12%</td>
                            <td style={tableCell}>1,6 años (19,3 meses)</td>
                            <td style={tableCell}>1,4 años (17,1 meses)</td>
                          </tr>
                          <tr>
                            <td style={tableCell}>LiSOCl2 no recargable</td>
                            <td style={tableCell}>38 Ah</td>
                            <td style={tableCell}>1%</td>
                            <td style={tableCell}>3,9 años (46,4 meses)</td>
                            <td style={tableCell}>3,4 años (40,9 meses)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="body-2">
                      Gracias a la combinación de una mayor densidad
                      energética y una autodescarga insignificante en las
                      celdas LiSOCl2, el ISURLOG permite extender los ciclos
                      de reemplazo preventivo de año y medio a casi cuatro
                      años de operación ininterrumpida.
                    </p>
                  </div>
                </div>

                <div className="image-blog image-blog-sm">
                  <Image
                    src="/image/blog/baterias-lisocl2-2.jpg"
                    alt="Detalle de la instalación de las baterías LiSOCl2 en el ISURLOG"
                    className="lazyload"
                    width={800}
                    height={800}
                  />
                </div>

                <div className="desc-blog">
                  <p className="body-2">
                    Con esta mejora, el ISURLOG refuerza su fiabilidad en
                    aplicaciones de monitorización remota, ofreciendo una
                    solución de mayor durabilidad energética y con un coste
                    operativo sustancialmente menor para la supervisión de
                    activos industriales.
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
