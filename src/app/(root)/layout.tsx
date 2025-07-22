import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
