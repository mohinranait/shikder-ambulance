"use client";
import { getPosts } from "@/actions/postApi";
import { BASE_URL } from "@/config/accessEnv";
import { TPostFormData } from "@/types/post.types";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AsidePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getPosts({ limit: "5", access: "user" });
      const posts = data?.payload?.posts;
      setPosts(posts);
    })();
  }, []);

  return (
    <ul className="flex flex-col gap-3">
      <p className="text-base font-semibold text-slate-950 mt-2">Trends</p>
      {posts?.map((post: TPostFormData) => (
        <li key={post._id}>
          <Link href={`${post?.slug}`} className="rounded flex gap-3  ">
            <div>
              <div className="w-[90px]">
                <Image
                  src={post?.image?.featuresImage || "/placeholder.jpg"}
                  width={100}
                  height={100}
                  alt={post?.seoTitle || post?.postTitle}
                  className="object-cover w-full"
                />
              </div>
            </div>
            <div className="p-2 pl-0">
              <p className="text-sm font-medium text-slate-700">
                {post?.seoTitle || post?.postTitle}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AsidePosts;
