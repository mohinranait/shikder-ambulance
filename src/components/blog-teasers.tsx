"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/actions/postApi";
import { useEffect, useState } from "react";
import type { TPostFormData } from "@/types/post.types";
import moment from "moment";

export function BlogTeasers() {
  const [blogs, setBlogs] = useState<TPostFormData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await getPosts({ limit: "6", access: "user" });
        if (res?.success) {
          setBlogs(res?.payload?.posts);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);


  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest Health & Safety Insights
          </h2>
          <p className=" text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert advice, emergency preparedness tips, and
            important health information from our medical health care professionals. The best and quality ambulance is available in anytime, anywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? // Loading skeleton cards
            [...Array(6)].map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-gray-200 animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  </div>
                  <div className="h-10 w-28 bg-gray-200 rounded animate-pulse"></div>
                </CardContent>
              </Card>
            ))
            : // Original blog cards
            blogs?.map((blog, index) => (
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
                      <span>
                        {moment(blog?.createdAt).format("MMM DD, YYYY")}
                      </span>
                    </div>
                  </div>
                  <Link href={`/${blog.slug}`}>
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {blog.postTitle}
                    </h3>
                  </Link>
                  <p className="text-base text-muted-foreground  mb-4 line-clamp-2">
                    {blog.seoDescription ||
                      "No description available for this post."}
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
