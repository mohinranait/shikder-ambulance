"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  User,
  Search,
  Heart,
  Stethoscope,
  AlertTriangle,
  ArrowRight,
  Eye,
  MessageCircle,
  Share2,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL } from "@/config/accessEnv";
import { useState, useEffect, useMemo } from "react";
import { getPosts } from "@/actions/postApi";

export type TPostFormData = {
  _id?: string;
  author: string;
  postTitle: string;
  slug?: string;
  shortDescription?: string;
  image?: {
    featuresImage?: string;
    thumbnail?: string;
  };
  publishDate: Date;
  content?: string;
  contents?: Array<{
    priority?: string;
    content?: string;
  }>;
  status: "Publish" | "Unpublish";
  contactNumber?: string;
  layouts?: {
    banner?: boolean;
    sidebar?: "posts" | "comments" | "author";
    isSidebar?: "right" | "left" | "both" | "none";
    comments?: boolean;
  };
  seoTitle?: string;
  seoDescription?: string;
  seoKeyword?: string[];
  createdAt?: string;
  updatedAt?: Date;
};

export default function BlogsPage() {
  const [posts, setPosts] = useState<TPostFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [hasMore, setHasMore] = useState(true);

  // Fetch posts function
  const fetchPosts = async (
    searchTerm: string = "",
    loadMore: boolean = false
  ) => {
    try {
      if (!loadMore) {
        setLoading(true);
      }

      const currentLimit = loadMore ? limit + 6 : limit;

      const response = await getPosts({ limit: "5", access: "user" });

      //   if (!response.ok) {
      //     throw new Error("Failed to fetch posts");
      //   }

      //   const data = await response.json();
      //   console.log({ data });

      const publishedPosts = response?.payload?.posts?.filter(
        (post: TPostFormData) => post.status === "Publish"
      );
      console.log({ publishedPosts });

      setPosts(publishedPosts);
      //   setHasMore(publishedPosts.length >= currentLimit);

      //   if (loadMore) {
      //     setLimit(currentLimit);
      //   }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
      setSearchLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle search
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setSearchLoading(true);
    setLimit(10); // Reset limit for new search
    await fetchPosts(searchQuery);
  };

  // Handle search input change with debouncing
  useEffect(() => {
    const delayedSearch = setTimeout(() => {
      if (searchQuery.trim() || searchQuery === "") {
        setSearchLoading(true);
        setLimit(10);
        fetchPosts(searchQuery);
      }
    }, 500);

    return () => clearTimeout(delayedSearch);
  }, [searchQuery]);

  // Load more posts
  const loadMorePosts = () => {
    fetchPosts(searchQuery, true);
  };

  // Get featured posts (first 2 posts)
  const featuredPosts = useMemo(() => posts.slice(0, 2), [posts]);
  const regularPosts = useMemo(() => posts.slice(2), [posts]);

  // Calculate read time based on content length
  const calculateReadTime = (post: TPostFormData): string => {
    const wordsPerMinute = 200;
    const contentLength =
      (post.content?.length || 0) +
      (post.shortDescription?.length || 0) +
      (post.contents?.reduce(
        (acc, content) => acc + (content.content?.length || 0),
        0
      ) || 0);
    const words = contentLength / 5; // Approximate words
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${Math.max(1, minutes)} min read`;
  };

  // Format date
  const formatDate = (date: Date | string): string => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format short date
  const formatShortDate = (date: Date | string): string => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  // Get recent posts for sidebar
  const recentPosts = useMemo(() => posts.slice(0, 3), [posts]);

  if (loading && posts.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                <Heart className="h-3 w-3 mr-1" />
                Medical Knowledge Hub
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Medical Emergency &{" "}
                <span className="text-blue-600">Health Care</span> Blog
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Expert medical advice, emergency preparedness tips, and health
                care insights from Bangladesh's leading ambulance service
                professionals. Stay informed, stay prepared, save lives.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search medical topics, emergency tips, health advice..."
                  className="pl-10 pr-4 py-3 text-lg "
                />
                <Button
                  type="submit"
                  disabled={searchLoading}
                  className="absolute rounded-l-none -right-[2px] top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
                >
                  {searchLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Search"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-lg text-gray-600">
                Essential medical knowledge and emergency care insights
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card
                  key={post._id}
                  className="overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative">
                    <Image
                      src={
                        post.image?.featuresImage ||
                        post.image?.thumbnail ||
                        "/placeholder.svg"
                      }
                      alt={post.postTitle}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
                          <span>{calculateReadTime(post)}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        <Link href={`/blogs/${post.slug || post._id}`}>
                          {post.postTitle}
                        </Link>
                      </h3>

                      <div
                        className="text-gray-600 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html:
                            post.shortDescription ||
                            post.content?.substring(0, 150) + "..." ||
                            "",
                        }}
                      />

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-3">
                          <div>
                            <p className="text-sm text-gray-500">
                              Medical Professional
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results Message */}
      {posts.length === 0 && !loading && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-4">
              <Search className="h-16 w-16 text-gray-400 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">
                No posts found
              </h3>
              <p className="text-gray-600">
                {searchQuery
                  ? `No posts found for "${searchQuery}". Try different keywords.`
                  : "No blog posts available at the moment."}
              </p>
              {searchQuery && (
                <Button
                  onClick={() => {
                    setSearchQuery("");
                    fetchPosts();
                  }}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  Clear Search
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      {posts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Blog Posts */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {searchQuery
                      ? `Search Results (${posts.length})`
                      : `Latest Articles (${posts.length})`}
                  </h2>
                </div>

                {regularPosts.length > 0 && (
                  <div className="space-y-8">
                    {regularPosts.map((post) => (
                      <Card
                        key={post._id}
                        className="overflow-hidden hover:shadow-lg transition-shadow group"
                      >
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="relative">
                            <Image
                              src={
                                post.image?.featuresImage ||
                                post.image?.thumbnail ||
                                "/placeholder.svg"
                              }
                              alt={post.postTitle}
                              width={300}
                              height={200}
                              className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="md:col-span-2 p-6">
                            <div className="space-y-4">
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>
                                    {formatShortDate(post.publishDate)}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{calculateReadTime(post)}</span>
                                </div>
                              </div>

                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                <Link href={`/blogs/${post.slug || post._id}`}>
                                  {post.postTitle}
                                </Link>
                              </h3>

                              <div
                                className="text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    post.shortDescription ||
                                    post.content?.substring(0, 150) + "..." ||
                                    "",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Load More */}
                {hasMore && posts.length >= 10 && (
                  <div className="text-center">
                    <Button
                      onClick={loadMorePosts}
                      disabled={loading}
                      variant="outline"
                      size="lg"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        <>
                          Load More Articles
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <Link
                          key={post._id}
                          href={`/blogs/${post.slug || post._id}`}
                          className="flex items-center space-x-3 group cursor-pointer"
                        >
                          <Image
                            src={
                              post.image?.thumbnail ||
                              post.image?.featuresImage ||
                              "/placeholder.svg"
                            }
                            alt={post.postTitle}
                            width={60}
                            height={60}
                            className="w-15 h-15 object-cover rounded-lg"
                          />
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

                {/* Emergency Contact */}
                <Card className="p-6 bg-red-50 border-red-200">
                  <div className="text-center space-y-4">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Medical Emergency?
                    </h3>
                    <p className="text-gray-600">
                      Don't wait - call for immediate assistance
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Heart className="h-4 w-4 mr-2" />
                        Call: 01627 609222
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        WhatsApp: 017100 60020
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Newsletter */}
                <Card className="p-6 bg-blue-50 border-blue-200">
                  <div className="text-center space-y-4">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Stethoscope className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Stay Updated
                    </h3>
                    <p className="text-gray-600">
                      Get the latest medical tips and emergency care advice
                    </p>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="border-blue-200 focus:border-blue-500"
                      />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Subscribe to Newsletter
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have a Medical Question?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our medical experts are here to help. Contact us for professional
              advice and emergency services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Heart className="h-5 w-5 mr-2" />
                Contact Medical Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View All Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
