import Post from "@/models/Post";

import React, { Suspense } from "react";
import FeaturesBlogs from "./FeaturesBlogs";
import BlogFeaturesSkeleton from "./BlogFeaturesSkeleton";
import connectDB from "@/config/mongodb";
export const dynamic = "force-dynamic";

const BlogFeatures = async () => {
  await connectDB();
  const blogs = await Post.aggregate([
    {
      $match: { status: "Publish" },
    },
    { $sort: { createdAt: -1 } },
    { $limit: 2 },
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-gray-600">
            Essential Patient transport knowledge and emergency care insights
          </p>
        </div>
        <Suspense fallback={<BlogFeaturesSkeleton />}>
          <FeaturesBlogs posts={blogs} />
        </Suspense>
      </div>
    </section>
  );
};

export default BlogFeatures;
