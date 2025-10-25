"use client";

import { deletePostById, getPosts } from "@/actions/postApi";
import { Navbar } from "@/components/admin/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Main } from "@/components/ui/main";
import {
  Plus,
  Search,
  Edit3,
  Eye,
  Trash2,
  Calendar,
  FileText,
  MoreVertical,
  Filter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type TQuery = {
  limit?: string;
  access?: string;
  search?: string;
  page?: string;
};

const AllPostPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<any | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handleCallAPI = async ({
    limit = "10",
    access = "admin",
    search = "",
    page = "1",
  }: TQuery) => {
    const query: TQuery = { limit, access, search, page };
    try {
      setIsLoading(true);
      const data = await getPosts(query);
      if (data?.success) {
        setPosts(data?.payload?.posts);
        setTotal(data?.payload?.total);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load posts.");
    } finally {
      setIsLoading(false);
    }
  };

  // Debounced search
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleCallAPI({ search: searchTerm, page: '1', limit: String(limit) });
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  // Fetch on mount + pagination changes
  useEffect(() => {
    handleCallAPI({
      limit: String(limit),
      page: String(page - 1),
      search: searchTerm,
    });
  }, [page, limit]);

  // Handle delete post
  const handleDelete = async () => {
    try {
      if (!isSelected?._id) {
        return;
      }
      setIsDeleteLoading(true);
      const data = await deletePostById(isSelected?._id);
      if (data?.success) {
        setPosts((prev) => prev?.filter((d) => d?._id !== isSelected?._id));
        setShowDeleteDialog(false);
        toast.success("Post deleted successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Generate numbered pages
  const totalPages = Math.ceil(total / limit);
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <>
      <Navbar fixed />
      <Main>
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FileText className="h-8 w-8 text-blue-600" />
                All Posts
              </h1>
              <p className="text-gray-600">Manage and organize your content</p>
            </div>
            <Link href="/admin/post/new">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </Link>
          </div>

          {/* Search and Filter Section */}
          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search posts..."
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  />
                </div>
                <Button
                  variant="outline"
                  className="border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts Grid */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="grid gap-4">
                {[...Array(5)].map((_, i) => (
                  <Card key={i} className="border-0 shadow-sm">
                    <CardContent className="p-6">
                      <div className="animate-pulse flex space-x-4">
                        <div className="rounded-lg bg-gray-200 h-16 w-16"></div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-12 text-center">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No posts found
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Get started by creating your first post.
                  </p>
                  <Link href="/admin/post/new">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Post
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {posts.map((post) => (
                  <Card
                    key={post._id}
                    className="border-0 p-3 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white "
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          {/* Post Image */}
                          <div className="relative">
                            <Image
                              src={
                                post?.image?.featuresImage ||
                                "/default.png?height=64&width=64"
                              }
                              width={64}
                              height={64}
                              alt={post.postTitle}
                              className="rounded-lg object-cover border-2 border-gray-100"
                            />
                          </div>

                          {/* Post Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                                  <Link
                                    href={`/${post?.slug}`}
                                    target="_blank"
                                    className="hover:text-blue-600 transition-colors"
                                  >
                                    {post?.postTitle}
                                  </Link>
                                </h3>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                                  {post?.seoTitle || post?.shortDescription}
                                </p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {formatDate(post?.createdAt)}
                                  </div>
                                  <Badge
                                    variant={
                                      post?.status === "Publish"
                                        ? "default"
                                        : "secondary"
                                    }
                                    className={`${post?.status === "Publish"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                                      : "bg-red-100 text-red-800 hover:bg-red-100"
                                      }`}
                                  >
                                    {post?.status}
                                  </Badge>
                                  <Link href={`/admin/post/comments/${post?._id}`}>
                                    All Comments
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2">
                          <Link href={`/${post?.slug}`} target="_blank">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-600 hover:text-blue-600"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link
                            href={`/admin/post/new?link=${post?.slug}`}
                            target="_blank"
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-600 hover:text-green-600"
                            >
                              <Edit3 className="h-4 w-4" />
                            </Button>
                          </Link>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-600 hover:text-gray-900"
                              >
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => {
                                  setIsSelected(post);
                                  setShowDeleteDialog(true);
                                }}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Numbered Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
              {/* Page size selector */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">Show:</label>
                <select
                  value={limit}
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setPage(1);
                  }}
                  className="border border-gray-300 rounded-lg px-2 py-1 text-sm"
                >
                  <option value={2}>2</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>

              {/* Pagination buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                >
                  Previous
                </Button>

                {generatePageNumbers().map((num) => (
                  <Button
                    key={num}
                    variant={num === page ? "default" : "outline"}
                    className={`${num === page
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "hover:bg-gray-100"
                      }`}
                    onClick={() => setPage(num)}
                  >
                    {num}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                post "{isSelected?.postTitle}" and remove it from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                disabled={isDeleteLoading}
                className="bg-red-600 hover:bg-red-700"
              >
                {isDeleteLoading ? "Deleting..." : "Delete"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Main>
    </>
  );
};

export default AllPostPage;
