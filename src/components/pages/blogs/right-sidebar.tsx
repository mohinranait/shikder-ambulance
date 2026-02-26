import React from "react";
import AdditionalInfo from "./additional-info";
import AsidePosts from "@/app/(root)/blogs/components/AsidePosts";

const RightSidebar = () => {
  return (
    <aside className="col-span-1 bg-white space-y-4 rounded p-2">
      <AsidePosts cardTitle={"Trending Posts"} />
      <AdditionalInfo />
    </aside>
  );
};

export default RightSidebar;
