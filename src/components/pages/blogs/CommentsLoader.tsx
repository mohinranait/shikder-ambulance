import CommentForm from "./CommentForm";
import { TCommentType } from "./CommentSection";
import ShowAllComments from "./ShowAllComments";

const CommentsLoader = async ({
  promise,
  blogId,
}: {
  blogId: string;
  promise?: Promise<any>;
}) => {
  const data = await promise;
  const comments:TCommentType[] = data?.payload?.comments;
  return (
    <div>
      <CommentForm blogId={blogId} />
      {comments?.length > 0 && <ShowAllComments comments={comments} />}
    </div>
  );
};

export default CommentsLoader;
