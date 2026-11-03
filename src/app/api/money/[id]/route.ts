import connectDB from "@/config/mongodb";
import MoneyReceipt from "@/models/MoneyReceipt";
import { getAuthUser } from "@/services/isAuth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const decoded = (await getAuthUser()) as { id: string };
    if (!decoded?.id) {
      return NextResponse.json(
        { success: false, message: "unauthorize access" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const receipt = await MoneyReceipt.findById(id);

    if (!receipt) {
      return NextResponse.json(
        { success: false, message: "Receipt not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      payload: { receipt },
    });
  } catch (error) {
    console.error("Error fetching receipt:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const decoded = (await getAuthUser()) as { id: string };
    if (!decoded?.id) {
      return NextResponse.json(
        { success: false, message: "unauthorize access" },
        { status: 401 }
      );
    }

    const { id: moneyId } = await params;
    const body = await req.json();

    // Strip immutable fields so MongoDB doesn't throw immutable error
    const { _id, createdAt, updatedAt, __v, ...updateData } = body;

    const receipt = await MoneyReceipt.findByIdAndUpdate(
      moneyId,
      { ...updateData },
      { new: true }
    );

    if (!receipt) {
      return NextResponse.json(
        { success: false, message: "Receipt not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Update money receipt",
      payload: { receipt },
    });
  } catch (error) {
    console.error("Error updating receipt:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const user = (await getAuthUser()) as { id: string };
    if (!user?.id) {
      return NextResponse.json(
        { success: false, message: "unauthorize access" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const receipt = await MoneyReceipt.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Money receipt deleted",
      payload: { receipt },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
