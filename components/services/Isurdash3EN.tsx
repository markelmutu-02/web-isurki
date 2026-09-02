"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const IsurdashIconItemsEN = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m16 18 6-6-6-6" />
        <path d="m8 6-6 6 6 6" />
      </svg>
    ),
    title: "In-house code",
    description:
      "IsurDash's code is developed by our own software engineers from start to finish.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
    title: "Our own servers",
    description:
      "The IsurDash platform is hosted on our own physical servers located at Isurki's offices",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
        <rect x="2" y="3" width="20" height="14" rx="2" />
      </svg>
    ),
    title: "Continuous improvement",
    description:
      "Both points above let us constantly modify and improve the code, adapting it to new needs",
  },
];

export default function Benefits() {
  return (
    <section className="section-benefit h-2 tf-spacing-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <Swiper
              className="sw-icon-list swiper sw-layout"
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {IsurdashIconItemsEN.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                    <div className="box-icon">
                    <div className="icon color-primary">
                        {item.icon ? item.icon : <i className={item.icon} />}
                    </div>
                    <div className="box-content">
                        <h5>
                        <a href="#" className="title-box">
                            {item.title}
                        </a>
                        </h5>
                        <div className="sub-title">{item.description}</div>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
