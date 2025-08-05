import {
  ChevronDown,
  HelpCircle,
  Package,
  RotateCcw,
  Truck,
} from "lucide-react";
import React from "react";

const FaqComponent = () => {
  const faqData = [
    {
      id: "item-1",
      icon: Package,
      title: "Product Information",
      content: [
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
        "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
      ],
    },
    {
      id: "item-2",
      icon: Truck,
      title: "Shipping Details",
      content: [
        "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
        "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
      ],
    },
    {
      id: "item-3",
      icon: RotateCcw,
      title: "Return Policy",
      content: [
        "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
        "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
      ],
    },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg ">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Quick answers to common questions about our emergency patient
          transport services.
        </p>
      </div>
      <div className="">
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
    </>
  );
};

export default FaqComponent;
