"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2, Phone, DollarSign, Smartphone, Building2, HandCoins } from "lucide-react"
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
        details: ["চালক/কর্মীর কাছে সরাসরি পরিশোধ করুন", " পরিশোধের আগে অফিসে অবগত করুন"],
        color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    },
]

export const metadata: Metadata = {
  title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
  description:
    "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
  keywords:
    "Freezing Ambulance Services. freezing ambulance, dead body carrier, ambulance service Dhaka, freezer ambulance Bangladesh, mortuary ambulance, body transportation service, dead body carrier frozen ambulance, Dhaka Airport freezing Ambulance, frozen ambulance, Shikder Freezing Ambulance, Dhaka freezing Ambulance, near Ac Ambulance, online Ambulance service, best Ambulance, Mirpur Ambulance Service, Shahabag Ambulance Service, Mirpur Ambulance Service, Badda Ambulance Service, Basaboo Ambulance Service, Madartek Ambulance Service, Mugdha Ambulance Service, Jatrabari Ambulance Service, Maniknagore Ambulance Service, Shenbag Ambulance Service, Freezing Ambulance Service Dhaka, Dead Body Freezing Ambulance Dhaka, Freezer Ambulance Dhaka, Body Freezer Ambulance Dhaka, Morgue Ambulance Dhaka, Dead Body Transport Dhaka, 24 Hour Freezing Ambulance Dhaka, Freezing Ambulance Near Me Dhaka, Emergency Freezing Ambulance Dhaka, Frozen Dead Body Ambulance Dhaka, AC Freezer Ambulance Dhaka, Long Distance Freezing Ambulance Dhaka, Dhaka Airport Freezing Ambulance, Hazrat Shahjalal Airport Freezer Ambulance, Bashundhara Freezing Ambulance, Gulshan Freezing Ambulance, Banani Freezing Ambulance, Baridhara Freezing Ambulance, Mohakhali Freezing Ambulance, Tejgaon Freezer Ambulance, Farmgate Freezing Ambulance, Karwan Bazar Freezing Ambulance, Shahbag Freezing Ambulance, Dhanmondi Freezing Ambulance, Mohammadpur Freezing Ambulance, Adabor Freezing Ambulance, Shyamoli Freezing Ambulance, Kallyanpur Freezer Ambulance, Mirpur Freezing Ambulance, Mirpur 1 Freezing Ambulance, Mirpur 10 Freezer Ambulance, Pallabi Freezing Ambulance, Rupnagar Freezing Ambulance, Uttara Freezing Ambulance, Uttara Sector Freezing Ambulance, Khilkhet Freezing Ambulance, Nikunja Freezing Ambulance, Kuril Freezing Ambulance, Badda Freezing Ambulance, Bashabo Freezing Ambulance, Khilgaon Freezing Ambulance, Malibagh Freezing Ambulance, Moghbazar Freezing Ambulance, Mouchak Freezer Ambulance, Rampura Freezing Ambulance, Banasree Freezing Ambulance, Nandipara Freezing Ambulance, Aftabnagar Freezing Ambulance, Merul Badda Freezer Ambulance, Motijheel Freezing Ambulance, Kamalapur Freezer Ambulance, Paltan Freezing Ambulance, Kakrail Freezing Ambulance, Nayapaltan Freezing Ambulance, Wari Freezing Ambulance, Sutrapur Freezing Ambulance, Gendaria Freezer Ambulance, Sadarghat Freezing Ambulance, Babubazar Freezer Ambulance, Kotwali Freezing Ambulance, Bangshal Freezing Ambulance, Jatrabari Freezing Ambulance, Donia Freezing Ambulance, Kadamtali Freezer Ambulance, Rayerbag Freezer Ambulance, Shyampur Freezing Ambulance, Demra Freezing Ambulance, Sarulia Freezing Ambulance, Matuail Freezing Ambulance, Narinda Freezing Ambulance, Lalbagh Freezing Ambulance, Azimpur Freezing Ambulance, Hazaribagh Freezing Ambulance, Kamrangirchar Freezer Ambulance, Islambagh Freezing Ambulance, Chawkbazar Freezing Ambulance, New Market Freezing Ambulance, Nilkhet Freezing Ambulance, Science Lab Freezing Ambulance, Katabon Freezing Ambulance, Elephant Road Freezer Ambulance, Panthapath Freezing Ambulance, Green Road Freezing Ambulance, Segunbagicha Freezing Ambulance, Shahbagh Freezer Ambulance, DMCH Freezing Ambulance, BSMMU Freezer Ambulance, Dhaka Medical College Freezing Ambulance, Square Hospital Freezer Ambulance, Labaid Freezing Ambulance, Popular Hospital Freezer Ambulance, Evercare Hospital Freezing Ambulance, United Hospital Freezing Ambulance, Holy Family Hospital Freezer Ambulance, Ibn Sina Freezing Ambulance, Asgar Ali Hospital Freezer Ambulance, Enam Medical Freezing Ambulance, Emergency Freezing Ambulance Dhaka City, Dhaka City Freezer Ambulance, Best Freezing Ambulance Dhaka, Affordable Freezer Ambulance Dhaka, Quick Freezing Ambulance Dhaka, Reliable Freezer Ambulance Service Dhaka, Professional Freezing Ambulance Dhaka, Patient Dead Body Freezing Ambulance Dhaka, Dhaka to Chittagong Freezing Ambulance, Dhaka to Sylhet Freezer Ambulance, Dhaka to Khulna Freezing Ambulance, Dhaka to Barisal Freezing Ambulance, Dhaka to Rajshahi Freezer Ambulance, Dhaka to Rangpur Freezing Ambulance, Long Route Freezing Ambulance Dhaka, Highway Freezer Ambulance Dhaka, Home to Morgue Freezer Ambulance, Hospital to Home Freezing Ambulance, Emergency Dead Body Transport Dhaka, Dhaka Freezing Body Transport, Citywide Freezing Ambulance Service, Frozen Body Transport Dhaka, Body Preservation Ambulance Dhaka, Refrigerated Ambulance Dhaka, Dhaka Refrigerated Dead Body Ambulance, Fast Freezing Ambulance Dhaka, 24/7 Freezer Ambulance Dhaka, Near Me Freezing Ambulance Service, Premium Freezing Ambulance Dhaka, Dedicated Freezer Ambulance Dhaka, Dhaka Burial Transport Ambulance, Janaza Transport Freezing Ambulance, Coffin Transport Freezing Ambulance Dhaka, Dhaka Mortuary Ambulance Service.",
  authors: [{ name: "Shikder Ambulance" }],
  alternates: {
    canonical: "https://shikderambulance.com/freezing-ambulance",
  },
  openGraph: {
    title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Freezing Ambulance Service in Dhaka. It is a dead body carrier freezing ambulance in Bangladesh. 24/7 dead body carrier with advanced freezing technology. Single & double cabin freezer ambulance is available in the all districts of Bangladesh.",
    url: "https://shikderambulance.com/freezing-ambulance",
    siteName: "Shikder Ambulance",
    images: [
      {
        url: "/images/Freezing Ambulance Service-shikder-ambulance.jpg",
        width: 1200,
        height: 630,
        alt: "Freezing Ambulance Service-Shikder Ambulance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freezing Ambulance Service in Dhaka | Shikder Ambulance",
    description:
      "Freezing Ambulance Service in Dhaka. Professional 24/7 freezing ambulance service across Bangladesh.",
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

                        <h1 className="text-4xl font-bold text-foreground">শিকদার অ্যাম্বুলেন্স সার্ভিস</h1>
                    </div>
                    <p className="text-lg text-muted-foreground">নিরাপদ এবং সহজ পেমেন্ট পদ্ধতি </p>
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
