"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { guides } from "@/data/guides";

export default function GuidesGrid() {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-12">
          <div className="layout-grid-3">
            {guides.map((post, index) => (
              <div
                className="tf-post-grid style-small fl-item d-block"
                key={index}
              >
                <div className="image">
                  <Link href={`/guias/${post.slug}`} className="link" />
                  <Image
                    src={post.imgSrc}
                    alt={post.title}
                    width={post.imgWidth}
                    height={post.imgHeight}
                    className="lazyload"
                  />
                  <a href="#" className="date">
                    <span className="day">{post.date.day}</span>
                    <span>{post.date.month}</span>
                    <span className="year">{post.date.year}</span>
                  </a>
                </div>
                <div className="tf-grid-post-content">
                  <div className="position caption-1 wow fadeInUp">
                    {post.category}
                  </div>
                  <h5 className="title-post wow fadeInUp">
                    <Link href={`/guias/${post.slug}`}>{post.title}</Link>
                  </h5>
                  <div className="sub-title wow fadeInUp">
                    {post.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
