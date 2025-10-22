import BottomSection from "@/components/shared/BottomSection";
import CallButton from "@/components/shared/call-button";
import FooterComponent from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <FooterComponent />
      <CallButton />
      <BottomSection />
    </div>
  );
};

export default ClientLayout;
