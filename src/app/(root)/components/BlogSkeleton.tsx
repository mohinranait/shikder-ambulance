import React from "react";

const BlogSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="border rounded-lg space-y-3 animate-pulse">
          <div className="h-52 bg-gray-300 rounded-t-lg "></div>
          <div className="p-4 space-y-3 ">
            <div className="h-5 bg-gray-200 rounded w-full"></div>
            <div className="h-5 bg-gray-200 rounded w-5/6"></div>
             <div className="h-10 bg-gray-200 rounded w-2/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
