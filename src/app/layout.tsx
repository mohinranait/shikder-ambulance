import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import ImageProvider from "@/providers/ImageProvider";
import { Toaster } from "react-hot-toast";
import MediaModal from "@/components/shared/MediaModal";

export const metadata: Metadata = {
  title:
    "Shikder Ambulance Service in Dhaka | Best Reliable 24/7",
  description:
    "Shikder Ambulance Services in Dhaka. Looking for a reliable Ambulance? You have come to the right place. We guarantee your safe and comfortable arrival at your destination.",
  keywords:
    "ambulance service, best ambulance, near ambulance service, online ambulance, best ambulance near me, top ambulance, freezing ambulance near me, fast ambulance, 24 Hours Ambulance, Dhaka Ambulance service, dead body carrier ambulance, emergency ambulances, emergency medical service, Dhaka ambulance, Bangladesh ambulance, AC ambulance, non-ac ambulance, life support ambulance, freezing ambulance, ICU ambulance",
  authors: [{ name: "Shikder Ambulance" }],
  openGraph: {
    title: "Shikder Ambulance Service | Best Reliable 24/7",
    description: "Shikder Ambulance Services in Dhaka. Looking for a reliable Ambulance? You have come to the right place. We guarantee your safe and comfortable arrival at your destination",
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
