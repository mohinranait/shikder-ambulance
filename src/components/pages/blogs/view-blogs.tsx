import React, { FC } from "react";
import Link from "next/link";
import { TPostFormData } from "@/types/post.types";
import MainBody from "./main-body";
import { HelpCircle, Phone } from "lucide-react";
import RightSidebar from "./right-sidebar";
import LeftSidebar from "./left-sidebar";
import CommentSection from "./CommentSection";
import FaqComponent from "../home/faq-component";
import { Button } from "@/components/ui/button";
import ServiceInfo from "@/components/ServiceInfo";

type Props = {
  blog: TPostFormData;
  commentsPromise?: Promise<any>;
};

const BlogView: FC<Props> = ({ blog, commentsPromise }) => {
  const bgImage = blog?.layouts?.banner ? blog?.image?.featuresImage ?? "" : "";
  return (
    <main className="mb-20">
      <section className={`relative bg-premium-light-gradient `}>
        <div className={`${bgImage && "bg-premium-light-gradient"} `}>
          <div className="sm:container px-2 justify-center flex items-center   py-10 lg:py-16 lg:px-32 xl:px-48 ">
            <div className="flex flex-col gap-3">
              <h1
                className={`text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-foreground leading-normal
                 `}
              >
                {blog?.postName || blog?.seoTitle || blog?.postTitle}
              </h1>
              <p
                className={`md:text-lg text-center text-muted-foreground mx-auto max-w-2xl`}
              >
                {blog?.shortDescription || blog?.seoDescription}
              </p>
              <div className="flex justify-center">
                <Link href={"tel:01710060020"}>
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 017100-60020
                  </Button>
                </Link>
              </div>
              <ServiceInfo />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div
          className={`sm:container px-2 grid gap-5 ${blog?.layouts?.isSidebar === "both"
            ? "lg:grid-cols-4"
            : blog?.layouts?.isSidebar === "none"
              ? "lg:grid-cols-1"
              : "lg:grid-cols-3"
            }`}
        >
          {/* Left Sidebar */}
          {(blog?.layouts?.isSidebar === "left" ||
            blog?.layouts?.isSidebar === "both") && <LeftSidebar />}

          {/* Main Content */}
          <div
            className={`flex flex-col gap-3 ${blog?.layouts?.isSidebar === "both"
              ? "lg:col-span-2"
              : blog?.layouts?.isSidebar === "none"
                ? "lg:col-span-1"
                : "lg:col-span-2"
              }`}
          >
            <MainBody
              postTitle={blog?.postTitle || ""}
              image={blog?.image?.featuresImage || ""}
              content={blog?.content || ""}
            />
            {blog?.layouts?.comments && <CommentSection commentsPromise={commentsPromise} blogId={blog?._id?.toString()} />}
            <div className="my-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg ">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className=" text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Quick answers to common questions about our emergency patient
                  transport services.
                </p>
              </div>
              <FaqComponent />
            </div>
          </div>

          {/* Right Sidebar */}
          {(blog?.layouts?.isSidebar === "right" ||
            blog?.layouts?.isSidebar === "both") && <RightSidebar />}
        </div>
      </section>
    </main>
  );
};

export default BlogView;
