"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { posts4 } from "@/data/blogs";

// posts4 ya viene ordenado por fecha (más reciente primero). La noticia
// destacada grande es la marcada con featured:true (no necesariamente la
// más reciente); si ninguna lo está, se usa la primera como respaldo.
const featuredPost = posts4.find((post) => post.featured) ?? posts4[0];
const otherPosts = posts4.filter((post) => post !== featuredPost);

export default function Blogs3() {
  const [filteres, setFilteres] = useState(otherPosts);
  const [isLoadedMore, setIsLoadedMore] = useState(false);
  useEffect(() => {
    if (isLoadedMore) {
      setFilteres(otherPosts);
    } else {
      setFilteres(otherPosts.slice(0, 6));
    }
  }, [isLoadedMore]);
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-12">
          <div className="blog-content blog-no-sidebar-content">
            {featuredPost && (
              <div className="tf-slideshow blog-no-sidebar-slide">
                <div className="tf-post-grid style-absolute">
                  <div className="image">
                    <Link
                      href={`/noticias/${featuredPost.slug}`}
                      className="link"
                    />
                    <Image
                      src={featuredPost.imgSrc}
                      alt={featuredPost.title}
                      className="lazyload"
                      width={featuredPost.imgWidth}
                      height={featuredPost.imgHeight}
                    />
                    <a href="#" className="date">
                      <span className="day">{featuredPost.date.day}</span>
                      <span>{featuredPost.date.month}</span>
                      <span className="year">{featuredPost.date.year}</span>
                    </a>
                  </div>
                  <div className="tf-post-grid-content">
                    <div className="position">{featuredPost.category}</div>
                    <h4 className="title-post">
                      <Link href={`/noticias/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h4>
                    <div className="sub-title body-2">
                      {featuredPost.description}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="layout-grid-3 loadmore-item">
              {filteres.map((post, index) => (
                <div
                  className="tf-post-grid style-small fl-item d-block"
                  key={index}
                >
                  <div className="image">
                    <Link
                      href={`/noticias/${post.slug}`}
                      className="link"
                    />
                    <Image
                      src={post.imgSrc}
                      alt={post.title}
                      width={post.imgWidth}
                      height={post.imgHeight}
                      className="lazyload"
                    />
                    <a href="#" className="date">
                      <span className="day"> {post.date.day} </span>
                      <span>{post.date.month}</span>
                      <span className="year">{post.date.year}</span>
                    </a>
                  </div>
                  <div className="tf-grid-post-content">
                    <div
                      className="position caption-1 wow fadeInUp"
                      data-wow-delay={post.delay}
                    >
                      {post.category}
                    </div>
                    <h5
                      className="title-post wow fadeInUp"
                      data-wow-delay={post.delay}
                    >
                      <Link href={`/noticias/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h5>
                    <div
                      className="sub-title wow fadeInUp"
                      data-wow-delay={post.delay}
                    >
                      {post.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {!isLoadedMore ? (
              <div className="btn-load-more text-center view-more-button wow fadeInUp">
                <button
                  onClick={() => setIsLoadedMore(true)}
                  className="tf-btn style-1 bg-on-suface-container btn-loadmore"
                >
                  <span>Cargar más</span>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
