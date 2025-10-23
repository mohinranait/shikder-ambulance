import { TPostFormData } from "@/types/post.types";


// Date formate
export const formatDate = (date: Date | string): string => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

// Date short form
export const formatShortDate = (date: Date | string): string => {
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });
};

// Calculate post reading time
export const calculateReadTime = (post: TPostFormData): string => {
    const wordsPerMinute = 200;
    const contentLength =
        (post.content?.length || 0) +
        (post.shortDescription?.length || 0) +
        (post.contents?.reduce(
            (acc, content) => acc + (content.content?.length || 0),
            0
        ) || 0);
    const words = contentLength / 5;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${Math.max(1, minutes)} min read`;
};