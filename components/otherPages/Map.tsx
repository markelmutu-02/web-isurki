import React from "react";

export default function Map() {
  return (
    <section className="section-map tf-spacing-3">
      <div className="wg-map">
        <div className="box-map">
          <div id="map" className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258.1820151815731!2d-1.8252411468636607!3d43.32872261229307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51081bc4a0704b%3A0x2454325101eee676!2sC.%20Gabiria%2C%202%2C%2020305%20Irun%2C%20Guip%C3%BAzcoa!5e0!3m2!1ses!2ses!4v1783081314052!5m2!1ses!2ses"
              width="100%"
              style={{ width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
