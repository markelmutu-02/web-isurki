"use client";
const slides = [
  {
    title: "Your connected infrastructure<br />Your smartest decisions",
    subtitle:
      "A comprehensive Industrial Internet of Things (IIoT) solution that connects sensors, equipment and facilities to the cloud, delivering reliable, accessible and actionable information from anywhere.",
  },
];
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
export default function HeroEN() {
  return (
    <div className="page-title-home img-1 style-absolute">
      <Swiper
        dir="ltr"
        className="swiper sw-auto style-absolute"
        modules={[EffectFade, Autoplay, Navigation]}
        autoplay={{
          delay: 2000,
        }}
        speed={1000}
        effect="fade"
        navigation={{
          prevEl: ".snbp3",
          nextEl: ".snbn3",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className={`page-title-inner img-h1-${index + 1}`}>
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-content">
                      <h1
                        className="tf-fade-top fade-item-1"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <div
                        dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                        className="sub-title body-2 tf-fade-top fade-item-2"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
