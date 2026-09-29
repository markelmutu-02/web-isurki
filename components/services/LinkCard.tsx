import React from "react";

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
}

export default function LinkCard({ title, description, href }: LinkCardProps) {
  return (
    <div
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
            backgroundColor: "#E7F1FE",
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
            <circle cx="12" cy="12" r="10" stroke="#2563EB" strokeWidth="1.5" />
            <path
              d="M2 12h20"
              stroke="#2563EB"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M12 2c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.2-4-10s1.5-7.3 4-10z"
              stroke="#2563EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <h6 style={{ margin: 0 }}>{title}</h6>
          <p
            className="body-2 color-on-suface-variant-1"
            style={{ margin: 0 }}
          >
            {description}
          </p>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="tf-btn style-1 bg-on-suface-container"
        style={{ flexShrink: 0, whiteSpace: "nowrap" }}
      >
        <span>Abrir</span>
      </a>
    </div>
  );
}
