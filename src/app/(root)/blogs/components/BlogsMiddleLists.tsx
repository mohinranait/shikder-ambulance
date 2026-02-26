import { Card } from "@/components/ui/card";
import { formatShortDate } from "@/lib/helpers";
import { TPostFormData } from "@/types/post.types";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  posts: TPostFormData[];
};
const BlogsMiddleLists = ({ posts }: Props) => {
  return (
    <div className="space-y-6">
      {posts?.map((post) => (
        <Card
          key={post._id}
          className="overflow-hidden hover:shadow transition-shadow group"
        >
          <div className="grid md:grid-cols-3 ">
            <div className="relative">
              <Link href={`/${post.slug || post._id}`}>
                <Image
                  src={
                    post.image?.featuresImage ||
                    post.image?.thumbnail ||
                    "/default.png"
                  }
                  alt={post.postTitle}
                  width={300}
                  height={200}
                  // fill
                  className="w-full h-48 md:h-full object-cover block group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
            <div className="md:col-span-2 p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatShortDate(post.publishDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {Math.max(1, Math.ceil((post.readTime || 0) / 5 / 200))}{" "}
                      min read
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  <Link href={`/${post.slug || post._id}`}>
                    {post.postTitle}
                  </Link>
                </h3>

                <p className="line-clamp-3">
                  {post?.seoDescription || "No description"}
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogsMiddleLists;
