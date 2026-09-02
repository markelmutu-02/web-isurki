import CaseStudiesEN from "@/components/homes/home-1/CaseStudiesEN";
import HeroEN from "@/components/homes/home-1/HeroEN";
import FeaturesEN from "@/components/common/FeaturesEN";
import ProcessEN from "@/components/homes/home-1/ProcessEN";
import ServicesEN from "@/components/common/ServicesEN";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISURKI - Instrumentation and control",
  description:
    "Isurki: industrial instrumentation and control in Irun (Spain). IoT dataloggers, sensors and our own platform for remote monitoring and industrial telemetry.",
  alternates: {
    canonical: "https://isurki.com/en",
    languages: {
      es: "https://isurki.com",
      en: "https://isurki.com/en",
    },
  },
};

export default function HomeEN() {
  return (
    <>
      <HeroEN />
      <div className="main-content">
        <FeaturesEN />
        <ServicesEN />
        <CaseStudiesEN />
        <ProcessEN />
      </div>
    </>
  );
}
