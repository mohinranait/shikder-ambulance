import BlogView from "@/components/pages/blogs/view-blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/config/accessEnv";
import Post from "@/models/Post";
import connectDB from "@/config/mongodb";
import { getPostBySlug } from "@/actions/postApi";



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  await connectDB();
  const post = await Post.findOne({ slug }).select("postTitle seoTitle shortDescription seoDescription seoKeyword image").lean();

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

  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return <BlogView blog={{...post?.payload?.post}} />;
};

export default BlogDetailsPage;