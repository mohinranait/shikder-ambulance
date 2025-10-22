"use client";
import { getPosts } from "@/actions/postApi";
import { Card } from "@/components/ui/card";
import { BASE_URL } from "@/config/accessEnv";
import { TPostFormData } from "@/types/post.types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// Format short date
const formatShortDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

const AsidePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getPosts({ limit: "5", access: "user" });
      const posts = data?.payload?.posts;
      setPosts(posts);
    })();
  }, []);

  return (
    <ul className="flex flex-col gap-3">
      {posts.length > 0 && (
        <Card className="p-4 rounded-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Trends</h3>
          <div className="space-y-4">
            {posts.map((post: TPostFormData) => (
              <Link
                key={post._id}
                href={`/${post.slug || post._id}`}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div>
                  <Image
                    src={
                      post.image?.thumbnail ||
                      post.image?.featuresImage ||
                      "/default.png"
                    }
                    alt={post.postTitle}
                    width={100}
                    height={100}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm line-clamp-2">
                    {post.postTitle}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatShortDate(post.publishDate)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}
    </ul>
  );
};

export default AsidePosts;
