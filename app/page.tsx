import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import CaseStudies from "@/components/homes/home-1/CaseStudies";
import Hero from "@/components/homes/home-1/Hero";
import Features from "@/components/common/Features";
import Process from "@/components/homes/home-1/Process";
import Services from "@/components/common/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "ISURKI - Instrumentación y control",
  description:
    "Instrumentación y control al servicio de su industria: soluciones propias de captación, monitorización y gestión de datos.",
};
export default function Home() {
  return (
    <>
      <Topbar1/>
      <Header1 />
      <Hero />
      <div className="main-content">
        <Features />
        <Services />
        <CaseStudies />
        <Process />
        
      </div>
      <Footer1 />
    </>
  );
}
