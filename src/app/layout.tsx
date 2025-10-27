

import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import ImageProvider from "@/providers/ImageProvider";
import { Toaster } from "react-hot-toast";
import MediaModal from "@/components/shared/MediaModal";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Shikder Ambulance Service in Dhaka | Best, Fast & Reliable 24/7 ",
  description:
    "Shikder Ambulance Service in Dhaka provides 24/7 emergency medical transport, freezing ambulance, ICU ambulance, and dead body carrier service. Fast, safe, and reliable assistance across Bangladesh.",
  keywords:
    "ambulance service, ambulance near me, Dhaka ambulance, 24/7 ambulance, freezing ambulance, ICU ambulance, life support ambulance, non-AC ambulance, AC ambulance, emergency medical service, dead body carrier, Shikder ambulance, Bangladesh ambulance, online ambulance service, fast ambulance in Dhaka",
  authors: [{ name: "Shikder Ambulance" }],
  creator: "Shikder Ambulance",
  publisher: "Shikder Ambulance",
  metadataBase: new URL("https://shikderambulance.com"),
  alternates: {
    canonical: "https://shikderambulance.com",
  },
  openGraph: {
    title: "Shikder Ambulance Service in Dhaka | Best Reliable 24/7",
    description:
      "Reliable 24/7 ambulance service in Dhaka. Shikder Ambulance ensures safe, fast, and comfortable transport with AC, non-AC, ICU, and freezing ambulances.",
    url: "https://shikderambulance.com",
    siteName: "Shikder Ambulance",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/mohinranait/shikder-ambulance/shahadat/public/Shikder-Ambulance-Service-Ac-Ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Shikder Ambulance Service in Dhaka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikder Ambulance Service in Dhaka | 24/7 Reliable & Fast",
    description:
      "Looking for a 24-hour ambulance in Dhaka? Shikder Ambulance offers ICU, AC, non-AC, and freezing ambulances for emergencies across Bangladesh.",
    images: [
      "https://raw.githubusercontent.com/mohinranait/shikder-ambulance/shahadat/public/Shikder-Ambulance-Service-Ac-Ambulance.jpg",
    ],
    creator: "@ShikderAmbulance",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: "k9w6p571W9qlAmJr2Q9B-mCZ0Ab9xGP3mgZ9zuv5ssk",
  },
  category: "Ambulance Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Shikder Ambulance" />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://shikderambulance.com" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="google-site-verification"
          content="k9w6p571W9qlAmJr2Q9B-mCZ0Ab9xGP3mgZ9zuv5ssk"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JB6HNSXYNH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JB6HNSXYNH');
          `}
        </Script>
      </head>

      <body className="font-sans antialiased bg-white text-gray-900">
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
