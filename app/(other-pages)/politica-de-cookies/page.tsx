import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies || Isurki",
  description: "Información sobre el uso de cookies en el sitio web de Isurki.",
};

export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">Política de cookies</h2>
                <div className="sub-title body-2">
                  Qué cookies utilizamos en este sitio web y cómo puedes
                  gestionarlas.
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
                    Última actualización: 21 de agosto de 2026.
                  </p>
                  <p className="body-2">
                    En cumplimiento del artículo 22.2 de la Ley 34/2002, de
                    Servicios de la Sociedad de la Información y de Comercio
                    Electrónico (LSSI-CE), te informamos sobre el uso de
                    cookies que hacemos en el sitio web isurki.com.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">1. ¿Qué son las cookies?</h5>
                    <p className="body-2">
                      Las cookies son pequeños archivos de texto que un sitio
                      web instala en el navegador o en el dispositivo del
                      Usuario durante su navegación, y que sirven para
                      almacenar y recuperar información sobre la navegación
                      que se efectúa desde dicho equipo.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      2. ¿Qué tipos de cookies utiliza este sitio web?
                    </h5>
                    <p className="body-2">
                      Según su finalidad, en este sitio web se pueden
                      utilizar los siguientes tipos de cookies:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>Cookies técnicas o necesarias:</strong>{" "}
                        imprescindibles para el correcto funcionamiento del
                        sitio web y la navegación por el mismo (por ejemplo,
                        para recordar tu decisión sobre el uso de cookies).
                        No requieren consentimiento.
                      </li>
                      <li className="body-2">
                        <strong>Cookies de análisis o rendimiento:</strong>{" "}
                        permiten cuantificar el número de visitantes y
                        analizar de forma estadística el uso que hacen los
                        usuarios del sitio web, con el fin de mejorar la
                        oferta de contenidos y servicios.
                      </li>
                      <li className="body-2">
                        <strong>Cookies de terceros:</strong> algunas
                        funcionalidades del sitio web (como reproductores de
                        vídeo de YouTube o redes sociales) pueden instalar
                        cookies propias gestionadas por dichos terceros,
                        conforme a sus propias políticas de privacidad.
                      </li>
                    </ul>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      3. Aceptación y consentimiento
                    </h5>
                    <p className="body-2">
                      Al navegar y continuar en nuestro sitio web estarás
                      consintiendo el uso de las cookies antes descritas, en
                      los términos y condiciones contenidos en esta Política
                      de Cookies. Si lo deseas, puedes revocar en cualquier
                      momento tu consentimiento a través de la configuración
                      de tu navegador.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      4. ¿Cómo puedo deshabilitar o eliminar las cookies?
                    </h5>
                    <p className="body-2">
                      Puedes permitir, bloquear o eliminar las cookies
                      instaladas en tu equipo mediante la configuración de
                      las opciones de tu navegador de Internet:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <a
                          href="https://support.google.com/chrome/answer/95647"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Chrome
                        </a>
                      </li>
                      <li className="body-2">
                        <a
                          href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-firefox-escritorio"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mozilla Firefox
                        </a>
                      </li>
                      <li className="body-2">
                        <a
                          href="https://support.microsoft.com/es-es/microsoft-edge"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Microsoft Edge
                        </a>
                      </li>
                      <li className="body-2">
                        <a
                          href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Safari
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      5. Actualizaciones de esta política
                    </h5>
                    <p className="body-2">
                      Isurki puede modificar esta Política de Cookies en
                      función de nuevas exigencias legislativas o con la
                      finalidad de adaptarla a las instrucciones de la
                      Agencia Española de Protección de Datos. Te
                      recomendamos revisarla periódicamente.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">6. Más información</h5>
                    <p className="body-2">
                      Para cualquier duda sobre esta Política de Cookies,
                      puedes contactar con nosotros a través de
                      isurki@isurki.com. Consulta también nuestra{" "}
                      <a href="/politica-de-privacidad">
                        Política de privacidad
                      </a>
                      .
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
