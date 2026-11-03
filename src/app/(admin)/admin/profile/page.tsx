"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  User,
  Lock,
  Mail,
  ShieldCheck,
  KeyRound,
  Save,
  Eye,
  EyeOff,
  BadgeCheck,
  Sparkles,
  Camera,
  ImageIcon,
} from "lucide-react";

import { Navbar } from "@/components/admin/shared/Navbar";
import { Main } from "@/components/ui/main";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/providers/AuthProvider";
import { useImg } from "@/providers/ImageProvider";
import ImageUploadCom from "@/components/shared/ImageUploadCom";
import { updateUserProfile, changeUserPassword } from "@/actions/userApi";

export default function ProfilePage() {
  const { user, setUser } = useAuth();
  const { setImageModal, selectedImage, setSelectedImage } = useImg();

  // Profile Info Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [selectedMediaId, setSelectedMediaId] = useState<string | null>(null);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  // Password Change Form State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Sync initial user data
  useEffect(() => {
    if (user) {
      setFirstName(user.name?.firstName || "");
      setLastName(user.name?.lastName || "");
      setEmail(user.email || "");

      const profileObj = user.profile as any;
      if (profileObj?.fileUrl) {
        setProfileImage(profileObj.fileUrl);
        setSelectedMediaId(profileObj._id);
      } else if (typeof user.profile === "string") {
        setProfileImage(user.profile);
        setSelectedMediaId(user.profile);
      }
    }
  }, [user]);

  // Listen to selected image from global MediaModal (same as create post form)
  useEffect(() => {
    if (selectedImage) {
      const url = selectedImage?.fileUrl;
      const mediaId = selectedImage?._id;

      setProfileImage(url);
      setSelectedMediaId(mediaId);
      setImageModal(false);
      setSelectedImage(null);

      // Auto-save selected photo to user profile
      updateUserProfile({
        firstName,
        lastName,
        email,
        profile: mediaId || url,
      }).then((res) => {
        if (res?.success) {
          toast.success("Profile photo updated successfully!");
          if (res.payload) setUser(res.payload);
        }
      });
    }
  }, [selectedImage]);

  // Handle Profile Update Form
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim()) {
      toast.error("First name cannot be empty");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      toast.error("Please provide a valid email address");
      return;
    }

    try {
      setIsUpdatingProfile(true);
      const res = await updateUserProfile({
        firstName,
        lastName,
        email,
        status: "Active",
        profile: selectedMediaId || profileImage || undefined,
      });

      if (res?.success) {
        toast.success("Profile updated successfully!");
        if (res.payload) {
          setUser(res.payload);
        }
      } else {
        toast.error(res?.message || "Failed to update profile");
      }
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred while updating profile");
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  // Handle Password Change Form
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword) {
      toast.error("Please enter your current password");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    if (currentPassword === newPassword) {
      toast.error("New password must be different from current password");
      return;
    }

    try {
      setIsChangingPassword(true);
      const res = await changeUserPassword({
        currentPassword,
        newPassword,
        confirmPassword,
      });

      if (res?.success) {
        toast.success("Password changed successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error(res?.message || "Failed to change password");
      }
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred while changing password");
    } finally {
      setIsChangingPassword(false);
    }
  };

  const initials = `${firstName?.[0] || "A"}${lastName?.[0] || ""}`.toUpperCase();

  return (
    <>
      <Navbar fixed />
      <Main>
        <div className="space-y-6 pb-16 max-w-5xl mx-auto">
          {/* Header Banner */}
         

          {/* User Overview Profile Card */}
          <Card className="border border-slate-200/80 shadow-sm bg-white overflow-hidden">
            
            <CardContent className="px-6 pb-6 pt-0 relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 ">
                {/* Avatar with Camera Button */}
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <Avatar className="w-24 h-24 sm:w-28 sm:h-28 border-4 border-white shadow-lg bg-white overflow-hidden">
                      <AvatarImage
                        src={profileImage || "/avatar.jpg"}
                        alt="Admin Profile"
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary text-white text-2xl font-bold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>

                    {/* Camera Edit Button - Opens existing media modal */}
                    <button
                      type="button"
                      onClick={() => setImageModal(true)}
                      className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white shadow-md border-2 border-white flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-105"
                      title="Select photo from media gallery"
                    >
                      <Camera size={14} />
                    </button>
                  </div>

                  <div className="mb-1 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {firstName} {lastName}
                      </h2>
                      <BadgeCheck className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-muted-foreground font-mono">
                      {email}
                    </p>
                  </div>
                </div>

                {/* Role & Status Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Status: Active
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    Role: Administrator
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Two-Column Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Card: Update Personal Info */}
            <Card className="border border-slate-200/80 shadow-sm bg-white flex flex-col justify-between">
              <div>
                <CardHeader className="p-6 pb-4 border-b border-slate-100">
                  <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Personal Information
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Update your display name, contact email, and profile avatar
                  </p>
                </CardHeader>

                <CardContent className="p-6">
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="firstName"
                          className="text-xs font-semibold text-slate-700"
                        >
                          First Name <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                          required
                          className="h-10 text-xs border-slate-200 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label
                          htmlFor="lastName"
                          className="text-xs font-semibold text-slate-700"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last Name"
                          className="h-10 text-xs border-slate-200 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-xs font-semibold text-slate-700"
                      >
                        Email Address <span className="text-rose-500">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="admin@shikderambulance.com"
                          required
                          className="pl-9 h-10 text-xs border-slate-200 focus:border-primary"
                        />
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        This email is used for admin login and system alerts.
                      </p>
                    </div>

                    {/* Profile Photo - Using ImageUploadCom from create post form */}
                    <div className="space-y-1.5 pt-1">
                      <Label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4 text-primary" />
                        Profile Photo
                      </Label>
                      <ImageUploadCom
                        url={profileImage || ""}
                        cb={(url) => {
                          setProfileImage(url);
                        }}
                      />
                      <p className="text-[11px] text-muted-foreground">
                        Click the box above to open the media library and pick
                        or upload your profile picture.
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isUpdatingProfile}
                        className="bg-primary hover:bg-primary/95 text-white gap-2 text-xs font-semibold h-10 w-full sm:w-auto px-6 shadow-sm"
                      >
                        <Save size={14} />
                        {isUpdatingProfile ? "Saving Changes..." : "Save Profile"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </div>
            </Card>

            {/* Right Card: Change Password */}
            <Card className="border border-slate-200/80 shadow-sm bg-white flex flex-col justify-between">
              <div>
                <CardHeader className="p-6 pb-4 border-b border-slate-100">
                  <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <KeyRound className="w-4 h-4 text-amber-600" />
                    Change Account Password
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Ensure your account is protected with a strong, updated
                    password
                  </p>
                </CardHeader>

                <CardContent className="p-6">
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    {/* Current Password */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="currentPassword"
                        className="text-xs font-semibold text-slate-700"
                      >
                        Current Password <span className="text-rose-500">*</span>
                      </Label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <Input
                          id="currentPassword"
                          type={showCurrentPassword ? "text" : "password"}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="••••••••"
                          required
                          className="pl-9 pr-9 h-10 text-xs border-slate-200 focus:border-primary"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showCurrentPassword ? (
                            <EyeOff size={15} />
                          ) : (
                            <Eye size={15} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* New Password */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="newPassword"
                        className="text-xs font-semibold text-slate-700"
                      >
                        New Password <span className="text-rose-500">*</span>
                      </Label>
                      <div className="relative">
                        <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <Input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="At least 6 characters"
                          required
                          minLength={6}
                          className="pl-9 pr-9 h-10 text-xs border-slate-200 focus:border-primary"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showNewPassword ? (
                            <EyeOff size={15} />
                          ) : (
                            <Eye size={15} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="confirmPassword"
                        className="text-xs font-semibold text-slate-700"
                      >
                        Confirm New Password <span className="text-rose-500">*</span>
                      </Label>
                      <div className="relative">
                        <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Re-type new password"
                          required
                          minLength={6}
                          className="pl-9 pr-9 h-10 text-xs border-slate-200 focus:border-primary"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={15} />
                          ) : (
                            <Eye size={15} />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Security tips */}
                    <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-900 space-y-1">
                      <p className="font-semibold flex items-center gap-1 text-amber-800">
                        <Sparkles size={12} /> Password Security Guidelines:
                      </p>
                      <ul className="list-disc list-inside text-amber-800/90 space-y-0.5">
                        <li>Minimum 6 characters long</li>
                        <li>Include both letters and numbers for higher strength</li>
                        <li>Never share your admin password with anyone</li>
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isChangingPassword}
                        className="bg-amber-600 hover:bg-amber-700 text-white gap-2 text-xs font-semibold h-10 w-full sm:w-auto px-6 shadow-sm"
                      >
                        <Lock size={14} />
                        {isChangingPassword
                          ? "Updating Password..."
                          : "Change Password"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </Main>
    </>
  );
}
