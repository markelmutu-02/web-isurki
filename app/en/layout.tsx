import Footer1EN from "@/components/footers/Footer1EN";
import Header1EN from "@/components/headers/Header1EN";
import Topbar1EN from "@/components/headers/Topbar1EN";
import MobileMenuEN from "@/components/modals/MobileMenuEN";
import React, { ReactNode } from "react";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Topbar1EN />
      <Header1EN />
      {children}
      <MobileMenuEN />
      <Footer1EN />
    </>
  );
}
