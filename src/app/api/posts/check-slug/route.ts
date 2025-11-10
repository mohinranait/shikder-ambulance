import connectDB from "@/config/mongodb";
import Post from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Get slug from URL params
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        { success: false, message: "Slug is required" },
        { status: 400 }
      );
    }

    // Check in DB
    const exists = await Post.exists({ slug });

    return NextResponse.json({
      success: true,
      slug,
      available: !exists,
      message: exists ? "Slug already exists" : "Slug is available",
    });
  } catch (error) {
    console.error("Error checking slug:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
