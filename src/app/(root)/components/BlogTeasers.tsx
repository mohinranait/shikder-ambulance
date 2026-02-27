
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense} from "react";
import Blogs from "./Blogs";
import Post from "@/models/Post";
import BlogSkeleton from "./BlogSkeleton";
import connectDB from "@/config/mongodb";
export const dynamic = "force-dynamic"

export async function BlogTeasers() {
  await connectDB();
  const blogs = await Post.find({ status: "Publish" })
    .select(
      "-content -contents -seoTitle -author -contactNumber -seoKeyword -reviews -layouts -updatedAt -__v",
    )
    .sort({ createdAt: -1 })
    .limit(6);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest Health & Safety Insights
          </h2>
          <p className=" text-muted-foreground max-w-3xl mx-auto">
            Stay informed with expert advice, emergency preparedness tips, and
            important health information from our medical health care
            professionals. The best and quality ambulance is available in
            anytime, anywhere.
          </p>
        </div>
        <Suspense fallback={<BlogSkeleton />}>
          <Blogs blogs={blogs} />
        </Suspense>

        <div className="text-center mt-12">
          <Link href={"/blogs"}>
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
