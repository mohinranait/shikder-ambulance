import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/config/mongodb";
import MoneyReceipt from "@/models/MoneyReceipt";
import { JWT_SECRET } from "@/config/accessEnv";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> | { token: string } }
) {
  try {
    const resolvedParams = await params;
    const token = resolvedParams?.token;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Share token is required" },
        { status: 400 }
      );
    }

    const secret = JWT_SECRET || "shikder_secret_fallback_key";

    let decoded: any;
    try {
      decoded = jwt.verify(token, secret);
    } catch (err: any) {
      if (err.name === "TokenExpiredError") {
        return NextResponse.json(
          {
            success: false,
            expired: true,
            message:
              "This receipt link has expired. Public links are only valid for 7 days.",
          },
          { status: 410 }
        );
      }
      return NextResponse.json(
        {
          success: false,
          invalid: true,
          message: "Invalid receipt link or token.",
        },
        { status: 400 }
      );
    }

    if (!decoded?.receiptId) {
      return NextResponse.json(
        { success: false, message: "Invalid token payload" },
        { status: 400 }
      );
    }

    await connectDB();
    const receipt = await MoneyReceipt.findById(decoded.receiptId);

    if (!receipt) {
      return NextResponse.json(
        { success: false, message: "Receipt not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      payload: {
        receipt,
        expiresAt: decoded.exp ? new Date(decoded.exp * 1000).toISOString() : null,
      },
    });
  } catch (error) {
    console.error("Error fetching public receipt:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
