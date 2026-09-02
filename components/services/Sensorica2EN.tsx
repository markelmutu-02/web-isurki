import React from "react";

import { sensoricaDownloadsEN } from "@/data/downloadsEN";

interface DownloadItem {
  title: string;
  description: string;
  file: string;
  image: string;
}

function DownloadCard({ item }: { item: DownloadItem }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--outline)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "220px",
          backgroundColor: "#f5f5f5",
          overflow: "hidden",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "20px",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#FEECEC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width={20}
              height={20}
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

          <h6 style={{ margin: 0 }}>{item.title}</h6>
        </div>

        <p
          className="body-2 color-on-suface-variant-1"
          style={{ margin: 0, flex: 1 }}
        >
          {item.description}
        </p>

        <a
          href={item.file}
          download
          className="tf-btn style-1 bg-on-suface-container"
          style={{ alignSelf: "flex-start", whiteSpace: "nowrap" }}
        >
          <span>Download</span>
        </a>
      </div>
    </div>
  );
}

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

              {sensoricaDownloadsEN.map((group, groupIndex) => (
                <div key={groupIndex} style={{ marginBottom: "40px" }}>
                  <h4 className="text-anime-wave mb-12">{group.title}</h4>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(280px, 1fr))",
                      gap: "24px",
                    }}
                  >
                    {group.items.map((item, itemIndex) => (
                      <DownloadCard key={itemIndex} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
