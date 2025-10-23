"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2, Phone, DollarSign, Smartphone, Building2, HandCoins } from "lucide-react"
import Image from "next/image"

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
        id: "cash",
        name: "হ্যান্ড ক্যাশ (নগদ)",
        icon: <HandCoins className="w-8 h-8" />,
        description: "সরাসরি নগদ অর্থ প্রদান",
        details: ["চালক/কর্মীর কাছে সরাসরি পরিশোধ করুন", "কোনো অতিরিক্ত চার্জ নেই", "তাৎক্ষণিক সেবা পাবেন"],
        color: "bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
    },
    {
        id: "bkash",
        name: "bKash",
        logo: 'bkash.png',
        description: "মোবাইল ব্যাংকিং সেবা",
        details: ["ফোন নম্বর: 017100-60020", "সর্বোচ্চ নিরাপদ লেনদেন", "২৪/৭ উপলব্ধ"],
        color: "bg-pink-50 border-pink-200 hover:bg-pink-100",

    },
    {
        id: "nagad",
        name: "Nagad",
        logo: 'nagad.png',
        description: "মোবাইল ব্যাংকিং সেবা",
        details: ["ফোন নম্বর: 017100-60020", "সর্বোচ্চ নিরাপদ লেনদেন", "২৪/৭ উপলব্ধ"],
        color: "bg-red-50 border-red-200 hover:bg-red-100",

    },
    {
        id: "rocket",
        name: "Rocket",
        logo: 'rocket.png',
        description: "ডাচ-বাংলা ব্যাংক মোবাইল সেবা",
        details: ["ফোন নম্বর: N/A", "দ্রুত এবং নির্ভরযোগ্য", "সহজ লেনদেন প্রক্রিয়া"],
        color: "bg-purple-50 border-purple-200 hover:bg-purple-100",

    },
    {
        id: "dutch-bangla",
        name: "ডাচ-বাংলা ব্যাংক",
        logo: 'Dutch-Bangla.png',
        description: "ব্যাংক অ্যাকাউন্ট ট্রান্সফার",
        details: ["অ্যাকাউন্ট নম্বর: 3091 5702 86782", "রাউটিং নম্বর: ", "অ্যাকাউন্ট হোল্ডার: Sahadat"],
        color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    },
    {
        id: "islami-bank",
        name: "ইসলামী ব্যাংক",
        logo: 'islami-bank.png',
        description: "ব্যাংক অ্যাকাউন্ট ট্রান্সফার",
        details: ["অ্যাকাউন্ট নম্বর: 2050 2340 2026 78607", "রাউটিং নম্বর: ", "অ্যাকাউন্ট হোল্ডার: Sahadat"],
        color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
    },
]

export default function PaymentPage() {

    return (
        <div className="  py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">

                        <h1 className="text-4xl font-bold text-foreground">শিকদার অ্যাম্বুলেন্স সার্ভিস</h1>
                    </div>
                    <p className="text-lg text-muted-foreground">নিরাপদ এবং সহজ পেমেন্ট পদ্ধতি</p>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">পেমেন্ট অপশনস</h2>
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
                                <h3 className="font-bold text-lg text-foreground mb-1">{method.name}</h3>
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
