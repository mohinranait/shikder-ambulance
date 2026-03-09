import connectDB from "@/config/mongodb";
import Comment from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest, 
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params; 
    const body = await req.json();

    if (id !== 'not-auth') {
      body.autor = id;
    }

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