import React, { FC } from "react";
import Link from "next/link";
import { TPostFormData } from "@/types/post.types";
import MainBody from "./main-body";
import { Phone } from "lucide-react";
import RightSidebar from "./right-sidebar";
import LeftSidebar from "./left-sidebar";

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
      <section
        className={`bg-primary`}
        // style={{
        //   backgroundImage: `url(${bgImage})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className={`${bgImage && "bg-slate-900 bg-opacity-75"} `}>
          <div className="container justify-center flex items-center  md:min-h-[calc(100vh-200px)] py-20 lg:px-32 xl:px-48 ">
            <div className="flex flex-col gap-3">
              <h1
                className={`text-center font-bold text-3xl md:text-4xl lg:text-5xl  mb-3 
                 text-white
                 `}
              >
                {blog?.seoTitle || blog?.postTitle}
              </h1>
              <p className={`lg:px-20 text-center  text-slate-200 `}>
                {blog?.seoDescription}
              </p>
              {blog?.contactNumber && (
                <div className="flex justify-center">
                  <Link
                    href={`tel:${blog?.contactNumber}`}
                    className="py-[10px] text-xl items-center inline-flex px-4 rounded-[100px] bg-primary text-white gap-1"
                  >
                    <Phone />
                    {blog?.contactNumber || "Call Ambulance"}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {(blog?.layouts?.isSidebar === "left" ||
            blog?.layouts?.isSidebar === "both") && <LeftSidebar />}
          <div
            className={` ${
              blog?.layouts?.isSidebar === "left" ||
              blog?.layouts?.isSidebar === "right"
                ? "lg:col-span-2 xl:col-span-3"
                : blog?.layouts?.isSidebar === "none"
                ? "lg:col-span-2 xl:col-span-4"
                : "lg:col-span-2 xl:col-span-2"
            } flex flex-col gap-3 `}
          >
            <MainBody blog={blog} />
            {/* {blog?.layouts?.comments && <CommentSection blog={blog} />} */}
          </div>
          {(blog?.layouts?.isSidebar === "right" ||
            blog?.layouts?.isSidebar === "both") && <RightSidebar />}
        </div>
      </section>
    </main>
  );
};

export default BlogView;
