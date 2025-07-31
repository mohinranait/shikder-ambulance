import { getSinglePostBySlug } from "@/actions/postApi";
import BlogView from "@/components/pages/blogs/view-blogs";
import { BASE_URL } from "@/config/accessEnv";
import { TPostFormData } from "@/types/post.types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getSinglePostBySlug(slug);
  const post: TPostFormData = data?.payload?.post;
  const previousImages = post?.image?.featuresImage;

  return {
    title: post?.seoTitle || post?.postTitle,
    description: post?.seoDescription,
    keywords: post?.seoKeyword,
    openGraph: {
      url: `${BASE_URL}/${post?.slug}`,
      images: [previousImages || ""],
    },
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const data = await getSinglePostBySlug(slug);
  const post = data?.payload?.post;

  if (!post) {
    notFound();
  }

  return <BlogView blog={post} />;
};

export default BlogDetailsPage;
