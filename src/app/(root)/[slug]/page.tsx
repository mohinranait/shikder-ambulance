import BlogView from "@/components/pages/blogs/view-blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/config/accessEnv";
import { getPostBySlugFromDB } from "@/actions/get-post";
import { getAllCommentByPostId } from "@/actions/commentApi";



export async function generateMetadata(
  { params }: { params:  Promise<{ slug: string }>  }
): Promise<Metadata> {
  const { slug } = await params;;
  const post = await getPostBySlugFromDB(slug);
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

const BlogDetailsPage = async (
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params; 
   const postPromise = getPostBySlugFromDB(slug);
  const post = await postPromise;
  if (!post) return notFound();

  const commentsPromise = getAllCommentByPostId(post?._id!.toString() );

  return <BlogView blog={post} commentsPromise={commentsPromise} />;
};

export default BlogDetailsPage;