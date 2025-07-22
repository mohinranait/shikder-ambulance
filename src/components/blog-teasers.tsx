"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/actions/postApi";
import { useEffect, useState } from "react";
import { TPostFormData } from "@/types/post.types";

export function BlogTeasers() {
  const [blogs, setBlogs] = useState<TPostFormData[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await getPosts({ limit: "5", access: "user" });

        if (res?.success) {
          setBlogs(res?.payload?.posts);
        }
      } catch (error) {
        console.log(error);
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert advice, emergency preparedness tips, and
            important health information from our medical professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((blog, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image?.thumbnail || "/placeholder.svg"}
                  alt={blog.postTitle}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.createdAt?.toString()}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                  {blog.postTitle}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, vitae odio voluptas atque iste dolores.
                </p>

                <Link href={`/${blog.slug}`}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700 group"
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
