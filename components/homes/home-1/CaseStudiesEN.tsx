"use client";

import Link from "next/link";
import Image from "next/image";
import { projectsEN as projectsData } from "@/data/caseStudiesEN";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Project } from "@/types/project";

const projects = projectsData as unknown as Project[];

export default function CaseStudiesEN() {
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);

  const handlerMapRef = useRef<Map<HTMLElement, (ev: Event) => void>>(
    new Map()
  );

  projectRefs.current = [];
  imageRefs.current = [];

  const addToProjectRefs = (el: HTMLDivElement | null) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  const addToImageRefs = (el: HTMLDivElement | null) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  useEffect(() => {
    const handleInteraction = (index: number) => () => {
      projectRefs.current.forEach((el) => el.classList.remove("active"));
      imageRefs.current.forEach((el) => el.classList.remove("active"));

      projectRefs.current[index]?.classList.add("active");
      imageRefs.current[index]?.classList.add("active");
    };

    projectRefs.current.forEach((item, index) => {
      const handler = handleInteraction(index);
      item.addEventListener("mouseenter", handler as EventListener);
      item.addEventListener("click", handler as EventListener);
      handlerMapRef.current.set(item, handler);
    });

    return () => {
      projectRefs.current.forEach((item) => {
        const h = handlerMapRef.current.get(item);
        if (h) {
          item.removeEventListener("mouseenter", h as EventListener);
          item.removeEventListener("click", h as EventListener);
        }
      });
      handlerMapRef.current.clear();
    };
  }, []);

  return (
    <section
      className="section-project h-1 bg-on-suface-container section-one-page"
      id="project"
    >
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section style-color-white text-center">
              <div className="text-anime-wave-1">
                <a
                  href="#"
                  className="tag label text-btn-uppercase color-white"
                >
                  Our featured projects
                </a>
              </div>
              <h3 className="title-section text-anime-wave-1 mb-12">
                Success stories
              </h3>
              <div className="sub-title body-2 text-anime-wave-1">
                Discover how we have helped our clients achieve effective
                results.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-project-inner d-none d-lg-block">
        <div className="list-case">
          <Swiper
            className="sw-case-studies swiper sw-layout"
            breakpoints={
              {
                0: { slidesPerView: 1 },
                575: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              } as any
            }
          >
            {projects.map((project, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  className={`project-item${project.active ? " active" : ""}`}
                  ref={addToProjectRefs}
                >
                  <Link href={project.link} className="link" />
                  <div className="project-content">
                    <h5>
                      <Link href={project.link} className="name">
                        {project.title}
                      </Link>
                    </h5>
                    <div className="text text-btn-uppercase label">
                      {project.label}
                    </div>
                    <div className="desc">{project.description}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="list-image-project">
          {projects.map((project, index) => (
            <div
              className={`image-project ${project.active ? "active" : ""}`}
              key={index}
              ref={addToImageRefs}
            >
              <Image
                src={project.imgSrc}
                alt="Case study image"
                className="lazyload"
                width={1920}
                height={634}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="tf-container d-lg-none">
        <Swiper
          className="swiper sw-case-studies-mobile"
          slidesPerView={1}
          spaceBetween={16}
          modules={[Pagination]}
          pagination={{ clickable: true, el: ".case-studies-mobile-pagination-en" }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Link href={project.link} className="case-mobile-card">
                <div className="case-mobile-image">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    className="lazyload"
                    width={1920}
                    height={634}
                  />
                </div>
                <div className="case-mobile-content">
                  <div className="label text-btn-uppercase">
                    {project.label}
                  </div>
                  <h5 className="name">{project.title}</h5>
                  <div className="desc body-2">{project.description}</div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sw-pagination-layout flex justify-content-center case-studies-mobile-pagination-en" />
      </div>
    </section>
  );
}
