import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/config/accessEnv";
import { getAuthUser } from "@/services/isAuth";

export async function POST(req: NextRequest) {
  try {
    const user = (await getAuthUser()) as { id: string };
    if (!user?.id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized access" },
        { status: 401 }
      );
    }

    const { receiptId } = await req.json();
    if (!receiptId) {
      return NextResponse.json(
        { success: false, message: "Receipt ID is required" },
        { status: 400 }
      );
    }

    const secret = JWT_SECRET || "shikder_secret_fallback_key";

    // 7 days expiration in seconds
    const expiresInSeconds = 7 * 24 * 60 * 60;
    const token = jwt.sign(
      {
        receiptId,
        type: "public_receipt_share",
      },
      secret,
      { expiresIn: expiresInSeconds }
    );

    const expiresAt = new Date(Date.now() + expiresInSeconds * 1000).toISOString();

    return NextResponse.json({
      success: true,
      token,
      expiresAt,
    });
  } catch (error) {
    console.error("Error creating share token:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
