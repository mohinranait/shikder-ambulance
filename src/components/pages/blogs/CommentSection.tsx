import React, { FC, Suspense } from "react";
// import CommentForm from "./CommentForm";
// import ShowAllComments from "./ShowAllComments";
// import { getAllCommentByPostId } from "@/actions/commentApi";
import CommentsLoader from "./CommentsLoader";
import { Skeleton } from "@/components/ui/skeleton";
export type TCommentType = {
  _id: string;
  autor?: string;
  content: string;
  name: string;
  star: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type Props = {
  blogId?: string;
  commentsPromise?: Promise<any>
};

const CommentSection: FC<Props> = async ({ blogId,commentsPromise }) => {
  if (!blogId) return null;
  // const data = await getAllCommentByPostId(blogId);

  // const comments: TCommentType[] = data?.payload?.comments;
  return (
     <Suspense fallback={<Skeleton className="h-40 w-full animate-pulse bg-slate-100" />}>
      <CommentsLoader promise={commentsPromise} blogId={blogId} />
    </Suspense>
  );
};

export default CommentSection;
