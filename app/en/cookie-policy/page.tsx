import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie policy || Isurki",
  description: "Information about the use of cookies on the Isurki website.",
  alternates: {
    canonical: "https://isurki.com/en/cookie-policy",
    languages: {
      es: "https://isurki.com/politica-de-cookies",
      en: "https://isurki.com/en/cookie-policy",
    },
  },
};

export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-6">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">Cookie policy</h2>
                <div className="sub-title body-2">
                  Which cookies we use on this website and how you can
                  manage them.
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
                    Last updated: August 21, 2026.
                  </p>
                  <p className="body-2">
                    In compliance with Article 22.2 of Law 34/2002, on
                    Information Society Services and Electronic Commerce
                    (LSSI-CE), we inform you about the use of cookies on the
                    isurki.com website.
                  </p>
                </div>

                <div className="list-desc">
                  <div className="desc-blog">
                    <h5 className="title-desc">1. What are cookies?</h5>
                    <p className="body-2">
                      Cookies are small text files that a website installs
                      in the browser or on the User's device while
                      browsing, and which are used to store and retrieve
                      information about the browsing carried out from that
                      device.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      2. What types of cookies does this website use?
                    </h5>
                    <p className="body-2">
                      Depending on their purpose, this website may use the
                      following types of cookies:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: 20 }}>
                      <li className="body-2">
                        <strong>Technical or necessary cookies:</strong>{" "}
                        essential for the website to function correctly and
                        for browsing it (for example, to remember your
                        decision about the use of cookies). They do not
                        require consent.
                      </li>
                      <li className="body-2">
                        <strong>Analytics or performance cookies:</strong>{" "}
                        allow us to quantify the number of visitors and
                        statistically analyze how users use the website, in
                        order to improve the range of content and services.
                      </li>
                      <li className="body-2">
                        <strong>Third-party cookies:</strong> some website
                        features (such as YouTube video players or social
                        networks) may set their own cookies managed by those
                        third parties, in accordance with their own privacy
                        policies.
                      </li>
                    </ul>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      3. Acceptance and consent
                    </h5>
                    <p className="body-2">
                      By browsing and continuing to use our website, you
                      consent to the use of the cookies described above,
                      under the terms and conditions set out in this Cookie
                      Policy. If you wish, you can revoke your consent at
                      any time through your browser settings.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">
                      4. How can I disable or delete cookies?
                    </h5>
                    <p className="body-2">
                      You can allow, block or delete the cookies installed
                      on your device through your Internet browser's
                      settings:
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
                          href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mozilla Firefox
                        </a>
                      </li>
                      <li className="body-2">
                        <a
                          href="https://support.microsoft.com/en-us/microsoft-edge"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Microsoft Edge
                        </a>
                      </li>
                      <li className="body-2">
                        <a
                          href="https://support.apple.com/en-us/guide/safari/sfri11471/mac"
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
                      5. Updates to this policy
                    </h5>
                    <p className="body-2">
                      Isurki may modify this Cookie Policy in response to
                      new legislative requirements or in order to adapt it
                      to the instructions of the Spanish Data Protection
                      Agency. We recommend reviewing it periodically.
                    </p>
                  </div>

                  <div className="desc-blog">
                    <h5 className="title-desc">6. More information</h5>
                    <p className="body-2">
                      For any questions about this Cookie Policy, you can
                      contact us at isurki@isurki.com. Please also see our{" "}
                      <a href="/en/privacy-policy">
                        Privacy policy
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
