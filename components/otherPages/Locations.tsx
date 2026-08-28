"use client";
import { offices } from "@/data/locations";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function OfficeCard({ office }: { office: (typeof offices)[number] }) {
  return (
    <div className="banner-item hover-img">
      <div className="image">
        <a href="#">
          <Image
            src={office.imgSrc}
            alt={office.name}
            className="lazyload"
            width={office.imgWidth}
            height={office.imgHeight}
          />
        </a>
      </div>
      <div className="banner-item-content">
        <h4 className="name-banner">
          <a href="#">{office.name}</a>
        </h4>
        <div className="details">
          <ul>
            <li>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  office.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="arrdess"
              >
                {office.address}
              </a>
            </li>
            <li>
              <span>Teléfono: </span>
              <a href={`tel:${office.phone.replace(/\s+/g, "")}`}>
                {office.phone}
              </a>
            </li>
            <li>
              <span>Correo electrónico: </span>
              <a href={`mailto:${office.email}`}>{office.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Locations() {
  const hasMultipleOffices = offices.length > 1;

  return (
    <section className="section-list-banner tf-spacing-3">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            {hasMultipleOffices ? (
              <Swiper
                className="swiper sw-layout sw-product"
                breakpoints={{
                  0: { slidesPerView: 1 },
                  575: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    spaceBetween: 60,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                  },
                }}
                spaceBetween={20}
              >
                {offices.map((office, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <OfficeCard office={office} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ maxWidth: "400px", width: "100%" }}>
                  <OfficeCard office={offices[0]} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}