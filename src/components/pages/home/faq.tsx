import React from "react";
import {
  ChevronDown,
  HelpCircle,
  Truck,
  RotateCcw,
  Package,
} from "lucide-react";

export default function PremiumFaqSection() {
  const faqData = [
    {
      id: "item-1",
      icon: Package,
      title: "What services does Shikder Ambulance provide?",
      content: [
        "Shikder Ambulance provides a wide range of emergency and non-emergency ambulance services across Dhaka and all districts in Bangladesh. Our services include AC and Non-AC ambulances, ICU/CCU life support ambulances, and freezing vans for deceased body transport. We ensure timely, safe, and professional transportation of patients and deceased individuals to hospitals, homes, or desired destinations with complete care and respect.",
      ],
    },
    {
      id: "item-2",
      icon: Truck,
      title: "How quickly can you send an ambulance?",
      content: [
        "In Dhaka city, we typically reach your location within 10 to 20 minutes, depending on traffic and distance. For inter-district services, arrival time depends on the location and road conditions. We always try our best to minimize waiting time in emergency situations",
      ],
    },
    {
      id: "item-3",
      icon: Truck,
      title: "Do you operate only in Dhaka?",
      content: [
        " No. While our head office is based in Dhaka, we offer ambulance services in all 64 districts of Bangladesh. Whether you’re in a remote village or a busy city, we can reach you with our well-coordinated network. Our long-distance transport options ensure that patients or deceased bodies can be transferred from one district to another safely.",
      ],
    },
    {
      id: "item-4",
      icon: Truck,
      title: "How can I contact Shikder Ambulance?",
      content: [
        "You can contact us by calling our 24/7 emergency hotline. We also accept inquiries and advance bookings by phone, website contact form, or social media. Our friendly support team is always ready to assist you with your needs. If you need Ambulance then Contact Us. ",
      ],
    },
    {
      id: "item-5",
      icon: Truck,
      title: "How can I book an ambulance?",
      content: [
        "Booking with Shikder Ambulance is fast and simple. Just call our dedicated hotline, and our support team will guide you through the process. You’ll need to provide the pickup location, destination, type of ambulance required, and patient condition (if applicable). We aim to dispatch the ambulance as quickly as possible after booking confirmation.",
      ],
    },
    {
      id: "item-6",
      icon: RotateCcw,
      title: "Can I book an ambulance in advance?",
      content: [
        "Yes, advance booking is available for planned hospital admissions, medical checkups, patient transfers, or events. This helps us arrange the right type of ambulance for your specific needs at the scheduled time without delay.",
      ],
    },
  ];

  return (
    <section className="relative py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg ">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
              Frequently Asked Questions - FAQs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Shikder Ambulance answers common questions about booking, ambulance types, emergency support, service areas, and pricing—helping customers get quick, clear info in urgent times.
            </p>
          </div>

          {/* FAQ Accordion - Pure CSS */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const Icon = item.icon;
                const isFirstItem = index === 0;

                return (
                  <details
                    key={item.id}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/80 hover:bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-500"
                    open={isFirstItem}
                  >
                    {/* Gradient overlay for open state */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 pointer-events-none opacity-0 group-open:opacity-100 transition-opacity duration-500"></div>

                    {/* Summary/Trigger */}
                    <summary className="relative cursor-pointer list-none px-8 py-6 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-gray-200 group-open:bg-gradient-to-br group-open:from-blue-500 group-open:to-purple-600 group-open:shadow-lg group-open:shadow-blue-500/25 transition-all duration-300">
                            <Icon className="w-6 h-6 text-gray-600 group-open:text-white transition-colors duration-300" />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 group-open:text-gray-900 transition-colors duration-300">
                            {item.title}
                          </h3>
                        </div>

                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-200 group-open:bg-blue-100 group-open:text-blue-600 group-open:rotate-180 transition-all duration-300">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </summary>

                    {/* Content */}
                    <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-2 duration-500">
                      <div className="pl-16">
                        <div className="space-y-4">
                          {item.content.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="text-gray-600 leading-relaxed text-balance opacity-0 group-open:opacity-100 transition-opacity duration-700"
                              style={{
                                transitionDelay: `${pIndex * 100 + 200}ms`,
                              }}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced border effect when open */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-blue-200 opacity-0 group-open:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="absolute inset-0 rounded-2xl shadow-xl shadow-blue-500/10 opacity-0 group-open:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
