// lib/get-post.ts
import connectDB from "@/config/mongodb";
import Post from "@/models/Post";
import { TPostFormData } from "@/types/post.types";

export const getPostBySlugFromDB = async (slug: string) => {
  await connectDB();

  const post = await Post.findOne({ slug })
    .select("-__v")
    .lean<TPostFormData>(); 

  return post;
};