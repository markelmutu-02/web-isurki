import React from "react";


import LinkCard from "@/components/services/LinkCard";

export default function Downloads() {
  return (
    <section className="section-why-choose">
      <div className="tf-container position-relative">
        <div className="row rg-60">
          <div className="col-12">
            <div className="section-content">
              <div className="heading-section">
                <h3 className="text-anime-wave mb-12">Descargas</h3>
              </div>
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <LinkCard
                  title="Documentación de IsurDash"
                  description="Guía completa de la plataforma IsurDash"
                  href="https://docs.isurlog.isurki.com/es/isurdash-platform/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
