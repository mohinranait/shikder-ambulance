import BlogView from "@/components/pages/blogs/view-blogs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/config/accessEnv";
import { getPostBySlugFromDB } from "@/actions/get-post";
import { getAllCommentByPostId } from "@/actions/commentApi";
import './blog.css'



export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;;
  try {
    const blog = await getPostBySlugFromDB(slug);
    if (!blog) return {};

    if (!blog || blog.status === "Unpublish") {
      return {
        title: "Post Not Found",
        robots: { index: false, follow: false }, // Prevent search engines from indexing missing pages
      };
    }

    // Default fallbacks if custom SEO settings aren't filled out in the dashboard form
    const finalTitle = blog.seoTitle || `${blog.postTitle} | My Blog`;
    const finalDescription = blog.seoDescription || blog.shortDescription || `Read about ${blog.postTitle}`;
    const featureImageUrl = blog.image?.featuresImage || blog.image?.thumbnail || "";
    const url = `${BASE_URL}/${blog?.slug}`

    return {
      title: finalTitle,
      description: finalDescription,
      keywords: blog.seoKeyword || [],
      alternates: {
        canonical: url, // Critical for avoiding duplicate URL penalties
      },
      openGraph: {
        title: finalTitle,
        description: finalDescription,
        type: "article",
        publishedTime: new Date(blog.publishDate).toISOString(),
        authors: "Shikder Ambulance",
        images: featureImageUrl ? [{ url: featureImageUrl }] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: finalTitle,
        description: finalDescription,
        images: featureImageUrl ? [featureImageUrl] : [],
      },
    };
  } catch (error) {
    return {
      title: "Blog Post",
    };
  }
}

const BlogDetailsPage = async (
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;
  const postPromise = getPostBySlugFromDB(slug);
  const post = await postPromise;
  if (!post) return notFound();

  const commentsPromise = getAllCommentByPostId(post?._id!.toString());

  return <BlogView blog={post} commentsPromise={commentsPromise} />;
};

export default BlogDetailsPage;