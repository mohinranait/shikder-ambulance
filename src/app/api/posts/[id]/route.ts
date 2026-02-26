import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/mongodb";
import Post from "@/models/Post";
import User from "@/models/User";
import { getAuthUser } from "@/services/isAuth";


export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: postId } = await params;

    await connectDB();

    const post = await Post.findOne({ _id: postId }).select(['postTitle', 'image.featuresImage'])

    if (!post) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Success",
      statusCode: 200,
      payload: { post },
    });
  } catch (error: unknown) {
    console.error("GET /api/posts/[slug] error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}


// Update post by ID
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const decoded = await getAuthUser() as { email: string; id: string }
    await connectDB();

    const { id: postId } = await params;

    const userId = decoded?.id;

    // Check if user exists
    const authUser = await User.findById(userId).select("email");
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const existsPost = await Post.findById(postId).select("author slug");
    if (!existsPost) {
      return NextResponse.json(
        { success: false, message: "Post not found" },
        { status: 404 }
      );
    }

    // Check post ownership
    if (existsPost.author.toString() !== userId.toString()) {
      return NextResponse.json(
        { success: false, message: "Forbidden: You do not own this post" },
        { status: 403 }
      );
    }

    const body = await request.json();

    // Check slug duplication
    if (existsPost.slug !== body.slug) {
      const duplicateSlugPost = await Post.findOne({ slug: body.slug }).select("slug");
      if (duplicateSlugPost) {
        return NextResponse.json(
          { success: false, message: "Slug is already in use by another post." },
          { status: 400 }
        );
      }
    }

    const readTime =
      (body.content?.length || 0) +
      (body.shortDescription?.length || 0) +
      (body.contents?.reduce(
        (acc: number, c: { content?: string }) =>
          acc + (c.content?.length || 0),
        0,
      ) || 0);

    // Update post
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { ...body, readTime },
      { runValidators: true, new: true }
    );

    if (!updatedPost) {
      return NextResponse.json(
        { success: false, message: "Something went wrong during update" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Post updated successfully",
      statusCode: 201,
      payload: { post: updatedPost },
    });
  } catch (error) {
    console.error("PATCH /api/posts/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete single post by id
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const decoded = await getAuthUser() as { email: string; id: string }
    await connectDB();

    const { id: postId } = await params;


    if (!postId || !decoded?.id) {
      return NextResponse.json(
        { success: false, message: "Post ID  missing" },
        { status: 400 }
      );
    }



    await Post.findByIdAndDelete(postId);

    return NextResponse.json({
      success: true,
      message: "Post has been deleted",
      statusCode: 200,
    });
  } catch (error) {
    console.error("DELETE /api/posts/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
