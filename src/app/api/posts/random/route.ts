import Post from "@/models/Post";
import { NextResponse } from "next/server";





export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const count = parseInt(searchParams.get("count") || "5");
        const posts = await getRandomPosts(count);
        return NextResponse.json({ success: true, payload: { posts } }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to fetch random posts" },
            { status: 500 }
        );
    }
}


const getRandomPosts = async (count: number = 5): Promise<any[]> => {
    try {
        const posts = await Post.aggregate([
            { $sample: { size: count } },
            {
                $project: {
                    postTitle: 1,
                    slug: 1,
                    "image.featuresImage": 1,
                    "image.thumbnail": 1,
                    createdAt: 1,
                    publishDate: 1,
                    content: 1,
                    contents: 1,
                    shortDescription: 1,
                    seoDescription: 1,
                    _id: 1,
                },
            },
        ]);
        return posts;
    } catch (error) {
        console.error("Error fetching random posts:", error);
        throw new Error("Failed to fetch random posts");
    }
};


