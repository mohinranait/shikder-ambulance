

import type React from "react"
import {   HandCoins } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

interface PaymentMethod {
    id: string
    name: string
    icon?: React.ReactNode
    description: string
    details: string[]
    color: string
    logo?: string
}

const paymentMethods: PaymentMethod[] = [
    
    {
        id: "nagad",
        name: "Nagad",
        logo: 'nagad.png',
        description: "মোবাইল ব্যাংকিং সেবা",
        details: [" 017100-60020", "সর্বোচ্চ নিরাপদ লেনদেন "],
        color: "bg-red-50 border-red-200 hover:bg-red-100",

    }, 
    {
        id: "bkash",
        name: "bKash",
        logo: 'bkash.png',
        description: "মোবাইল ব্যাংকিং সেবা",
        details: [" 017100-60020", "সর্বোচ্চ নিরাপদ লেনদেন"],
        color: "bg-pink-50 border-pink-200 hover:bg-pink-100",

    }, 
    {
        id: "dutch-bangla",
        name: "ডাচ-বাংলা ব্যাংক অ্যাকাউন্ট",
        logo: 'Dutch-Bangla.png',
        description: "ব্যাংক অ্যাকাউন্ট ট্রান্সফার",
        details: ["3091 5702 86782", "Name: Sahadat"],
        color: "bg-blue-50 border-blue-200 hover:bg-blue-100", 
    },
    {
        id: "islami-bank",
        name: "ইসলামী ব্যাংক অ্যাকাউন্ট",
        logo: 'islami-bank.png',
        description: "ব্যাংক অ্যাকাউন্ট ট্রান্সফার",
        details: ["2050 2340 2026 78607", "Name: Sahadat"],
        color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
    },
    {
        id: "cash",
        name: "হ্যান্ড ক্যাশ (নগদ)",
        icon: <HandCoins className="w-8 h-8" />,
        description: "সরাসরি নগদ অর্থ প্রদান",
        details: ["চালক বা কর্মীর কাছে সরাসরি পরিশোধ করুন", " পরিশোধের সময় অফিসে অবগত করুন"], 
        color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    },
]

export const metadata: Metadata = {
  title: " নিরাপদ পেমেন্ট সিস্টেম - শিকদার অ্যাম্বুলেন্স সার্ভিস",
  description:
    "শিকদার অ্যাম্বুলেন্স সার্ভিসে রয়েছে সহজ ও নিরাপদ পেমেন্ট সিস্টেম। অ্যাম্বুলেন্স বুকিং, রোগী পরিবহন, হাসপাতাল ট্রান্সফার, ও ফ্রিজিং অ্যাম্বুলেন্স সার্ভিসের পেমেন্ট দ্রুত ও নিশ্চিন্তে সম্পন্ন করুন। জরুরি সেবার জন্য কল করুন",
  keywords:
    "নিরাপদ পেমেন্ট সিস্টেম, সহজ পেমেন্ট সুবিধা, নিরাপদ পেমেন্ট সুবিধা, সহজ ও নিরাপদ পেমেন্ট সিস্টেম, নিরাপদ পেমেন্ট সিস্টেম, শিকদার অ্যাম্বুলেন্স সার্ভিসের নিরাপদ পেমেন্ট সুবিধা ",
  authors: [{ name: "Shikder Ambulance" }],
  alternates: {
    canonical: "https://shikderambulance.com/payments",
  },
  openGraph: {
    title: "পেমেন্ট সিস্টেম - শিকদার অ্যাম্বুলেন্স সার্ভিস",
    description:
      "শিকদার অ্যাম্বুলেন্স সার্ভিসে রয়েছে সহজ ও নিরাপদ পেমেন্ট সিস্টেম। অ্যাম্বুলেন্স বুকিং, রোগী পরিবহন, হাসপাতাল ট্রান্সফার, ও ফ্রিজিং অ্যাম্বুলেন্স সার্ভিসের পেমেন্ট দ্রুত ও নিশ্চিন্তে সম্পন্ন করুন। জরুরি সেবার জন্য কল করুন",
    url: "https://shikderambulance.com/payments",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Freezing Ambulance Service-shikder-ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "পেমেন্ট সিস্টেম শিকদার অ্যাম্বুলেন্স সার্ভিস",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " পেমেন্ট সিস্টেম - শিকদার অ্যাম্বুলেন্স সার্ভিস",
    description:
      "শিকদার অ্যাম্বুলেন্স সার্ভিসে রয়েছে সহজ ও নিরাপদ পেমেন্ট সিস্টেম। অ্যাম্বুলেন্স বুকিং, রোগী পরিবহন, হাসপাতাল ট্রান্সফার, ও ফ্রিজিং অ্যাম্বুলেন্স সার্ভিসের পেমেন্ট দ্রুত ও নিশ্চিন্তে সম্পন্ন করুন।",
    images: ["/images/Freezing Ambulance Service-shikder-ambulance.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function PaymentPage() {

    return (
        <div className="  py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">

                        <h1 className="text-4xl font-bold text-foreground"> নিরাপদ ও দ্রুত পেমেন্ট সিস্টেম </h1>
                    </div>
                    <p className="text-lg text-muted-foreground"> শিকদার অ্যাম্বুলেন্স সার্ভিস </p>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">পেমেন্ট সিস্টেম</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paymentMethods.map((method) => (
                            <button
                                key={method.id}
                                className={`text-left transition-all duration-300  ${method.color} border-2 rounded-lg p-6 cursor-pointer`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="text-primary">
                                        {method.icon ? method.icon : <Image src={`/${method?.logo}` || '/default.png'} width={60} height={60} alt="Logo" className="w-10 h-10 rounded" />}
                                    </div>

                                </div>
                                <h3 className="font-bold text-lg text-foreground mb-1">{method.name}
                                    {method.name == "bKash" && <span className="text-xs"> (Personal)</span>}
                                    {method.name == "Nagad" && <span className="text-xs"> (Personal)</span>}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                                <div className="space-y-2">
                                    {method.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                            <span className="text-sm text-foreground">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
