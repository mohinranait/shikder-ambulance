"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CallButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:01710060020";
  };

  return (
    <>
      {/* Custom CSS */}
      <style jsx>{`
        @keyframes rippleEffect {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        .call-button-main {
          animation: floatAnimation 4s ease-in-out infinite,
            glowPulse 2s ease-in-out infinite;
        }

        .ripple-ring {
          animation: rippleEffect 2s ease-out infinite;
        }

        .ripple-ring:nth-child(2) {
          animation-delay: 0.5s;
        }
      `}</style>

      <div
        className="hidden lg:block fixed right-6 bottom-10 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Multiple Ripple Rings */}
        <div className="absolute inset-0 w-14 h-14">
          <div className="ripple-ring absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 opacity-30"></div>
          <div className="ripple-ring absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-500 opacity-25"></div>
        </div>

        {/* Main Call Button */}
        <Link href={'https://wa.me/+8801710060020'}>
          <button
            onClick={handleCall}
            className={` relative w-14 h-14  rounded-full bg-gradient-to-br from-green-500 via-emerald-500 to-green-600  shadow-2xl transition-all duration-700 group`}
          >
            <Image src={'/WhatsApp.webp'} width={60} height={60} alt="Image" className="w-full h-full" />
          </button>
        </Link>

      </div>
    </>
  );
}
