
import connectDB from '@/config/mongodb';
import Comment from '@/models/Comment';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const search = searchParams.get('search');
        const status = searchParams.get('status');
        const star = searchParams.get('star');
        const postId = searchParams.get('postId');
        const page = parseInt(searchParams.get('page') || '1', 10);
        const limit = parseInt(searchParams.get('limit') || '10', 10);

        let query: any = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
            ];
        }
        if (status) query.status = status;
        if (star) query.star = parseInt(star);
        if (postId) query.postId = postId;

        const total = await Comment.countDocuments(query);
        const comments = await Comment.find(query)
            .populate('postId', 'postTitle')
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        return NextResponse.json({
            comments,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
        });
    } catch (error) {
        console.error('Error fetching comments:', error);
        return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
    }
}


export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    try {
        await connectDB();


        const body = await req.json();


        const comment = await Comment.create(body);

        return NextResponse.json({
            success: true,
            message: "Comment submitted receipt",
            payload: { comment },
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: "Something went wrong" },
            { status: 500 }
        );
    }
}

export async function PUT(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();
        const { _id, ...updateData } = body;
        const updatedComment = await Comment.findByIdAndUpdate(_id, updateData, { new: true });
        if (!updatedComment) {
            return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
        }
        return NextResponse.json(updatedComment);
    } catch (error) {
        console.error('Error updating comment:', error);
        return NextResponse.json({ error: 'Failed to update comment' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }
        const deletedComment = await Comment.findByIdAndDelete(id);
        if (!deletedComment) {
            return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error('Error deleting comment:', error);
        return NextResponse.json({ error: 'Failed to delete comment' }, { status: 500 });
    }
}