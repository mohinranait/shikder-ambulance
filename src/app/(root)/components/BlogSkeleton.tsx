import React from "react";

const BlogSkeleton = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="border p-4 rounded-lg space-y-3 animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
