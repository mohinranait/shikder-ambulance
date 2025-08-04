"use client";

import { Navbar } from "@/components/admin/shared/Navbar";
import BlogView from "@/components/pages/blogs/view-blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Main } from "@/components/ui/main";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { TPostFormData } from "@/types/post.types";
import { TagsInput } from "react-tag-input-component";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pen,
  Save,
  X,
  Eye,
  Calendar,
  Layout,
  Settings,
  ImageIcon,
  Search,
  Globe,
  Phone,
  Sidebar,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  createPost,
  getSinglePostBySlug,
  updatePostById,
} from "@/actions/postApi";
import dynamic from "next/dynamic";
import ImageUploadCom from "@/components/shared/ImageUploadCom";

const QuillEditor = dynamic(() => import("@/components/shared/QuillEditor"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-gray-500">Loading editor...</div>
    </div>
  ),
});

const CreateBlogsPost = () => {
  const path = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const urlSlug = params?.get("link");
  const [isView, setIsView] = useState<boolean>(false);
  const [updatePost, setUpdatePost] = useState<TPostFormData | null>();
  const [isEditSlug, setIsEditSlug] = useState<boolean>(false);
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [isSlug, setIsSlug] = useState<string>("");
  const [formLoading, setFormLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>("00:00");

  console.log({ content });

  const combineDateTime = (date: Date, time: string): Date => {
    const dateObj = new Date(date);
    const [hours, minutes] = time.split(":").map(Number);
    dateObj.setHours(hours);
    dateObj.setMinutes(minutes);
    dateObj.setSeconds(0);
    dateObj.setMilliseconds(0);
    return dateObj;
  };

  const [form, setForm] = useState<TPostFormData>({
    postTitle: "",
    author: "",
    slug: "",
    shortDescription: "",
    contactNumber: "",
    content: "",
    image: {
      featuresImage: "",
      thumbnail: "",
    },
    publishDate: new Date(),
    layouts: {
      banner: true,
      sidebar: "posts",
      isSidebar: "right",
      comments: true,
    },
    seoTitle: "",
    status: "Publish",
    seoDescription: "",
    seoKeyword: [],
  });

  useEffect(() => {
    const pTime = combineDateTime(date, time);
    setForm((prev) => ({ ...prev, publishDate: pTime }));
  }, [date, time]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form?.postTitle || form?.postTitle?.trim() == "") {
      toast.error("Add title is required");
      return;
    }
    try {
      setFormLoading(true);
      if (params?.get("link")) {
        if (!updatePost?._id) return;
        const data = await updatePostById({
          data: {
            ...form,
            content,
            seoKeyword: tags,
          },
          id: updatePost?._id,
        });
        if (data?.success) {
          router.push(`${path}?link=${data?.payload?.post?.slug}`);
          toast.success("Updated successfully!");
        } else {
          toast.error(data?.message || "Something went wrong");
        }
      } else {
        const data = await createPost({
          ...form,
          content,
          seoKeyword: tags,
        });
        if (data?.success) {
          setUpdatePost(data?.payload?.post);
          router.push(`${path}?link=${data?.payload?.post?.slug}`);
          toast.success("Post created successfully!");
        }
      }
      setFormLoading(false);
    } catch (error) {
      setFormLoading(false);
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    if (urlSlug) {
      (async () => {
        try {
          const data = await getSinglePostBySlug(urlSlug);
          if (data?.success) {
            setUpdatePost(data?.payload?.post);
            setIsSlug(data?.payload?.post?.slug);
            setForm((prev) => ({ ...prev, ...data?.payload?.post }));
            setTags(data?.payload?.post?.seoKeyword);
            setContent(data?.payload?.post?.content);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [urlSlug]);

  const layoutOptions = [
    { value: "none", label: "Full Width", icon: Monitor },
    { value: "left", label: "Left Sidebar", icon: Sidebar },
    { value: "right", label: "Right Sidebar", icon: Sidebar },
    { value: "both", label: "Dual Sidebar", icon: Layout },
  ];

  return (
    <>
      <Navbar fixed />
      <Main>
        <div className="min-h-screen ">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 ">
                    {params?.get("link") ? "Edit Post" : "Create New Post"}
                  </h1>
                  <p className="text-gray-600">
                    {params?.get("link")
                      ? "Make changes to your existing post"
                      : "Share your thoughts with the world"}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-white hover:bg-gray-50 border-gray-200"
                    onClick={() => setIsView(true)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button
                    type="submit"
                    form="blog-form"
                    disabled={formLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                  >
                    {formLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    {params?.get("link") ? "Update Post" : "Publish Post"}
                  </Button>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <Badge
                  variant={form.status === "Publish" ? "default" : "secondary"}
                  className={
                    form.status === "Publish"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }
                >
                  {form.status === "Publish" ? "Published" : "Draft"}
                </Badge>
                {urlSlug && (
                  <Badge
                    variant="outline"
                    className="text-blue-600 border-blue-200"
                  >
                    Editing Mode
                  </Badge>
                )}
              </div>
            </div>

            <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="xl:col-span-2 space-y-6">
                  {/* Title and Slug */}
                  <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        Post Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Post Name *
                        </label>
                        <Input
                          name="postTitle"
                          type="text"
                          placeholder="Write Your Post Name..."
                          className="text-lg font-medium border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          value={form?.postTitle}
                          onChange={(e) => {
                            setForm((prev) => {
                              const update = {
                                ...prev,
                                postTitle: e.target.value,
                              };
                              const sl = update?.postTitle
                                ?.split(" ")
                                .join("-")
                                .toLowerCase();
                              setIsSlug(sl);
                              return update;
                            });
                          }}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          URL Slug
                        </label>
                        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border">
                          <Globe className="w-4 h-4 text-gray-400" />
                          {isEditSlug ? (
                            <>
                              <Input
                                type="text"
                                name="slug"
                                placeholder="Enter slug"
                                className="border-0 bg-transparent p-0 focus:ring-0"
                                value={form?.slug || ""}
                                onChange={(e) =>
                                  setForm((prev) => ({
                                    ...prev,
                                    slug: e.target.value,
                                  }))
                                }
                              />
                              <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                onClick={() => setIsEditSlug(false)}
                              >
                                Save
                              </Button>
                            </>
                          ) : (
                            <>
                              <Link
                                className="text-blue-600 hover:text-blue-800 font-medium flex-1"
                                target={params?.get("link") ? "_blank" : ""}
                                href={
                                  params?.get("link") ? `/${form?.slug}` : "#"
                                }
                              >
                                {form?.slug
                                  ? form?.slug
                                  : isSlug || "your-post-url"}
                              </Link>
                              <Button
                                type="button"
                                size="sm"
                                variant="ghost"
                                onClick={() => {
                                  setIsEditSlug(true);
                                  setForm((prev) => ({
                                    ...prev,
                                    slug: isSlug,
                                  }));
                                }}
                              >
                                <Pen className="w-3 h-3" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Content Editor */}
                  <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        Content
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <QuillEditor
                          editorValue={content || ""}
                          setEditorValue={setContent}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* SEO Settings */}
                  <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        <Search className="w-5 h-5" />
                        SEO Optimization
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Title & SEO Title
                        </label>
                        <Input
                          type="text"
                          placeholder="Write SEO title..."
                          className="border-gray-200 focus:border-blue-500"
                          value={form?.seoTitle || ""}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              seoTitle: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Meta Description
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Write a compelling meta description..."
                          className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 resize-none"
                          value={form?.seoDescription}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              seoDescription: e?.target?.value,
                            }))
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tags: Keywords
                        </label>
                        <TagsInput
                          value={tags}
                          onChange={setTags}
                          name="tags"
                          placeHolder="Input Keywords here..."
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Publish Settings */}
                  <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        <Calendar className="w-5 h-5" />
                        Publish Schedule
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date
                          </label>
                          <input
                            type="date"
                            value={date.toISOString().split("T")[0]}
                            onChange={(e) => setDate(new Date(e.target.value))}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Time
                          </label>
                          <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Layout Settings */}
                  <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        <Layout className="w-5 h-5" />
                        Layout Options
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {layoutOptions.map((option) => {
                        const IconComponent = option.icon;
                        return (
                          <label
                            key={option.value}
                            className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                          >
                            <input
                              type="radio"
                              value={option.value}
                              checked={
                                form?.layouts?.isSidebar === option.value
                              }
                              name="layout"
                              className="sr-only"
                              onChange={() =>
                                setForm((prev: TPostFormData) => ({
                                  ...prev,
                                  layouts: {
                                    ...prev.layouts,
                                    isSidebar: option.value as any,
                                  },
                                }))
                              }
                            />
                            <div
                              className={`w-4 h-4 rounded-full border-2 transition-colors ${form?.layouts?.isSidebar === option.value
                                ? "border-blue-500 bg-blue-500"
                                : "border-gray-300"
                                }`}
                            >
                              {form?.layouts?.isSidebar === option.value && (
                                <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                              )}
                            </div>
                            <IconComponent className="w-4 h-4 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">
                              {option.label}
                            </span>
                          </label>
                        );
                      })}
                    </CardContent>
                  </Card>

                  {/* Post Settings */}
                  <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        <Settings className="w-5 h-5" />
                        Post Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Banner Visibility */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Banner Display
                        </label>
                        <div className="space-y-2">
                          {[
                            { value: true, label: "Show Banner" },
                            { value: false, label: "Hide Banner" },
                          ].map((option) => (
                            <label
                              key={option.value.toString()}
                              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50"
                            >
                              <input
                                type="radio"
                                checked={form?.layouts?.banner === option.value}
                                name="banner"
                                className="sr-only"
                                onChange={() =>
                                  setForm((prev: TPostFormData) => ({
                                    ...prev,
                                    layouts: {
                                      ...prev.layouts,
                                      banner: option.value,
                                    },
                                  }))
                                }
                              />
                              <div
                                className={`w-4 h-4 rounded-full border-2 transition-colors ${form?.layouts?.banner === option.value
                                  ? "border-blue-500 bg-blue-500"
                                  : "border-gray-300"
                                  }`}
                              >
                                {form?.layouts?.banner === option.value && (
                                  <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                                )}
                              </div>
                              <span className="text-sm text-gray-700">
                                {option.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Status */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Publication Status
                        </label>

                        <Select
                          value={form?.status}
                          onValueChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              status: e as "Publish" | "Unpublish",
                            }))
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="Publish">Published</SelectItem>
                              <SelectItem value="Unpublish">Draft</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Comments */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Comments
                        </label>

                        <Select
                          value={form?.layouts?.comments ? "true" : "false"}
                          onValueChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              layouts: {
                                ...prev?.layouts,
                                comments: e === "true",
                              },
                            }))
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="true">
                                Allow Comments
                              </SelectItem>
                              <SelectItem value="false">
                                Disable Comments
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Contact Number */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Contact Number
                        </label>
                        <Input
                          name="contactNumber"
                          type="text"
                          placeholder="Enter contact number..."
                          className="border-gray-200 focus:border-blue-500"
                          value={form?.contactNumber || ""}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              contactNumber: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Featured Image */}
                  <Card className="shadow-sm border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                        <ImageIcon className="w-5 h-5" />
                        Featured Image
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ImageUploadCom
                        url={form?.image?.featuresImage || ""}
                        cb={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            image: {
                              ...prev.image,
                              featuresImage: e,
                            },
                          }))
                        }
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>

            {isView && (
              <div className="fixed w-screen bg-white bottom-0 top-0 left-0 overflow-y-auto right-0 min-h-screen  z-[9999]">
                <span
                  onClick={() => setIsView(false)}
                  className="w-10 h-10 cursor-pointer  rounded-full bg-slate-200 flex items-center justify-center  top-3 right-3 fixed"
                >
                  <X />{" "}
                </span>
                <div className=" ">
                  <BlogView blog={{ ...form, content }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Main>
    </>
  );
};

export default CreateBlogsPost;
