import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TPostFormData } from "@/types/post.types";
import { ArrowRight, Calendar } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blogs: TPostFormData[];
};
const Blogs = ({ blogs }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs?.map((blog, index) => (
        <Card
          key={index}
          className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
        >
          <div className="relative h-48 overflow-hidden">
            <Link href={`/${blog.slug}`}>
              <Image
                src={blog.image?.featuresImage || "/default.png"}
                alt={blog.postTitle}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{moment(blog?.createdAt).format("MMM DD, YYYY")}</span>
              </div>
            </div>
            <Link href={`/${blog.slug}`}>
              <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                {blog.postTitle}
              </h3>
            </Link>
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {blog.seoDescription || "No description available for this post."}
            </p>
            <Link href={`/${blog.slug}`}>
              <Button
                variant="ghost"
                className=" h-auto font-semibold text-blue-600 hover:text-white hover:bg-blue-600 group"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blogs;
