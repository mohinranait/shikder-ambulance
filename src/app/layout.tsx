import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import ImageProvider from "@/providers/ImageProvider";
import { Toaster } from "react-hot-toast";
import MediaModal from "@/components/shared/MediaModal";

export const metadata: Metadata = {
  title: "MediCare Ambulance - 24/7 Emergency Medical Services",
  description:
    "Professional emergency ambulance services with trained paramedics, advanced life support, and rapid response times. Available 24/7 for medical emergencies.",
  keywords:
    "ambulance, emergency medical services, paramedics, medical transport, 911, healthcare",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <AuthProvider>
          <ImageProvider>
            {children}
            <MediaModal />
            <Toaster />
          </ImageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
