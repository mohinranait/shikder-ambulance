import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SidebarSkeleton = () => {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="flex items-center space-x-3">
          <Skeleton className="w-15 h-15 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarSkeleton;
