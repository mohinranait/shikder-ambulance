import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/helpers";
import { TPostFormData } from "@/types/post.types";
import { AlertTriangle, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  posts: TPostFormData[];
};
const FeaturesBlogs = ({ posts }: Props) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {posts.map((post) => (
        <Card
          key={post._id}
          className="overflow-hidden hover:shadow transition-shadow group"
        >
          <div className="relative">
            <Link href={`/${post.slug || post._id}`}>
              <Image
                src={
                  post.image?.featuresImage ||
                  post.image?.thumbnail ||
                  "/default.png"
                }
                alt={post.postTitle}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <Badge className="absolute top-4 left-4 bg-red-600 text-white">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>
                    {Math.max(1, Math.ceil((post.readTime || 0) / 5 / 200))} min
                    read
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                <Link href={`/${post.slug || post._id}`}>{post.postTitle}</Link>
              </h3>

              <p className="text-gray-600 line-clamp-2">
                {post?.seoDescription || "No Description"}
              </p>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-3">
                  <p className="text-sm text-gray-500">Medical Professional</p>
                </div>

                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeaturesBlogs;
