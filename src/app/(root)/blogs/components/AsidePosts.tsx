import { Card } from "@/components/ui/card";
import Post from "@/models/Post";
import React, { Suspense } from "react";
import SidebarPosts from "./SidebarPosts";
import SidebarSkeleton from "./SidebarSkeleton";

const AsidePosts = async ({cardTitle="Recent Posts"}:{cardTitle?: string}) => {

  const blogs = await Post.aggregate([
    {
      $match: { status: "Publish" },
    },
    {
      $sample: { size: 6 },
    },
    {
      $project: {
        postTitle: 1,
        image: 1,
        slug: 1,
        publishDate: 1,
        createdAt: 1,
      },
    },
  ]);

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{cardTitle}</h3>

      <Suspense fallback={<SidebarSkeleton />}>
        {blogs?.length === 0 ? (
          <p className="text-gray-500 text-sm">Not available.</p>
        ) : (
          <SidebarPosts blogs={blogs} />
        )}
      </Suspense>
    </Card>
  );
};

export default AsidePosts;
