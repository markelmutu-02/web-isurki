import RtlToggler from "@/components/common/RtlToggler";
import "../public/scss/main.scss";
import "rc-slider/assets/index.css";
import Script from "next/script";

import GlobalEffectsProvider from "@/components/common/GlobalEffectsProvider";
import ScrollTop from "@/components/common/ScrollTop";
import MobileMenu from "@/components/modals/MobileMenu";
import Context from "@/context/Context";
import { rtlInitScript } from "@/lib/rtl-init";

import { Metadata } from "next";
const SITE_TITLE = "ISURKI - Instrumentación y control";
const SITE_DESCRIPTION =
  "Instrumentación y control al servicio de su industria: soluciones propias de captación, monitorización y gestión de datos, diseñadas para entornos exigentes.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://isurki.com"),
  verification: {
    google: "nWHFxznr9PLolVUP3Lj3B2kpdJhP_YUAp9Qdrjl6A4Q",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Isurki",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://isurki.com",
    images: [
      {
        url: "/image/page-title/page-title-home-1.jpg",
        width: 1200,
        height: 900,
        alt: "Isurki - Instrumentación y control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/image/page-title/page-title-home-1.jpg"],
  },
};
import { ReactNode } from "react";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Isurki",
  url: "https://isurki.com",
  logo: "https://isurki.com/image/logo/logo.svg",
  description:
    "Instrumentación y control al servicio de su industria: soluciones propias de captación, monitorización y gestión de datos, diseñadas para entornos exigentes.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/ Gabiria n.2, Planta 1, Local P",
    addressLocality: "Irún",
    addressRegion: "Gipuzkoa",
    postalCode: "20305",
    addressCountry: "ES",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+34-943-63-54-37",
    contactType: "customer service",
    email: "isurki@isurki.com",
    areaServed: "ES",
    availableLanguage: ["Spanish"],
  },
  sameAs: ["https://www.youtube.com/@Isurki613"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: rtlInitScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Geologica:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Kumbh+Sans:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Oxygen:wght@300;400;700&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=SUSE:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5QQ4NMW2');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`counter-scroll popup-loader`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5QQ4NMW2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="wrapper">
          <Context>
            {/*<RtlToggler />*/}
            {children}
            <MobileMenu />
            <ScrollTop />{" "}
          </Context>
          <GlobalEffectsProvider />
        </div>
      </body>
    </html>
  );
}
