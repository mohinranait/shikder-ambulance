import { NextRequest, NextResponse } from "next/server";
import Media from "@/models/Media";
import connectDB from "@/config/mongodb";
import { getAuthUser } from "@/services/isAuth";
import { writeFile } from "fs/promises";
import path from "path";
import os from "os";

import { v2 as cloudinary } from "cloudinary";
import { nanoid } from "nanoid";
import { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } from "@/config/accessEnv";

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});


export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = new Uint8Array(bytes);

    const tempFilePath = path.join(os.tmpdir(), `${nanoid()}_${file.name}`);
    await writeFile(tempFilePath, buffer);

    const result = await cloudinary.uploader.upload(tempFilePath, {
      folder: "shikder",
    });


    const { url, format, width, height, bytes: iBytes, secure_url, public_id } = result;


    const newMedia = await Media.create({
      fileUrl: url,
      width,
      height,
      extension: format,
      size: iBytes,
      public_id,
      secure_url,
    })




    return NextResponse.json({
      success: true,
      payload: {
        file: newMedia,
      },
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, error: "Upload failed" }, { status: 500 });
  }
}


// Get all images API
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const decoded = await getAuthUser() as { id: string; email: string };

    const userId = decoded?.id;
    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized: Invalid token" },
        { status: 401 }
      );
    }

    // Fetch media data
    const medias = await Media.find({});

    return NextResponse.json({
      success: true,
      statusCode: 200,
      payload: {
        medias,
      },
    });
  } catch (error) {
    console.error("GET /api/media error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
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
    const media = await Media.findByIdAndDelete(id);
    if (!media) {
      return NextResponse.json({ error: 'Media not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Media deleted successfully', success: true, });
  } catch (error) {
    console.error('Error deleting media:', error);
    return NextResponse.json({ error: 'Failed to delete media' }, { status: 500 });
  }
}