import React, { FC } from "react";
import Link from "next/link";
import { TPostFormData } from "@/types/post.types";
import MainBody from "./main-body";
import { Phone } from "lucide-react";
import RightSidebar from "./right-sidebar";
import LeftSidebar from "./left-sidebar";
import CommentSection from "./CommentSection";
import FaqComponent from "../home/faq-component";
import { Button } from "@/components/ui/button";

type Props = {
  blog: TPostFormData;
};

const BlogView: FC<Props> = ({ blog }) => {
  let bgImage: string = "";
  if (blog?.layouts?.banner) {
    bgImage = blog?.image?.featuresImage || "";
  }
  return (
    <main className="mb-20">
      <section className={`relative bg-premium-light-gradient `}>
        <div className={`${bgImage && "bg-premium-light-gradient"} `}>
          <div className="sm:container justify-center flex items-center  md:min-h-[calc(100vh-200px)] py-5 lg:py-20 lg:px-32 xl:px-48 ">
            <div className="flex flex-col gap-3">
              <h1
                className={`text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-foreground leading-normal
                 `}
              >
                {blog?.seoTitle || blog?.postTitle}
              </h1>
              <p
                className={`text-xl text-center text-muted-foreground mx-auto max-w-2xl`}
              >
                {blog?.seoDescription}
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
              {/* {blog?.contactNumber && (
                <div className="flex justify-center">
                  <Link
                    href={`tel:${blog?.contactNumber}`}
                    className="py-[10px] text-xl items-center inline-flex px-4 rounded-[100px] bg-primary text-white gap-1"
                  >
                    <Phone />
                    {blog?.contactNumber || "Call Ambulance"}
                  </Link>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div
          className={`sm:container grid gap-5 ${blog?.layouts?.isSidebar === "both"
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
            <MainBody blog={blog} />
            {blog?.layouts?.comments && <CommentSection blog={blog} />}
            <FaqComponent />
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
