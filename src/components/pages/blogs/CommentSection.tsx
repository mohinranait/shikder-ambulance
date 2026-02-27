import React, { FC } from "react";
import CommentForm from "./CommentForm";
import ShowAllComments from "./ShowAllComments";
import { getAllCommentByPostId } from "@/actions/commentApi";
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
};

const CommentSection: FC<Props> = async ({ blogId }) => {
  if (!blogId) return null;
  const data = await getAllCommentByPostId(blogId);

  const comments: TCommentType[] = data?.payload?.comments;
  return (
    <div>
      <CommentForm blogId={blogId} />
      {comments?.length > 0 && <ShowAllComments comments={comments} />}
    </div>
  );
};

export default CommentSection;
