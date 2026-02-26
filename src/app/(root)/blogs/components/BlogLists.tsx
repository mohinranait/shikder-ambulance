
import Post from "@/models/Post";

import React, { Suspense } from "react";
import BlogsMiddleLists from "./BlogsMiddleLists";
import BlogListsSkeleton from "./BlogListsSkeleton";
import { posts } from "@/config/constData";

const BlogLists = async () => {
  

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
        readTime: 1,
        slug: 1,
        seoDescription: 1,
        publishDate: 1,
        createdAt: 1,
      },
    },
  ]);


  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Latest Articles ({posts?.length})
        </h2>
      </div>

      <Suspense fallback={<BlogListsSkeleton />}>
        {blogs?.length === 0 ? (
          <p className="text-gray-500">No posts available.</p>
        ) : (
          <BlogsMiddleLists posts={blogs} />
        )}
      </Suspense>
    </div>
  );
};

export default BlogLists;
