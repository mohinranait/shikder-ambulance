import React from "react";
import AsidePosts from "./aside-posts";

const RightSidebar = () => {
  return (
    <aside className="col-span-1 bg-white rounded p-2">
      <AsidePosts />
    </aside>
  );
};

export default RightSidebar;
