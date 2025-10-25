"use client";
import { useImg } from "@/providers/ImageProvider";
import React from "react";
import MediaContainer from "../admin/pages/media/MediaContainer";
import { X } from "lucide-react";

const MediaModal = () => {
  const { imageModal, setImageModal, setSelectedImage } = useImg();
  return (
    <React.Fragment>
      {imageModal && (
        <div className="w-full h-screen z-50   media_modal bg-slate-900 bg-opacity-20   top-0 left-0 right-0 bottom-0  fixed">
          <div className="">
            <div className="container relative media_modal_container bg-white mt-5 p-4 w-full">
              <span
                onClick={() => {
                  setImageModal(false);
                  setSelectedImage(null);
                }}
                className="w-8 h-8 absolute cursor-pointer right-3 top-3 rounded-full bg-slate-200 flex items-center justify-center"
              >
                <X />
              </span>
              <MediaContainer />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MediaModal;
