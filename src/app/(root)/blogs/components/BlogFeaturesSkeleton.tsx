import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const BlogFeaturesSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {Array.from({ length: 2 }).map((_, i) => (
        <Card
          key={i}
          className="overflow-hidden hover:shadow-xl transition-shadow"
        >
          <Skeleton className="h-64 w-full bg-gray-200" />
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-4 text-sm">
              <Skeleton className="h-4 w-24 bg-gray-200" />
              <Skeleton className="h-4 w-16 bg-gray-200" />
            </div>
            <Skeleton className="h-6 w-3/4 bg-gray-200" />
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-5/6 bg-gray-200" />
            <div className="flex justify-between pt-4 border-t">
              <Skeleton className="h-5 w-32 bg-gray-200" />
              <Skeleton className="h-5 w-5 bg-gray-200" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogFeaturesSkeleton;
