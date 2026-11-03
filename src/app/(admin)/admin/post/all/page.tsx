"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import toast from "react-hot-toast";
import {
  Plus,
  Search,
  Edit3,
  Eye,
  Trash2,
  Calendar,
  FileText,
  ExternalLink,
  Copy,
  Check,
  MessageSquare,
  Clock,
  RefreshCw,
  LayoutGrid,
  LayoutList,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  X,
  SlidersHorizontal,
  Edit,
} from "lucide-react";

import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { deletePostById, getPosts } from "@/actions/postApi";

const getAuthorName = (author: any): string => {
  if (!author) return "Admin";
  if (typeof author === "string") return author;
  if (author.name) {
    if (typeof author.name === "object") {
      const { firstName = "", lastName = "" } = author.name;
      const fullName = `${firstName} ${lastName}`.trim();
      return fullName || "Admin";
    }
    return String(author.name);
  }
  if (author.firstName || author.lastName) {
    return `${author.firstName || ""} ${author.lastName || ""}`.trim() || "Admin";
  }
  return author.email || "Admin";
};

export default function AllPostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Stats & counts from server
  const [counts, setCounts] = useState({
    total: 0,
    published: 0,
    unpublished: 0,
  });

  // Filter & Search states
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // View Mode: "table" or "grid"
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPosts, setTotalPosts] = useState(0);

  // Selection states (for bulk actions)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Delete dialogs
  const [postToDelete, setPostToDelete] = useState<any | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showBulkDeleteModal, setShowBulkDeleteModal] = useState(false);
  const [isBulkDeleting, setIsBulkDeleting] = useState(false);

  // Copied link animation state
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1); // reset to page 1 on new search
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch posts from API
  const fetchPosts = useCallback(
    async (showLoadingSpinner = true) => {
      try {
        if (showLoadingSpinner) setIsLoading(true);
        const res = await getPosts({
          limit: String(itemsPerPage),
          page: String(currentPage),
          access: "admin",
          search: debouncedSearch,
          status: statusFilter,
          sort: sortBy,
        });

        if (res?.success) {
          setPosts(res.payload?.posts || []);
          setTotalPosts(res.payload?.total || 0);

          if (res.payload?.counts) {
            setCounts(res.payload.counts);
          }
        } else {
          toast.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("An error occurred while loading posts");
      } finally {
        setIsLoading(false);
        setIsRefreshing(false);
      }
    },
    [itemsPerPage, currentPage, debouncedSearch, statusFilter, sortBy]
  );

  // Initial and trigger load
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Refresh handler
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchPosts(false);
    toast.success("Posts refreshed");
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setStatusFilter("all");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const isFilterActive =
    search !== "" || statusFilter !== "all" || sortBy !== "newest";

  // Select / Deselect individual post
  const handleSelectOne = (id: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  };

  // Select / Deselect all on current page
  const isAllCurrentPageSelected = useMemo(() => {
    if (posts.length === 0) return false;
    return posts.every((p) => selectedIds.has(p._id));
  }, [posts, selectedIds]);

  const handleSelectAllCurrentPage = (checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        posts.forEach((p) => {
          if (p._id) next.add(p._id);
        });
      } else {
        posts.forEach((p) => {
          if (p._id) next.delete(p._id);
        });
      }
      return next;
    });
  };

  // Single delete
  const handleDeleteSingle = async () => {
    if (!postToDelete?._id) return;
    try {
      setIsDeleting(true);
      const res = await deletePostById(postToDelete._id);
      if (res?.success) {
        toast.success("Post deleted successfully");
        setPostToDelete(null);
        setSelectedIds((prev) => {
          const next = new Set(prev);
          next.delete(postToDelete._id);
          return next;
        });
        fetchPosts(false);
      } else {
        toast.error(res?.message || "Failed to delete post");
      }
    } catch (error) {
      toast.error("Error occurred while deleting post");
    } finally {
      setIsDeleting(false);
    }
  };

  // Bulk delete
  const handleBulkDelete = async () => {
    if (selectedIds.size === 0) return;
    try {
      setIsBulkDeleting(true);
      const ids = Array.from(selectedIds);
      const results = await Promise.all(ids.map((id) => deletePostById(id)));
      const successCount = results.filter((r) => r?.success).length;

      if (successCount > 0) {
        toast.success(`${successCount} post(s) deleted successfully`);
        setSelectedIds(new Set());
        setShowBulkDeleteModal(false);
        fetchPosts(false);
      } else {
        toast.error("Could not delete selected posts");
      }
    } catch (error) {
      toast.error("Error occurred during bulk deletion");
    } finally {
      setIsBulkDeleting(false);
    }
  };

  // Copy live URL
  const handleCopyLink = (slug: string) => {
    if (!slug) return;
    const url = `${window.location.origin}/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    toast.success("Live link copied to clipboard!");
    setTimeout(() => {
      setCopiedSlug(null);
    }, 2000);
  };

  // Pagination calculation
  const totalPages = Math.ceil(totalPosts / itemsPerPage) || 1;

  return (
    <>
      <Navbar fixed />
      <Main>
        <div className="space-y-6 max-w-[80rem] mx-auto pb-12">
          {/* Top Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                    Blog Posts & Articles
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    Create, edit, organize and track your articles & news
                    content
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="gap-1.5 text-xs text-slate-700 hover:text-slate-900 border-slate-200"
              >
                <RefreshCw
                  size={14}
                  className={isRefreshing ? "animate-spin text-primary" : ""}
                />
                Refresh
              </Button>

              <Link href="/admin/post/comments">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 text-xs text-slate-700 hover:text-slate-900 border-slate-200"
                >
                  <MessageSquare size={14} className="text-slate-500" />
                  Comments
                </Button>
              </Link>

              <Link href="/admin/post/new">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/95 text-white gap-1.5 text-xs font-semibold shadow-sm"
                >
                  <Plus size={15} />
                  New Post
                </Button>
              </Link>
            </div>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Posts */}
            <Card className="border border-slate-200/80 shadow-sm bg-white hover:border-blue-300 transition-colors">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Total Posts
                  </p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">
                    {counts.total}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    All created articles
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>

            {/* Published Posts */}
            <Card
              onClick={() => setStatusFilter("Publish")}
              className={`border border-slate-200/80 shadow-sm bg-white cursor-pointer hover:border-emerald-300 transition-colors ${
                statusFilter === "Publish" ? "ring-2 ring-emerald-500" : ""
              }`}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-emerald-700 uppercase tracking-wider">
                    Published
                  </p>
                  <p className="text-2xl font-bold text-emerald-700 mt-1">
                    {counts.published}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {counts.total > 0
                      ? `${Math.round(
                          (counts.published / counts.total) * 100
                        )}% of total posts`
                      : "Live on site"}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>

            {/* Unpublished / Drafts */}
            <Card
              onClick={() => setStatusFilter("Unpublish")}
              className={`border border-slate-200/80 shadow-sm bg-white cursor-pointer hover:border-amber-300 transition-colors ${
                statusFilter === "Unpublish" ? "ring-2 ring-amber-500" : ""
              }`}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-amber-700 uppercase tracking-wider">
                    Drafts / Unpublished
                  </p>
                  <p className="text-2xl font-bold text-amber-700 mt-1">
                    {counts.unpublished}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Pending review or private
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>

            {/* Comments Quick Access */}
            <Card className="border border-slate-200/80 shadow-sm bg-white hover:border-indigo-300 transition-colors">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-indigo-700 uppercase tracking-wider">
                    Feedback & Comments
                  </p>
                  <p className="text-2xl font-bold text-indigo-900 mt-1">
                    Manage
                  </p>
                  <Link
                    href="/admin/post/comments"
                    className="text-[11px] text-indigo-600 hover:underline flex items-center gap-1 mt-0.5 font-medium"
                  >
                    View discussions →
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filter & Search Toolbar */}
          <Card className="border border-slate-200/80 shadow-sm bg-white">
            <CardContent className="p-4">
              <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
                {/* Search Box */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Search by title, slug, or content..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9 pr-8 text-xs border-slate-200 focus:border-primary h-9 rounded-lg"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      title="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Filter Pills, Sort & View Switcher */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Status Filter Tabs */}
                  <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/70 text-xs">
                    <button
                      onClick={() => {
                        setStatusFilter("all");
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                        statusFilter === "all"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      All ({counts.total})
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter("Publish");
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                        statusFilter === "Publish"
                          ? "bg-white text-emerald-700 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Published ({counts.published})
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter("Unpublish");
                        setCurrentPage(1);
                      }}
                      className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                        statusFilter === "Unpublish"
                          ? "bg-white text-amber-700 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Drafts ({counts.unpublished})
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="w-[150px]">
                    <Select
                      value={sortBy}
                      onValueChange={(val) => {
                        setSortBy(val);
                        setCurrentPage(1);
                      }}
                    >
                      <SelectTrigger className="h-9 text-xs border-slate-200">
                        <SlidersHorizontal size={13} className="mr-1.5 text-slate-500" />
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest" className="text-xs">
                          Newest First
                        </SelectItem>
                        <SelectItem value="oldest" className="text-xs">
                          Oldest First
                        </SelectItem>
                        <SelectItem value="title_asc" className="text-xs">
                          Title: A → Z
                        </SelectItem>
                        <SelectItem value="title_desc" className="text-xs">
                          Title: Z → A
                        </SelectItem>
                        <SelectItem value="reviews" className="text-xs">
                          Most Reviews
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* View Mode Switcher */}
                  <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200/70">
                    <button
                      onClick={() => setViewMode("table")}
                      className={`p-1.5 rounded-md transition-all ${
                        viewMode === "table"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                      title="Table List View"
                    >
                      <LayoutList size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded-md transition-all ${
                        viewMode === "grid"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                      title="Grid Cards View"
                    >
                      <LayoutGrid size={16} />
                    </button>
                  </div>

                  {/* Reset Filters Button */}
                  {isFilterActive && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleResetFilters}
                      className="h-9 px-2 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 gap-1"
                    >
                      <RotateCcw size={13} />
                      Reset
                    </Button>
                  )}
                </div>
              </div>

              {/* Bulk Actions Floating Bar */}
              {selectedIds.size > 0 && (
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 bg-blue-50/70 -mx-4 -mb-4 p-3 rounded-b-xl">
                  <div className="flex items-center gap-2 text-xs text-blue-900 font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span>
                      <strong>{selectedIds.size}</strong> post
                      {selectedIds.size > 1 ? "s" : ""} selected
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedIds(new Set())}
                      className="h-7 text-xs bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
                    >
                      Deselect All
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => setShowBulkDeleteModal(true)}
                      className="h-7 text-xs bg-rose-600 hover:bg-rose-700 text-white gap-1 font-semibold"
                    >
                      <Trash2 size={13} />
                      Delete Selected ({selectedIds.size})
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Posts Content Area */}
          {isLoading ? (
            /* Skeleton Loading State */
            <div className="space-y-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200/70 p-4 flex items-center gap-4 animate-pulse"
                >
                  <div className="w-16 h-16 bg-slate-200 rounded-lg shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-1/3" />
                    <div className="h-3 bg-slate-200 rounded w-1/2" />
                    <div className="h-3 bg-slate-200 rounded w-1/4" />
                  </div>
                  <div className="w-24 h-7 bg-slate-200 rounded" />
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            /* Empty State */
            <Card className="border border-slate-200/80 shadow-sm bg-white">
              <CardContent className="p-12 text-center">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-400">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  No posts found
                </h3>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto mb-5">
                  {isFilterActive
                    ? "No articles matched your active filters or search keyword. Try clearing filters."
                    : "No blog posts or articles have been created yet. Start drafting your first article!"}
                </p>
                {isFilterActive ? (
                  <Button
                    variant="outline"
                    onClick={handleResetFilters}
                    className="text-xs gap-1.5"
                  >
                    <RotateCcw size={14} /> Clear Filter
                  </Button>
                ) : (
                  <Link href="/admin/post/new">
                    <Button className="bg-primary hover:bg-primary/95 text-xs gap-1.5 font-semibold text-white">
                      <Plus size={15} /> Create First Post
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ) : viewMode === "table" ? (
            /* Table View */
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-50/80">
                  <TableRow>
                    <TableHead className="w-12 text-center">
                      <Checkbox
                        checked={isAllCurrentPageSelected}
                        onCheckedChange={handleSelectAllCurrentPage}
                        aria-label="Select all posts on this page"
                      />
                    </TableHead>
                    <TableHead className="font-bold text-slate-900 min-w-[280px]">
                      Post & Excerpt
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Status
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Author & Date
                    </TableHead>
                    <TableHead className="font-bold text-slate-900">
                      Engagement
                    </TableHead>
                    <TableHead className="font-bold text-slate-900 text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts?.map((post) => {
                    const isSelected = selectedIds.has(post._id);
                    const isPublished = post.status === "Publish";

                    return (
                      <TableRow
                        key={post._id}
                        className={`hover:bg-slate-50/60 transition-colors ${
                          isSelected ? "bg-blue-50/30" : ""
                        }`}
                      >
                        {/* Checkbox */}
                        <TableCell className="text-center">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) =>
                              handleSelectOne(post._id, checked as boolean)
                            }
                            aria-label={`Select ${post.postTitle}`}
                          />
                        </TableCell>

                        {/* Post & Excerpt */}
                        <TableCell>
                          <div className="flex items-start gap-3">
                            {/* Featured Thumbnail */}
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                              <Image
                                src={
                                  post?.image?.featuresImage ||
                                  post?.image?.thumbnail ||
                                  "/default.png"
                                }
                                alt={post.postTitle || "Post thumbnail"}
                                fill
                                sizes="56px"
                                className="object-cover"
                              />
                            </div>

                            {/* Title & Details */}
                            <div className="min-w-0 flex-1">
                              <Link
                                href={`/admin/post/new?link=${post.slug}`}
                                className="font-semibold text-slate-900 hover:text-blue-600 transition-colors line-clamp-1 leading-snug"
                                title={post.postTitle}
                              >
                                {post.postTitle}
                              </Link>

                              <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                                {post.postName ||
                                  "No excerpt provided"}
                              </p>

                              <div className="flex items-center gap-2 mt-1">
                                <span className="inline-block text-[11px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded border border-slate-200/60 truncate max-w-[180px]">
                                  /{post.slug}
                                </span>

                                <button
                                  onClick={() => handleCopyLink(post.slug)}
                                  className="text-[11px] text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
                                  title="Copy URL"
                                >
                                  {copiedSlug === post.slug ? (
                                    <Check
                                      size={12}
                                      className="text-emerald-600"
                                    />
                                  ) : (
                                    <Copy size={12} />
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </TableCell>

                        {/* Status */}
                        <TableCell>
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${
                              isPublished
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200/70"
                                : "bg-amber-50 text-amber-700 border-amber-200/70"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isPublished ? "bg-emerald-500" : "bg-amber-500"
                              }`}
                            />
                            {isPublished ? "Published" : "Draft / Unpublish"}
                          </span>
                        </TableCell>

                        {/* Author & Date */}
                        <TableCell>
                          <p className="text-xs font-semibold text-slate-800">
                            {getAuthorName(post?.author)}
                          </p>
                          <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Calendar size={12} className="text-slate-400" />
                            {moment(post.createdAt).format("DD MMM, YYYY")}
                          </p>
                        </TableCell>

                        {/* Engagement / Comments */}
                        <TableCell>
                          <div className="flex flex-col gap-1 text-xs">
                            <Link
                              href={`/admin/post/comments/${post._id}`}
                              className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium hover:underline"
                            >
                              <MessageSquare size={13} />
                              <span>Comments</span>
                            </Link>
                            {post.readTime ? (
                              <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                                <Clock size={11} /> {Math.max(1, Math.ceil((post.readTime || 0) / 5 / 200))} min read
                              </span>
                            ) : null}
                          </div>
                        </TableCell>

                        {/* Actions */}
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center gap-1">
                            {/* View Live */}
                            <Link
                              href={`/${post.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                                title="View live page"
                              >
                                <ExternalLink size={15} />
                              </Button>
                            </Link>

                            {/* Edit */}
                            <Link href={`/admin/post/new?link=${post.slug}`}>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50"
                                title="Edit post"
                              >
                                <Edit size={15} />
                              </Button>
                            </Link>

                            {/* Delete */}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setPostToDelete(post)}
                              className="h-8 w-8 p-0 text-slate-500 hover:text-rose-600 hover:bg-rose-50"
                              title="Delete post"
                            >
                              <Trash2 size={15} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            /* Grid View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => {
                const isSelected = selectedIds.has(post._id);
                const isPublished = post.status === "Publish";

                return (
                  <Card
                    key={post._id}
                    className={`border border-slate-200/80 shadow-sm bg-white overflow-hidden hover:shadow-md transition-all group flex flex-col ${
                      isSelected ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    {/* Image Header with Badge Overlay */}
                    <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
                      <Image
                        src={
                          post?.image?.featuresImage ||
                          post?.image?.thumbnail ||
                          "/default.png"
                        }
                        alt={post.postTitle || "Post featured image"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Top Bar on Image: Checkbox & Status */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                        <div className="bg-white/90 backdrop-blur-sm rounded-md p-1 shadow">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) =>
                              handleSelectOne(post._id, checked as boolean)
                            }
                            aria-label={`Select ${post.postTitle}`}
                          />
                        </div>

                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold backdrop-blur-md shadow-sm border ${
                            isPublished
                              ? "bg-emerald-500/90 text-white border-emerald-400"
                              : "bg-amber-500/90 text-white border-amber-400"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {isPublished ? "Published" : "Draft"}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <CardContent className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Date and Author */}
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {moment(post.createdAt).format("DD MMM, YYYY")}
                          </span>
                          <span>{getAuthorName(post?.author)}</span>
                        </div>

                        {/* Title */}
                        <Link
                          href={`/admin/post/new?link=${post.slug}`}
                          className="font-bold text-slate-900 hover:text-blue-600 transition-colors line-clamp-2 leading-snug"
                        >
                          {post.postTitle}
                        </Link>

                        {/* Short Description */}
                        <p className="text-xs text-muted-foreground line-clamp-2 mt-1.5">
                          {post.shortDescription ||
                            post.seoDescription ||
                            "No excerpt provided"}
                        </p>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={`/admin/post/comments/${post._id}`}
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1 font-medium"
                        >
                          <MessageSquare size={13} />
                          Comments
                        </Link>

                        <div className="flex items-center gap-1">
                          <Link
                            href={`/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 text-slate-500 hover:text-blue-600"
                              title="View Live"
                            >
                              <ExternalLink size={14} />
                            </Button>
                          </Link>

                          <Link href={`/admin/post/new?link=${post.slug}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 w-7 p-0 text-slate-500 hover:text-emerald-600"
                              title="Edit"
                            >
                              <Edit3 size={14} />
                            </Button>
                          </Link>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setPostToDelete(post)}
                            className="h-7 w-7 p-0 text-slate-500 hover:text-rose-600"
                            title="Delete"
                          >
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Numbered Pagination & Rows Selector */}
          {totalPosts > 0 && (
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Entries Info & Rows Per Page */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span>
                  Showing{" "}
                  <strong className="text-slate-800">
                    {Math.min((currentPage - 1) * itemsPerPage + 1, totalPosts)}
                  </strong>{" "}
                  to{" "}
                  <strong className="text-slate-800">
                    {Math.min(currentPage * itemsPerPage, totalPosts)}
                  </strong>{" "}
                  of <strong className="text-slate-800">{totalPosts}</strong>{" "}
                  posts
                </span>

                <div className="flex items-center gap-1.5 pl-3 border-l border-slate-200">
                  <span>Per page:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="border border-slate-200 rounded-md px-2 py-0.5 text-xs bg-white text-slate-800 outline-none"
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>

              {/* Page Navigation Buttons */}
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                  className="h-8 px-2.5 text-xs gap-1"
                >
                  <ChevronLeft size={14} /> Previous
                </Button>

                {/* Page Number Buttons */}
                <div className="flex items-center gap-1 px-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => {
                      return (
                        p === 1 ||
                        p === totalPages ||
                        Math.abs(p - currentPage) <= 1
                      );
                    })
                    .map((p, index, array) => {
                      const prevPage = array[index - 1];
                      return (
                        <React.Fragment key={p}>
                          {prevPage && p - prevPage > 1 && (
                            <span className="text-xs text-muted-foreground px-1">
                              ...
                            </span>
                          )}
                          <Button
                            variant={currentPage === p ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(p)}
                            className={`h-8 w-8 p-0 text-xs font-semibold ${
                              currentPage === p
                                ? "bg-primary text-white"
                                : "text-slate-700"
                            }`}
                          >
                            {p}
                          </Button>
                        </React.Fragment>
                      );
                    })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  className="h-8 px-2.5 text-xs gap-1"
                >
                  Next <ChevronRight size={14} />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Single Delete Alert Dialog */}
        <AlertDialog
          open={!!postToDelete}
          onOpenChange={(open) => !open && setPostToDelete(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-slate-900">
                Delete Post?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-slate-600 text-xs leading-relaxed">
                Are you sure you want to delete{" "}
                <strong className="text-slate-900">
                  "{postToDelete?.postTitle}"
                </strong>
                ? This action cannot be undone and will remove the post along
                with all its comments.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={isDeleting} className="text-xs">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteSingle}
                disabled={isDeleting}
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold"
              >
                {isDeleting ? "Deleting..." : "Delete Permanently"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Bulk Delete Alert Dialog */}
        <AlertDialog
          open={showBulkDeleteModal}
          onOpenChange={setShowBulkDeleteModal}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-slate-900">
                Delete {selectedIds.size} Selected Posts?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-slate-600 text-xs leading-relaxed">
                You are about to permanently delete{" "}
                <strong className="text-slate-900">
                  {selectedIds.size} post(s)
                </strong>
                . This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={isBulkDeleting} className="text-xs">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleBulkDelete}
                disabled={isBulkDeleting}
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold"
              >
                {isBulkDeleting
                  ? "Deleting Selected..."
                  : `Yes, Delete (${selectedIds.size})`}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Main>
    </>
  );
}
