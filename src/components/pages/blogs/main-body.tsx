import { TPostFormData } from "@/types/post.types";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  postTitle: string;
  image: string;
  content: string;
};
const MainBody: FC<Props> = ({ postTitle, image, content }) => {
  return (
    <div className="bg-white blog-post-preview p-5 rounded">
      <h2 className="text-2xl mb-2 font-bold text-slate-900">
        {postTitle || 'Shikder Ambulance service'}
      </h2>
      {
        image &&
        <div>
          <Image
            src={image|| "/default.png"}
            width={600}
            height={400}
            alt={postTitle}
            className="w-full h-full"
          />
        </div>
      }
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: content || "" }}
      />
    </div>
  );
};

export default MainBody;
