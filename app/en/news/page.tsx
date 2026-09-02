import Blogs3EN from "@/components/blogs/Blogs3EN";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "News || Isurki",
  description: "Latest news and events from Isurki",
  alternates: {
    canonical: "https://isurki.com/en/news",
    languages: {
      es: "https://isurki.com/noticias",
      en: "https://isurki.com/en/news",
    },
  },
};
export default function page() {
  return (
    <>
      <div className="page-title style-1 bg-img-2">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title-content">
                <h2 className="title-page-title">Isurki News</h2>
                <div className="sub-title body-2">
                  A section where you can see real-world examples of cases Isurki has been involved in,
                  <br/>
                  Isurki&apos;s most notable projects and success stories
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content tf-spacing-2">
        <Blogs3EN />
      </div>
    </>
  );
}
