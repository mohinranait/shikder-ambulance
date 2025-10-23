import { TPostFormData } from "@/types/post.types";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  blog: TPostFormData;
};
const MainBody: FC<Props> = ({ blog }) => {
  return (
    <div className="bg-white blog-post-preview p-5 rounded">
      <h2 className="text-2xl mb-2 font-bold text-slate-900">
        {blog?.postTitle || 'Shikder Ambulance service'}
      </h2>
      {
        blog?.image?.featuresImage &&
        <div>
          <Image
            src={blog?.image?.featuresImage || "/default.png"}
            width={600}
            height={400}
            alt={blog?.postTitle}
            className="w-full h-full"
          />
        </div>
      }
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
      />
    </div>
  );
};

export default MainBody;
