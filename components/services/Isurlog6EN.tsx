import React from "react";


import { isurlogDownloadsEN } from "@/data/downloadsEN";

export default function DownloadsEN() {
  return (
    <section className="section-why-choose">
      <div className="tf-container position-relative">
        <div className="row rg-60">
          <div className="col-12">
            <div className="section-content">
              <div className="heading-section">
                <h3 className="text-anime-wave mb-12">Downloads</h3>
              </div>
              <a>Find more information in the IsurLog wiki:</a> <a href="https://docs.isurlog.isurki.com/" target="tab">https://docs.isurlog.isurki.com/</a>
              <br/><br/>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {isurlogDownloadsEN.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "20px",
                      padding: "20px",
                      border: "1px solid var(--outline)",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          flexShrink: 0,
                          width: "48px",
                          height: "48px",
                          borderRadius: "10px",
                          backgroundColor: "#FEECEC",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                            stroke="#E5252A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 2v6h6"
                            stroke="#E5252A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <text
                            x="12"
                            y="17"
                            textAnchor="middle"
                            fontSize="6"
                            fontWeight="bold"
                            fill="#E5252A"
                          >
                            PDF
                          </text>
                        </svg>
                      </div>

                      <div>
                        <h6 style={{ margin: 0 }}>{item.title}</h6>
                        <p
                          className="body-2 color-on-suface-variant-1"
                          style={{ margin: 0 }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <a
                      href={item.file}
                      download
                      className="tf-btn style-1 bg-on-suface-container"
                      style={{ flexShrink: 0, whiteSpace: "nowrap" }}
                    >
                      <span>Download</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
