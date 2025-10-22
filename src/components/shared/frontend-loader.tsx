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
      <div className="  border-[16px] border-r-[16px] border-gray-200  border-r-red-600 h-28 w-28 rounded-full animate-spin"></div>
    </div>
  );
}
