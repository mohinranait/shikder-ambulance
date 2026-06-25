

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
        id: "bkash",
        name: " বিকাশ (bKash)",
        logo: 'bkash.png',
        description: "মোবাইল ব্যাংকিং সেবা",
        details: [" সর্বোচ্চ নিরাপদ লেনদেন", " 01710060020"],
        color: "bg-pink-50 border-pink-200 hover:bg-pink-100",

    }, 
    {
        id: "nagad",
        name: " নগদ (Nagad)",
        logo: 'nagad.png',
        description: "মোবাইল ব্যাংকিং সেবা",
        details: [" সর্বোচ্চ নিরাপদ লেনদেন", "01710060020 "],
        color: "bg-red-50 border-red-200 hover:bg-red-100",

    }, 
    {
        id: "dutch-bangla",
        name: "ডাচ-বাংলা ব্যাংক অ্যাকাউন্ট",
        logo: 'Dutch-Bangla.png',
        description: "ব্যাংক অ্যাকাউন্ট ট্রান্সফার",
        details: ["Name: Sahadat", " 3091 5702 86782"],
        color: "bg-blue-50 border-blue-200 hover:bg-blue-100", 
    },
    {
        id: "islami-bank",
        name: "ইসলামী ব্যাংক অ্যাকাউন্ট",
        logo: 'islami-bank.png',
        description: "ব্যাংক অ্যাকাউন্ট ট্রান্সফার",
        details: ["Name: Sahadat", " 2050 2340 2026 78607"],
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
    {
        id: "cash",
        name: " সরাসরি অফিস",
        icon: <HandCoins className="w-8 h-8" />,
        description: "অফিসের ম্যানেজারের কাছে সরাসরি বিল জমা দিন",
        details: [" অফিসে এসে নগদ ক্যাশ পরিশোধ করুন", " পরিশোধের পরে মানি রিসিট গ্রহন করুন"], 
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
                    <p className="text-lg text-muted-foreground"> আপনার জরুরি অ্যাম্বুলেন্স বুকিং আরও সহজ, দ্রুত ও নিরাপদ করতে আমরা নিয়ে এসেছি আধুনিক অনলাইন পেমেন্ট সিস্টেম। ১০০% বিশ্বাস্থতার সাথে অনলাইনে বুকিং করুন। <b>শিকদার অ্যাম্বুলেন্স সার্ভিস।</b> </p>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">পেমেন্ট মাধ্যম (Payment Methods)</h2>
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
                {/* Money Recipt Facilitce */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-5">অনলাইনে অ্যাম্বুলেন্স বুকিং সুবিধা </h2>
                    <div>
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p>লোকেশন যেখানেই হোক, ঘরে বসেই অনলাইনে সহজেই অ্যাম্বুলেন্স বুকিং করা যায়। </p>
                    </span>
                  </div>
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> মাত্র কয়েক সেকেন্ডেই বুকিং নিশ্চয়তা এবং দ্রুত অ্যাম্বুলেন্স সেবা পাওয়ার সুবিধা। </p>
                    </span>
                  </div>
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> কল করার মাধ্যমে দ্রুত বুকিং সুবিধা হওয়ায় গুরুত্বপূর্ণ সময় সাশ্রয় হয় এবং জরুরি মুহূর্তে সময় বাঁচায়। </p>
                    </span>
                  </div>                                    
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> প্রতিটি বুকিংয়ের জন্য অফিসিয়াল কনফার্মেশন ও মানি রিসিট প্রদান করা হয়। </p>
                    </span>
                  </div>
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> দিন-রাত যেকোন সময় অনলাইনে বুকিং ও সাপোর্ট সুবিধা।</p>
                    </span>
                  </div> 
                </div>
                </div>
                {/* Payment Terms */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-5">মানি রিসিটের সুবিধা </h2>
                    <div>                 
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p><b>মানি রিসিট হলো আপনার টাকা ও সেবার নিরাপদ প্রমাণ।</b></p>
                    </span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> প্রতিটি পেমেন্টের বিপরীতে একটি অফিসিয়াল রিসিট পাওয়া যায়, যা বৈধ প্রমাণ হিসেবে কাজ করে। </p>
                    </span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> কত টাকা নেওয়া হয়েছে এবং কোন সেবার জন্য নেওয়া হয়েছে, তা সব পরিষ্কারভাবে উল্লেখ থাকে। </p>
                    </span>
                    </div>                  
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> রিসিট ভবিষ্যতের জন্য সংরক্ষণ করা হয়, প্রয়োজনে যাচাই করা সম্ভব। </p>
                    </span>
                    </div>                  
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> হোয়ার্টআপ, ইমেই বা প্রিন্ট আকারে রিসিট প্রদান করা হয়।</p>
                    </span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> পরবর্তী কোনো সমস্যা বা বুকিংয়ের সময় এই রিসিট রেফারেন্স হিসেবে ব্যবহার করা যায়।</p>
                    </span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> অফিসিয়াল রিসিট থাকায় ভুল বা অসৎ লেনদেনের ঝুঁকি কমে যায় এবং প্রতারণা প্রতিরোধ করে। </p>
                    </span>
                    </div>                  
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> ভবিষ্যৎ কোনো সমস্যায় প্রমাণ হিসেবে ব্যবহারযোগ্য। </p>
                    </span>
                    </div>                  
                    <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">
                     <p> মানি রিসিট ছাড়া কোনো অফিসে টাকা ক্লেইম বা গ্রহণ প্রক্রিয়া সম্পূর্ণ করা কঠিন হতে পারে। </p>
                    </span>
                  </div>                                 
                </div>
                </div>
                {/* Payment Terms */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-5">আমাদের প্রতিশ্রুতি</h2>
                    <div>
                    <div className="flex items-center space-x-3">
                    <span className="text-gray-700">
                     <p><b> শিকদার অ্যাম্বুলেন্স সার্ভিস একটি বিশ্বস্ত সেবা প্রতিষ্ঠান, যা দ্রুত, নিরাপদ এবং মানবিক অ্যাম্বুলেন্স সেবা নিশ্চিত করে।</b></p>
                    </span>
                  </div>                                                   
                </div>
                </div>
            </div>
        </div>
    )
}

