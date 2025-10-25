import connectDB from "@/config/mongodb";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

// get all post from DB for Admin
export async function GET(request: NextRequest) {
    try {
        await connectDB();

        const searchParams = request.nextUrl.searchParams;
        const search = searchParams.get('search') || '';
        const access = searchParams.get('access') || 'user';
        const limit = parseInt(searchParams.get('limit') || '10');
        const page = Math.max(1, parseInt(searchParams.get('page') || '1'));

        const query: {
            status?: string | { $in: string[] };
            $or?: { [key: string]: { $regex: RegExp } }[];
        } = {
            status: 'Publish',
        };

        if (search) {
            const searchExp = new RegExp(search, 'i');
            query.$or = [
                { postTitle: { $regex: searchExp } },
                { seoTitle: { $regex: searchExp } },
                { slug: { $regex: searchExp } },
            ];
        }

        if (access === 'admin') {
            query.status = { $in: ['Unpublish', 'Publish'] };
        }

        const posts = await Post.find(query)
            .sort({ createdAt: -1 })
            .populate({
                path: 'author',
                select: '-password',
                populate: {
                    path: 'profile',
                    select: '_id fileType fileUrl extension',
                },
            })
            .skip(limit * (page - 1))
            .limit(limit);

        const totalPosts = await Post.countDocuments(query);

        return NextResponse.json({
            success: true,
            payload: { posts, total: totalPosts },
        });
    } catch (error) {
        console.error('GET /api/posts error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch posts' },
            { status: 500 }
        );
    }
}