import BlogView from "@/components/pages/blogs/view-blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/config/accessEnv";
import Post, { IPost } from "@/models/Post";
import connectDB from "@/config/mongodb";
import { TPostFormData } from "@/types/post.types";

export const mapPostToFormData = (post: IPost): TPostFormData => {
  return {
    _id: post._id.toString(),
    postTitle: post.postTitle,
    postName: post.postName || "",
    slug: post.slug,
    shortDescription: post.shortDescription,
    image: post.image,
    publishDate: post.publishDate || new Date(),
    content: post.content,
    contents: post.contents || [],
    status: post.status || "Publish",
    contactNumber: post.contactNumber,
    layouts: post.layouts,
    seoTitle: post.seoTitle,
    readTime: post.readTime,
    seoDescription: post.seoDescription,
    seoKeyword: post.seoKeyword,
    createdAt: post.createdAt?.toISOString(),
    updatedAt: post.updatedAt,
  };
};


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  await connectDB();
  const post = await Post.findOne({ slug }).select("-author");

  if (!post) return {};

  const img = post.image?.featuresImage;

  return {
    title: `${post.seoTitle || post.postTitle} | Shikder Ambulance`,
    description: post.seoDescription || post.shortDescription,
    keywords: post.seoKeyword,
    openGraph: {
      url: `${BASE_URL}/${post.slug}`,
      images: img ? [img] : [],
    },
  };
}

const BlogDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  await connectDB();
  const { slug } = await params;
  const post = await Post.findOne({ slug }).select("-author");

  if (!post) notFound();

  const blog = mapPostToFormData(post);
  console.log({blog});
  
  return <BlogView blog={blog} />;
};

export default BlogDetailsPage;