import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import ImageProvider from "@/providers/ImageProvider";
import { Toaster } from "react-hot-toast";
import MediaModal from "@/components/shared/MediaModal";

export const metadata: Metadata = {
  title: "Shikder Ambulance Service | Best Reliable 24/7",
  description:
    "Shikder Ambulance Service in Dhaka, Bangladesh. Looking for a reliable Ambulance? You have come to the right place. We guarantee your safe and comfortable arrival at your destination.",
  keywords:
    "Shikder Ambulance, emergency Ambulance services, Patient Care Ambulance Services, medical transport Service, Near Ambulance, Emergency Ambulance Number, Best Ambulance Number, Ambulance Transport Support, Online Ambulance, Dhaka Ambulance, healthcare",
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
