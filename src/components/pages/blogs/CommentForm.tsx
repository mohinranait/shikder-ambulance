"use client";
import { createComment } from "@/actions/commentApi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/providers/AuthProvider";
import { TPostFormData } from "@/types/post.types";

import Image from "next/image";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// URL/Link detection regex
const urlRegex =
  /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/i;

// Zod validation schema
const commentSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .refine((val) => !urlRegex.test(val), {
      message: "Name cannot contain URLs or links",
    }),
  content: z
    .string()
    .min(1, "Comment is required")
    .min(5, "Comment must be at least 5 characters")
    .max(500, "Comment must be less than 500 characters")
    .refine((val) => !urlRegex.test(val), {
      message: "Comments cannot contain URLs or links",
    }),
  star: z.number().min(1).max(5).default(5),
  postId: z.string(),
});

type CommentFormData = z.infer<typeof commentSchema>;

type Props = {
  blog: TPostFormData;
};

const CommentForm: FC<Props> = ({ blog }) => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: user?.name?.firstName || "",
      content: "",
      star: 5,
      postId: blog?._id,
    },
    mode: "onChange", // Real-time validation
  });

  // Watch content length for character counter
  const contentLength = watch("content")?.length || 0;

  // Handle form submission
  const onSubmit = async (data: CommentFormData) => {
    try {
      const commentId = user?._id ? user?._id : "not-auth";
      const response = await createComment({ data, userId: commentId });

      if (response?.success) {
        reset({
          name: user?.name?.firstName || "",
          content: "",
          star: 5,
          postId: blog?._id,
        });
        toast.success("Comment submitted successfully!");
      } else {
        toast.error("Failed to submit comment. Please try again.");
      }
    } catch (error) {
      console.error("Comment submission error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Review & Reting</CardTitle>
      </CardHeader>
      <CardContent className="py-6 pt-0">
        <form onSubmit={handleSubmit(onSubmit)} className="rounded flex gap-2">
          <div className="hidden md:block">
            <div className="w-[50px]">
              <Image
                src={"/placeholder-user.jpg"}
                width={50}
                height={50}
                alt="avatar"
                className="w-10 h-10 rounded-full ring-1 ring-primary ring-offset-2"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col gap-4">
              {/* Name Field */}
              <div>
                <Label htmlFor="name-field" className="mb-2">Full Name</Label>
                <Input
                  type="text"
                  id="name-field"
                  {...register("name")}
                  className={`focus-visible:border-primary ${errors.name ? "border-red-500" : ""
                    }`}
                  placeholder="Full name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Comment Field */}
              <div>
                <div className="flex justify-between items-center">
                  <Label htmlFor="content-field" className="mb-2">Comment</Label>
                  <span
                    className={`text-xs ${contentLength > 500 ? "text-red-500" : "text-gray-500"
                      }`}
                  >
                    {contentLength}/500 characters
                  </span>
                </div>
                <textarea
                  id="content-field"
                  {...register("content")}
                  rows={3}
                  placeholder="Write your message..."
                  disabled={isSubmitting}
                  className={`${errors.content ? "border-red-500" : "border-slate-300"
                    } border m-0 text-slate-800 placeholder:text-slate-400 p-0 focus-visible:outline-offset-0 rounded-md bg-transparent w-full focus-visible:outline-primary py-2 px-3 disabled:opacity-50 disabled:cursor-not-allowed`}
                />
                {errors.content && (
                  <p className="text-red-500 text-xs">
                    {errors.content.message}
                  </p>
                )}
              </div>

              {/* Star Rating (Hidden field for now, defaulted to 5) */}
              <input
                type="hidden"
                {...register("star", { valueAsNumber: true })}
              />
              <input type="hidden" {...register("postId")} />
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <Button
                type="submit"
                className="bg-primary text-white disabled:opacity-50"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="32"
                        strokeDashoffset="32"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="32;0"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Comment"
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommentForm;
