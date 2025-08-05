"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Users,
  Award,
} from "lucide-react";

export default function PremiumReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Emergency Coordinator",
      company: "City General Hospital",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Outstanding service! The response time was incredible and the medical team was extremely professional. They saved precious minutes that made all the difference.",
      location: "New York, NY",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Chief Medical Officer",
      company: "Metropolitan Healthcare",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Their advanced life support equipment and highly trained paramedics provide unmatched quality care. We trust them with our most critical patients.",
      location: "Los Angeles, CA",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Nursing Director",
      company: "Regional Medical Center",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Compassionate care combined with cutting-edge technology. The communication throughout the transport process was excellent and kept families informed.",
      location: "Chicago, IL",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Hospital Administrator",
      company: "St. Mary's Medical",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Reliable, efficient, and always available when we need them most. Their 24/7 service has been invaluable for our emergency department operations.",
      location: "Houston, TX",
    },
    {
      id: 5,
      name: "Dr. Lisa Thompson",
      role: "Emergency Physician",
      company: "University Hospital",
      avatar:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "The level of professionalism and medical expertise is exceptional. Every transport is handled with the utmost care and precision.",
      location: "Miami, FL",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
            Trusted by healthcare professionals across the nation for critical
            patient transport services
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
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl shadow-gray-500/10 border border-gray-100 p-8 lg:p-12 relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center">
                      <Quote className="w-10 h-10 text-blue-500 opacity-30" />
                    </div>

                    <div className="relative z-10">
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>

                      {/* Review Content */}
                      <blockquote className="text-lg lg:text-xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                        "{review.content}"
                      </blockquote>

                      {/* Reviewer Info */}
                      <div className="flex flex-col items-center">
                        <div className="relative mb-4">
                          <img
                            src={review.avatar || "/placeholder-user.jpg"}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover ring-2 ring-primary shadow-lg"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">
                          {review.name}
                        </h4>
                        <p className="text-blue-600 font-medium mb-1">
                          {review.role}
                        </p>
                        <p className="text-gray-600 mb-2">{review.company}</p>
                        <p className="text-sm text-gray-500">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg shadow-gray-500/20 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg shadow-gray-500/20 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
