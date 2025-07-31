import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import ImageProvider from "@/providers/ImageProvider";
import { Toaster } from "react-hot-toast";
import MediaModal from "@/components/shared/MediaModal";

export const metadata: Metadata = {
  title:
    "Shikder Ambulance - Professional Emergency Medical Services in Bangladesh",
  description:
    "Professional ambulance services in Dhaka, Bangladesh. 24/7 emergency medical services including AC ambulance, freezing ambulance, and ICU ambulance across all districts.",
  keywords:
    "ambulance service, emergency medical service, Dhaka ambulance, Bangladesh ambulance, AC ambulance, freezing ambulance, ICU ambulance",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title: "Shikder Ambulance - Professional Emergency Medical Services",
    description: "24/7 professional ambulance services across Bangladesh",
    url: "https://shikderambulance.com",
    siteName: "Shikder Ambulance",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
