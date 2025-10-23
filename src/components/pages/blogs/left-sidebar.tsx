import React from "react";
import AsidePosts from "./aside-posts";
import AdditionalInfo from "./additional-info";

const LeftSidebar = () => {
  return (
    <aside className="col-span-1 bg-white space-y-4 rounded p-2">
      <AsidePosts />
      <AdditionalInfo />
    </aside>
  );
};

export default LeftSidebar;
