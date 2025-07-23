"use client";

import { useState, useEffect } from "react";

export default function FrontendPageLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 overflow-hidden">
      {/* Main Loader Container */}
      <div className="relative z-10 text-center">
        {/* Animated Ambulance */}

        {/* Enhanced Loading Section with Circular Progress */}
        <div className="mb-8">
          {/* Circular Progress Counter */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-32 h-32">
              {/* Background Circle */}
              <svg
                className="w-32 h-32 transform -rotate-90"
                viewBox="0 0 120 120"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Progress Circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 50 * (1 - progress / 100)
                  }`}
                  className="transition-all duration-300 ease-out"
                />
                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Percentage Counter in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 counting-animation">
                    {progress}%
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Complete</div>
                </div>
              </div>

              {/* Pulsing Dot at Progress End */}
              <div
                className="absolute w-3 h-3 bg-blue-500 rounded-full pulse-dot"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${
                    progress * 3.6 - 90
                  }deg) translateY(-50px)`,
                }}
              ></div>
            </div>
          </div>

          {/* Linear Progress Bar (Secondary) */}
          <div className="w-80 mx-auto mb-4">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 h-full rounded-full transition-all duration-300 ease-out progress-bar-animated"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
