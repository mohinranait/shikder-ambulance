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
        const status = searchParams.get('status') || 'all';
        const sort = searchParams.get('sort') || 'newest';
        const limit = parseInt(searchParams.get('limit') || '10');
        const page = Math.max(1, parseInt(searchParams.get('page') || '1'));

        const query: {
            status?: string | { $in: string[] };
            $or?: { [key: string]: { $regex: RegExp } }[];
        } = {};

        // Status Filter
        if (status && status !== 'all') {
            query.status = status;
        } else if (access === 'admin') {
            query.status = { $in: ['Unpublish', 'Publish'] };
        } else {
            query.status = 'Publish';
        }

        // Search Filter
        if (search) {
            const searchExp = new RegExp(search, 'i');
            query.$or = [
                { postTitle: { $regex: searchExp } },
                { seoTitle: { $regex: searchExp } },
                { slug: { $regex: searchExp } },
                { shortDescription: { $regex: searchExp } },
            ];
        }

        // Sorting
        let sortOption: Record<string, 1 | -1> = { createdAt: -1 };
        if (sort === 'oldest') {
            sortOption = { createdAt: 1 };
        } else if (sort === 'title_asc') {
            sortOption = { postTitle: 1 };
        } else if (sort === 'title_desc') {
            sortOption = { postTitle: -1 };
        } else if (sort === 'reviews') {
            sortOption = { reviews: -1 };
        }

        const posts = await Post.find(query)
            .sort(sortOption)
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

        // Quick aggregate counts for dashboard badges
        const [publishedCount, unpublishedCount, totalAll] = await Promise.all([
            Post.countDocuments({ status: 'Publish' }),
            Post.countDocuments({ status: 'Unpublish' }),
            Post.countDocuments({ status: { $in: ['Publish', 'Unpublish'] } }),
        ]);

        return NextResponse.json({
            success: true,
            payload: {
                posts,
                total: totalPosts,
                counts: {
                    total: totalAll,
                    published: publishedCount,
                    unpublished: unpublishedCount,
                },
            },
        });
    } catch (error) {
        console.error('GET /api/posts error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch posts' },
            { status: 500 }
        );
    }
}
