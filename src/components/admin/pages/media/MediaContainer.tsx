"use client";
import React, { useEffect, useState } from "react";
import { getAllMedia } from "@/actions/postApi";
import { TMediaType } from "@/types/media.type";
import Image from "next/image";
import { useImg } from "@/providers/ImageProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import UploadImage from "../../shared/UploadImage";
import ImageContainer from "./ImageContainer";

const MediaContainer = () => {
  const { setSelectedImage } = useImg();
  const [allImages, setAllImages] = useState<TMediaType[]>([]);
  const [parentTab, setParentTab] = useState<"photos" | "upload">("photos");
  const [selectedImg, setSelectedImg] = useState<TMediaType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);



  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const data = await getAllMedia();
      if (data?.success) {
        setAllImages(data?.payload?.medias);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="max-h-[calc(100vh-100px)]">
      <div className="flex w-full flex-col">
        <Tabs
          onValueChange={(e) => setParentTab(e as "photos" | "upload")}
          defaultValue={parentTab}
          className=""
        >
          <TabsList>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>
          <TabsContent value="photos">
            <div className="flex w-full gap-5">
              <div className="p-4 max-h-[calc(100vh-200px)] overflow-y-auto flex-grow">
                {isLoading ? (
                  <div className="grid  rounded-md  gap-3 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-7">

                    {Array.from({ length: 10 }).map((_, index) => (
                      <Skeleton
                        key={index}
                        className="h-32 w-full rounded-md bg-gray-200"
                      />
                    ))}
                  </div>
                ) : (
                  <ImageContainer
                    allImages={allImages}
                    setSelectedImg={setSelectedImg}
                  />
                )}
              </div>
              {selectedImg && (
                <div className="w-[350px] p-4 bg-white rounded">
                  <div className="flex gap-2 flex-col">
                    <div className="w-full max-h-[200px]">
                      {isLoading ? (
                        <Skeleton className="h-[200px] w-full rounded-md bg-gray-200" />
                      ) : (
                        <Image
                          src={selectedImg?.fileUrl}
                          width={200}
                          height={200}
                          alt="Selected Image"
                          className="h-[200px] object-cover overflow-hidden w-full"
                        />
                      )}
                    </div>
                    <ul className="flex flex-col gap-2">
                      <li className="flex gap-2 items-start justify-between">
                        <span className="text-base text-slate-800">Size</span>
                        {isLoading ? (
                          <Skeleton className="h-4 w-20 bg-gray-200" />
                        ) : (
                          <span className="text-base text-slate-600">
                            {selectedImg?.size}
                          </span>
                        )}
                      </li>
                      <li className="flex gap-2 items-start justify-between">
                        <span className="text-base text-slate-800">Width</span>
                        {isLoading ? (
                          <Skeleton className="h-4 w-20 bg-gray-200" />
                        ) : (
                          <span className="text-base text-slate-600">
                            {selectedImg?.width}px
                          </span>
                        )}
                      </li>
                      <li className="flex gap-2 items-start justify-between">
                        <span className="text-base text-slate-800">Height</span>
                        {isLoading ? (
                          <Skeleton className="h-4 w-20 bg-gray-200" />
                        ) : (
                          <span className="text-base text-slate-600">
                            {selectedImg?.height}px
                          </span>
                        )}
                      </li>
                      <li className="flex gap-2 items-start justify-between">
                        <span className="text-base text-slate-800">
                          Extension
                        </span>
                        {isLoading ? (
                          <Skeleton className="h-4 w-20 bg-gray-200" />
                        ) : (
                          <span className="text-base text-slate-600">
                            {selectedImg?.extension}
                          </span>
                        )}
                      </li>
                    </ul>
                    <div>
                      <Button
                        onClick={() => setSelectedImage(selectedImg)}
                        type="button"
                        className="w-full bg-primary text-white"
                        disabled={isLoading}
                      >
                        Insert
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="upload">
            <div>
              <UploadImage
                setAllImages={setAllImages}
                setParentTab={setParentTab}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MediaContainer;