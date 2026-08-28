"use client";
import Link from "next/link";
const slides = [
  {
    title: "Su infraestructura conectada<br />Sus decisiones más inteligentes",
    subtitle:
      "Una solución integral de Internet Industrial de las Cosas (IIoT) que conecta sensores, equipos e instalaciones con la nube para ofrecer información fiable, accesible y accionable desde cualquier lugar.",
   
  },
  /*{
    title: "Building Your<br>Financial Journey",
    subtitle:
      "Achieve your financial goals through tailored strategies and expert guidance<br>made just for you.",
    buttonText: "View All Services",
  },
  {
    title: "Transforming Your<br>Financial Future",
    subtitle:
      " Personalized financial guidance and planning to help you unlock your<br>full potential and succeed.",
    buttonText: "View All Services",
  },*/
];
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
export default function Hero() {
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
