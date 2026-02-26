import React from "react";
import { Star, Users, Award } from "lucide-react";
import ReviewCarousel from "./ReviewCarousel";

export default function PremiumReviewSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-blue-500/25">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Shikder Ambulance is the Trusted Partner to the people by serve. We
            are always ready to provode emergency ambulance service in the all
            districts of Bangladesh.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8 bg-white rounded-2xl shadow-lg shadow-gray-500/10 px-8 py-4 border border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-sm font-medium text-gray-600">
                5.0 Rating
              </span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-600">
                500+ Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <ReviewCarousel />
      </div>
    </section>
  );
}
