import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const BlogListsSkeleton = () => {
  return (
    <div className="space-y-6">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            <Skeleton className="w-full h-48 md:h-full" />
            <div className="md:col-span-2 p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogListsSkeleton;
