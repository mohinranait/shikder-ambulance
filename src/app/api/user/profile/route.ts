import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/config/mongodb";
import User from "@/models/User";
import { getAuthUser } from "@/services/isAuth";

// GET current authenticated user profile
export async function GET() {
  try {
    const decoded = (await getAuthUser()) as { id: string; email: string };
    if (!decoded?.id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized access" },
        { status: 401 }
      );
    }

    await connectDB();
    const user = await User.findById(decoded.id)
      .select("-password")
      .populate("profile");

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Auto-activate user if pending
    if (user.status === "Pending") {
      user.status = "Active";
      await user.save();
    }

    return NextResponse.json({
      success: true,
      payload: user,
    });
  } catch (error: any) {
    console.error("GET /api/user/profile error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch profile" },
      { status: 401 }
    );
  }
}

// PATCH - Update Profile Info (First Name, Last Name, Email, Status, Profile Image)
export async function PATCH(req: NextRequest) {
  try {
    const decoded = (await getAuthUser()) as { id: string; email: string };
    if (!decoded?.id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized access" },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await req.json();
    const { firstName, lastName, email, status, profile } = body;

    if (!firstName?.trim()) {
      return NextResponse.json(
        { success: false, message: "First name is required" },
        { status: 400 }
      );
    }

    // If email is changed, verify it is not already taken
    if (email && email !== decoded.email) {
      const existing = await User.findOne({
        email: email.trim().toLowerCase(),
        _id: { $ne: decoded.id },
      });
      if (existing) {
        return NextResponse.json(
          { success: false, message: "Email is already in use by another account" },
          { status: 400 }
        );
      }
    }

    const updateData: any = {
      name: {
        firstName: firstName.trim(),
        lastName: (lastName || "").trim(),
      },
    };

    if (email?.trim()) {
      updateData.email = email.trim().toLowerCase();
    }

    if (status) {
      updateData.status = status;
    }

    if (profile !== undefined) {
      updateData.profile = profile || null;
    }

    const updatedUser = await User.findByIdAndUpdate(
      decoded.id,
      { $set: updateData },
      { new: true, runValidators: true }
    )
      .select("-password")
      .populate("profile");

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
      payload: updatedUser,
    });
  } catch (error: any) {
    console.error("PATCH /api/user/profile error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to update profile" },
      { status: 500 }
    );
  }
}

// PUT - Change Password
export async function PUT(req: NextRequest) {
  try {
    const decoded = (await getAuthUser()) as { id: string; email: string };
    if (!decoded?.id) {
      return NextResponse.json(
        { success: false, message: "Unauthorized access" },
        { status: 401 }
      );
    }

    await connectDB();
    const body = await req.json();
    const { currentPassword, newPassword, confirmPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, message: "Current password and new password are required" },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { success: false, message: "New password must be at least 6 characters" },
        { status: 400 }
      );
    }

    if (confirmPassword && newPassword !== confirmPassword) {
      return NextResponse.json(
        { success: false, message: "New password and confirmation do not match" },
        { status: 400 }
      );
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Current password is incorrect" },
        { status: 400 }
      );
    }

    // Hash new password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error: any) {
    console.error("PUT /api/user/profile error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to change password" },
      { status: 500 }
    );
  }
}
