'use client'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ReviewCarousel = () => {

   const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Md. Asraful Islam",
      role: "Emergency Coordinator",
      company: "City General Hospital",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        " We booked them during Eid holidays from Dhaka to Mymensingh, and they responded instantly. It’s comforting to know a service like this is available 24/7.",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      name: "Dr. Mehedi Hassan",
      role: "Madical Manager",
      company: "Popular Hospital",
      avatar:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "I needed an emergency ambulance at midnight in Dhaka, and Shikder Ambulance arrived within 25 minutes. The driver was polite, and the ambulance was clean and well-equipped. Highly recommend!",
      location: "Uttara, Bangladesh",
    },
    {
      id: 3,
      name: "Dr. Rasida Akter Tuly",
      role: "Manager",
      company: "Regional Medical Center",
      avatar:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Unlike other services, Shikder gave us a clear quote over the phone and didn’t add any hidden charges. Great value for such professional service.",
      location: "Barisal Sadar, Bangladesh",
    },
    {
      id: 4,
      name: "Sakib Al Hassan",
      role: "General Manager",
      company: "Bilash Bozon",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "Reliable, efficient, and always available when we need them most. Their 24/7 service has been invaluable for our emergency department operations.",
      location: "Faridpur, Bangladesh",
    },
    {
      id: 5,
      name: "Dr. Siddikur Rahaman",
      role: "Emergency Physician",
      company: "Desh Bangla Medical",
      avatar:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content:
        "I was very impressed with how quickly they picked up the call and dispatched an ambulance. The communication from their team was clear and helpful throughout.",
      location: "Barguna, Bangladesh",
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
        className={`w-5 h-5 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
      />
    ));
  };


  return (
    <React.Fragment>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-gradient-to-r from-blue-500 to-purple-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
    </React.Fragment>
  )
}

export default ReviewCarousel